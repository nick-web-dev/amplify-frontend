<template>
  <div class="table-row">
    <div class="table-row__text">Client name</div>
    <div class="table-row__text">Campaign name</div>
    <div class="table-row__buffer"></div>
    <div class="table-row__buffer"></div>
  </div>
</template>

<script>
export default {
  name: "TableRow",
};
</script>

<style scoped lang="scss">
.table-row {
  border: 1px solid #e8e8e8;
  padding: 28px 33px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;

  &__text {
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
  }

  &__buffer {
    width: 160px;
    height: 19px;
    background: #e8e8e8;
    border-radius: 5px;
  }
}
</style>
