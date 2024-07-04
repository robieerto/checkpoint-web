<template>
  <div
    class="w-[1735px] shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-schemes-inverse-on-surface flex flex-row items-start justify-start pt-[57px] pb-[42px] pr-[166px] pl-[268px] box-border gap-[168px] max-w-full z-[1] text-left text-45xl text-material-theme-extended-deep-blue-signature-seed font-roboto mq900:gap-[42px] mq900:pt-[37px] mq900:pb-[27px] mq900:pr-[41px] mq900:pl-[67px] mq900:box-border mq1350:gap-[84px] mq1350:pl-[134px] mq1350:pr-[83px] mq1350:box-border mq450:gap-[21px] mq450:pl-5 mq450:box-border mq1800:flex-wrap"
  >
    <div
      class="h-[511px] w-[1735px] relative shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-schemes-inverse-on-surface hidden max-w-full"
    />
    <div
      class="flex-1 flex flex-col items-start justify-start pt-[82px] px-0 pb-0 box-border min-w-[521px] max-w-full mq1350:min-w-full"
    >
      <h1
        class="m-0 self-stretch relative text-inherit leading-[56px] font-semibold font-inherit z-[2] mq900:text-32xl mq900:leading-[45px] mq450:text-19xl mq450:leading-[34px]"
      >
        Naše řešení v praxi: Jak pomáhame Kapke resort s úklidem
      </h1>
    </div>
    <div
      class="w-[332px] flex flex-col items-end justify-start gap-[20px] min-w-[332px] max-w-full text-base text-schemes-on-primary-container mq1800:flex-1"
    >
      <textarea
        class="[border:none] bg-darkgray h-[322px] w-auto [outline:none] self-stretch relative z-[2]"
        rows="16"
        cols="17"
      />
      <div class="flex flex-row items-start justify-end py-0 px-[5px]">
        <div
          class="cursor-pointer shadow-[4px_6px_4px_rgba(0,_0,_0,_0.25)] bg-schemes-secondary-container flex flex-row items-start justify-start py-7 pr-[61px] pl-[62px] z-[2] hover:bg-wheat"
        >
          <div class="h-[70px] w-[146px] relative bg-schemes-secondary-container hidden" />
          <div class="relative tracking-[-0.25px] leading-[14px] inline-block min-w-[23px] z-[1]">
            Víc
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CaseStudySection'
})
</script>
