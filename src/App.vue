<script>
import PMain from './components/PMain.vue'
import PBlock from './components/PBlock.vue'
import PTitle from './components/PTitle.vue'
import SimpleButton from './components/SimpleButton.vue'
import PWrapper from './components/PWrapper.vue'
import DifferentButton from './components/DifferentButton'
import PLineBreak from './components/PLineBreak.vue'

export default {
  name: 'App',
  components: {
    PMain,
    SimpleButton,
    PWrapper,
    DifferentButton,
    PLineBreak,
    PBlock,
    PTitle,
  },
}
</script>

<template>
  <PMain>
    <PTitle>Light</PTitle>
    <PBlock>
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
    <PLineBreak />
    <PTitle>Dark</PTitle>
    <PBlock>
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
    <PLineBreak />
    <PTitle>Renderless</PTitle>
    <PBlock>
      <PWrapper>
        <DifferentButton app="admin">Wow</DifferentButton>
      </PWrapper>
      <PWrapper>
        <DifferentButton app="web">Wow</DifferentButton>
      </PWrapper>
    </PBlock>
    <PLineBreak />
    <PBlock>
      <PTitle>Something else..?</PTitle>
    </PBlock>
  </PMain>
</template>
