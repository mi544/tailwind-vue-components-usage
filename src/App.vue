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
      <PWrapper class="mt-0 pt-8">
        <p>default</p>
        <SimpleButton>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>big</p>
        <SimpleButton big>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>small</p>
        <SimpleButton small>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>outline</p>
        <SimpleButton outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>big outline</p>
        <SimpleButton big outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>small outline</p>
        <SimpleButton small outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>big rounded</p>
        <SimpleButton big rounded>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>styles override</p>
        <SimpleButton
          class="bg-blue-200 font-thin border-green-200 text-red-900"
        >
          Wow
        </SimpleButton>
      </PWrapper>
    </PBlock>
    <!-- dark theme -->
    <PBlock title="Dark">
      <PWrapper class="mt-0 pt-8">
        <p>default</p>
        <SimpleButton dark>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>big</p>
        <SimpleButton dark big>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>small</p>
        <SimpleButton dark small>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>outline</p>
        <SimpleButton dark outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>big outline</p>
        <SimpleButton dark big outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>small outline</p>
        <SimpleButton dark small outline>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>big rounded</p>
        <SimpleButton dark big rounded>Wow</SimpleButton>
      </PWrapper>
      <PWrapper>
        <p>styles override</p>
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
      <PWrapper>
        <p>admin</p>
        <DifferentButton app="admin">Wow</DifferentButton>
      </PWrapper>
      <PWrapper>
        <p>web</p>
        <DifferentButton app="web">Wow</DifferentButton>
      </PWrapper>
      <PWrapper>
        <p>styles override</p>
        <DifferentButton
          class="bg-blue-200 font-thin border-green-200 text-red-900"
        >
          Wow
        </DifferentButton>
      </PWrapper>
    </PBlock>
    <!-- option 3 -->
    <PBlock title="Renderless (2)">
      <PWrapper>
        <p>default</p>
        <RenderlessButton>Wow</RenderlessButton>
      </PWrapper>
      <PWrapper>
        <p>big</p>
        <RenderlessButton tag="big">Wow</RenderlessButton>
      </PWrapper>
      <PWrapper>
        <p>small</p>
        <RenderlessButton tag="small">Wow</RenderlessButton>
      </PWrapper>
      <PWrapper>
        <p>outline</p>
        <RenderlessButton tag="outline">Wow</RenderlessButton>
      </PWrapper>
      <PWrapper>
        <p>styles override</p>
        <RenderlessButton
          class="bg-blue-200 font-thin border-green-200 text-red-900"
        >
          Wow
        </RenderlessButton>
      </PWrapper>
    </PBlock>
  </PMain>
</template>
