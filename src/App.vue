<script>
import SimpleButton from './components/SimpleButton.vue'
import SimpleBlock from './components/SimpleBlock.vue'
import DifferentButton from './components/DifferentButton'

export default {
  name: 'App',
  components: { SimpleButton, SimpleBlock, DifferentButton },
}
</script>

<template>
  <div class="min-w-screen min-h-screen bg-gray-200">
    <div class="flex flex-wrap">
      <SimpleBlock class="mt-0 pt-8">
        <p>default</p>
        <SimpleButton>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>big</p>
        <SimpleButton big>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>small</p>
        <SimpleButton small>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>outline</p>
        <SimpleButton outline>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>big outline</p>
        <SimpleButton big outline>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>small outline</p>
        <SimpleButton small outline>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>big rounded</p>
        <SimpleButton big rounded>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>styles override</p>
        <SimpleButton
          class="bg-blue-200 font-thin border-green-200 text-red-900"
        >
          Wow
        </SimpleButton>
      </SimpleBlock>
    </div>
    <div class="flex flex-wrap">
      <SimpleBlock class="mt-0 pt-8">
        <p>default</p>
        <SimpleButton dark>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>big</p>
        <SimpleButton dark big>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>small</p>
        <SimpleButton small dark>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>outline</p>
        <SimpleButton dark outline>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>big outline</p>
        <SimpleButton dark big outline>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>small outline</p>
        <SimpleButton dark small outline>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>big rounded</p>
        <SimpleButton dark big rounded>Wow</SimpleButton>
      </SimpleBlock>
      <SimpleBlock>
        <p>styles override</p>
        <SimpleButton
          dark
          class="bg-blue-200 font-thin border-green-200 text-red-900"
        >
          Wow
        </SimpleButton>
      </SimpleBlock>
    </div>
    <div class="flex flex-wrap">
      <DifferentButton app="admin">Wow</DifferentButton>
      <DifferentButton app="web">Wow</DifferentButton>
    </div>
  </div>
</template>
