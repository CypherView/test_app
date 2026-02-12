// src/app/features/app-store/utils/status.utils.ts
function getStatusSeverity(status) {
  switch (status) {
    case "approved":
      return "success";
    case "pendingReview":
    case "underReview":
    case "changesRequested":
      return "warn";
    case "draft":
    case "withdrawn":
      return "secondary";
    case "rejected":
    case "suspended":
      return "danger";
    default:
      return "info";
  }
}
function getStatusLabel(status) {
  return status.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).trim();
}

export {
  getStatusSeverity,
  getStatusLabel
};
//# sourceMappingURL=chunk-34DNJRCO.js.map
