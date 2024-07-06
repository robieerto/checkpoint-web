<template>
  <div
    class="w-[1735px] flex flex-row items-start justify-center py-0 pr-0 pl-[3px] box-border max-w-full"
  >
    <form class="m-0 w-[734px] flex flex-col items-start justify-start gap-[15.5px] max-w-full">
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[37px] max-w-full mq900:gap-[18px]"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 px-[58px] box-border max-w-full mq900:pl-[29px] mq900:pr-[29px] mq900:box-border"
        >
          <h1
            class="m-0 flex-1 relative text-45xl leading-[36px] font-semibold font-roboto text-material-theme-extended-deep-blue-signature-seed text-justify inline-block max-w-full z-[1] mq900:text-32xl mq900:leading-[29px] mq450:text-19xl mq450:leading-[22px]"
          >
            Zůstaňme v kontaktu
          </h1>
        </div>
        <div
          class="self-stretch relative text-5xl tracking-[-0.25px] leading-[23px] font-roboto text-material-theme-black text-left z-[1] mq450:text-lgi mq450:leading-[18px]"
        >
          Přihlaste se do nášho newsletteru a zůstaňte informováni o tom jak pomáháme hotelom růst.
          Bez jakýchkoli závazků.
        </div>
      </div>
      <div
        class="w-[672px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
      >
        <div
          class="w-[438px] box-border flex flex-row items-start justify-start pt-[33px] px-[27px] pb-1.5 max-w-full z-[1] border-[1px] border-solid border-material-theme-black"
        >
          <input
            class="w-[46px] [border:none] [outline:none] font-roboto text-base bg-[transparent] h-[27px] relative tracking-[-0.25px] leading-[64px] text-material-theme-black text-left flex items-center p-0 z-[2]"
            placeholder="*email"
            type="text"
          />
        </div>
      </div>
      <div
        class="w-[699px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
      >
        <div
          class="w-[411px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center"
        >
          <div class="flex flex-col items-start justify-start pt-[43px] px-0 pb-0">
            <div class="flex flex-row items-start justify-start relative">
              <input
                class="[outline:none] bg-[transparent] h-[70px] w-[210px] absolute !m-[0] top-[-43px] right-[-137px] box-border z-[1] border-[1px] border-solid border-material-theme-black"
                type="text"
              />
              <div
                class="relative text-base tracking-[-0.25px] leading-[27px] font-roboto text-material-theme-black text-left inline-block min-w-[46px] z-[2]"
              >
                jméno
              </div>
            </div>
          </div>
          <div class="w-[210px] flex flex-col items-end justify-start gap-[19px]">
            <div
              class="self-stretch flex flex-row items-start justify-start pt-[41px] px-[18px] pb-0 z-[1] border-[1px] border-solid border-material-theme-black"
            >
              <div
                class="relative text-base tracking-[-0.25px] leading-[27px] font-roboto text-material-theme-black text-left inline-block min-w-[77px] z-[2]"
              >
                společnost
              </div>
            </div>
            <button
              class="cursor-pointer [border:none] py-7 px-[34px] bg-schemes-secondary-container shadow-[4px_6px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-wheat"
            >
              <div
                class="relative text-base tracking-[-0.25px] leading-[14px] font-roboto text-schemes-on-primary-container text-left inline-block min-w-[77px] z-[1]"
              >
                Přihlásit se
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactLandingSection'
})
</script>
