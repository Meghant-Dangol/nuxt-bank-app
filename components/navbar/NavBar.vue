<template>
  <nav v-if="showNavBar" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <nuxt-link class="navbar-brand" :to="{ name: 'dashboard' }"
        >Navbar</nuxt-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" v-for="navItem in navItems" :key="navItem">
          <NavItem :itemName="navItem" />
        </div>
      </div>
      <div class="ml-auto">
        <span class="px-3">{{ getUser.email }}</span>
        <button class="btn btn-danger" @click="logout">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  name: "NavBar",
  components: { NavItem },
  data() {
    return {
      navItems: ["credit", "debit", "transactions"],
      user: "",
    };
  },
  methods: {
    logout() {
      this.$auth.$storage.setUniversal("loggedIn", false);
      this.$auth.$storage.removeUniversal("user");
      window.location.reload();
    },
  },
  computed: {
    showNavBar() {
      if (this.$route.path !== "/") {
        return true;
      }
    },
    getUser() {
      this.user =
        this.$auth.$storage.getUniversal("user") === null
          ? ""
          : this.$auth.$storage.getUniversal("user");
      return this.user;
    },
  },
};
</script>

<style></style>
