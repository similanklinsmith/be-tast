<template>
  <div class="industry-container flex flex-col">
    <div class="flex flex-col content">
      <div
        class="campaign-card w-full bg-white shadow-3 hover:shadow-2 transition duration-300 ease-in-out"
      >
        <div class="card-content flex flex-col">
          <div class="card-heading flex">
            <div class="ui-body-1-medium table-heading">
              Top 5 Marketing Campaigns
            </div>
            <div class="ui-body-1-regular column-heading text-center">
              Total (Cases)
            </div>
            <div class="ui-body-1-regular column-heading text-center text-red">
              NPL (Cases)
            </div>
            <div class="digit-1 w-full" />
            <div class="digit-2" />
            <div
              class="ui-body-1-regular column-heading text-center text-blue-botnoi"
            >
              Active (Cases)
            </div>
          </div>
          <div class="total flex flex-col">
            <BaseDivider />
            <div class="card-heading flex">
              <div class="ui-body-2-medium table-heading">Total</div>
              <div class="ui-body-2-medium column-heading text-center">74</div>
              <div class="ui-body-2-medium column-heading text-center">26</div>
              <div class="digit-1 w-full" />
              <div class="digit-2" />
              <div class="ui-body-2-medium column-heading text-center">48</div>
            </div>
            <BaseDivider />
          </div>
          <div class="container-data flex flex-col">
            <div
              class="row-container flex flex-col bg-grey-light"
              v-for="(row, index) in marketingMockup"
              :key="index"
            >
              <div class="row flex items-center">
                <div class="first-column ui-body-2-regular">
                  {{ row.header }}
                </div>
                <div class="second-column text-grey flex">
                  <div class="ui-body-2-regular raw-value text-center">
                    {{ row.totalCase }}
                  </div>
                  <div class="ui-body-2-regular raw-value text-center text-red">
                    {{ row.nplCase }}
                  </div>
                </div>
                <div class="flex bar-chart w-full items-center">
                  <div
                    class="percent-value text-grey text-right ui-body-2-regular"
                  >
                    {{ row.nplPercent }}
                  </div>
                  <BaseBarChart
                    :colorBar="'#FBB6CD'"
                    :percentValue="row.nplPercent"
                    :bgColor="'#B7E2FA'"
                    class="outline outline-offset-0 outline-4 outline-blue-light"
                  />
                  <div
                    class="percent-value text-grey text-left ui-body-2-regular"
                  >
                    {{ row.activePercent }}
                  </div>
                </div>
                <div class="second-column text-grey flex">
                  <div class="flex ui-body-2-regular">
                    <div class="raw-value text-center text-blue-botnoi">
                      {{ row.activeCase }}
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="row flex items-center"
                v-for="(data, index) in row.subList"
                :key="index"
              >
                <div class="first-column ui-body-2-regular">
                  <span class="px-4">•</span>{{ data.rowHeader }}
                </div>
                <div class="second-column text-grey flex">
                  <div class="ui-body-2-regular raw-value text-center">
                    {{ data.totalCase }}
                  </div>
                  <div class="ui-body-2-regular raw-value text-center text-red">
                    {{ data.nplCase }}
                  </div>
                </div>
                <div class="flex bar-chart w-full items-center">
                  <div
                    class="percent-value text-grey text-right ui-body-2-regular"
                  >
                    {{ data.nplPercent }}
                  </div>
                  <BaseBarChart
                    :colorBar="'#F53D7A'"
                    :percentValue="data.nplPercent"
                    :bgColor="'#55BBF4'"
                  />
                  <div
                    class="percent-value text-grey text-left ui-body-2-regular"
                  >
                    {{ data.activePercent }}
                  </div>
                </div>
                <div class="second-column text-grey flex">
                  <div class="flex ui-body-2-regular">
                    <div class="raw-value text-center text-blue-botnoi">
                      {{ data.activeCase }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  name: "CampaignView",
  components: {
    BaseDivider,
    BaseBarChart,
  },
  data() {
    return {
      marketingMockup: [
        {
          header: "ดอกเบี้ย 1.4% วงเงินสูงสุด 20 ล้านบาท ผ่อนนานสูงสุด 30 ปี",
          totalCase: "17",
          nplCase: "5",
          nplPercent: "29.41%",
          activeCase: "12",
          activePercent: "70.59%",
          subList: [
            {
              rowHeader: "Beauty",
              totalCase: "7",
              nplCase: "1",
              nplPercent: "14.29%",
              activeCase: "6",
              activePercent: "85.71%",
            },
            {
              rowHeader: "Manufacturing",
              totalCase: "7",
              nplCase: "3",
              nplPercent: "42.86%",
              activeCase: "4",
              activePercent: "57.14%",
            },
            {
              rowHeader: "Wholesale",
              totalCase: "3",
              nplCase: "1",
              nplPercent: "33.33%",
              activeCase: "2",
              activePercent: "66.67%",
            },
          ],
        },
        {
          header: "ดอกเบี้ย 1.75% วงเงินสูงสุด 10 ล้านบาท ผ่อนนานสูงสุด 10 ปี",
          totalCase: "15",
          nplCase: "6",
          nplPercent: "40.00%",
          activeCase: "9",
          activePercent: "60.00%",
          subList: [
            {
              rowHeader: "Agriculture",
              totalCase: "5",
              nplCase: "0",
              nplPercent: "0.00%",
              activeCase: "5",
              activePercent: "100.00%",
            },
            {
              rowHeader: "Beauty",
              totalCase: "5",
              nplCase: "1",
              nplPercent: "20.00%",
              activeCase: "4",
              activePercent: "80.00%",
            },
            {
              rowHeader: "Manufacturing",
              totalCase: "5",
              nplCase: "5",
              nplPercent: "100.00%",
              activeCase: "0",
              activePercent: "00.00%",
            },
          ],
        },
        {
          header: "ดอกเบี้ย 2% ผ่อนนานสูงสุด 7 ปี",
          totalCase: "18",
          nplCase: "3",
          nplPercent: "16.67%",
          activeCase: "15",
          activePercent: "83.33%",
          subList: [
            {
              rowHeader: "Beauty",
              totalCase: "7",
              nplCase: "0",
              nplPercent: "0.00%",
              activeCase: "7",
              activePercent: "100.00%",
            },
            {
              rowHeader: "Wholesale",
              totalCase: "7",
              nplCase: "1",
              nplPercent: "14.29%",
              activeCase: "6",
              activePercent: "85.17%",
            },
            {
              rowHeader: "Food Service",
              totalCase: "4",
              nplCase: "2",
              nplPercent: "50.00%",
              activeCase: "2",
              activePercent: "50.00%",
            },
          ],
        },
        {
          header: "ดอกเบี้ย 0.5% วงเงินสูงสุด 50 ล้านบาท ผ่อนนานสูงสุด 30 ปี",
          totalCase: "12",
          nplCase: "4",
          nplPercent: "33.33%",
          activeCase: "8",
          activePercent: "66.67%",
          subList: [
            {
              rowHeader: "Agriculture",
              totalCase: "6",
              nplCase: "3",
              nplPercent: "50.00%",
              activeCase: "3",
              activePercent: "50.00%",
            },
            {
              rowHeader: "Food Service",
              totalCase: "4",
              nplCase: "1",
              nplPercent: "25.00%",
              activeCase: "3",
              activePercent: "75.00%",
            },
            {
              rowHeader: "Construction",
              totalCase: "2",
              nplCase: "0",
              nplPercent: "0.00%",
              activeCase: "2",
              activePercent: "100.00%",
            },
          ],
        },
        {
          header: "ดอกเบี้ย 4.75% วงเงินสูงสุด 20 ล้านบาท ผ่อนนานสูงสุด 15 ปี",
          totalCase: "12",
          nplCase: "8",
          nplPercent: "66.67%",
          activeCase: "4",
          activePercent: "33.33%",
          subList: [
            {
              rowHeader: "Food Service",
              totalCase: "5",
              nplCase: "5",
              nplPercent: "100.00%",
              activeCase: "0",
              activePercent: "0.00%",
            },
            {
              rowHeader: "Wholesale",
              totalCase: "4",
              nplCase: "2",
              nplPercent: "50.00%",
              activeCase: "2",
              activePercent: "50.00%",
            },
            {
              rowHeader: "Advertising",
              totalCase: "3",
              nplCase: "1",
              nplPercent: "33.33%",
              activeCase: "1",
              activePercent: "66.67%",
            },
          ],
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
.industry-container{
  padding: 2.4rem 3.2rem;
  margin-left: 22.4rem;
  gap: 2.4rem;
  .content {
    gap: 3.2rem;
    .campaign-card {
      padding: 1.6rem;
      border-radius: 1.6rem;
      .card-content {
        gap: 1.6rem;
        .card-heading {
          padding: 0 1.6rem;
          gap: 0.8rem;
          .table-heading {
            min-width: 36rem;
            width: 36rem;
          }
          .column-heading {
            min-width: 8rem;
            width: 8rem;
          }
          .digit-2 {
            min-width: 5.6rem;
            width: 5.6rem;
          }
        }
        .total {
          gap: 0.8rem;
        }
        .container-data {
          gap: 0.8rem;
          .row-container {
            padding: 2.4rem 1.6rem;
            border-radius: 1.6rem;
            .row {
              height: 3.2rem;
              gap: 0.8rem;
              .first-column {
                min-width: 36rem;
                width: 36rem;
              }
              .second-column {
                gap: 0.8rem;
                .raw-value {
                  min-width: 8rem;
                  width: 8rem;
                }
              }
              .bar-chart {
                gap: 0.8rem;
                .percent-value {
                  min-width: 5.6rem;
                  width: 5.6rem;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
