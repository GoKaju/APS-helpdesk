<template>
  <div class="">
    <label for="region" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="mt-1 flex rounded-md shadow-sm">
      <span
        class="
          inline-flex
          items-center
          px-3
          rounded-l-md
          border border-r-0 border-gray-300
          bg-gray-50
          text-gray-500 text-sm
        "
      >
        {{ prepend }}
      </span>
      <input
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :type="type"
        class="
          focus:ring-indigo-500 focus:border-indigo-500
          flex-1
          block
          w-full
          rounded-none rounded-r-md
          sm:text-sm
          border-gray-300
        "
        @input="emitUpdate($event.target.value)"
        @keyup.enter="emit('enter')"
      />
    </div>
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
    prepend: { type: String, default: '' },
  })

  const emit = defineEmits(['update:modelValue', 'enter'])

  const emitUpdate = val => {
    emit('update:modelValue', val)
  }
</script>
