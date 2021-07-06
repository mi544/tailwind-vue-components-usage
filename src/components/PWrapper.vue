<script>
export default {
  name: 'PWrapper',
  props: {
    title: { type: String, required: false },
  },
}
</script>

<template>
  <div class="m-auto w-max my-8 flex-col items-center">
    <p v-if="title">{{ title }}</p>
    <slot />
  </div>
</template>
