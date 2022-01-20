<template>
  <div class="">
    <label for="region" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :type="type"
      class="
        mt-1
        focus:ring-indigo-500 focus:border-indigo-500
        block
        w-full
        shadow-sm
        sm:text-sm
        border-gray-300
        rounded-md
      "
      @input="emitUpdate($event.target.value)"
      @keyup.enter="emit('enter')"
    />
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
    type: { type: String, default: 'text' },
    disabled: { type: Boolean, default: false },
    mask: { type: String, default: '' },
  })

  const emit = defineEmits(['update:modelValue', 'enter'])

  const emitUpdate = val => {
    emit('update:modelValue', val)
  }
</script>
