<template>
  <div class="w-full min-w-full">
    <label class="block text-sm font-medium text-gray-700"
      >{{ label }} {{ selectedFiles.map(f => f.name).join(', ') }}</label
    >

    <label
      class="
        flex
        justify-center
        items-center
        rounded-xl
        border-2 border-dashed border-gray-300
        hover:border-indigo-500 hover:bg-gray-200
        h-40
      "
      @drop="onDrop"
      @dragover.prevent="onDragOver"
      @dragleave.prevent="onDragLeave"
    >
      <p>{{ helpText }} <UploadIcon class="h-10 w-10 text-gray-300" /></p>

      <input type="file" class="opacity-0 hidden" @input="inputFileChange" />
    </label>
  </div>
</template>
<script setup>
  import { defineProps, defineEmits, ref } from 'vue'
  import { UploadIcon } from '@heroicons/vue/outline'

  const props = defineProps({
    label: { type: String, default: '' },
    modelValue: { type: Array, default: () => [] },
    helpText: {
      type: String,
      default: 'Carga tu archivo',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    accept: {
      type: String,
      default: 'image/*',
    },
  })

  const selectedFiles = ref([])
  const emit = defineEmits(['update:modelValue'])

  const onDrop = e => {
    e.preventDefault()
    e.stopPropagation()
    console.log('onDrop', e.dataTransfer.files)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.match(props.accept)) {
        onFileChange(file)
      }
    }
  }

  const onDragOver = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDragLeave = e => {
    e.preventDefault()
    e.stopPropagation()
  }

  const inputFileChange = e => {
    console.log('inputFileChange', e.target.files)
    const files = e.target.files
    if (files.length > 0) {
      const file = files[0]
      if (file.type.match(props.accept)) {
        onFileChange(file)
      }
    }
  }

  const onFileChange = file => {
    console.log('onFileChange', file)
    const reader = new FileReader()
    reader.onload = e => {
      const data = e.target.result
      selectedFiles.value.push({
        name: file.name,
        type: file.type,
        size: file.size,
        data,
      })
      emit('update:modelValue', selectedFiles.value)
    }
  }
</script>
