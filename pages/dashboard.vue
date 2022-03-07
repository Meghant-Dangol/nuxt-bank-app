<template>
  <div class="container py-4">
    <h2>Dashboard</h2>
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
  </div>
</template>

<script>
import TransactionForm from "../components/TransactionForm.vue";
export default {
  name: "Dashboard",
  head() {
    return {
      title: "Dashboard",
    };
  },
  components: { TransactionForm },
  data() {
    return {
      showTransactionForm: false,
      type: "",
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
    },
  },
};
</script>

<style></style>
