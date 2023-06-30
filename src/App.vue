<template>
  <div>
    <SplashView />
    <div id="app">
      <div
        v-if="$route.name != 'chatbot-view'"
        class="chat-bot cursor-pointer bg-blue shadow-1 hover:shadow-4 hover:scale-110 hover:-translate-y-4 transition duration-300 ease-in-out"
        @click="$router.push({ path: `/chatbot` })"
      >
        <BaseIcon
          class="text-white"
          :width="'32'"
          :height="'33'"
          :iconStyle="'M8.66667 20.5225H23.3333V19.1891H8.66667V20.5225ZM8.66667 16.5225H23.3333V15.1891H8.66667V16.5225ZM8.66667 12.5225H23.3333V11.1891H8.66667V12.5225ZM28 29.2917L23.8974 25.1891H6.15383C5.54017 25.1891 5.02778 24.9836 4.61667 24.5725C4.20556 24.1614 4 23.649 4 23.0353V8.67629C4 8.06263 4.20556 7.55024 4.61667 7.13913C5.02778 6.72802 5.54017 6.52246 6.15383 6.52246H25.8462C26.4598 6.52246 26.9722 6.72802 27.3833 7.13913C27.7944 7.55024 28 8.06263 28 8.67629V29.2917ZM24.4667 23.8558L26.6667 26.0481V8.67629C26.6667 8.47118 26.5812 8.28315 26.4103 8.11219C26.2393 7.94126 26.0513 7.85579 25.8462 7.85579H6.15383C5.94872 7.85579 5.76069 7.94126 5.58973 8.11219C5.4188 8.28315 5.33333 8.47118 5.33333 8.67629V23.0353C5.33333 23.2404 5.4188 23.4284 5.58973 23.5994C5.76069 23.7703 5.94872 23.8558 6.15383 23.8558H24.4667Z'"
        />
      </div>
      <BaseSideBar :isChatbot="$route.name == 'chatbot-view'"/>
      <div class="content">
        <transition name="route">
          <div
            class="header-section flex flex-col"
            v-if="
              $route.name != 'chatbot-view' && $route.name != 'signout-view'
            "
          >
            <div class="ui-h2">{{ displayHeader }}</div>
            <div class="first-row grid grid-cols-3">
              <BaseCard
                :icon="'💰'"
                :heading="'Revenue'"
                :mockupMonth="'July 2023'"
                :value="'8,596,463'"
                :unit="'THB'"
                :leadingBar="'57.31% of Monthly Goal'"
                :barValue="'15,000,000'"
                :color="'#34B53A'"
                :percent="'63%'"
              />
              <BaseCard
                :icon="'🔵'"
                :heading="'Number of Active Cases'"
                :mockupMonth="'July 2023'"
                :value="'65'"
                :unit="'Cases'"
                :leadingBar="'65% of Cases'"
                :barValue="'100'"
                :color="'#55BBF4'"
                :percent="'65%'"
              />
              <BaseCard
                :icon="'🔴'"
                :heading="'Number of NPL Cases'"
                :mockupMonth="'July 2023'"
                :value="'35'"
                :unit="'Cases'"
                :leadingBar="'35% of Cases'"
                :barValue="'100'"
                :color="'#F53D7A'"
                :percent="'35%'"
              />
            </div>
          </div>
        </transition>
        <router-view v-slot="{ Component }">
          <transition name="route" appear>
            <component :is="Component" :key="$route.path"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCard from "./components/UI/BaseCard.vue";
import BaseSideBar from "./components/UI/BaseSideBar.vue";
import BaseIcon from "./components/Icons/BaseIcon.vue";
import SplashView from "./views/SplashView.vue";

export default {
  name: "App",
  components: {
    BaseCard,
    BaseSideBar,
    SplashView,
    BaseIcon,
  },
  computed: {
    displayHeader() {
      switch (this.$route.name) {
        case "overview-view":
          return "Overview";
        case "industry-view":
          return "Industry";
        case "campaign-view":
          return "Campaign";
        default:
          return "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-bot {
  position: fixed;
  display: flex;
  width: 5.6rem;
  height: 5.6rem;
  padding: 0.5rem 1.1rem;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 1.6rem;
  bottom: 1.6rem;
  border-radius: 4rem;
  z-index: 10;
}
.content {
  transition: 0.3s all ease-in-out;
  .header-section {
    padding: 2.4rem 3.2rem 0 3.2rem;
    margin-left: 22.4rem;
    gap: 2.4rem;
    .first-row {
      gap: 1.6rem;
    }
  }
}
</style>
