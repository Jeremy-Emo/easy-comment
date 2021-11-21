<template>
  <div class="copyButton">
    <input id="toCopy" type="hidden" :value="comment">
    <button @click="copyToClipboard">Copier</button>
  </div>
</template>

<script>
export default {
  name: "CopyButton",
  props: ['comment'],
  methods: {
    copyToClipboard() {
      let toCopy = document.querySelector('#toCopy');
      toCopy.setAttribute('type', 'text')
      toCopy.select();
      document.execCommand('copy');
      toCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    }
  }
}
</script>

<style scoped lang="scss">
  button {
    background: burlywood;
    color: black;
    padding: 5px 15px;

    &:hover {
      background: chocolate;
    }
  }

  .copyButton {
    display: inline-block;
  }
</style>
