<template>
  <DTooltip
    :text="waitForConfirm ? `Confirmar ${helpText}` : helpText"
    position="top"
  >
    <div
      class="h-9 w-9 rounded-full p-2 cursor-pointer text-gray-500 mx-auto transition-colors duration-200"
      :class="[`hover:text-${color}-800`, `hover:bg-${color}-200`]"
      @click="confirmIcon ? click1() : emit('click')"
    >
      <component :is="waitForConfirm ? icons[confirmIcon] : icons[icon]" />
    </div>
  </DTooltip>
</template>
<script setup>
import { defineProps, defineEmits, ref } from "vue";
import * as icons from "@heroicons/vue/outline";
import DTooltip from "./DTooltip.vue";

const emit = defineEmits(["confirm", "click"]);
const waitForConfirm = ref(false);
const click1 = () => {
  console.log("click1");
  if (waitForConfirm.value) {
    emit("confirm");
    waitForConfirm.value = false;
  } else {
    waitForConfirm.value = true;
    setTimeout(() => {
      waitForConfirm.value = false;
    }, 2000);
  }
};

defineProps({
  helpText: { type: String, default: "" },
  icon: { type: String, default: "" },
  confirmIcon: { type: String, default: "" },
  color: { type: String, default: "blue" },
});
</script>
