<template>
  <div
    class="pop-up flex flex-col items-center justify-center bg-white"
    v-if="!isLoaded"
  >
    <div class="flex flex-col items-center justify-center loading">
      <div class="image-logo spinner">
        <img src="@/assets/images/logo/Logo_only.png" alt="logo" />
      </div>
      <!-- <div class="image">
        <Vue3Lottie
          animationLink="https://lottie.host/eefcdbcf-5c74-4ba0-9c01-36dd7737e935/valFasXcQL.json"
          :speed="0.5"
          class="lottie"
        />
      </div> -->
      <div class="ui-h4">Please wait...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SplashView",
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoaded = true;
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.pop-up {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 12;
  padding: 2.4rem 1.6rem;
  .loading {
    gap: 3.2rem;
    animation-name: floating;
    -webkit-animation-name: floating;
    animation-duration: 2.4s;
    -webkit-animation-duration: 2.4s;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
  }
  .image {
    width: 10rem;
    height: 10rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .image-logo {
    width: 3.6rem;
    height: 3.6rem;
  }
}
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: spin;
  -webkit-animation-name: spin;
  animation-duration: 2.4s;
  -webkit-animation-duration: 2.4s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes floating {
  0% {
    transform: translateY(0%);
  }

  50% {
    transform: translateY(8%);
  }

  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes floating {
  0% {
    -webkit-transform: translateY(0%);
  }

  50% {
    -webkit-transform: translateY(8%);
  }

  100% {
    -webkit-transform: translateY(0%);
  }
}
</style>
