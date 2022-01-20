<template>
  <button
    :disabled="disabled"
    type="submit"
    class="
      inline-flex
      justify-center
      py-2
      px-4
      border border-transparent
      shadow-sm
      text-sm
      font-medium
      rounded-md
      text-white
      focus:outline-none focus:ring-2 focus:ring-offset-2
    "
    :class="[classes, { 'cursor-pointer': !disabled, 'cursor-not-allowed': disabled }]"
  >
    <DLoading v-if="loading" />
    <slot v-else />
  </button>
</template>
<script setup>
  import { defineProps, computed } from 'vue'
  import DLoading from './DLoading.vue'

  const classes = computed(() => {
    switch (props.color) {
      case 'disabled':
        return 'bg-gray-300 text-gray-500 cursor-not-allowed'
      case 'success':
        return 'bg-green-500 hover:bg-green-700 focus:ring-green-500 cursor-pointer'
      case 'warning':
        return 'bg-orange-500 hover:bg-orange-700 focus:ring-orange-500 cursor-pointer'
      case 'danger':
        return 'bg-red-600 hover:bg-red-700 focus:ring-red-500 cursor-pointer'
      default:
        return 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 cursor-pointer'
    }
  })
  const props = defineProps({
    color: { type: String, default: 'default' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  })
</script>
