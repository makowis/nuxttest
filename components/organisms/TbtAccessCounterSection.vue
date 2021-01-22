<template>
  <tbt-section>
    <tbt-h-2>アクセスカウンター</tbt-h-2>
    <p>あなたは{{ access }}人目の訪問者です。</p>
    <p>現在の累計訪問者数は{{ realtime }}人です。</p>
  </tbt-section>
</template>

<script lang="ts">
export default {
  props: ['access', 'realtime'],
}
</script>
