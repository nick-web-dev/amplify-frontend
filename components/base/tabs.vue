<template>
  <v-col cols="12" md="12">
    <v-tabs v-model="tab" background-color="accent-4" icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1">
        <p>5/11 complete</p>
        Main Wishlist
      </v-tab>
      <v-tab href="#tab-2">
        <p>2/11 complete</p>
        Campaign Wishlist
      </v-tab>
      <v-tab href="#tab-3">
        <p>Not yet started</p>
        Content Selection
      </v-tab>
      <v-tab href="#tab-4">
        <p class="overdue">
          <span><img src="../../assets/icon/overdue.svg" alt="" /></span>
          Overdue
        </p>
        Reconciliation
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 4" :key="i" :value="'tab-' + i">
        <v-row>
          <v-col cols="12" lg="6" md="12" sm="12" xs="12">
            <LinqCard />
          </v-col>
          <v-col cols="12" lg="6" md="12" sm="12" xs="12">
            <BudgetCard />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="12" md="12" sm="12" xs="12">
            <UrlTableList />
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-col>
</template>

<script>
import TableRow from "../dashboard/TableRow.vue";
import BudgetCard from "../product/BudgetCard.vue";
import LinqCard from "../product/LinqCard.vue";
import UrlTableList from "../product/UrlTableList.vue";

export default {
  name: "tabs",
  data() {
    return {
      tab: null,
    };
  },
  components: { BudgetCard, LinqCard, TableRow, UrlTableList },
};
</script>

<style></style>
