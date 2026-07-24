# How to Create an App in the CypherView App Store

This guide walks you through the full lifecycle of creating, submitting, and managing an app in the CypherView App Store — from the wizard to review to approval.

---

## Overview

Apps extend the CypherView platform by embedding into specific screens or adding a persistent sidebar. As a developer, you build a web app hosted on your own infrastructure, then register it with CypherView so users can install it into their organisations.

### Platform Support

Not all integration points are available on every platform:

| Integration Point | Web (Angular) | Mobile (Flutter) |
|-------------------|:---:|:---:|
| `tripDetails` | ✓ | ✓ |
| `positionActivityStats` | ✓ | ✓ |
| `appSidebar` | ✓ | — |

> **Flutter note** — on mobile, apps are rendered inline within the Trip Details and Vehicle Activity screens via an iframe (WebView). The App Sidebar is not supported on mobile.

**Entry point:** Navigate to `/app-store/editor` or click **Create App** from your Creator Dashboard (`/app-store/my-created-apps`).

---

## The Creation Wizard

The wizard walks you through 6 steps for a new app (5 for editing):

| # | Step | Purpose |
|---|------|---------|
| 1 | Getting Started | Overview and prerequisites (create only) |
| 2 | Basic Info | App identity and metadata |
| 3 | Publishing | Visibility and pricing |
| 4 | Integration Points | Which CypherView screens your app embeds in |
| 5 | Permissions | What data your app needs to access |
| 6 | Review & Submit | Final review before saving or submitting |

A **live preview panel** on the right updates in real-time as you fill in the form, showing exactly how your app will appear in the marketplace.

---

## Step-by-Step

### Step 1 — Getting Started

An introductory step explaining what you're about to build. No inputs required. Click **Next** to proceed.

---

### Step 2 — Basic Info

| Field | Required | Notes |
|-------|----------|-------|
| **Name** | Yes | The display name of your app |
| **Short Description** | Yes | One-liner shown in listings (max 100 characters) |
| **Description** | Yes | Full description shown on the app detail page |
| **Icon URL** | No | HTTPS URL to your app icon; defaults to a placeholder if empty |
| **Health Check URL** | No | HTTPS URL pinged to verify your app is reachable |

> **Health Check URL** — If provided, CypherView will periodically call this URL and surface a health indicator on your app detail page. Useful for letting installers know your service is online.

---

### Step 3 — Publishing

#### Visibility

Controls who can discover and install your app.

| Option | Description |
|--------|-------------|
| `global` | Listed publicly in the marketplace — anyone can find and install it |
| `ourOperations` | Visible only to your own organisation |
| `unlisted` | Not discoverable in the marketplace; installable via direct invite only |

#### Pricing / Fee Model

| Option | Description |
|--------|-------------|
| **Free** | No charge to installers |
| **Per Installation** | A fixed ZAR amount charged once when an organisation installs your app |
| **Per Active Device** | A ZAR amount multiplied by the number of active devices in the installing organisation |

> **Fee preview** — the wizard shows a live example cost calculation (e.g. "an org with 200 active devices would pay R4,000").
> A fee amount is required if you select a paid model.

---

### Step 4 — Integration Points

Integration points define _where_ your app embeds inside CypherView. You must select at least one.

| Screen ID | Display Name | Web | Flutter | Description |
|-----------|-------------|:---:|:-------:|-------------|
| `tripDetails` | Trip Details Screen | ✓ | ✓ | Embedded inside a specific trip's detail view |
| `positionActivityStats` | Vehicle Activity Screen | ✓ | ✓ | Embedded in the vehicle activity stats panel |
| `appSidebar` | App Sidebar | ✓ | — | A persistent sidebar accessible from the main navigation |

For each selected screen, you must provide:

- **Base URL** — The HTTPS URL of the page CypherView will load inside an iframe for that screen. Must start with `https://`.
- **Required Permissions** — Configured in the next step (Step 5).

#### Context data passed to your app

CypherView delivers context to your iframe via `postMessage` after the iframe signals `READY`:

| Screen | Data passed |
|--------|------------|
| `tripDetails` | `tripId`, `assetId`, `startDate`, `endDate`, `vehicleName`, `accessToken` |
| `positionActivityStats` | `assetId`, `startDate`, `endDate`, `accessToken` |
| `appSidebar` | `accessToken` |

> On Flutter, the iframe height is fixed — **267px** for `tripDetails` and **130px** for `positionActivityStats`. Design your UI accordingly.
> A health check (`HEAD` request to your `healthCheckUrl`) is performed before rendering on Flutter — if it fails, a retry tile is shown to the user.

---

### Step 5 — Permissions

Declare what CypherView data your app needs to read or write. These are shown to users at install time so they can make an informed decision.

Permissions follow the format `resource:action`, e.g. `asset:list`, `trip:get`.

#### Resource Groups

**Fleet**

| Resource | Available Actions |
|----------|------------------|
| `asset` | `list`, `get`, `create`, `update` |
| `device` | `list`, `get`, `create`, `update` |
| `driver` | `list`, `get`, `create`, `update` |
| `trip` | `list`, `get` |
| `position` | `list`, `get` |

**Configuration**

| Resource | Available Actions |
|----------|------------------|
| `assettype` | `list`, `get` |
| `assetcategory` | `list`, `get` |
| `devicetype` | `list`, `get` |
| `geofence` | `list`, `get`, `create`, `update` |

