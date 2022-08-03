<template>
  <div
    class="w-full flex break-words mt-8 float-right xl:mb-0 bg-white mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-3 py-3 bg-transparent">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <h6 class="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
            Overview
          </h6>
          <h2 class="text-xl font-semibold">
            <font-awesome-icon :icon="['fas','bar-chart']" />
            Sales value
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at nulla odio, ad ducimus quod quos consequuntur veritatis nemo ut aperiam voluptates non tenetur! Porro, fuga consequuntur? Perspiciatis, nobis sint.
          </h2>
        </div>
      </div>
    </div>
    <div class="p-4 flex-auto">
      <!-- Chart -->
      <div class="relative h-350-px">
        <canvas id="line-chart"></canvas>
      </div>
    </div>
  </div>
</template>

