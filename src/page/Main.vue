<script setup>
import List from "../components/List.vue"
import Form from "../components/Form.vue"
import {computed, ref} from "vue"

const servers = [
  { name: 'vds' },
  { name: 'dedicated' },
  { name: 'hosting' },
]

const list = ref([
  {
    customer_id: 'user1',
    server_name: 'server7',
    server_type: 'vds',
  },
  {
    customer_id: 'user5',
    server_name: 'server2',
    server_type: 'dedicated',
  },
  {
    customer_id: 'user3',
    server_name: 'server4',
    server_type: 'hosting',
  },
])
const editIdx = ref(null)
const input = ref('')
const select = ref(null)

const disabled = computed(() => {
  if (editIdx.value === null) {
    return true
  } else {
    return input.value === list.value[editIdx.value].server_name
        && select.value.name === list.value[editIdx.value].server_type
  }
})

function editHandler(idx) {
  const server = list.value[idx]
  editIdx.value = idx
  input.value = server.server_name
  select.value = {
    name: server.server_type
  }
}

function reset() {
  editIdx.value = null
  input.value = ''
  select.value = null
}

function save() {
  list.value[editIdx.value].server_name = input.value
  list.value[editIdx.value].server_type = select.value.name
  reset()
}
</script>

<template>
  <div class="row">
    <List
        class="col"
        :data="list"
        :active-id="editIdx"
        @select="editHandler"
    />

    <Form
        class="col"
        :user="list[editIdx]?.customer_id"
        :servers="servers"
        :disabled="disabled"
        v-model:input="input"
        v-model:selected-server="select"
        @cancel="reset"
        @save="save"
    />
  </div>
</template>