**Reporting**

| Resource | Available Actions |
|----------|------------------|
| `report` | `list`, `get`, `run` |
| `schedule` | `list`, `get`, `create`, `update`, `schedule` |
| `alert` | `list`, `get`, `create`, `update` |

#### Implied Permissions

Selecting certain resources automatically grants read access to related resources. These are shown as implied (not selectable independently to avoid duplication).

| Trigger Resource | Auto-adds |
|-----------------|-----------|
| `asset` | `assettype`, `assetcategory` |
| `device` | `devicetype`, `asset` |
| `driver` | `asset` |
| `trip` | `asset`, `driver`, `position` |
| `position` | `asset`, `device` |
| `report` | `asset` |
| `schedule` | `report` |
| `alert` | `asset`, `geofence` |

#### Action Expansion

Selecting a higher-privilege action includes the lower ones automatically:

| Selected | Also grants |
|----------|------------|
| `create` | `list`, `get`, `update` |
| `update` | `list`, `get` |
| `run` | `list`, `get` |

> **Principle of least privilege** — Only request what your app genuinely needs. Excessive permissions reduce trust and may cause installers to decline.

---

### Step 6 — Review & Submit

A summary of all your inputs with change indicators (in edit mode, fields with modifications are highlighted).

You have two submission options:

#### Save as Draft
Saves your app locally without submitting it for review. Your app is created but remains invisible in the marketplace. Use this to continue editing later.

- API call: `POST /apps` (creates the `AppDefinition`)
- Then redirects to your Creator Dashboard

#### Submit for Review
Submits your app to the CypherView team for approval. A dialog appears asking for:

- **Changelog** — Describe what changed in this version (required)
- **Version Bump** _(edit mode only, after first approval)_ — Semantic versioning type:
  - `patch` — bug fixes, no new features
  - `minor` — new features, backward compatible
  - `major` — breaking changes (first submission defaults to patch)

- API calls:
  1. `POST /apps` — creates `AppDefinition`
  2. `POST /apps/{id}/versions` — submits version for review, sets status to `pendingReview`

---

## App Status Lifecycle

```
                    ┌──────────────────┐
                    │      draft       │  ← Saved but not submitted
                    └────────┬─────────┘
                             │ Submit for Review
                             ▼
                    ┌──────────────────┐
                    │  pendingReview   │  ← Under admin review
                    └────────┬─────────┘
                    ┌────────┴──────────────────┐
                    │                           │
                    ▼                           ▼
          ┌──────────────────┐       ┌──────────────────────┐
          │    approved      │       │  changesRequested    │
          │  (goes live)     │       │  (feedback to dev)   │
          └────────┬─────────┘       └──────────┬───────────┘
                   │                             │ Re-submit
                   │                             ▼
                   │                   ┌──────────────────┐
                   │                   │  pendingReview   │
                   │                   └──────────────────┘
                   │
          ┌────────▼─────────┐
          │    rejected      │
          └──────────────────┘
```

Once approved, your app gets an **OAuth `clientId`** and `clientSecret`. These are shown **once** after approval — store them securely. They are used for authenticating your backend when calling the CypherView API on behalf of an installer.

---

## Editing an Existing App

Navigate to `/app-store/editor?appId={id}` or click **Edit** from your Creator Dashboard.

The wizard pre-populates with the current draft (or active version if no draft exists). In this mode:

- **Step 1 (Getting Started) is skipped**
- Changed fields are highlighted in the review step
- Submitting for review requires a **version bump type** and **changelog**

The system only sends changed fields to the API — unchanged fields are omitted from the version submission payload.

---

## Creator Dashboard

After creating an app, manage it from `/app-store/my-created-apps`:

- View all your apps and their current status
- See live version vs. pending version side-by-side
- View change request comments from reviewers
- Manage **invites** — generate invite tokens for users to install unlisted apps
- View **installers** — see which organisations have installed your app
- Copy your **Client ID** (shown on approved apps)

---

## API Reference

All endpoints are under the current API base URL resolved via `ApiUrlService.getCurrentApiUrl()`.

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/apps` | Create a new app definition |
| `GET` | `/me/apps` | List your apps |
| `GET` | `/marketplace/apps/{id}` | Get app detail |
| `PUT` | `/apps/{id}` | Update app state |
| `POST` | `/apps/{id}/versions` | Submit new version for review |
| `PUT` | `/apps/{id}/versions/{versionId}` | Update a draft version |
| `GET` | `/apps/{id}/versions` | List all versions |
| `GET` | `/apps/{id}/submission-reviews` | View review history |
| `POST` | `/apps/{id}/invites` | Generate an install invite token |
| `GET` | `/apps/{id}/installations` | List organisations that installed your app |
| `GET` | `/apps/{id}/installation-estimate` | Get estimated cost for an installer |

---

## Checklist Before Submitting

- [ ] App name is unique and descriptive
- [ ] Short description is under 100 characters
- [ ] Icon URL points to a publicly accessible HTTPS image
- [ ] Health Check URL (if provided) returns a `2xx` response
- [ ] All integration point Base URLs use `https://`
- [ ] Permissions are minimal — only what your app genuinely needs
- [ ] Changelog clearly describes what this version includes
- [ ] Version bump type accurately reflects the nature of changes (for updates)
