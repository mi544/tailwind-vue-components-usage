<script>
import PLineBreak from './PLineBreak.vue'
import PTitle from './PTitle.vue'

export default {
  name: 'PBlock',
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  components: {
    PLineBreak,
    PTitle,
  },
}
</script>

<template>
  <div>
    <PTitle>
      {{ title }}
    </PTitle>
    <div class="flex flex-wrap items-center">
      <slot />
    </div>
    <PLineBreak />
  </div>
</template>
