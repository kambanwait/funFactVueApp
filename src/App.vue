<template>
  <main class="container max-w-3xl p-2 flex gap-10 flex-col overflow-auto">
    <h1 class="text-8xl text-center font-bold pulse">Fun Fact!</h1>
    <Suspense>
      <FunFact />
      <template #fallback>
        <button class="btn btn-ghost btn-disabled bg-transparent loading btn-xl pulse text-center w-100 text-xl">Loading a Fun Fact...</button>
      </template>
    </Suspense>
  </main>
</template>

<script setup>
  import FunFact from '@/components/FunFact.vue'
</script>