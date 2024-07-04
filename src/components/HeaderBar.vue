<template>
  <div
    class="self-stretch bg-schemes-on-primary flex flex-col items-start justify-start pt-[29px] pr-[62px] pl-[92px] box-border gap-[28px] max-w-full text-justify text-29xl text-material-theme-extended-deep-blue-signature-seed font-roboto mq900:pl-[23px] mq900:pt-[21px] mq900:box-border"
  >
    <header
      class="self-stretch flex flex-row items-end justify-start gap-[151px] max-w-full text-justify text-13xl text-material-theme-black font-roboto mq900:gap-[38px] mq1350:gap-[75px] mq450:gap-[19px]"
    >
      <div
        class="w-full flex flex-row items-end justify-between pt-2 pb-5 pr-0 pl-[3px] box-border leading-[normal] tracking-[normal] gap-[20px] text-justify text-[32px] text-material-theme-black font-roboto mq950:flex-wrap"
      >
        <div class="flex flex-col">
          <img
            class="h-[89.8px] w-[406px] !m-[0] left-[-3px]"
            loading="lazy"
            alt=""
            src="/group-4737.svg"
          />
          <h1
            class="m-0 mt-[-18px] relative text-inherit font-semibold font-inherit inline-block max-w-full z-[1] mq450:text-[19px] mq450:leading-[34px] mq950:text-[26px] mq950:leading-[45px]"
          >
            by ofrules
          </h1>
        </div>
        <div class="self-stretch flex flex-row items-start justify-end max-w-full gap-[29px]">
          <button
            class="cursor-pointer [border:none] pt-[18px] px-[26px] pb-[17px] bg-material-theme-extended-deep-blue-signature-light-color-container flex-1 shadow-[7px_9px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start hover:bg-lightsteelblue"
          >
            <a
              class="[text-decoration:none] flex-1 relative text-base tracking-[-0.25px] leading-[17px] font-roboto text-schemes-on-primary-container text-center z-[1]"
              >Rezervovat ukázku</a
            >
          </button>
          <button
            class="cursor-pointer [border:none] py-7 pl-[44px] pr-[24px] bg-schemes-secondary-container flex-[0.8298] shadow-[7px_9px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap hover:bg-wheat"
          >
            <a
              class="[text-decoration:none] relative text-base tracking-[-0.25px] leading-[14px] font-roboto text-schemes-on-primary-container text-left inline-block min-w-[77px] z-[1]"
              >Zjistit více</a
            >
          </button>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderBar'
})
</script>
