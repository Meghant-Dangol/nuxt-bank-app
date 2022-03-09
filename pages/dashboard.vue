<template>
  <div class="container py-4">
    <div class="col-md-4">
      <div class="h4">Total Balance : {{ totalBalance }}</div>
    </div>
    <div class="row col-md-4 my-4">
      <div class="col-md-6">
        <button class="btn btn-primary" @click="creditClick">Credit</button>
      </div>
      <div class="col-md-6">
        <button class="btn btn-primary" @click="debitClick">Debit</button>
      </div>
    </div>
    <div v-if="showTransactionForm">
      <TransactionForm :type="type" @close="closeTransactionForm" />
    </div>
    <div class="">
      <Transactions :transactions="transactions" />
    </div>
  </div>
</template>

<script>
import TransactionForm from "../components/TransactionForm.vue";
import Transactions from "../components/transactions/Transactions.vue";
export default {
  name: "Dashboard",
  head() {
    return {
      title: "Dashboard",
    };
  },
  components: { TransactionForm, Transactions },
  data() {
    return {
      showTransactionForm: false,
      type: "",
      transactions: [],
      totalBalance: 0,
    };
  },
  methods: {
    creditClick() {
      this.showTransactionForm = true;
      this.type = "credit";
    },
    debitClick() {
      this.showTransactionForm = true;
      this.type = "debit";
    },
    closeTransactionForm() {
      this.showTransactionForm = false;

      this.transactions =
        localStorage.transactions === undefined
          ? []
          : JSON.parse(localStorage.transactions);
      this.totalBalance = localStorage.totalBalance;
    },
  },
  mounted() {
    this.transactions =
      localStorage.transactions === undefined
        ? []
        : JSON.parse(localStorage.transactions);

    this.totalBalance =
      localStorage.totalBalance === undefined ? 0 : localStorage.totalBalance;
  },
};
</script>

<style></style>
