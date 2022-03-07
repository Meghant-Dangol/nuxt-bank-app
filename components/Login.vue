<template>
  <div class="container py-4">
    <div class="col-md-4 mx-auto">
      <h2 class="text-center">Login</h2>
      <form @submit.prevent="loginHandler" class="py-4">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" class="form-control" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" class="form-control" />
        </div>
        <div class="text-danger" v-if="loginError">
          Invalid Credentials Please Try Again
        </div>
        <input type="submit" value="Login" class="btn btn-success my-2" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      loginError: false,
    };
  },
  methods: {
    async loginHandler() {
      const loginInfo = { email: this.email, password: this.password };

      try {
        const res = await this.$auth.loginWith("local", {
          data: loginInfo,
        });
        this.$auth.setUser(res.data.iam);
        sessionStorage.user = JSON.stringify(this.$auth.user);
        this.$router.push("/dashboard");
      } catch {
        this.loginError = true;
        this.password = "";
      }
    },
  },
};
</script>

<style></style>
