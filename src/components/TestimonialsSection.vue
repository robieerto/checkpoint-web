<template>
  <div
    class="self-stretch flex flex-row items-start justify-start pt-0 pb-[469px] pr-0 box-border max-w-full text-justify text-45xl text-material-theme-extended-deep-blue-signature-seed font-roboto mq900:pb-[198px] mq900:box-border mq1350:pb-[305px] mq1350:box-border"
  >
    <div
      class="flex-1 bg-schemes-inverse-on-surface flex flex-col items-start justify-start pt-[77px] pb-[207px] pr-[23px] pl-[348px] box-border gap-[116px] shrink-0 max-w-full mq900:gap-[29px] mq900:pl-[87px] mq900:pt-[50px] mq900:pb-[135px] mq900:box-border mq1350:gap-[58px] mq1350:pl-[174px] mq1350:box-border"
    >
      <div class="w-[1224px] flex flex-row items-start justify-center max-w-full">
        <h1
          class="m-0 relative text-inherit leading-[36px] font-semibold font-inherit z-[1] mq900:text-32xl mq900:leading-[29px] mq450:text-19xl mq450:leading-[22px]"
        >
          Co o Checkpointu říkají ostatní
        </h1>
      </div>
      <div
        class="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-9xl text-material-theme-black mq1800:flex-wrap mq1800:justify-center"
      >
        <div
          class="w-[527px] flex flex-row items-start justify-center gap-[13px] min-w-[527px] max-w-full mq900:flex-wrap mq1350:min-w-full mq1800:flex-1"
        >
          <div
            class="h-48 w-48 relative rounded-[50%] bg-darkgray min-w-[192px] z-[1] mq900:flex-1"
          />
          <div
            class="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[209px] max-w-full"
          >
            <div class="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <div
                class="h-[86px] flex-1 relative leading-[36px] flex items-center max-w-full z-[1] mq450:text-3xl mq450:leading-[29px]"
              >
                <span>
                  <p class="m-0">
                    <b>Janka Referencoidná, </b>
                  </p>
                  <p class="m-0">Bestreviews,</p>
                </span>
              </div>
              <blockquote
                class="!m-[0] h-[163px] w-[563px] absolute right-[-241px] bottom-[-130px] text-xl leading-[36px] flex italic items-center z-[2] mq450:text-base mq450:leading-[29px]"
              >
                “Checkpoint sa u nás v hoteli veľmi osvedčil. Pomohol nám ušetriť náklady a zvýšiť
                pohodlie našich klientov bez potreby navýšenia personálu.”
              </blockquote>
            </div>
          </div>
        </div>
        <div
          class="w-[605px] flex flex-row items-start justify-center gap-[13px] min-w-[605px] max-w-full mq900:flex-wrap mq1350:min-w-full mq1800:flex-1"
        >
          <div
            class="h-48 w-48 relative rounded-[50%] bg-darkgray min-w-[192px] z-[1] mq900:flex-1"
          />
          <div
            class="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[260px] max-w-full"
          >
            <div class="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
              <div
                class="w-[322px] relative leading-[36px] flex items-center max-w-full z-[1] mq450:text-3xl mq450:leading-[29px]"
              >
                <span class="w-full">
                  <p class="m-0">
                    <b>Peter Mĺkvy, </b>
                  </p>
                  <p class="m-0">Grandhotel Budapešť,</p>
                </span>
              </div>
              <blockquote
                class="m-0 self-stretch h-[86px] relative text-xl leading-[36px] flex italic items-center shrink-0 z-[1] mq450:text-base mq450:leading-[29px]"
              >
                “Vďaka Checkpointu si som istý, že je o našich hostí postarané a ja mám viac času na
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
  name: 'TestimonialsSection'
})
</script>
