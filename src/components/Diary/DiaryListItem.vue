<script lang="ts">
import { Timestamp } from '@firebase/firestore';

export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    timestamp: {
      required: true,
      type: Timestamp,
    },
    text: {
      required: true,
      type: String,
    },
    id: {
      required: true,
      type: String
    }
  },
  methods: {
    formatDate(timestamp: Timestamp) {
      const date = timestamp.toDate()
      return `${date.getHours()}:${date.getMinutes()} ${date.getUTCDate()}.${date.getMonth()}.${date.getFullYear()}`
    },
    handleClick(id: string) {
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<template>
  <div @click="handleClick(id)" :class=$style.itemContainer>
    <h2 :class=$style.itemTitle>{{ title }}</h2>
    <h3 :class=$style.itemDate>{{ formatDate(timestamp) }}</h3>
    <p :class=$style.itemText>{{ text }}</p>
  </div>
</template>

<style module lang="scss">
@import "../../assets/colors.scss";
.itemContainer {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid $primary-border;

  &:hover {
    cursor: pointer;
    transform: scale(1.005);
  }
}

.itemTitle {
  line-height: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.itemDate {
  margin-bottom: 20px;
}

.itemText {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>