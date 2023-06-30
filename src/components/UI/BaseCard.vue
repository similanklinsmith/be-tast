<template>
  <div class="card bg-white shadow-3 hover:shadow-2 transition duration-300 ease-in-out">
    <div class="heading-value flex justify-between w-full">
      <div class="card-leading">
        <div class="ui-h4">{{ icon }}</div>
        <div class="ui-h4">{{ heading }}</div>
      </div>
      <div class="ui-h4">
        <div
          class="cursor-pointer button-comp bg-grey-light flex items-center justify-center hover:bg-blue-light hover:text-blue transition duration-300 ease-in-out"
        >
          <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </div>
      </div>
    </div>
    <div class="content-value flex justify-between w-full items-center">
      <div
        class="drop-down w-fit ui-body-2-medium bg-grey-light cursor-pointer hover:text-blue hover:bg-blue-light transition duration-300 ease-in-out"
      >
        {{ mockupMonth }}
        <font-awesome-icon icon="fa-solid fa-angle-down" />
      </div>
      <div class="value flex">
        <div class="highlight ui-h2" :style="`color: ${color}`">
          {{ value }}
        </div>
        <div class="currency ui-body-2-medium flex items-end self-stretch">
          {{ unit }}
        </div>
      </div>
    </div>
    <div class="bar-chart flex flex-col w-full">
      <BaseBarChart :colorBar="color" :percentValue="percent" />
      <div class="bar-values flex justify-between w-full">
        <div class="leading ui-caption">{{ leadingBar }}</div>
        <div class="value ui-caption text-grey">{{ barValue }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBarChart from "./BaseBarChart.vue";
export default {
  name: "BaseCard",
  components: { BaseBarChart },
  props: [
    "icon",
    "heading",
    "mockupMonth",
    "value",
    "unit",
    "leadingBar",
    "barValue",
    "color",
    "percent",
  ],
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 1.6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  flex: 1 0 0;
  border-radius: 1.6rem;
  .heading-value {
    .card-leading {
      display: flex;
      gap: 0.9rem;
    }
    .button-comp {
      height: 3.2rem;
      width: 3.2rem;
      border-radius: 50%;
    }
  }
  .content-value {
    .drop-down {
      display: flex;
      padding: 0.6rem 1.6rem;
      align-items: center;
      gap: 0.8rem;
      border-radius: 3.2rem;
      height: fit-content;
    }
    .value {
      gap: 0.8rem;
      .currency {
        padding: 0.8rem 0px;
        gap: 0.8rem;
      }
    }
  }
  .bar-chart {
    gap: 0.8rem;
  }
}
</style>
