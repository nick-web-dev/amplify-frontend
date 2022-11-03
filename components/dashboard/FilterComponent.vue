<template>
  <div class="filter">
    <div class="filter__select-clients">
      <div
        class="filter__select-sorts-text"
        :style="showClients ? 'display: none' : 'display: block'"
      >
        <span class="pr-10">All clients</span>
        <v-icon size="20">mdi-chevron-down</v-icon>
      </div>
      <v-base-select
        :rules="'required'"
        type="text"
        :items="['All clients', 'New clients']"
        v-model="clients"
        style="padding-top: 0px"
        :style="showClients ? 'display: block' : 'display: none'"
      ></v-base-select>
    </div>
    <div class="filter__select-sorts">
      <div
        class="filter__select-sorts-text"
        :style="showSorts ? 'display: none' : 'display: block'"
      >
        <span class="pr-2">Sort: A-Z</span>
        <v-icon size="20">mdi-chevron-down</v-icon>
      </div>
      <v-base-select
        :rules="'required'"
        type="text"
        :items="['Sort: A-Z', 'A', 'B']"
        v-model="sorts"
        style="padding-top: 0px"
        :style="showSorts ? 'display: block' : 'display: none'"
      ></v-base-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",

  data() {
    return {
      clients: "All clients",
      sorts: "Sort: A-Z",

      showSorts: true,
      showClients: true,
    };
  },
};
</script>

<style scoped lang="scss"></style>
