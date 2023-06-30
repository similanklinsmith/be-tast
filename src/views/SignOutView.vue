<template>
  <div class="bg-black-light w-screen h-screen">
    <div class="content flex flex-col items-center justify-center h-full">
      <div class="thank-you font-bold text-white flex flex-col items-center">
        <span>🙏🏻</span>THANK YOU
      </div>
      <img src="@/assets/images/botnoi.png" alt="botnoi-logo" />
      <img src="@/assets/images/sponsored.png" alt="sponsors-logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SignOutView",
};
</script>

<style lang="scss" scoped>
.content {
  padding: 2.4rem 3.2rem;
  margin-left: 22.4rem;
  gap: 8rem;
  .thank-you {
    font-size: 4rem;
  }
}
</style>
