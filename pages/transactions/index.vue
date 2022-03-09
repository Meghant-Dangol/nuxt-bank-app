<template>
  <div class="container">
    <Transactions :transactions="transactions" />
  </div>
</template>

<script>
import Transactions from "../../components/transactions/Transactions.vue";
export default {
  data() {
    return {
      transactions: [],
    };
  },
  mounted() {
    this.transactions =
      localStorage.transactions === undefined
        ? []
        : JSON.parse(localStorage.transactions);
  },
  components: { Transactions },
  head() {
    return {
      title: "Transactions",
    };
  },
};
</script>

<style></style>
