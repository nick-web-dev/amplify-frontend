<template>
  <v-card class="">
    <v-card-title>
      <div class="title">Budget</div>
      <div class="header-action">
        <v-tabs v-model="tab">
          <v-tab href="#tab-1">Budget vs. spend</v-tab>
          <v-tab href="#tab-2">Cost average </v-tab>
          <v-tab href="#tab-3">Spend analysis</v-tab>
          <v-tab href="#tab-4">Optimization</v-tab>
        </v-tabs>
      </div>
    </v-card-title>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 4" :key="i" :value="'tab-' + i">
        <v-card-text>
          <v-row>
            <v-col cols="12" lg="12" md="12">
              <div class="progress-wrap">
                <div class="budget-info">
                  <h1>$10,500</h1>
                  <span>Budget</span>
                </div>
                <v-progress-linear
                  color="#1D1D1C"
                  rounded
                  value="25"
                  height="11"
                >
                </v-progress-linear>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "BudgetCard",
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style></style>
