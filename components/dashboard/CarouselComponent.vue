<template>
  <div class="my-carousel">
    <no-ssr placeholder="Loading...">
      <carousel-3d
        :width="420"
        :height="220"
        :controls-visible="true"
        :display="1"
        style="z-index: 99"
      >
        <slide v-for="slide in slides" :key="slide" :index="slide - 1">
          <v-card class="my-carousel__slide-card">
            <span>{{ slide }} of {{ slides }}</span>
            <p class="mb-0">Mine wishlist</p>
            <div
              class="d-flex justify-space-between my-carousel__slide-card-bottom"
            >
              <div>
                <span>Client</span>
                <p class="mb-0">Groupon</p>
              </div>
              <div>
                <span>Campaign</span>
                <p class="mb-0">Campaign name</p>
              </div>
            </div>
          </v-card>
        </slide>
      </carousel-3d>
    </no-ssr>
    <div class="my-carousel__btn">
      <v-btn class="my-carousel__btn-control" @click="stepUp" icon>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <v-btn class="my-carousel__btn-control" @click="stepDown" icon>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
    <div class="my-carousel__second-slide"></div>
    <div class="my-carousel__third-slide"></div>
  </div>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      slides: 3,
      defaultIndex: 0,
    };
  },

  methods: {
    stepDown() {
      if (this.defaultIndex) {
        this.defaultIndex--;
      } else {
        this.defaultIndex = this.slides - 1;
      }
      document.querySelector("div.carousel-3d-controls > a.prev").click();
    },
    stepUp() {
      if (this.defaultIndex === this.slides - 1) {
        this.defaultIndex = 0;
      } else {
        this.defaultIndex++;
      }
      document.querySelector("div.carousel-3d-controls > a.next").click();
    },

    deIndex(value) {
      return value;
    },
  },
};
</script>

<style scoped lang="scss"></style>
