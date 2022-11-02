export default async function ({ store, redirect, app }) {
  if (!store.getters["auth/isUser"]) {
    // return redirect(app.localePath("/login"));
  }
}
