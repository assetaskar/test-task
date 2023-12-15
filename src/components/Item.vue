<script setup>
defineProps({
  customer_id: String,
  server_name: String,
  server_type: String,
})
</script>

<template>
  <div class="row items-center item">
    <div class="col">{{customer_id}}</div>
    <div class="col">{{server_name}}</div>
    <div class="col">{{server_type}}</div>
  </div>
</template>

<style scoped lang="scss">
.item {
  min-height: 50px;
}
</style>
