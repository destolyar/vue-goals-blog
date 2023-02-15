<script lang="ts">
export default {
  data() {
    return {
      email: ''
    }
  }, methods: {
    emailHandler(e: Event) {
      const target = (<HTMLInputElement>e.target)
      this.email = target.value
    },
  }
}
</script>

<template>
  <form class="form">
    <legend class="legend">Log in</legend>

    <label for="email">Email</label>
    <input id="email" class="email" @input="emailHandler" type="email" placeholder="Input your email" />

    <label for="password">Password</label>
    <input id="password" class="password" type="password" placeholder="Input your password" />

    <label for="repeat-password">Repeat your Password</label>
    <input id="repeat-password" class="repeat-password" type="password" placeholder="Input your repeated password" />

    <input class="submit" type="submit">
  </form>
</template>

<style scoped>
.legend {
  margin: 0 auto;
  font-size: 25px;
  margin-bottom: 30px;
}

.form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.email,
.password, .repeat-password {
  padding-left: 10px;
  margin-top: 10px;
  border: 1px solid var(--third-color);
  height: 35px;
  border-radius: 7.5px;
}

.email, .password {
  margin-bottom: 15px;
}

.submit {
  margin-top: 30px;
  height: 45px;
  border: 1px solid var(--primary-color);
  border-radius: 10px;
  transition: .2s;
  background-color: transparent;
}

.submit:hover {
  cursor: pointer;
  color: white;
  background-color: var(--primary-color);
}
</style>