<template>
  <div class="url-tabs">
    <div class="title-wrap">
      <v-row>
        <v-col cols="9" lg="9" md="9">
          <h1>Destination URL (32)</h1>
        </v-col>
        <v-col cols="3" lg="3" md="3" class="action">
          <v-btn>Filter <span><img src="../../assets/icon/down-arrow.svg" alt=""></span> </v-btn>
          <v-btn>Export</v-btn>
        </v-col>
      </v-row>
    </div>
    <v-tabs v-model="tab" background-color="accent-4" icons-and-text>
      <v-tabs-slider></v-tabs-slider>
      <v-tab href="#tab-1"> Minining </v-tab>
      <v-tab href="#tab-2"> Current wishlist </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 4" :key="i" :value="'tab-' + i">
        <div class="table-row" v-for="n in 5" :key="n">
          <v-col cols="8" lg="8" md="8">
            <div class="table-row__text">http://www.groupon.com/shoes</div>
          </v-col>
          <v-col cols="4" lg="4" md="4" class="right-row">
            <div class="table-row__buffer">Linqs <span>0</span></div>
            <div class="table-row__text">
              <v-btn text class="active">Mine sites</v-btn>
            </div>
            <div class="table-row__text">
              <v-btn text class="img-btn"
                >Quick mine
                <span
                  ><img src="../../assets/icon/down-arrow.svg" alt="" /></span
              ></v-btn>
            </div>
          </v-col>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  name: "UrlTableList",
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style></style>
