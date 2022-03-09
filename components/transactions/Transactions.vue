<template>
  <div>
    <h2 class="py-2">Transactions</h2>
    <div class="table-responsive py-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Remarks</th>
            <th>Amount</th>
          </tr>
        </thead>
        <Transaction
          v-for="(transaction, index) in transactions"
          :key="index"
          :date="transaction.date"
          :amount="transaction.amount"
          :type="transaction.type"
          :remarks="transaction.remarks"
        />
      </table>
    </div>
  </div>
</template>

<script>
import Transaction from "./Transaction.vue";
export default {
  name: "Transactions",
  props: ["transactions"],
  components: { Transaction },
};
</script>

<style></style>
