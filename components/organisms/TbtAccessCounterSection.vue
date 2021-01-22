<template>
  <tbt-section>
    <tbt-h2>アクセスカウンター</tbt-h2>
    <p>あなたは{{ access }}人目の訪問者です。</p>
    <p>現在の累計訪問者数は{{ realtime }}人です。</p>
    <small>
      <router-link to="/bbs">キリ番報告はこちらで！！！</router-link>
    </small>
  </tbt-section>
</template>

<script lang="ts">
export default { 
  props: ['access', 'realtime']
}
</script>