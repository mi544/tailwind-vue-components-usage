<template>
  <button
    :class="[
      'transition-colors h-12 w-28',
      'bg-blue-500 text-2xl font-bold shadow-2xl',
      'rounded-lg',
    ]"
  >
    <slot />
  </button>
</template>
