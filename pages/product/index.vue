<template>
  <div>
    <v-row class="product-section">
      <v-col cols="12" lg="10" md="12" sm="12" xs="12" class="pt-13 px-10">
        <ProductDetail />
      </v-col>
      <v-col cols="12" lg="2" md="12" sm="12" xs="12" class="pt-13 user-right">
        <UsersList />
      </v-col>
    </v-row>
    <div class="tab-section">
      <v-row class="px-10">
        <Tabs />
      </v-row>
    </div>
  </div>
</template>

<script>
import ProductDetail from "~/components/product/ProductDetail.vue";
import Tabs from "~/components/base/tabs.vue";
import UsersList from "~/components/product/UsersList.vue";

export default {
  name: "products",
  components: { ProductDetail, Tabs, UsersList },
};
</script>

<style></style>
