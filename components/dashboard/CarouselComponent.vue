<template>
  <div class="my-carousel">
    <no-ssr>
      <carousel-3d
        :width="420"
        :height="220"
        :controls-visible="true"
        :display="1"
        style="z-index: 99"
        v-if="slides"
      >
        <slide v-for="slide in slides" :key="slide.id" :index="slide.id - 1"  >
          <v-card class="my-carousel__slide-card" v-if="slide !== undefined">
            <span>{{ slide.id }} of {{ slides.length }}</span>
            <p class="mb-0">{{slide.status}}</p>
            <div
              class="d-flex justify-space-between my-carousel__slide-card-bottom"
            >
              <div>
                <span>Client</span>
                <p class="mb-0">{{ slide.destination_url.campaign.client.name}}</p>
              </div>
              <div>
                <span>Campaign</span>
                <p class="mb-0">{{slide.destination_url.campaign.name }}</p>
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
import {mapState} from "vuex";

export default {
  name: "Carousel",

  data() {
    return {
      slidesCount: 3,
      defaultIndex: 1,
    };
  },

  created() {
    this.$store.dispatch('tasks/fetchTasks', {
      perPage: this.slidesCount
    });
  },

  computed: mapState({
    slides: state => state.tasks.currentTasks
  }),

  methods: {
    stepDown() {
      if (this.defaultIndex) {
        this.defaultIndex--;
      } else {
        this.defaultIndex = this.slides.length - 1;
      }
      document.querySelector("div.carousel-3d-controls > a.prev").click();
    },
    stepUp() {
      if (this.defaultIndex === this.slides.length - 1) {
        this.defaultIndex = 0;
      } else {
        this.defaultIndex++;
      }
      document.querySelector("div.carousel-3d-controls > a.next").click();
    }
  },
};
</script>

<style scoped lang="scss"></style>
