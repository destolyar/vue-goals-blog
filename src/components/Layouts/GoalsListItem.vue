<script lang="ts">
export default {
  props: {
    goal: {
      type: String,
      reqired: true
    },
    goalValue: {
      type: Number,
      required: true
    },
    currentValue: {
      type: Number,
      required: true
    }
  },
  methods: {
    calculatePercent() {
      return (this.currentValue / (this.goalValue / 100)).toFixed()
    }
  }
}
</script>

<template>
  <div :class=$style.container>
    <h4 :class=$style.title>{{ goal }}</h4>
    <div :style="{ '--bar-percent': `${calculatePercent()}%` }" :class=$style.barContainer>
      <div :class=$style.barValue>{{ currentValue }}</div>
    </div>
    <h5></h5>
  </div>
</template>

<style module lang="scss">
@import "../../assets/colors.scss";

:root {
  --bar-percent: 20%;
}

.title {
  margin-bottom: 10px;
}

.barContainer {
  position: relative;
  overflow: hidden;
  height: 30px;
  border-radius: 10px;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to left, $bar-gradient-colors);
  }

  ::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 9px;
    background-color: white;
  }
}

.barValue {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: var(--bar-percent);
  color: $bar-text-color;
  background-image: linear-gradient(to left, $bar-gradient-colors);
}
</style>