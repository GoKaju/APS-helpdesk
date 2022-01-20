<template>
  <div class="col-span-6 sm:col-span-3">
    <label class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <select
      id="country"
      name="country"
      autocomplete="country-name"
      class="
        mt-1
        block
        w-full
        py-2
        px-3
        border border-gray-300
        bg-white
        rounded-md
        shadow-sm
        focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
        sm:text-sm
      "
      :disabled="disabled"
      :value="items.indexOf(modelValue)"
      @input="emitUpdate(items[$event.target.value])"
    >
      <option disabled="disabled" :selected="modelValue?.name === ''">Seleccione {{ label }}</option>
      <option v-for="(item, index) in items" :key="index" :value="index">
        {{ showKey ? item[showKey] : item }}
      </option>
    </select>
    <label v-if="!!hint" class="label">
      <span class="label-text-alt">{{ hint }}</span>
    </label>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'

  defineProps({
    modelValue: { type: String, default: '' },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    hint: { type: String, default: '' },
    items: { type: Array, default: () => [] },
    disabled: { type: Boolean, default: false },
    showKey: { type: String, default: 'name' },
  })

  const emit = defineEmits(['update:modelValue'])

  const emitUpdate = val => {
    console.log('update Select', val)
    emit('update:modelValue', val)
  }
</script>
