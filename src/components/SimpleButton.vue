<script>
export default {
  name: 'SimpleButton',
  props: {
    dark: { type: Boolean, default: () => false },
    big: { type: Boolean, default: () => null },
    small: { type: Boolean, default: () => null },
    outline: { type: Boolean, default: () => null },
    rounded: { type: Boolean, default: () => null },
  },
}
</script>

<template>
  <button
    :class="[
      'transition-colors h-12 w-24',
      dark
        ? 'bg-gray-800 hover:bg-white text-white hover:text-black border-blue-300 hover:border-red-500'
        : 'bg-white hover:bg-gray-800 text-black hover:text-white border-red-500 hover:border-blue-300',
      big && 'text-2xl font-bold',
      small && 'text-sm font-normal',
      outline && 'border-2',
      rounded && 'rounded-lg shadow-2xl',
    ]"
  >
    <slot />
  </button>
</template>
