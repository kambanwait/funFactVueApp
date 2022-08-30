<template>
  <main class="container max-w-3xl p-2 flex gap-10 flex-col overflow-auto">
    <h1 class="text-7xl text-center font-bold pulse">Fun Fact!</h1>
    <Suspense>
      <FunFact />
      <template #fallback>
        <button class="btn btn-ghost btn-disabled bg-transparent loading btn-xl pulse text-center w-100 text-xl">Loading a Fun Fact...</button>
      </template>
    </Suspense>

    <footer class="flex flex-col gap-2">
      <p class="text-xs text-center opacity-60"><a href="https://www.scriptedpixels.co.uk" target="_blank">Scripted Pixels Ltd</a></p>
      <p class="text-xs text-center opacity-60"><a href="https://github.com/kambanwait/funFactVueApp"  target="_blank">GitHub</a></p>
    </footer>
  </main>
</template>

<script setup>
  import FunFact from '@/components/FunFact.vue'
</script>