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
        :items="['All clients']"
        v-model="clients"
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
        :items="['Sort: A-Z']"
        v-model="sorts"
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

      showSorts: false,
      showClients: false,
    };
  },
};
</script>

<style scoped lang="scss">
::v-deep .v-text-field {
  padding-top: 0px !important;
}

.filter {
  border-top: 1px solid #e8e8e8;
  padding-top: 30px;
  margin-top: 50px;
  display: flex;
  gap: 10px;

  &__select-clients {
    width: 190px !important;
    height: 50px;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
    padding: 4px 24px 4px 24px;

    &-text {
      cursor: pointer;
      font-weight: 700;
      font-size: 16px;
      line-height: 15px;
      padding-top: 13px;
    }
  }

  &__select-sorts {
    width: 150px !important;
    height: 50px;
    border-radius: 100px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
    padding: 4px 24px 4px 24px;

    &-text {
      cursor: pointer;
      font-weight: 700;
      font-size: 16px;
      line-height: 15px;
      padding-top: 13px;
    }
  }
}
</style>
