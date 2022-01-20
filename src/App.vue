<template>
  <div class="flex justify-center h-screen w-screen bg-gray-500">
    <div class="w-max sm:w-3/6 border-4 rounded-md shadow-2xl rounde-sm bg-white my-5">
      <div class="flex w-full justify-center p-10">
        <img :src="logoUrl" alt="logo Aps" />
      </div>
      <div class="w-full h-14 p-5 bg-blue-500 text-white text-xl">Reportar Caso APS</div>
      <div class="p-10 grid grid-cols-6 gap-6">
        <div class="col-span-6 h-10 md:col-span-3">
          <DTextField label="Nombre de la emplresa" v-model="caseData.companyName" />
        </div>
        <div class="col-span-6 h-10 md:col-span-3">
          <DTextField label="correo electronico" v-model="caseData.email" />
        </div>
        <div class="col-span-6 h-10 md:col-span-3">
          <DSelectField label="País" v-model="caseData.type" :items="countries" />
        </div>
      </div>
      {{ caseData }}
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { logoUrl } from './const'
  import DTextField from './components/ui/DTextField.vue'
  import DSelectField from './components/ui/DSelectField.vue'

  import * as countriesService from './services/countries'
  const countries = ref([])
  const caseData = ref({})

  onMounted(() => {
    countriesService.getCountries().then(countries => {
      countries.value = countries
    })
  })
</script>
