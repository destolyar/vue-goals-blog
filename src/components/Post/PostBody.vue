<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },

  methods: {
    getParagraphs() {
      return this.text.split('\n').filter(paragraph => paragraph.length);
    }
  }
}
</script>

<template>
  <section :class=$style.container>
    <h1 :class=$style.title>{{ title }}</h1>
    <h2 :class=$style.date>{{ date }}</h2>
    <p :class=$style.paragraph v-for="paragraph in getParagraphs()">{{ paragraph }}</p>
  </section>
</template>

<style module lang="scss">
@import "../../assets/breakpoints.scss";
@import "../../assets/colors.scss";

.container {
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
}

.title {
  font-size: 2rem;
  margin-bottom: 5px;

  @include tablets {
    font-size: 1.5rem;
  }
}

.date {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: $third-text-color;

  @include tablets {
    font-size: 1.2rem;
  }
}

.paragraph {
  font-size: 1.2rem;
  margin-bottom: 20px;
  word-break: break-word;
}
</style>