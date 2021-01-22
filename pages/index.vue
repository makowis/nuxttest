<template>
  <div class="Top">
    <tbt-h-1><tbt-blink>定時後ビールタイム公式サイト</tbt-blink></tbt-h-1>
    <p>
      <tbt-blink>🎉🎉🎉🎉🎉🎉🎉M3-2020春参戦決定！🎉🎉🎉🎉🎉🎉</tbt-blink>
    </p>
    <tbt-marquee>
      M3-2020春に参戦！パワーアップしたサウンドをお届けします！
    </tbt-marquee>
    <tbt-access-counter-section v-bind="counter" />
    <tbt-news-section />
    <tbt-circle-cut-section />
    <tbt-circle-space-infoSection />
    <tbt-mail-section />
    <tbt-menu-section />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      counter: { access: 0, realtime: 0 }
    }
  }
}
</script>