<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-toolbar-title>Add Role</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn icon dark @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <div class="pa-4 mt-4">
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <v-base-field
            :label="$t('Role name')"
            name="Role name"
            :rules="'required'"
            type="text"
            outlined
          ></v-base-field>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <v-base-select
            :label="$t('Guard name')"
            name="Guard name"
            :rules="'required'"
            type="text"
            :items="['admin']"
            outlined
          ></v-base-select>
        </v-col>
      </v-row>

      <hr class="my-4" />
      <div>
        <h2 class="mt-7">Permissions:</h2>
        <v-row class="mt-3">
          <v-col cols="12" md="4" sm="12">
            <v-base-check :label="$t('Name')" name="Name"></v-base-check>
          </v-col>
          <v-col cols="12" md="4" sm="12">
            <v-base-check :label="$t('Name')" name="Name"></v-base-check
          ></v-col>
          <v-col cols="12" md="4" sm="12">
            <v-base-check :label="$t('Name')" name="Name"></v-base-check
          ></v-col>
          <v-col cols="12" md="4" sm="12">
            <v-base-check :label="$t('Name')" name="Name"></v-base-check
          ></v-col>
          <v-col cols="12" md="4" sm="12">
            <v-base-check :label="$t('Name')" name="Name"></v-base-check
          ></v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped lang="scss"></style>
