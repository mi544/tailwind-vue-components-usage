<template>
  <button
    :class="[
      'transition-colors h-12 w-24',
      'bg-blue-500 hover:bg-white text-white hover:text-black border-2 border-blue-300 hover:border-red-500',
      'text-2xl font-bold shadow-2xl',
      'rounded-lg',
    ]"
  >
    <slot />
  </button>
</template>
