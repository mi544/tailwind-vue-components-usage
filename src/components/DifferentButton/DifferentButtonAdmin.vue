<template>
  <button
    :class="[
      'transition-colors h-12 w-24',
      'bg-red-500 hover:bg-gray-800 text-black hover:text-white border-2 border-gray-500 hover:border-blue-300',
      'text-2xl font-bold italic shadow-4xl',
      'rounded-lg',
    ]"
  >
    <slot />
  </button>
</template>
