<template>
  <div
    class="bg-schemes-on-primary flex flex-col pb-[68px] px-[92px] mq900:px-[23px] mq1350:pb-11 mq1350:px-[46px] box-border gap-[28px] max-w-full text-material-theme-extended-deep-blue-signature-seed font-roboto"
  >
    <header
      class="flex flex-row justify-start text-13xl text-material-theme-black font-roboto mq900:gap-[38px] mq450:gap-[19px]"
    >
      <div class="flex-1 flex flex-col gap-[47px] max-w-[1000px] mq900:gap-[23px]">
        <div
          class="shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-medium bg-material-theme-extended-deep-blue-signature-seed flex flex-col items-start justify-start pt-12 px-[119px] pb-[7px] box-border gap-[40px] max-w-full z-[1] text-left text-45xl text-schemes-on-primary mq900:gap-[23px] mq900:pt-[31px] mq900:px-[29px] mq900:pb-5 mq900:box-border mq1350:gap-[46px] mq1350:pl-[59px] mq1350:pr-[59px] mq1350:box-border"
        >
          <div class="flex flex-row py-0 px-px box-border">
            <div class="flex-1 flex flex-col gap-[43px] mq900:gap-[26px]">
              <h1
                class="m-0 relative text-inherit leading-[48px] font-bold flex items-center max-w-full z-[2] mq900:text-32xl mq450:text-19xl mq450:leading-[36px]"
              >
                Zefektivněte řízení svého hotelu pomocí Checkpointu
              </h1>
              <div class="relative text-5xl tracking-[-0.25px] leading-[26px] z-[2]">
                Checkpoint je chytrý software pro správu úkolů, který vám poskytne dokonalý přehled
                o tom, co se ve vašem hotelu děje a doposud nevídané informace pro ještě lepší
                rozhodování.
              </div>
            </div>
          </div>
          <div class="flex flex-col items-start justify-start gap-[12px] max-w-full text-base">
            <div
              class="flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full"
            >
              <div
                class="flex-1 flex flex-row items-start justify-start mq450:gap-[10px] gap-[19px] max-w-full"
              >
                <button
                  class="cursor-pointer [border:none] rounded-medium py-[12px] px-[42px] mq450:px-[26px] bg-material-theme-extended-deep-blue-signature-light-color-container hover:bg-lightsteelblue"
                  @click="() => goToPage(router, '/reservation')"
                >
                  <div
                    class="flex-1 text-2xl font-semibold tracking-[0.2px] relative text-schemes-on-primary-container text-center z-[1]"
                  >
                    Rezervovat ukázku
                  </div>
                </button>
                <button
                  class="cursor-pointer [border:none] rounded-medium py-[12px] px-[42px] mq450:px-[26px] bg-schemes-secondary-container hover:bg-wheat"
                  @click="() => goToPage(router, '/getInformation')"
                >
                  <div
                    class="flex-1 text-2xl font-semibold tracking-[0.2px] relative text-schemes-on-primary-container text-center z-[1]"
                  >
                    Zjistit více
                  </div>
                </button>
              </div>
            </div>
            <div class="relative text-2xl tracking-[-0.25px] pb-[38px] mq900:pb-[18px] z-[2]">
              *rezervujte si ukázku bez jakýchkoli závazků
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col m-auto gap-[83px] max-w-full text-center text-base text-schemes-on-primary-container mq900:hidden"
      >
        <img
          class="w-[259px] flex-1 relative max-h-full object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/rectangle@2x.png"
        />
      </div>
    </header>
    <div class="flex flex-row items-start justify-start py-0 px-px box-border max-w-full">
      <div
        class="shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-medium bg-schemes-inverse-on-surface flex flex-col items-start justify-start pt-[15px] pb-[52px] max-w-full z-[1] px-[236px] box-border gap-[45px] max-w-full z-[1] mq450:px-5 mq850:px-[29px] mq925:gap-[22px] mq925:px-[93px] mq1350:px-[118px]"
      >
        <div class="w-[1033px] flex flex-row items-start justify-center max-w-full">
          <h1
            class="m-0 pt-[15px] text-32xl relative leading-[46px] font-semibold font-inherit z-[2] mq900:leading-[40px] mq450:text-19xl mq450:leading-[30px]"
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
                class="relative tracking-[-0.25px] leading-[23px] z-[2] mq450:text-lgi mq450:leading-[18px]"
              >
                <p class="m-0 font-bold">Pavel Chmelář,</p>
                <p class="m-0">Kapka resort,</p>
                <p class="m-0">Lhota u Vsetína</p>
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
                class="relative tracking-[-0.25px] leading-[23px] z-[2] mq450:text-lgi mq450:leading-[18px]"
              >
                <p class="m-0 font-bold">Klaudia Dziak,</p>
                <p class="m-0">Penzión Šport,</p>
                <p class="m-0">Starý Smokovec</p>
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
                class="relative tracking-[-0.25px] leading-[23px] z-[2] mq450:text-lgi mq450:leading-[18px]"
              >
                <p class="m-0 font-bold">Simona Bukovinská,</p>
                <p class="m-0">Villa Danielov dom & Villa Buky,</p>
                <p class="m-0">Vysoké tatry</p>
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
