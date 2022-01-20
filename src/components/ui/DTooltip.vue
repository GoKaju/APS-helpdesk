<template>
  <!-- <div :data-tip="text" :class="['tooltip', 'tooltip-' + position]">
    <slot />
  </div> -->
  <div class="group relative inline-block">
    <slot />
    <div
      class="min-w-6 opacity-0 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full px-3 pointer-events-none"
    >
      {{ text }}
      <!-- <svg
        class="absolute text-black h-2 w-full left-0 top-full"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
        xml:space="preserve"
      >
        <polygon class="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg> -->
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: { type: String, default: "" },
  position: { type: String, default: "right" },
});

console.log(props);

// const positionClass = computed(() => `tooltip-rigth`)
</script>
