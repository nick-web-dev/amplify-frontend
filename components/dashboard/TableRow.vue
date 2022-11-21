<template>
  <div>
    <div class="table-row mt-7"  v-for="campaign in campaigns">
      <div class="table-row__text">{{campaign.client.name }} </div>
      <div class="table-row__text">{{campaign.name}}</div>
      <div class="table-row__text">Sprint 1.0</div>
      <div class="table-row__buffer"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "TableRows",
  created () {
    this.$store.dispatch('campaigns/fetchCampaigns')
  },
  computed: mapState({
    campaigns: (state) => state.campaigns.currentCampaigns
  })
};
</script>

<style scoped lang="scss"></style>
