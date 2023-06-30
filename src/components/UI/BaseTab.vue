<template>
  <div
    class="tab ui-body-1-medium hover:text-blue hover:bg-blue-light transition duration-300 ease-in-out"
    @click="tabAction"
  >
    <slot name="icon"></slot>{{ tabText }}
  </div>
</template>

<script>
export default {
  name: "BaseTab",
  props: {
    tabText: { type: String },
  },
  methods: {
    tabAction() {
      this.$emit("tabAction");
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  height: 4.8rem;
  padding: 1.2rem 1.6rem;
  align-items: center;
  gap: 1.2rem;
  align-self: stretch;
  border-radius: 0.8rem;
  cursor: pointer;
}
</style>
