<template>
  <p class="text-center text-xl drop-shadow-xl">{{ funFact }}</p>

  <button v-if="shareIsAllowed && funFact.length" class="btn btn-xs btn-ghost opacity-50 hover:bg-transparent" @click="shareMe">
    Share
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 -mt-1 ml-2"><path d="M384 352v64c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32v-64c0-17.67-14.33-32-32-32s-32 14.33-32 32v64c0 53.02 42.98 96 96 96h256c53.02 0 96-42.98 96-96v-64c0-17.67-14.33-32-32-32S384 334.3 384 352zM201.4 9.375l-128 128c-12.51 12.51-12.49 32.76 0 45.25c12.5 12.5 32.75 12.5 45.25 0L192 109.3V320c0 17.69 14.31 32 32 32s32-14.31 32-32V109.3l73.38 73.38c12.5 12.5 32.75 12.5 45.25 0s12.5-32.75 0-45.25l-128-128C234.1-3.125 213.9-3.125 201.4 9.375z"/></svg>
  </button>

  <button
    class="btn btn-sm btn-secondary w-72 mx-auto"
    :class="{'loading': loadingNewFunFact}"
    @click="loadNewFunFact">
      Load a new Fun Fact
  </button>

</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

const loadingNewFunFact = ref(false)
const funFact = ref('')

onMounted(() => loadNewFunFact() )

const loadNewFunFact = async () => {
  loadingNewFunFact.value = true
  funFact.value = ''

  await fetch('/.netlify/functions/funfactapi', {
    method: 'GET'
  })
    .then(response => {
      if (!response.ok) throw new Error(response)
      return response.json()
    })
    .then(response => {
      funFact.value = response[0].description
      loadingNewFunFact.value = false
    })
    .catch(error => {
      funFact.value = error
      loadingNewFunFact.value = false
    })
}

const shareIsAllowed = computed(() => navigator.share ? true : false )

const shareMe = () => {
  if (navigator.share) {
    navigator.share({
      title: 'Fun Fact!',
      url: 'https://fun-fact.netlify.app',
      text: `Fun Fact: "${funFact.value}"`
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    console.log('sharing not available')
  }
}

</script>