<template>
  <div class="grettings">
    <p class="mb-0 grettings__subtitle">Good morning, Tristan</p>
    <p class="mb-0 grettings__title">
      You have 3 new <br />
      tasks to complete
    </p>
  </div>
</template>

<script>
export default {
  name: "Grettings",
};
</script>

<style scoped lang="scss">
.grettings {
  &__subtitle {
    font-weight: 700;
    font-size: 28px;
    line-height: 28px;
    color: #767676;
    margin-bottom: 18px !important;
  }
  &__title {
    font-weight: 400;
    font-size: 48px;
    line-height: 53px;
    color: #1d1d1d;
  }
}
</style>
