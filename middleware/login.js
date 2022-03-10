export default function ({ $auth, redirect }) {
  if ($auth.$storage.getUniversal("loggedIn")) {
    return redirect("/dashboard");
  }
}
