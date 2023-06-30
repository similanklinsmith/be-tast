<template>
  <div class="overview-container flex flex-col">
    <div class="flex flex-col content">
      <div class="second-row flex flex-col">
        <div class="heading-section flex items-center">
          <div
            class="icon-container flex items-center justify-center bg-blue-botnoi rounded-full"
          >
            <BaseIcon
              class="text-white"
              :iconStyle="'M20.7655 11.4955V19.4647C20.7655 19.9699 20.5905 20.3974 20.2405 20.7474C19.8905 21.0974 19.4629 21.2724 18.9578 21.2724H5.07316C4.56804 21.2724 4.14048 21.0974 3.79048 20.7474C3.44048 20.3974 3.26548 19.9699 3.26548 19.4647V11.4763C2.86291 11.1455 2.56066 10.7163 2.35873 10.1888C2.15681 9.66122 2.15265 9.09167 2.34623 8.48014L3.35778 5.17629C3.49111 4.75579 3.7174 4.41669 4.03663 4.15899C4.35586 3.9013 4.73727 3.77246 5.18086 3.77246H18.8308C19.2744 3.77246 19.6533 3.89554 19.9674 4.14169C20.2815 4.38784 20.5103 4.7263 20.6539 5.15706L21.6847 8.48014C21.8783 9.09167 21.8741 9.65929 21.6722 10.183C21.4703 10.7067 21.168 11.1442 20.7655 11.4955ZM14.2155 10.7725C14.7616 10.7725 15.1722 10.6055 15.4472 10.2715C15.7222 9.93752 15.8347 9.57887 15.7847 9.19554L15.177 5.27241H12.7655V9.22244C12.7655 9.64295 12.9078 10.0064 13.1924 10.3128C13.477 10.6193 13.818 10.7725 14.2155 10.7725ZM9.71546 10.7725C10.1757 10.7725 10.5491 10.6193 10.8357 10.3128C11.1222 10.0064 11.2655 9.64295 11.2655 9.22244V5.27241H8.85391L8.2462 9.23399C8.19237 9.58912 8.30391 9.93431 8.58083 10.2696C8.85776 10.6048 9.23597 10.7725 9.71546 10.7725ZM5.26546 10.7725C5.63597 10.7725 5.95457 10.6433 6.22125 10.385C6.48792 10.1266 6.65266 9.80193 6.71548 9.41091L7.30395 5.27241H5.18086C5.07187 5.27241 4.98533 5.29645 4.92123 5.34454C4.85711 5.39262 4.80903 5.46475 4.77698 5.56091L3.81546 8.81474C3.68339 9.24424 3.74556 9.6779 4.00198 10.1157C4.2584 10.5535 4.67955 10.7725 5.26546 10.7725ZM18.7655 10.7725C19.3065 10.7725 19.7206 10.56 20.0078 10.135C20.295 9.70994 20.3642 9.26987 20.2155 8.81474L19.204 5.54166C19.1719 5.44551 19.1238 5.3766 19.0597 5.33491C18.9956 5.29325 18.9091 5.27241 18.8001 5.27241H16.727L17.3155 9.41091C17.3783 9.80193 17.543 10.1266 17.8097 10.385C18.0763 10.6433 18.3949 10.7725 18.7655 10.7725ZM5.07316 19.7725H18.9578C19.0475 19.7725 19.1212 19.7436 19.1789 19.6859C19.2366 19.6282 19.2655 19.5545 19.2655 19.4647V12.184C19.1565 12.2237 19.0655 12.2484 18.9924 12.258C18.9193 12.2676 18.8437 12.2724 18.7655 12.2724C18.3155 12.2724 17.9196 12.191 17.578 12.0282C17.2363 11.8654 16.9052 11.6045 16.5847 11.2455C16.3039 11.5583 15.9719 11.8077 15.5886 11.9936C15.2052 12.1795 14.768 12.2724 14.277 12.2724C13.8526 12.2724 13.4526 12.1843 13.077 12.008C12.7014 11.8317 12.3475 11.5775 12.0155 11.2455C11.7065 11.5775 11.3565 11.8317 10.9655 12.008C10.5744 12.1843 10.1783 12.2724 9.77701 12.2724C9.32572 12.2724 8.90265 12.1907 8.50778 12.0272C8.1129 11.8638 7.76545 11.6032 7.46545 11.2455C7.04494 11.666 6.65744 11.9423 6.30296 12.0743C5.94847 12.2064 5.60264 12.2724 5.26546 12.2724C5.18726 12.2724 5.10649 12.2676 5.02315 12.258C4.9398 12.2484 4.85391 12.2237 4.76546 12.184V19.4647C4.76546 19.5545 4.7943 19.6282 4.85198 19.6859C4.90968 19.7436 4.98341 19.7725 5.07316 19.7725Z'"
            />
          </div>
          <div class="ui-h4-regular">Industry</div>
        </div>
        <div class="container-second-row grid grid-cols-2">
          <IndustryCard
            :heading="'Top 5 Revenue'"
            :unit="'THB'"
            :data="revenueMockup"
            :color="'#34B53A'"
            :totalValue="'7,167,597'"
            :totalPercent="'83.38%'"
            :totalUnit="'(Top 5/Total Rev)'"
          />
          <IndustryCard
            :heading="'Top 5 NPL'"
            :unit="'Cases'"
            :data="NPLMockup"
            :color="'#F53D7A'"
            :totalValue="'33'"
          />
        </div>
      </div>
      <div class="third-row flex flex-col">
        <div class="heading-section flex items-center">
          <div
            class="icon-container flex items-center justify-center bg-blue-botnoi rounded-full"
          >
            <BaseIcon
              class="text-white"
              :iconStyle="'M15.8268 13.2721V11.7722H19.4422V13.2721H15.8268ZM16.9691 20.0029L14.0768 17.8337L14.9883 16.6375L17.8806 18.8067L16.9691 20.0029ZM14.9499 8.36828L14.0384 7.17215L16.9306 5.00293L17.8422 6.19906L14.9499 8.36828ZM3.55762 15.0221V10.0222H7.26914L11.5575 5.73376V19.3105L7.26914 15.0221H3.55762ZM10.0576 9.37213L7.90759 11.5221H5.05759V13.5221H7.90759L10.0576 15.6721V9.37213Z'"
            />
          </div>
          <div class="ui-h4-regular">Campaign</div>
        </div>
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
              <div
                class="ui-body-1-regular column-heading text-center text-red"
              >
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
                <div class="ui-body-2-medium column-heading text-center">
                  70
                </div>
                <div class="ui-body-2-medium column-heading text-center">
                  15
                </div>
                <div class="digit-1 w-full" />
                <div class="digit-2" />
                <div class="ui-body-2-medium column-heading text-center">
                  55
                </div>
              </div>
              <BaseDivider />
            </div>
            <div class="card-rows">
              <div
                class="row flex items-center"
                v-for="(row, index) in campaignMockup"
                :key="index"
              >
                <div class="first-column ui-body-2-regular">
                  {{ row.rowHeader }}
                </div>
                <div class="second-column text-grey flex">
                  <div class="ui-body-2-regular raw-value text-center">
                    {{ row.caseValue }}
                  </div>
                  <div class="ui-body-2-regular raw-value text-center text-red">
                    {{ row.nplValue }}
                  </div>
                </div>
                <div class="flex bar-chart w-full items-center">
                  <div
                    class="percent-value text-grey text-right ui-body-2-regular"
                  >
                    {{ row.nplPercent }}
                  </div>
                  <BaseBarChart
                    :colorBar="'#F53D7A'"
                    :percentValue="row.nplPercent"
                    :bgColor="'#55BBF4'"
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
                      {{ row.activeValue }}
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
import BaseIcon from "../components/Icons/BaseIcon.vue";
import IndustryCard from "../components/IndustryCard.vue";
import BaseDivider from "../components/UI/BaseDivider.vue";
import BaseBarChart from "../components/UI/BaseBarChart.vue";
export default {
  name: "OverviewView",
  components: {
    BaseIcon,
    IndustryCard,
    BaseDivider,
    BaseBarChart,
  },
  data() {
    return {
      revenueMockup: [
        {
          rowHeader: "Beauty",
          value: "3,135,978",
          percent: "36.48%",
        },
        {
          rowHeader: "WholeSale",
          value: "1,805,791",
          percent: "20.01%",
        },
        {
          rowHeader: "Agriculture",
          value: "1,193,878",
          percent: "13.89%",
        },
        {
          rowHeader: "Manufacturing",
          value: "709,339",
          percent: "8.25%",
        },
        {
          rowHeader: "Construction",
          value: "322,611",
          percent: "3.75%",
        },
      ],
      NPLMockup: [
        {
          rowHeader: "Manufacturing",
          value: "9",
          percent: "25.71%",
        },
        {
          rowHeader: "Food Service",
          value: "8",
          percent: "22.86%",
        },
        {
          rowHeader: "WholeSale",
          value: "7",
          percent: "20%",
        },
        {
          rowHeader: "Beauty",
          value: "5",
          percent: "14.29%",
        },
        {
          rowHeader: "Agriculture",
          value: "4",
          percent: "11.43%",
        },
      ],
      campaignMockup: [
        {
          rowHeader:
            "ดอกเบี้ย 1.4% วงเงินสูงสุด 20 ล้านบาท ผ่อนนานสูงสุด 30 ปี",
          caseValue: "20",
          nplValue: "5",
          nplPercent: "25.00%",
          activeValue: "15",
          activePercent: "75.00%",
        },
        {
          rowHeader:
            "ดอกเบี้ย 1.75% วงเงินสูงสุด 10 ล้านบาท ผ่อนนานสูงสุด 10 ปี",
          caseValue: "19",
          nplValue: "7",
          nplPercent: "36.84%",
          activeValue: "12",
          activePercent: "63.16%",
        },
        {
          rowHeader: "ดอกเบี้ย 2% ผ่อนนานสูงสุด 7 ปี",
          caseValue: "18",
          nplValue: "3",
          nplPercent: "16.67%",
          activeValue: "15",
          activePercent: "83.33%",
        },
        {
          rowHeader:
            "ดอกเบี้ย 0.5% วงเงินสูงสุด 50 ล้านบาท ผ่อนนานสูงสุด 30 ปี",
          caseValue: "17",
          nplValue: "7",
          nplPercent: "41.18%",
          activeValue: "10",
          activePercent: "58.82%",
        },
        {
          rowHeader:
            "ดอกเบี้ย 4.75% วงเงินสูงสุด 20 ล้านบาท ผ่อนนานสูงสุด 15 ปี",
          caseValue: "16",
          nplValue: "10",
          nplPercent: "62.5%",
          activeValue: "6",
          activePercent: "37.5%",
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
.overview-container {
  padding: 2.4rem 3.2rem;
  margin-left: 22.4rem;
  gap: 2.4rem;
  .content {
    gap: 3.2rem;
    .second-row {
      gap: 1.6rem;
      .heading-section {
        gap: 0.8rem;
        .icon-container {
          width: 3.6rem;
          height: 3.6rem;
          min-width: 3.6rem;
          min-height: 3.6rem;
        }
      }
      .container-second-row {
        gap: 1.6rem;
      }
    }
    .third-row {
      gap: 1.6rem;
      .heading-section {
        gap: 0.8rem;
        .icon-container {
          width: 3.6rem;
          height: 3.6rem;
          min-width: 3.6rem;
          min-height: 3.6rem;
        }
      }
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
          .card-rows {
            padding: 0 1.6rem;
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
