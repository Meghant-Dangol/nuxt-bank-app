<template>
  <tr>
    <td v-if="date !== undefined">
      <nuxt-link :to="'/transactions/' + date">{{ date }}</nuxt-link>
    </td>
    <td>{{ remarks }}</td>
    <td :class="amountClass">{{ amount }}</td>
  </tr>
</template>

<script>
export default {
  name: "Transaction",
  data() {
    return {
      amountClass: "",
    };
  },
  props: ["date", "remarks", "amount", "type"],
  mounted() {
    if (this.type === "credit") {
      this.amountClass = "bg-success text-light";
    } else {
      this.amountClass = "bg-danger text-light";
    }
  },
};
</script>

<style></style>
