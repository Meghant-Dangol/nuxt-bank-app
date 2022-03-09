<template>
  <div class="container py-4">
    <h2 class="py-2">Transaction of {{ $route.params.date }}</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Remarks</th>
          <th>Amount</th>
        </tr>
      </thead>
      <Transaction
        v-for="(transaction, index) in transactions"
        :key="index"
        :amount="transaction.amount"
        :type="transaction.type"
        :remarks="transaction.remarks"
      />
    </table>
  </div>
</template>

<script>
import Transaction from "~/components/transactions/Transaction.vue";
export default {
  components: { Transaction },
  data() {
    return {
      transactions: [],
      date: "",
      stitle: "",
    };
  },
  created() {
    this.date = this.$route.params.date;
    this.stitle = "Transaction of " + this.date;
  },
  mounted() {
    this.transactions = JSON.parse(localStorage.transactions).filter(
      (transaction) => transaction.date === this.$route.params.date
    );
  },
  head() {
    return {
      title: this.stitle,
    };
  },
};
</script>

<style></style>
