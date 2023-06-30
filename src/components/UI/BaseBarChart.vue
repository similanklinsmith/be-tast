<template>
  <div class="progress-container" :style="`background-color: ${bgColor}`">
    <div
      class="bar"
      :style="`background-color: ${colorBar}; width: ${percentValue}`"
    />
  </div>
</template>

<script>
export default {
  name: "BaseBarChart",
  props: {
    colorBar: {
      type: String,
    },
    percentValue: {
      type: String,
    },
    bgColor: {
      type: String,
      default: "#EDF1FC",
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-container {
  width: 100%;
  border-radius: 0.5rem;
  height: 0.8rem;
  min-height: 0.8rem;
  overflow: hidden;
  .bar {
    text-align: right;
    /* border-radius: 0.5rem; */
    height: 0.8rem;
    min-height: 0.8rem;
  }
}
</style>
