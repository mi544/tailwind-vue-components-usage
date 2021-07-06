<script>
import PMain from './components/PMain.vue'
import PBlock from './components/PBlock.vue'
import SimpleButton from './components/SimpleButton.vue'
import PWrapper from './components/PWrapper.vue'
import DifferentButton from './components/DifferentButton/index.js'
import RenderlessButton from './components/RenderlessButton.js'

export default {
  name: 'App',
  components: {
    PMain,
    SimpleButton,
    PWrapper,
    DifferentButton,
    PBlock,
    RenderlessButton,
  },
}
</script>

<template>
  <PMain>
    <!-- option 1 -->
    <!-- light theme -->
    <PBlock title="Light">
      <PWrapper class="mt-0 pt-8" title="default">
        <SimpleButton>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="big">
        <SimpleButton big>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="small">
        <SimpleButton small>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="outline">
        <SimpleButton outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="big outline">
        <SimpleButton big outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="small outline">
        <SimpleButton small outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="big rounded">
        <SimpleButton big rounded>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="styles override">
        <SimpleButton
          class="bg-blue-200 font-thin border-green-200 text-red-900"
        >
          Wow
        </SimpleButton>
      </PWrapper>
    </PBlock>
    <!-- dark theme -->
    <PBlock title="Dark">
      <PWrapper class="mt-0 pt-8" title="default">
        <SimpleButton dark>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="big">
        <SimpleButton dark big>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="small">
        <SimpleButton dark small>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="outline">
        <SimpleButton dark outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="big outline">
        <SimpleButton dark big outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="small outline">
        <SimpleButton dark small outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="big rounded">
        <SimpleButton dark big rounded>Wow</SimpleButton>
      </PWrapper>
      <PWrapper title="styles override">
        <SimpleButton
          dark
          class="bg-blue-200 font-thin border-green-200 text-red-900"
        >
          Wow
        </SimpleButton>
      </PWrapper>
    </PBlock>
    <!-- option 2 -->
    <PBlock title="Renderless">
      <PWrapper title="admin">
        <DifferentButton app="admin">Wow</DifferentButton>
      </PWrapper>
      <PWrapper title="admin (styles override)">
        <DifferentButton
          app="admin"
          class="bg-white font-black font-thin border-black"
        >
          Wow
        </DifferentButton>
      </PWrapper>
      <PWrapper title="web">
        <DifferentButton app="web">Wow</DifferentButton>
      </PWrapper>
      <PWrapper title="web (styles override)">
        <DifferentButton
          app="web"
          class="bg-black font-white font-thin border-blue-600"
        >
          Wow
        </DifferentButton>
      </PWrapper>
    </PBlock>
    <!-- option 3 -->
    <PBlock title="Renderless (2)">
      <PWrapper title="default">
        <RenderlessButton>Wow</RenderlessButton>
      </PWrapper>
      <PWrapper title="big">
        <RenderlessButton tag="big">Wow</RenderlessButton>
      </PWrapper>
      <PWrapper title="small">
        <RenderlessButton tag="small">Wow</RenderlessButton>
      </PWrapper>
      <PWrapper title="outline">
        <RenderlessButton tag="outline">Wow</RenderlessButton>
      </PWrapper>
      <PWrapper title="styles override">
        <RenderlessButton
          class="bg-blue-200 font-thin border-green-200 text-red-900"
        >
          Wow
        </RenderlessButton>
      </PWrapper>
    </PBlock>
  </PMain>
</template>
