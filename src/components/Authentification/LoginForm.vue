<script lang="ts">
export default {
  data() {
    return {
      count: 0,
      email: ''
    }
  }, methods: {
    printValue(e: Event) {
      const target = (<HTMLInputElement>e.target)
      this.email = target.value
    },
  }
}
</script>

<script setup lang="ts">

</script>

<template>
  <form class="form">
    <input @input="printValue" value='email' type="email" />
    <input type="password" />
    <input type="submit">
  </form>
</template>

<style>
.form {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>