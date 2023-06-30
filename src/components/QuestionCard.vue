<template>
  <div
    @click="questionAction"
    class="question-card ui-body-1-medium bg-white text-grey cursor-pointer hover:text-blue-botnoi hover:shadow-4 hover:-translate-y-1 transition duration-300 ease-in-out"
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  props: ["text"],
  methods: {
    questionAction() {
      this.$emit("questionAction", this.text);
    },
  },
};
</script>

<style lang="scss" scoped>
.question-card {
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  min-width: 40rem;
  width: 40rem;
}
</style>
