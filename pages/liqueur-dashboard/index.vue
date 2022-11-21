<template>
  <div class="px-16">
    <v-row>
      <v-col cols="12" md="6" class="pt-13">
        <greatings />
      </v-col>
      <v-col cols="12" md="6">
        <carousel-component />
      </v-col>
    </v-row>
    <div>
      <filter-component />
    </div>
    <div class="mt-7">
      <table-rows />
    </div>
  </div>
</template>

<script>
import Greatings from "~/components/dashboard/Grettings.vue";
import CarouselComponent from "~/components/dashboard/CarouselComponent.vue";
import FilterComponent from "~/components/dashboard/FilterComponent.vue";
import TableRows from "~/components/dashboard/TableRow.vue";

export default {
  name: "Dashboard",

  components: {
    Greatings,
    CarouselComponent,
    FilterComponent,
    TableRows,
  },
};
</script>

<style></style>
