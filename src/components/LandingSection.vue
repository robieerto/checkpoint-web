<template>
  <div
    class="self-stretch bg-schemes-on-primary flex flex-col items-start justify-start pb-[68px] px-[92px] mq900:px-[23px] mq1350:pb-11 mq1350:px-[46px] box-border gap-[28px] max-w-full text-29xl text-material-theme-extended-deep-blue-signature-seed font-roboto"
  >
    <header
      class="self-stretch flex flex-row justify-start max-w-full text-13xl text-material-theme-black font-roboto mq900:gap-[38px] mq450:gap-[19px]"
    >
      <div
        class="flex-1 flex flex-col items-start justify-start gap-[47px] max-w-[1000px] mq900:gap-[23px]"
      >
        <div
          class="self-stretch shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-material-theme-extended-deep-blue-signature-seed flex flex-col items-start justify-start pt-12 px-[119px] pb-[7px] box-border gap-[63px] max-w-full z-[1] text-left text-45xl text-schemes-on-primary mq900:gap-[23px] mq900:pt-[31px] mq900:px-[29px] mq900:pb-5 mq900:box-border mq1350:gap-[46px] mq1350:pl-[59px] mq1350:pr-[59px] mq1350:box-border"
        >
          <div class="flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
            <div
              class="flex-1 flex flex-col items-start justify-start gap-[53px] max-w-full mq450:gap-[26px]"
            >
              <h1
                class="m-0 relative text-inherit leading-[53px] font-bold font-inherit flex items-center max-w-full z-[2] mq900:text-32xl mq450:text-19xl mq450:leading-[32px]"
              >
                Zefektivněte řízení svého hotelu pomocí Checkpointu
              </h1>
              <div class="self-stretch relative text-5xl tracking-[-0.25px] leading-[26px] z-[2]">
                Checkpoint je chytrý software pro správu úkolů, který vám poskytne dokonalý přehled
                o tom, co se ve vašem hotelu děje a doposud nevídané informace pro ještě lepší
                rozhodování.
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start justify-start gap-[12px] max-w-full text-base">
            <div
              class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full"
            >
              <div
                class="flex-1 flex flex-row items-start justify-start mq450:gap-[10px] gap-[29px] max-w-full"
              >
                <button
                  class="cursor-pointer [border:none] pt-[18px] px-[26px] pb-[17px] bg-material-theme-extended-deep-blue-signature-light-color-container flex-1 flex flex-row items-start justify-start z-[2] hover:bg-lightsteelblue"
                  @click="() => goToPage(router, '/reservation')"
                >
                  <div
                    class="flex-1 relative text-base tracking-[-0.25px] leading-[17px] font-roboto text-schemes-on-primary-container text-center z-[1]"
                  >
                    Rezervovat ukázku
                  </div>
                </button>
                <button
                  class="cursor-pointer [border:none] py-7 pl-[42px] pr-[30px] bg-schemes-secondary-container flex-[0.7447] flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-wheat"
                  @click="() => goToPage(router, '/getInformation')"
                >
                  <div
                    class="relative text-base tracking-[-0.25px] leading-[14px] font-roboto text-schemes-on-primary-container text-left inline-block min-w-[70px] z-[1]"
                  >
                    Zjistit více
                  </div>
                </button>
              </div>
            </div>
            <div class="relative tracking-[-0.25px] pb-[38px] z-[2]">
              *rezervujte si ukázku bez jakýchkoli závazků
            </div>
          </div>
        </div>
      </div>
      <div
        class="self-stretch flex flex-col m-auto gap-[83px] max-w-full text-center text-base text-schemes-on-primary-container mq900:hidden"
      >
        <img
          class="w-[299px] flex-1 relative max-h-full object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle@2x.png"
        />
      </div>
    </header>
    <div class="flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
      <div
        class="shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-schemes-inverse-on-surface flex flex-col items-start justify-start pt-[15px] pb-[52px] max-w-full z-[1] px-[236px] box-border gap-[45px] max-w-full z-[1] mq450:px-5 mq850:px-[29px] mq925:gap-[22px] mq925:px-[93px] mq1350:px-[118px]"
      >
        <div class="w-[1033px] flex flex-row items-start justify-center max-w-full">
          <h1
            class="m-0 pt-[15px] relative text-inherit leading-[36px] font-semibold font-inherit z-[2] mq900:text-19xl mq900:leading-[29px] mq450:text-10xl mq450:leading-[22px]"
          >
            Důvěřují nám hotéliéři různých velikostí
          </h1>
        </div>
        <div
          class="flex flex-row items-start justify-center gap-[15px] max-w-full text-left text-5xl text-material-theme-black mq900:gap-[15px] mq1350:gap-[31px] mq1350:flex-wrap"
        >
          <div
            class="w-[373px] flex flex-row items-start justify-start gap-[18px] max-w-full mq450:flex-wrap"
          >
            <img
              class="w-[112px] !m-[0] rounded-full"
              loading="lazy"
              alt=""
              src="/male-avatar.png"
            />
            <div
              class="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[158px]"
            >
              <div
                class="self-stretch relative tracking-[-0.25px] leading-[23px] z-[2] mq450:text-lgi mq450:leading-[18px]"
              >
                <p class="m-0 font-medium">Pavel Chmelář,</p>
                <p class="m-0">
                  <i class="font-medium">Kapka resort,</i>
                </p>
                <p class="m-0">
                  <i class="font-medium">Lhota u Vsetína</i>
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-[373px] flex flex-row items-start justify-start gap-[18px] max-w-full mq450:flex-wrap"
          >
            <img
              class="w-[112px] !m-[0] rounded-full"
              loading="lazy"
              alt=""
              src="/female-cute-avatar.png"
            />
            <div
              class="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[158px]"
            >
              <div
                class="self-stretch relative tracking-[-0.25px] leading-[23px] z-[2] mq450:text-lgi mq450:leading-[18px]"
              >
                <p class="m-0 font-medium">Klaudia Dziak,</p>
                <p class="m-0">
                  <i class="font-medium">Penzión Šport,</i>
                </p>
                <p class="m-0">
                  <i class="font-medium">Starý Smokovec</i>
                </p>
              </div>
            </div>
          </div>
          <div
            class="w-[373px] flex flex-row items-start justify-start gap-[18px] max-w-full mq450:flex-wrap"
          >
            <img
              class="w-[112px] !m-[0] rounded-full"
              loading="lazy"
              alt=""
              src="/female-avatar.png"
            />
            <div
              class="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border min-w-[158px]"
            >
              <div
                class="self-stretch relative tracking-[-0.25px] leading-[23px] z-[2] mq450:text-lgi mq450:leading-[18px]"
              >
                <p class="m-0 font-medium">Simona Bukovinská,</p>
                <p class="m-0">
                  <i class="font-medium">Villa Danielov dom & Villa Buky,</i>
                </p>
                <p class="m-0">
                  <i class="font-medium">Vysoké tatry</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { goToPage } from '../helpers'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
