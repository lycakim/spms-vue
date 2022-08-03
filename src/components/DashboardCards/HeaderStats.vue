<template>
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap w-full sm:w-1/2 md:w-full">
          <!-- FIRST -->
          <div class="w-full lg:w-6/12 xl:w-3/12 pl-0 pr-2">
            <div class="flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="sticky-auto p-4">
                <div class="flex flex-wrap">
                  <div class=" w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                      TRAFFIC
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      350,897
                    </span>
                  </div>
                  <div class=" w-auto pl-4 flex-initial">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                    <font-awesome-icon :icon="['fas','user-clock']" />
                      <!-- <i :class="[statIconName]"></i>
                      <svg :class="[statSvgClass]">
                        <path></path>
                        <path></path>
                      </svg> -->
                      
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2 text-emerald-500">
                    3.48%
                  </span>
                  <span class="whitespace-nowrap float-right">Since yesterday</span>
                </p>
              </div>
            </div>
          </div>
          <!-- END OF FIRST -->

          <!-- SECOND -->
          <div class="w-full lg:w-6/12 xl:w-3/12 px-2">
            <div class=" flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="sticky-auto p-4">
                <div class="flex flex-wrap">
                  <div class=" w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                      SHARES
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      1,350,897
                    </span>
                  </div>
                  <div class=" w-auto pl-4 flex-initial">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                    <font-awesome-icon :icon="['fas','coins']" />
                      <!-- <i :class="[statIconName]"></i>
                      <svg :class="[statSvgClass]">
                        <path></path>
                        <path></path>
                      </svg> -->
                      
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2 text-emerald-500">
                    1.48%
                  </span>
                  <span class="whitespace-nowrap float-right">Since last month</span>
                </p>
              </div>
            </div>
          </div>
          <!-- END OF SECOND -->

          <!-- THIRD -->
          <div class="w-full lg:w-6/12 xl:w-3/12 px-2">
            <div class=" flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="sticky-auto p-4">
                <div class="flex flex-wrap">
                  <div class=" w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                      People
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      1,000
                    </span>
                  </div>
                  <div class=" w-auto pl-4 flex-initial">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-green-500">
                    <font-awesome-icon :icon="['fas','chart-pie']" />
                      <!-- <i :class="[statIconName]"></i>
                      <svg :class="[statSvgClass]">
                        <path></path>
                        <path></path>
                      </svg> -->
                      
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2 text-emerald-500">
                    0.48%
                  </span>
                  <span class="whitespace-nowrap float-right">Since last week</span>
                </p>
              </div>
            </div>
          </div>
          <!-- END OF THIRD -->

          <!-- FOURTH -->
          <div class="w-full lg:w-6/12 xl:w-3/12 pl-2 pr-0">
            <div class=" flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
              <div class="sticky-auto p-4">
                <div class="flex flex-wrap">
                  <div class=" w-full pr-4 max-w-full flex-grow flex-1">
                    <h5 class="text-blueGray-400 uppercase font-bold text-xs">
                      ASSETS
                    </h5>
                    <span class="font-semibold text-xl text-blueGray-700">
                      1,078,087
                    </span>
                  </div>
                  <div class=" w-auto pl-4 flex-initial">
                    <div
                      class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500">
                    <font-awesome-icon :icon="['fas','bar-chart']" />
                      <!-- <i :class="[statIconName]"></i>
                      <svg :class="[statSvgClass]">
                        <path></path>
                        <path></path>
                      </svg> -->
                      
                    </div>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2 text-emerald-500">
                    10.48%
                  </span>
                  <span class="whitespace-nowrap float-right">Since last year</span>
                </p>
              </div>
            </div>
          </div>
          <!-- END OF FOURTH -->
        </div>
      </div>


</template>

<script lang='ts'>
// import DashboardCardVue from "./DashboardCard.vue";
// import CardStats from "@/components/DashboardCards/CardStats.vue";
// import NavAndSideBar from "../SideBar/NavAndSideBar.vue";

export default {
  components: {
    // NavAndSideBar,

},
name: "card-stats",
props: {
    statSubtitle1: {
      type: String,
      default: "Traffic",
    },
    statTitle1: {
      type: String,
      default: "350,897",
    },
    statArrow1: {
      default: "up"
    },
    statPercent1: {
      type: String,
      default: "3.48",
    },
    statPercentColor1: {
      type: String,
      default: "text-emerald-500",
    },
    statDescripiron1: {
      type: String,
      default: "Since last month",
    },
    statIconColor1: {
      type: String,
      default: "bg-red-500",
    },

    // SECOND BAR
    statSubtitle2: {
      type: String,
      default: "SHARES",
    },
    statTitle2: {
      type: String,
      default: "1,350,897",
    },
    statArrow2: {
      default: "up"
    },
    statPercent2: {
      type: String,
      default: "1.48",
    },
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor2: {
      type: String,
      default: "text-emerald-500",
    },
    statDescripiron2: {
      type: String,
      default: "Since last month",
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor2: {
      type: String,
      default: "bg-blue-500",
    },
  }
}
</script>
