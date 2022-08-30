<template>
  <p class="text-center text-xl drop-shadow-xl">{{ funFact }}</p>
  <button
    class="btn btn-sm btn-secondary w-72 mx-auto"
    :class="{'loading': loadingNewFunFact}"
    @click="loadNewFunFact">
      Load a new Fun Fact
  </button>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const loadingNewFunFact = ref(false)
const funFact = ref('')

onMounted(() => loadNewFunFact() )

const loadNewFunFact = async () => {
  loadingNewFunFact.value = true
  funFact.value = ''

  const response = await fetch('https://random-facts4.p.rapidapi.com/get', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a9b13ce31bmshc07f729223263fap1b4476jsnc78cd97258c3',
      'X-RapidAPI-Host': 'random-facts4.p.rapidapi.com'
    }
  })
    .then(response => response.json())
    .then(response => {
      funFact.value = response[0].description
      loadingNewFunFact.value = false
    })
    .catch(error => {
      funFact.value = error
      loadingNewFunFact.value = false
    })
}

</script>