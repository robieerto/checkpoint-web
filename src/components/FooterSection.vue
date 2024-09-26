<template>
  <section class="flex flex-col">
    <footer
      class="bg-schemes-inverse-on-surface flex flex-col items-center justify-start mt-[150px] pt-0 px-5 pb-[12px] box-border gap-[30px] z-[4] text-justify text-45xl text-schemes-on-primary font-roboto mq500:gap-[20px]"
    >
      <div
        class="w-[1033px] mt-[-120px] shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-medium bg-material-theme-extended-deep-blue-signature-seed flex flex-col items-start justify-start pt-[23px] px-[157px] pb-[54px] box-border gap-[30px] mq700:gap-[50px] mq500:gap-[70px] max-w-full z-[6] mq900:box-border mq1350:pl-[78px] mq1350:pr-[78px] mq1350:box-border"
      >
        <div
          class="relative tracking-[-0.25px] leading-[26px] text-left inline-block max-w-full z-[1]"
        >
          <h1
            class="m-0 relative leading-[36px] font-semibold font-inherit z-[1] text-29xl mq450:text-19xl mq450:leading-[32px]"
          >
            Vyzkoušejte Checkpoint i Vy
          </h1>
        </div>
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 box-border max-w-full text-left text-xl"
        >
          <div
            class="h-8 flex-1 relative tracking-[-0.25px] leading-[26px] flex items-center max-w-full z-[1] mq450:text-base mq450:leading-[21px]"
          >
            Zjistěte, zda i vám může Checkpoint pomoci zefektivnit interní procesy a zlepšit
            poskytování služeb vašim hostům.
          </div>
        </div>
        <div class="flex flex-row items-start justify-start py-0 box-border">
          <button
            class="cursor-pointer [border:none] rounded-medium py-[12px] px-[42px] bg-material-theme-extended-deep-blue-signature-light-color-container hover:bg-lightsteelblue"
            @click="() => goToPage(router, '/reservation')"
          >
            <div
              class="flex-1 text-2xl font-semibold tracking-[0.2px] relative text-schemes-on-primary-container text-center z-[1]"
            >
              Rezervovat ukázku
            </div>
          </button>
        </div>
      </div>
      <div
        class="flex flex-row items-start justify-center py-0 box-border max-w-full text-13xl text-material-theme-black"
      >
        <div class="flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div class="flex flex-row items-start justify-center py-0">
            <div
              class="relative leading-[36px] font-semibold z-[5] text-7xl mq900:leading-[29px] mq450:text-lgi mq450:leading-[22px]"
            >
              Dávame fyzickému světu digitálni rozměr
            </div>
          </div>

          <div class="self-stretch flex flex-row items-start justify-center py-0">
            <img
              class="h-[33.3px] w-[115px] relative z-[5]"
              loading="lazy"
              alt=""
              src="/group-4753.svg"
            />
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-center py-0 box-border max-w-full text-left text-9xl text-material-theme-extended-deep-blue-signature-seed"
          >
            <div class="w-[332px] flex flex-col items-start justify-start gap-[0.5px] max-w-full">
              <div class="self-stretch flex flex-row items-start justify-center py-0 px-5">
                <div class="flex flex-row items-end justify-start gap-[17.5px]">
                  <a href="mailto:david@ofrules.com">
                    <img
                      class="cursor-pointer h-[39.5px] w-[39.5px] relative z-[5]"
                      loading="lazy"
                      alt=""
                      src="/mail.svg"
                    />
                  </a>
                  <div class="flex flex-col items-start justify-end pt-0 px-0 pb-[4.7px]">
                    <a href="https://www.linkedin.com/company/ofrules">
                      <img
                        class="cursor-pointer w-[31px] h-[30px] relative overflow-hidden shrink-0 z-[5]"
                        loading="lazy"
                        alt=""
                        src="/social-icons.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="self-stretch h-[51px] relative justify-center leading-[36px] flex items-center shrink-0 z-[5] mq450:text-3xl mq450:leading-[29px]"
              >
                Copyright © ofrules 2024
              </div>
              <a href="/checkpoint-privacy" hidden />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
<script setup lang="ts">
import { goToPage } from '../helpers'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
