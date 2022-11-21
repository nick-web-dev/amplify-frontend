<template>
  <v-card class="">
    <v-card-title>
      <div class="title-card">Linq goals</div>
      <div class="header-action">
        <v-tabs v-model="tab">
          <v-tab href="#tab-1">Goals</v-tab>
          <v-tab href="#tab-2">Linq metrics </v-tab>
        </v-tabs>
      </div>
    </v-card-title>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
        <v-card-text>
          <v-row>
            <v-col cols="12" lg="8" md="8" sm="8">
              <div class="progress-wrap">
                <div class="progress-info">
                  <div class="progress-item">
                    <h6>Wishlist reservoir</h6>
                    <p>More sites required</p>
                  </div>
                  <div class="progress"><span>50</span>/180</div>
                </div>
                <v-progress-linear
                  color="#1D1D1C"
                  rounded
                  value="50"
                  height="11"
                ></v-progress-linear>
              </div>
              <div class="progress-wrap">
                <div class="progress-info">
                  <div class="progress-item">
                    <h6>Monthly linqs goal</h6>
                    <p>More sites required</p>
                  </div>
                  <div class="progress"><span>7</span>/30</div>
                </div>
                <v-progress-linear
                  color="#1D1D1C"
                  rounded
                  value="50"
                  height="11"
                ></v-progress-linear>
              </div>
            </v-col>
            <v-col cols="12" lg="4" md="4" sm="4">
              <div class="url-info">
                <h1>20</h1>
                <p>Prospective URLs</p>
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
  name: "LinqCard",
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style></style>
