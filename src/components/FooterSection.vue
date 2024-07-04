<template>
  <footer
    class="self-stretch bg-schemes-inverse-on-surface flex flex-col items-center justify-start pt-0 px-5 pb-[42px] box-border gap-[40px] shrink-0 max-w-full z-[4] mt-[-523px] text-justify text-45xl text-schemes-on-primary font-roboto mq900:gap-[20px] mq900:pb-[27px] mq900:box-border"
  >
    <div class="w-[1920px] h-[621px] relative bg-schemes-inverse-on-surface hidden max-w-full" />
    <div
      class="w-[1133px] shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-material-theme-extended-deep-blue-signature-seed flex flex-col items-start justify-start pt-[23px] px-[157px] pb-[54px] box-border gap-[53.5px] max-w-full z-[6] mq900:gap-[27px] mq900:pl-[39px] mq900:pr-[39px] mq900:box-border mq1350:pl-[78px] mq1350:pr-[78px] mq1350:box-border"
    >
      <div
        class="w-[1133px] h-[340px] relative shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-material-theme-extended-deep-blue-signature-seed hidden max-w-full"
      />
      <h1
        class="m-0 relative text-inherit leading-[54px] font-semibold font-inherit z-[1] mq900:text-32xl mq900:leading-[43px] mq450:text-19xl mq450:leading-[32px]"
      >
        Vyzkoušejte Checkpoint i Vy
      </h1>
      <div
        class="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-[18px] box-border max-w-full text-left text-xl"
      >
        <div
          class="h-8 flex-1 relative tracking-[-0.25px] leading-[26px] flex items-center max-w-full z-[1] mq450:text-base mq450:leading-[21px]"
        >
          Zjistěte, zda i vám může Checkpoint pomoci zefektivnit interní procesy a zlepšit
          poskytování služeb vašim hostům.
        </div>
      </div>
      <div class="w-[178px] flex flex-row items-start justify-start py-0 px-4 box-border">
        <button
          class="cursor-pointer [border:none] pt-[18px] px-[26px] pb-[17px] bg-material-theme-extended-deep-blue-signature-light-color-container flex-1 shadow-[4px_7px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[7] hover:bg-lightsteelblue"
        >
          <div
            class="h-[70px] w-[146px] relative bg-material-theme-extended-deep-blue-signature-light-color-container hidden"
          />
          <a
            class="[text-decoration:none] flex-1 relative text-base tracking-[-0.25px] leading-[17px] font-roboto text-schemes-on-primary-container text-center z-[1]"
            >Rezervovat ukázku</a
          >
        </button>
      </div>
    </div>
    <div
      class="w-[1134px] flex flex-row items-start justify-center py-0 pr-0 pl-0.5 box-border max-w-full text-13xl text-material-theme-black"
    >
      <div class="w-[594px] flex flex-col items-start justify-start gap-[19.4px] max-w-full">
        <div
          class="relative leading-[36px] font-semibold z-[5] mq900:text-7xl mq900:leading-[29px] mq450:text-lgi mq450:leading-[22px]"
        >
          Dávame fyzickému světu digitálni rozměr
        </div>
        <div class="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
          <img
            class="h-[33.3px] w-[115px] relative z-[5]"
            loading="lazy"
            alt=""
            src="/group-4753.svg"
          />
        </div>
        <div
          class="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5 box-border max-w-full text-left text-9xl text-material-theme-extended-deep-blue-signature-seed"
        >
          <div class="w-[332px] flex flex-col items-start justify-start gap-[0.5px] max-w-full">
            <div class="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div class="flex flex-row items-end justify-start gap-[17.5px]">
                <img
                  class="h-[39.5px] w-[39.5px] relative z-[5]"
                  loading="lazy"
                  alt=""
                  src="/mail.svg"
                />
                <div class="flex flex-col items-start justify-end pt-0 px-0 pb-[4.7px]">
                  <img
                    class="w-[31px] h-[30px] relative overflow-hidden shrink-0 z-[5]"
                    loading="lazy"
                    alt=""
                    src="/social-icons.svg"
                  />
                </div>
              </div>
            </div>
            <div
              class="self-stretch h-[51px] relative leading-[36px] flex items-center shrink-0 z-[5] mq450:text-3xl mq450:leading-[29px]"
            >
              Copyright © ofrules 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterSection'
})
</script>
