<template>
  <div class="l0k-swap-app-logo" @click="onLogoClick">
    <img class="logo" src="./logo.svg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const onLogoClick = () => {
      window.location.href = 'https://a51.finance'
    }

    return { onLogoClick }
  },
})
</script>

<style lang="scss" scoped>
@import '../../styles/index.scss';

.l0k-swap-app-logo {
  flex: 1;
  cursor: pointer;

  .logo {
    display: inline-block;
    width: 105px;
    height: 40px;
  }
  .alpha {
    display: inline-block;
    width: 45px;
    height: 16px;
    margin-left: 6px;
  }
}
</style>
