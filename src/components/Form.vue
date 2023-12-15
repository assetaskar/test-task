<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dropdown from 'primevue/dropdown'

defineProps({
  user: {
    type: String,
    default: '',
  },
  input: String,
  servers: Array,
  selectedServer: Object,
  disabled: {
    type: Boolean,
    default: true,
  },
})

defineEmits(['update:input', 'update:selected-server', 'cancel', 'save'])
</script>

<template>
  <div class="wrap">
    <div class="form">
      <div class="mb-10 user">Customer: {{ user }}</div>

      <div class="mb-10">
        <InputText
            type="text"
            placeholder="Server name"
            :model-value="input"
            @update:model-value="$emit('update:input', $event)"
        />
      </div>

      <div class="mb-10">
        <Dropdown
            :model-value="selectedServer"
            :options="servers"
            optionLabel="name"
            placeholder="Select a Server"
            class="w-full md:w-14rem"
            @update:model-value="$emit('update:selected-server', $event)"
        />
      </div>

      <div class="actions row justify-between">
        <Button label="Cancel" severity="danger" @click="$emit('cancel')" />
        <Button label="Save" :disabled="disabled" @click="$emit('save')" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  align-self: stretch;
}
.user {
  min-height: 20px;
}
.form {
  padding: 0 20px;
  position: sticky;
  top: 20px;
  max-width: 360px;
}
</style>
