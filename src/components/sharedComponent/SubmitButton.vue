<template>
  <input :class=$style.submit type="submit">
</template>

<style module lang="scss">
@import "../../assets/colors.scss";
.submit {
  margin-top: 20px;
  height: 45px;
  border: 1px solid $primary-color;
  border-radius: 10px;
  transition: .2s;
  background-color: transparent;
}

.submit:hover {
  cursor: pointer;
  color: white;
  background-color: $primary-color;
}
</style>
