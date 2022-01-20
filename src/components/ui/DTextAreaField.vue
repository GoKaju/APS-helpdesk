<template>
  <label for="" class="block text-sm font-medium text-gray-700">
    {{ label }}
  </label>
  <div class="mt-1">
    <textarea
      class="
        shadow-sm
        focus:ring-indigo-500 focus:border-indigo-500
        mt-1
        block
        w-full
        sm:text-sm
        border border-gray-300
        rounded-md
      "
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      rows="3"
      @input="emitUpdate($event.target.value)"
      @keyup.enter="emit('enter')"
    />
  </div>
  <p class="mt-2 text-sm text-gray-500">
    {{ hint }}
  </p>
</template>

<script setup>
import { defineProps, defineEmits } from "vue"

defineProps({
  modelValue: { type: String, default: "" },
  label: { type: String, default: "" },
  placeholder: { type: String, default: "" },
  hint: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
})

const emit = defineEmits(["update:modelValue", "enter"])

const emitUpdate = (val) => {
  emit("update:modelValue", val)
}
</script>
