<template>
  <div class="product_wrapper">
    <v-row>
      <v-col cols="6" lg="6" md="6" class="product-progress">
        <h2>Groupon</h2>
        <h1>Blue-Shoe (September)</h1>
        <v-row class="mt-6">
          <v-col cols="4" lg="4" md="4">
            <p>Sprint</p>
            <h6>1.2</h6>
          </v-col>
          <v-col cols="8" lg="8" md="8">
            <p>Campaign progress</p>
            <v-stepper alt-labels>
              <v-stepper-header>
                <v-stepper-step step="1"> </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="2"> </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3"> </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="4"> </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6" lg="6" md="6">
        <h6>2 brief documents awaiting review</h6>
        <div class="review-wrap">
          <v-col cols="6" lg="6" md="6" class="review">
            <v-checkbox v-model="checkbox1" id="checkbox1"></v-checkbox>
            <div>
              <p class="title">Client brand</p>
              <span>{{ checkbox1 ? "Viewed" : "Not viewed" }}</span>
            </div>
          </v-col>
          <v-col cols="6" lg="6" md="6" class="review">
            <v-checkbox v-model="checkbox2" id="checkbox2"></v-checkbox>
            <div>
              <p class="title">Competitors</p>
              <span>{{ checkbox2 ? "Viewed" : "Not viewed" }}</span>
            </div>
          </v-col>
          <v-col cols="6" lg="6" md="6" class="review">
            <v-checkbox v-model="checkbox3" id="checkbox3"></v-checkbox>
            <div>
              <p class="title">Top ranking sites</p>
              <span>{{ checkbox3 ? "Viewed" : "Not viewed" }}</span>
            </div>
          </v-col>
          <v-col cols="6" lg="6" md="6" class="review">
            <v-checkbox v-model="checkbox4" id="checkbox4"></v-checkbox>
            <div>
              <p class="title">URL topics</p>
              <span>{{ checkbox4 ? "Viewed" : "Not viewed" }}</span>
            </div>
          </v-col>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: true,
    };
  },
};
</script>

<style></style>
