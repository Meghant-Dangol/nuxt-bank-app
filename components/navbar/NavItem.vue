<template>
  <nuxt-link :to="{ name: itemName }" class="nav-link text-capitalize">{{
    itemName
  }}</nuxt-link>
</template>

<script>
export default {
  name: "NavItem",
  props: ["itemName"],
};
</script>

<style></style>
