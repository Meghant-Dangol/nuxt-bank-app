<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
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
        <button class="btn btn-danger">Logout</button>
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
    };
  },
};
</script>

<style></style>
