<template>
  <button
    :class="[
      'transition-colors h-36 w-36',
      'bg-red-500 text-xl font-bold italic shadow-2xl',
      'border-2 border-black',
    ]"
  >
    <slot />
  </button>
</template>
