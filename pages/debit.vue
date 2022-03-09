<template>
  <div class="container py-4">
    <h2>Debit</h2>
    <TransactionForm :type="type" @close="close" />
  </div>
</template>

<script>
import TransactionForm from "~/components/TransactionForm.vue";
export default {
  name: "Debit",
  components: { TransactionForm },
  data() {
    return {
      type: "debit",
    };
  },
  head() {
    return {
      title: "Debit",
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
