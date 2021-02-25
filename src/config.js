export const basePath =
  document.querySelector("#dev-root") && process.env.NODE_ENV === "development"
    ? ""
    : "/p2p";
