<template>
  <div class="container py-4">
    <form @submit.prevent="" class="col-md-4">
      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="text" v-model="amount" class="form-control" />
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" v-model="date" class="form-control" />
      </div>

      <div class="form-group">
        <label for="remarks">Remarks</label>
        <textarea v-model="remarks" class="form-control"> </textarea>
      </div>
      <div class="py-2 text-danger" v-if="hasError">
        {{ errorMessage }}
      </div>
      <div v-if="type !== undefined">
        <input
          type="submit"
          :value="type"
          class="btn btn-success text-capitalize"
          @click="transactionClick(type)"
        />
      </div>
      <div v-else>
        <input
          type="submit"
          :value="renderType"
          class="btn btn-success text-capitalize"
          @click="transactionClick(renderType)"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "TransactionForm",
  props: ["type"],
  data() {
    return {
      amount: "",
      date: "",
      remarks: "",
      currentType: "",
      errorMessage: "",
      hasError: false,
    };
  },
  methods: {
    transactionClick(type) {
      const user = this.$auth.$storage.getUniversal("user");
      let transactions =
        localStorage.transactions === undefined
          ? []
          : JSON.parse(localStorage.transactions);

      let transaction = {
        amount: this.amount,
        date: this.date,
        remarks: this.remarks,
        type: type,
        userId: user._id,
      };

      if (localStorage.totalBalance === undefined) {
        localStorage.totalBalance = 0;
      }
      if (type === "credit") {
        localStorage.totalBalance =
          Number(localStorage.totalBalance) + Number(this.amount);
        transactions.push(transaction);
      } else {
        if (Number(localStorage.totalBalance) < Number(this.amount)) {
          this.hasError = true;
          this.errorMessage = "Insufficient balance to debit";
          return;
        }

        localStorage.totalBalance =
          Number(localStorage.totalBalance) - Number(this.amount);
        transactions.push(transaction);
      }

      localStorage.transactions = JSON.stringify(transactions);
      this.$emit("close");
    },
  },
  computed: {
    renderType() {
      if (this.$route.path === "credit") {
        this.currentType = "credit";
        return "credit";
      } else {
        this.currentType = "debit";
        return "debit";
      }
    },
  },
};
</script>

<style></style>
