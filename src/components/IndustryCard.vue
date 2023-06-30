<template>
  <div class="base-layout-card bg-white shadow-3 hover:shadow-2 transition duration-300 ease-in-out">
    <div class="base-card-content flex flex-col">
      <div class="card-heading flex">
        <div class="ui-body-1-medium table-heading">{{ heading }}</div>
        <div class="ui-body-1-regular column-heading text-center">({{ unit }})</div>
      </div>
      <div class="card-rows">
        <div class="row flex items-center" v-for="row,index in data" :key="index">
          <div class="first-column ui-body-2-regular">{{ row.rowHeader }}</div>
          <div class="second-column text-grey flex">
            <div class="ui-body-2-regular raw-value text-center">{{ row.value }}</div>
            <div class="ui-body-2-regular percent-value text-right">{{ row.percent }}</div>
          </div>
          <div class="third-column">
            <BaseBarChart :colorBar="color" :percentValue="row.percent" />
          </div>
        </div>
      </div>
      <div class="flex flex-col" style="gap: 0.8rem">
        <BaseDivider />
        <div class="card-overall">
          <div class="row flex items-center">
            <div class="first-column ui-body-2-medium">Total</div>
            <div class="second-column flex">
              <div class="ui-body-2-regular raw-value text-center">
               {{ totalValue }}
              </div>
              <div class="ui-body-2-regular percent-value text-right">
                {{ totalPercent }}
              </div>
            </div>
            <div class="third-column ui-body-2-regular">{{ totalUnit }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDivider from "../components/UI/BaseDivider.vue";
import BaseBarChart from "../components/UI/BaseBarChart.vue";
export default {
    name: "IndustryCard",
    components: {
        BaseDivider,
        BaseBarChart
    },
    props: [
        "heading",
        "unit",
        "data",
        "color",
        "totalValue",
        "totalPercent",
        "totalUnit"
    ]
};
</script>

<style lang="scss" scoped>
.base-layout-card {
  border-radius: 1.6rem;
  padding: 1.6rem;
  .base-card-content {
    gap: 1.6rem;
    .card-heading {
      padding: 0 1.6rem;
      gap: 0.8rem;
      .table-heading {
        min-width: 11.5rem;
        width: 11.5rem;
      }
      .column-heading {
        min-width: 8rem;
        width: 8rem;
      }
    }
    .card-rows {
      padding: 0 1.6rem;
      .row {
        height: 3.2rem;
        gap: 0.8rem;
        .first-column {
          min-width: 11.5rem;
          width: 11.5rem;
        }
        .second-column {
          gap: 0.8rem;
          .raw-value {
            min-width: 8rem;
            width: 8rem;
          }
          .percent-value {
            min-width: 5.6rem;
            width: 5.6rem;
          }
        }
        .third-column {
          width: 100%;
        }
      }
    }
    .card-overall {
      padding: 0 1.6rem;
      .row {
        gap: 0.8rem;
        .first-column {
          min-width: 11.5rem;
          width: 11.5rem;
        }
        .second-column {
          gap: 0.8rem;
          .raw-value {
            min-width: 8rem;
            width: 8rem;
          }
          .percent-value {
            min-width: 5.6rem;
            width: 5.6rem;
          }
        }
        .third-column {
          width: 100%;
        }
      }
    }
  }
}
</style>
