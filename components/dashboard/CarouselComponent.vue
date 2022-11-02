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
    <!-- <div class="my-carousel__btn">
      <v-btn class="my-carousel__btn-control" @click="stepUp" icon>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <v-btn class="my-carousel__btn-control" @click="stepDown" icon>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </div> -->
    <div class="my-carousel__second-slide"></div>
    <div class="my-carousel__third-slide"></div>
  </div>
</template>

<script>
export default {
  name: "Carousel",

  data() {
    return {
      slides: 4,
      defaultIndex: 0,
    };
  },

  methods: {
    stepDown() {
      if (this.defaultIndex === this.slides - 1) {
        this.defaultIndex = 0;
      } else {
        this.defaultIndex++;
      }
    },
    stepUp() {
      if (this.defaultIndex) {
        this.defaultIndex--;
      } else {
        this.defaultIndex = this.slides - 1;
      }
    },

    deIndex(value) {
      return value;
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .carousel-3d-controls {
  // display: none !important;
}

::v-deep .carousel-3d-slide {
  border-width: 0px !important;
  border-radius: 14px !important;
  height: 220px !important;
  width: 420px !important;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%) !important;
}

.my-carousel {
  margin-right: 100px;
  position: relative;
  width: 425px;

  &__slide-card {
    padding: 25px 30px;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: #929292;
    }

    P {
      font-weight: 700;
      font-size: 30px;
      line-height: 28px;
      margin-top: 14px;
    }

    &-bottom {
      margin-top: 51px;
      p {
        margin-top: 9px !important;
        font-size: 20px !important;
        line-height: 20px !important;
      }
    }
  }

  &__btn {
    position: absolute;
    right: -50px;
    top: 68px;
    display: flex;
    flex-flow: column;
    gap: 20px;

    &-control {
      border: 1px solid #e8e8e8;
      width: 30px !important;
      height: 30px !important;
    }
  }

  &__second-slide {
    width: 400px;
    height: 220px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    border-radius: 14px;
    z-index: 10;
    position: absolute;
    top: 15px;
    right: 13px;
    background: #ffff;
  }

  &__third-slide {
    width: 370px;
    height: 220px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    border-radius: 14px;
    z-index: 1;
    position: absolute;
    top: 30px;
    right: 28px;
  }
}
</style>
