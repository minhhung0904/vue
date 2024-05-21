<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="hidden lg:flex lg:gap-x-12">
      <RouterLink to="/" class="text-sm font-semibold leading-6 text-gray-900">Basic</RouterLink>
      <RouterLink to="/pay" class="text-sm font-semibold leading-6 text-gray-900">Test Pay</RouterLink>
      <RouterLink to="/grid" class="text-sm font-semibold leading-6 text-gray-900"> Table </RouterLink>
      <RouterLink to="/tree" class="text-sm font-semibold leading-6 text-gray-900"> Tree Item </RouterLink>
      <RouterLink to="/todo" class="text-sm font-semibold leading-6 text-gray-900"> Todo </RouterLink>
      <RouterLink to="/login" class="text-sm font-semibold leading-6 text-gray-900"> Login </RouterLink>
      <RouterLink to="/input" class="text-sm font-semibold leading-6 text-gray-900"> Input </RouterLink>
    </div>
  </nav>
  </header>
  <body>
    <RouterView class="p-6"/>
  </body>
</template>

<style scoped>

header {
  display: inline-block;
  line-height: 1.5;
}
</style>
