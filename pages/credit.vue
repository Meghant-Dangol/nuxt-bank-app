<template>
  <div class="container py-4">
    <h2>Credit</h2>
    <TransactionForm :type="type" @close="close" />
  </div>
</template>

<script>
import TransactionForm from "~/components/TransactionForm.vue";
export default {
  name: "Credit",
  components: { TransactionForm },
  data() {
    return {
      type: "credit",
    };
  },
  head() {
    return {
      title: "Credit",
    };
  },
  methods: {
    close() {
      this.$router.push("dashboard");
    },
  },
};
</script>

<style></style>
