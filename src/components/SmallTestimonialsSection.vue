<template>
  <div
    class="self-stretch flex flex-row items-center justify-start pt-0 pr-0 box-border max-w-full text-justify text-45xl text-material-theme-extended-deep-blue-signature-seed font-roboto mq900:box-border mq1350:box-border"
  >
    <div
      class="flex-1 bg-schemes-inverse-on-surface flex flex-col items-center justify-start py-[50px] px-[238px] mq600:px-[46px] box-border shrink-0 max-w-full mq900:gap-[29px] mq900:pl-[87px] mq900:pt-[50px] mq900:box-border mq1350:pl-[174px] mq1350:box-border"
    >
      <div class="max-w-[1210px] flex flex-row items-center justify-center w-full">
        <div
          class="relative tracking-[-0.25px] leading-[26px] text-left inline-block max-w-full z-[1]"
        >
          <h1
            class="m-0 relative mqMobile:mb-[56px] text-inherit leading-[48px] font-bold flex items-center max-w-full z-[2] mq900:text-32xl mq450:text-19xl mq450:leading-[36px]"
          >
            Co o Checkpointu říkají ostatní
          </h1>
        </div>
      </div>
      <div
        class="flex flex-row items-start max-w-[1210px] w-full gap-[20px] text-9xl text-material-theme-black"
      >
        <div class="max-w-[527px] flex flex-row items-start justify-center gap-[13px]">
          <div
            class="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full"
          >
            <div class="self-stretch flex flex-col items-start justify-start relative max-w-full">
              <div
                class="h-[86px] flex-1 relative leading-[26px] flex items-center max-w-full z-[1] mq450:text-3xl mq450:leading-[29px]"
              >
                <span>
                  <p class="m-0 font-bold text-5xl">Pavel Chmelář,</p>
                  <p class="m-0 text-5xl">ředitel Hotelu Kapka resort,</p>
                </span>
              </div>
              <blockquote
                class="!mx-[0] top-[100px] text-5xl leading-[26px] flex italic items-center z-[2] mq450:text-base mq450:leading-[29px]"
              >
                “Checkpoint nám pomohl zefektivnit naše interní úklidové procesy a současně nás lépe
                propojil s našimi hosty.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col items-end mqMobile:mt-[-50px] max-w-[1210px] w-full gap-[20px] text-9xl text-material-theme-black"
      >
        <div class="max-w-[527px] flex flex-row items-start justify-center gap-[13px]">
          <div
            class="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full"
          >
            <div class="self-stretch flex flex-col items-start justify-start relative max-w-full">
              <div
                class="h-[86px] flex-1 relative leading-[26px] flex items-center max-w-full z-[1] mq450:text-3xl mq450:leading-[29px]"
              >
                <span>
                  <p class="m-0 font-bold text-5xl">Klaudia Dziak,</p>
                  <p class="m-0 text-5xl">provozní ředitelka Penziónu Šport ve Vysokých Tatrách,</p>
                </span>
              </div>
              <blockquote
                class="!mx-[0] top-[100px] text-5xl leading-[26px] flex italic items-center z-[2] mq450:text-base mq450:leading-[29px]"
              >
                “Checkpoint nám pomohol zlepšiť naše ponúkané služby a zároveň znížiť riziko
                negatívnych recenzií. Vďaka Checkpointu rozumieme našim hosťom ešte lepšie.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row items-start mqMobile:mt-[-50px] max-w-[1210px] w-full gap-[20px] text-9xl text-material-theme-black"
      >
        <div class="max-w-[527px] flex flex-row items-start justify-center gap-[13px]">
          <div
            class="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border max-w-full"
          >
            <div class="self-stretch flex flex-col items-start justify-start relative max-w-full">
              <div
                class="h-[86px] flex-1 relative leading-[26px] flex items-center max-w-full z-[1] mq450:text-3xl mq450:leading-[29px]"
              >
                <span>
                  <p class="m-0 font-bold text-5xl">Simona Bukovinská,</p>
                  <p class="m-0 text-5xl">ředitelka Villa Danielov Dom & Villa Buky</p>
                </span>
              </div>
              <blockquote
                class="!mx-[0] top-[100px] text-5xl leading-[26px] flex italic items-center z-[2] mq450:text-base mq450:leading-[29px]"
              >
                “Vďaka Checkpointu si som istá, že je o našich hostí postarané a ja mám viac času na
                ostatné záležitosti.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SmallTestimonialsSection'
})
</script>
