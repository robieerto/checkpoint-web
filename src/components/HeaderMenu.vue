<template>
  <header
    class="self-stretch flex flex-row items-end justify-start gap-[151px] max-w-full text-justify text-13xl text-material-theme-black font-roboto mq900:gap-[38px] mq1350:gap-[75px] mq450:gap-[19px]"
  >
    <div
      class="flex-1 flex flex-col items-start justify-start gap-[47px] max-w-full mq900:gap-[23px]"
    >
      <div
        class="w-[431px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full"
      >
        <div class="flex-1 flex flex-row items-start justify-start relative max-w-full">
          <img
            class="h-[89.8px] w-[406px] absolute !m-[0] top-[-49px] left-[-3px] z-[1]"
            loading="lazy"
            alt=""
            src="/group-4737.svg"
          />
          <div
            class="flex-1 relative mt-[14px] leading-[56px] font-semibold inline-block whitespace-nowrap max-w-full z-[2]"
          >
            by ofrules
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-[675px] w-[487px] flex flex-col items-start justify-start gap-[83px] max-w-full text-center text-base text-schemes-on-primary-container mq900:gap-[41px]"
    >
      <div class="self-stretch flex flex-row items-start justify-end max-w-full">
        <div class="w-[321px] flex flex-row items-start justify-start gap-[29px] max-w-full">
          <div
            class="cursor-pointer flex-1 shadow-[7px_9px_4px_rgba(0,_0,_0,_0.25)] bg-material-theme-extended-deep-blue-signature-light-color-container flex flex-row items-start justify-start pt-[18px] px-[26px] pb-[17px] z-[1] hover:bg-lightsteelblue"
          >
            <div
              class="h-[70px] w-[146px] relative bg-material-theme-extended-deep-blue-signature-light-color-container hidden"
            />
            <a
              class="[text-decoration:none] flex-1 relative tracking-[-0.25px] leading-[17px] text-[inherit] z-[1]"
              >Rezervovat ukázku</a
            >
          </div>
          <button
            class="cursor-pointer [border:none] py-7 px-[34px] bg-schemes-secondary-container shadow-[7px_9px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-wheat"
          >
            <div class="h-[70px] w-[146px] relative bg-schemes-secondary-container hidden" />
            <a
              class="[text-decoration:none] relative text-base tracking-[-0.25px] leading-[14px] font-roboto text-schemes-on-primary-container text-left inline-block min-w-[77px] z-[1]"
              >Zjistit více</a
            >
          </button>
        </div>
      </div>
      <img
        class="w-[299px] flex-1 relative max-h-full object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/rectangle@2x.png"
      />
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderBar'
})
</script>
