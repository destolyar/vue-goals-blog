<script setup lang="ts">
import LogoIconSVG from './svg/LogoIconSVG.vue'
</script>

<template>
  <figure :class=$style.container>
    <LogoIconSVG />
    <section :class=$style.logoText>
      <span :class=$style.title>DreamChaser Blog</span>
      <p :class=$style.subtitle>Empower Your Dreams, Embrace Your Journey</p>
    </section>
  </figure>
</template>

<style module lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Khula:wght@600;800&display=swap');
@import '../../assets/colors.scss';
@import '../../assets/breakpoints.scss';

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logoText {
  padding-top: 5px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $logo-text-color;
  margin-left: 5px;
}

.title {
  font-family: 'Khula', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;

  @include tablets {
    font-size: 1rem;
  }
}

.subtitle {
  font-family: 'Khula', sans-serif;
  font-size: 1rem;
  font-weight: 600;

  @include tablets {
    display: none;
  }
}
</style>