# CypherView App Store — Developer Guide

This guide is for **third-party developers** building a web app that integrates with CypherView via the App Store.

---

## How It Works

Your app is a standard web page hosted on your own server. CypherView loads it inside an **iframe** and delivers contextual data (trip ID, asset ID, access token, etc.) via the browser's `postMessage` API.

You do not need any CypherView SDK — just a web page that speaks the postMessage protocol below.

---

## The Communication Protocol

### Step 1 — Signal that your app is ready

Once your page has loaded and is ready to receive data, post a `READY` message to the parent window:

```js
window.parent.postMessage({ type: 'READY' }, '*');
```

> You can also post a plain string: `window.parent.postMessage('READY', '*')`

### Step 2 — Receive context from CypherView

After CypherView receives your `READY` signal, it will post a `WIDGET_CONFIG` message to your iframe:

```js
window.addEventListener('message', (event) => {
  const { type, payload } = event.data;

  if (type === 'WIDGET_CONFIG') {
    const {
      tripId,        // string | undefined
      assetId,       // string | undefined
      startDate,     // string | undefined (ISO 8601)
      endDate,       // string | undefined (ISO 8601)
      vehicleName,   // string | undefined
      accessToken,   // string | undefined (Bearer token)
    } = payload;

    // Use this data to fetch from the CypherView API or render your UI
  }
});
```

### Full minimal example

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>My CypherView App</title>
</head>
<body>
  <div id="content">Loading...</div>

  <script>
    // Step 1: Listen for config before signalling ready
    window.addEventListener('message', (event) => {
      if (!event.data || event.data.type !== 'WIDGET_CONFIG') return;

      const { tripId, assetId, accessToken } = event.data.payload;

      document.getElementById('content').textContent =
        `Trip: ${tripId} | Asset: ${assetId}`;

      // Use accessToken to call the CypherView API if needed
    });

    // Step 2: Signal ready
    window.parent.postMessage({ type: 'READY' }, '*');
  </script>
</body>
</html>
```

---

## Context Data per Screen

CypherView only sends fields that are available for the current screen. All fields are optional — always guard against `undefined`.

| Field | Type | Available on |
|-------|------|-------------|
| `tripId` | `string` | `tripDetails` |
| `assetId` | `string` | `tripDetails`, `positionActivityStats` |
| `startDate` | `string` (ISO 8601) | `tripDetails`, `positionActivityStats` |
| `endDate` | `string` (ISO 8601) | `tripDetails`, `positionActivityStats` |
| `vehicleName` | `string` | `tripDetails` |
| `accessToken` | `string` | all screens |

---

## Using the Access Token

The `accessToken` is a Bearer token scoped to the **permissions your app declared** at registration. Use it to call the CypherView API:

```js
const response = await fetch('https://api.cypherview.io/telemetrystore/trips/' + tripId, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
```

> The token is tied to the installing organisation's session. Only resources covered by your declared permissions will be accessible — other requests will return `403 Forbidden`.

---

## Context Updates

CypherView may re-send `WIDGET_CONFIG` **without reloading your iframe** when the user navigates to a different trip or asset. Make sure your `message` listener handles this — don't assume config is only received once.

```js
window.addEventListener('message', (event) => {
  if (event.data?.type !== 'WIDGET_CONFIG') return;

  // This may fire multiple times — update your UI accordingly
  renderApp(event.data.payload);
});
```

---

## Security

- **Always validate `event.origin`** in production. CypherView sends messages from the host where it is deployed — validate against your expected origin.
- **Never trust the token blindly** — it is scoped, but treat it as you would any short-lived credential.
- Your `baseUrl` must use **HTTPS** — HTTP is rejected.

```js
const ALLOWED_ORIGIN = 'https://app.cypherview.io';

window.addEventListener('message', (event) => {
  if (event.origin !== ALLOWED_ORIGIN) return; // Reject unknown origins
  // ...
});
```

---

## Health Check Endpoint

If you provide a `healthCheckUrl` during registration, CypherView sends a `HEAD` request to it before loading your iframe (with a **5-second timeout**). Return a `2xx` response to confirm your service is up.

```
HEAD https://yourapp.example.com/health
→ 200 OK
```

If this check fails, the user sees an "unavailable" tile with a retry button instead of your app.

---

## iframe Constraints

| Screen | Height (Flutter/mobile) | Width |
|--------|------------------------|-------|
| `tripDetails` | 267px | 100% |
| `positionActivityStats` | 130px | 100% |
| `appSidebar` | Full height (web only) | Fixed sidebar width |

> On web, heights are not fixed and your app can expand freely. On mobile (Flutter), the heights above are enforced — design compact UIs for those screens.

---

## Checklist Before Submitting

- [ ] Page posts `READY` to `window.parent` on load
- [ ] `message` listener handles `WIDGET_CONFIG` and re-renders on subsequent calls
- [ ] Origin validation in place for production
- [ ] Health check endpoint returns `2xx` within 5 seconds
- [ ] Base URL uses `https://`
- [ ] UI is responsive within the iframe constraints above
- [ ] Only the declared permissions are used via the API
