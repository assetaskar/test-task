<script setup>
import Item from "./Item.vue";

defineProps({
  data: Array,
  activeId: Number,
})

defineEmits(['select'])
</script>

<template>
  <div class="container">
    <div class="row items-center header">
      <div class="col">Customer ID</div>
      <div class="col">Server Name</div>
      <div class="col">Server Type</div>
    </div>

    <Item
        v-for="(i, idx) in data"
        :key="i.customer_id"
        v-bind="i"
        class="item"
        :class="{active: activeId === idx}"
        @click="$emit('select', idx)"
    />
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 20px;
}
.header {
  background-color: #a7a7a7;
  height: 30px;
}
.item {
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 1px dashed #a7a7a7;
  }
  &.active {
    background-color: #d7d7d7;
  }
}
</style>
