<template>
  <div class="product_wrapper">
    <v-row>
      <v-col cols="12" lg="6" md="12" sm="12" xs="12" class="product-progress">
        <h2>Groupon</h2>
        <h1>Blue-Shoe (September)</h1>
        <v-row class="mt-6">
          <v-col cols="12" lg="4" md="4" sm="12" xs="12">
            <p>Sprint</p>
            <h6>1.2</h6>
          </v-col>
          <v-col cols="12" lg="8" md="8" sm="12" xs="12">
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
      <v-col cols="12" lg="6" md="12" sm="12" xs="12">
        <h6>2 brief documents awaiting review</h6>
        <v-row class="review-wrap">
          <v-col cols="10" lg="5" md="5" sm="10" xs="10" class="review">
            <v-checkbox v-model="checkbox1" id="checkbox1"></v-checkbox>
            <label for="checkbox1">
              <p class="title-review">Client brand</p>
              <span>{{ checkbox1 ? "Viewed" : "Not viewed" }}</span>
            </label>
          </v-col>
          <v-col cols="10" lg="5" md="5" sm="10" xs="10" class="review">
            <v-checkbox v-model="checkbox2" id="checkbox2"></v-checkbox>
            <label for="checkbox2">
              <p class="title-review">Competitors</p>
              <span>{{ checkbox2 ? "Viewed" : "Not viewed" }}</span>
            </label>
          </v-col>
          <v-col cols="10" lg="5" md="5" sm="10" xs="10" class="review">
            <v-checkbox v-model="checkbox3" id="checkbox3"></v-checkbox>
            <label for="checkbox3">
              <p class="title-review">Top ranking sites</p>
              <span>{{ checkbox3 ? "Viewed" : "Not viewed" }}</span>
            </label>
          </v-col>
          <v-col cols="10" lg="5" md="5" sm="10" xs="10"   class="review">
            <v-checkbox v-model="checkbox4" id="checkbox4"></v-checkbox>
            <label for="checkbox4">
              <p class="title-review">URL topics</p>
              <span>{{ checkbox4 ? "Viewed" : "Not viewed" }}</span>
            </label>
          </v-col>
        </v-row>
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
