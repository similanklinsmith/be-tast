<template>
  <div class="industry-container flex flex-col">
    <div class="flex flex-col content">
      <div class="second-row flex flex-col">
        <div class="heading-section flex items-center">
          <div class="ui-h4">🎉</div>
          <div class="ui-h4">Top 5</div>
          <div class="ui-h4-regular">New Customers</div>
        </div>
        <div
          class="new-customers-card w-full bg-white flex flex-col shadow-3 hover:shadow-2 transitoin duration-300 ease-in-out"
        >
          <div class="card-heading flex self-stretch w-full">
            <div class="ui-body-1-medium column-heading text-left industry">
              Industry
            </div>
            <div class="ui-body-1-medium column-heading text-center w-full">
              This Month (Cases)
            </div>
            <div class="ui-body-1-medium column-heading text-center w-full">
              Last Month (Cases)
            </div>
            <div class="ui-body-1-medium column-heading text-center w-full">
              Δ (Cases)
            </div>
          </div>
          <div class="card-rows flex flex-col">
            <div
              class="row flex items-center"
              v-for="(row, index) in customerMockup"
              :key="index"
            >
              <div class="ui-body-2-regular column-heading text-left first-col">
                {{ row.industry }}
              </div>
              <div
                class="ui-body-2-regular text-grey column-heading text-center w-full"
              >
                {{ row.thisMonth }}
              </div>
              <div
                class="ui-body-2-regular text-grey column-heading text-center w-full"
              >
                {{ row.lastMonth }}
              </div>
              <div
                class="ui-body-2-regular text-grey column-heading text-center w-full"
              >
                {{ row.cases }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="third-row flex flex-col">
        <div class="heading-section flex items-center">
          <div class="ui-h4">🏆</div>
          <div class="ui-h4">Top 5</div>
          <div class="ui-h4-regular">Revenue Ranking</div>
        </div>
        <div
          class="new-customers-card w-full bg-white flex flex-col shadow-3 hover:shadow-2 transitoin duration-300 ease-in-out"
        >
          <div class="card-heading flex self-stretch w-full">
            <div class="ui-body-1-medium column-heading text-left industry">
              Industry
            </div>
            <div class="ui-body-1-medium column-heading text-center w-full">
              This Month
            </div>
            <div class="ui-body-1-medium column-heading text-center w-full">
              Last Month
            </div>
            <div class="ui-body-1-medium column-heading text-center w-full">
              Δ (Ranking)
            </div>
          </div>
          <div class="card-rows flex flex-col">
            <div
              class="row flex items-center"
              v-for="(row, index) in revenueMockup"
              :key="index"
            >
              <div class="ui-body-2-regular column-heading text-left first-col">
                {{ row.industry }}
              </div>
              <div
                class="ui-body-2-regular text-grey column-heading text-center w-full"
              >
                {{ row.thisMonth }}
              </div>
              <div
                class="ui-body-2-regular text-grey column-heading text-center w-full"
              >
                {{ row.lastMonth }}
              </div>
              <div
                class="ui-body-2-regular text-grey column-heading text-center w-full"
              >
                {{ row.cases }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndustryView",
  data() {
    return {
      customerMockup: [
        {
          industry: "Entertainment",
          thisMonth: "4",
          lastMonth: "0",
          cases: "4",
        },
        {
          industry: "Advertising",
          thisMonth: "2",
          lastMonth: "1",
          cases: "1 (100%)",
        },
        {
          industry: "Food Service",
          thisMonth: "2",
          lastMonth: "8",
          cases: "-6 (-75%)",
        },
        {
          industry: "Energy",
          thisMonth: "1",
          lastMonth: "0",
          cases: "1",
        },
        {
          industry: "Beauty",
          thisMonth: "1",
          lastMonth: "7",
          cases: "-6 (-85.71%)",
        },
      ],
      revenueMockup: [
        {
          industry: "Beauty",
          thisMonth: "1",
          lastMonth: "3",
          cases: "⬆️ 2",
        },
        {
          industry: "Wholesale",
          thisMonth: "2",
          lastMonth: "2",
          cases: "⏸ -",
        },
        {
          industry: "Agriculture",
          thisMonth: "3",
          lastMonth: "1",
          cases: "⬇️ 2",
        },
        {
          industry: "Manufacturing",
          thisMonth: "4",
          lastMonth: "7",
          cases: "⬆️ 3",
        },
        {
          industry: "Construction",
          thisMonth: "5",
          lastMonth: "8",
          cases: "⬆️ 3",
        },
      ],
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.industry-container {
  padding: 2.4rem 3.2rem;
  margin-left: 22.4rem;
  gap: 2.4rem;
  .content {
    gap: 3.2rem;
    .second-row,
    .third-row {
      gap: 1.6rem;
      .heading-section {
        gap: 0.8rem;
      }
      .new-customers-card {
        border-radius: 1.6rem;
        padding: 1.6rem;
        gap: 0.8rem;
        .card-heading {
          padding: 0 1.6rem;
          gap: 0.8rem;
          .industry {
            width: 20rem;
            min-width: 20rem;
          }
        }
        .card-rows {
          padding: 0 1.6rem;
          .row {
            height: 3.2rem;
            gap: 0.8rem;
            .first-col {
              width: 20rem;
              min-width: 20rem;
            }
          }
        }
      }
    }
  }
}
</style>
