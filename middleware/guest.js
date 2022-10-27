export default function ({ store, redirect, app }) {
  if (store.getters["auth/isUser"]) {
    return redirect(app.localePath("/"));
  }
}
