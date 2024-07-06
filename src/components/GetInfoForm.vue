<template>
  <form
    class="m-0 shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-schemes-inverse-on-surface flex flex-col items-center justify-start pt-[67px] px-[101px] pb-[40px] box-border gap-[25px] min-w-[793px] max-w-full z-[1] mq850:pt-11 mq850:px-[50px] mq850:pb-10 mq850:box-border mq1225:min-w-full mq450:gap-[22px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1525:flex-1"
  >
    <div class="w-[580px] flex flex-col gap-[20px] max-w-full">
      <div class="self-stretch flex flex-col items-start justify-start max-w-full">
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[22px] mq850:flex-wrap"
        >
          <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
            <div class="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-6">
              <div
                class="flex-1 relative text-base tracking-[-0.25px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
              >
                *jméno
              </div>
            </div>
            <input
              class="[border:none] [outline:none] bg-gainsboro self-stretch h-14 relative rounded-xl min-w-[167px] z-[2]"
              type="text"
            />
          </div>
          <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
            <div class="self-stretch flex flex-row items-start justify-start py-0 pl-6">
              <div
                class="flex-1 relative text-base tracking-[-0.25px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
              >
                název hotela (společnost)
              </div>
            </div>
            <input
              class="[border:none] [outline:none] bg-gainsboro self-stretch h-14 relative rounded-xl min-w-[167px] z-[2]"
              type="text"
            />
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-row items-start justify-start gap-[22px] mq850:flex-wrap">
        <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
          <div class="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-6">
            <div
              class="flex-1 relative text-base tracking-[-0.25px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
            >
              *mail
            </div>
          </div>
          <input
            class="[border:none] [outline:none] bg-gainsboro self-stretch h-14 relative rounded-xl min-w-[167px] z-[2]"
            type="text"
          />
        </div>
        <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
          <div class="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-6">
            <div
              class="flex-1 relative text-base tracking-[-0.25px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
            >
              *telefonní číslo
            </div>
          </div>
          <input
            class="[border:none] [outline:none] bg-gainsboro self-stretch h-14 relative rounded-xl min-w-[167px] z-[2]"
            type="text"
          />
        </div>
      </div>
      <div class="w-[279px] flex flex-col items-start justify-start">
        <div class="flex flex-row items-start justify-start py-0 px-6">
          <div
            class="relative text-base tracking-[-0.25px] leading-[27px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
          >
            zpráva
          </div>
        </div>
        <textarea
          class="[border:none] bg-gainsboro h-[141px] w-auto [outline:none] resize-none self-stretch relative rounded-xl z-[2]"
          rows="7"
          cols="21"
        />
      </div>
    </div>
    <button
      class="cursor-pointer [border:none] py-7 pr-[45px] pl-[46px] bg-material-theme-extended-deep-blue-signature-seed flex flex-row items-start justify-start z-[2] hover:bg-steelblue"
    >
      <div class="h-[70px] w-[146px] relative bg-schemes-secondary-container-100 hidden" />
      <div
        class="relative text-base tracking-[-0.25px] leading-[14px] font-roboto text-material-theme-white text-left inline-block min-w-[55px] z-[1]"
      >
        Odeslat
      </div>
    </button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GetInfoForm'
})
</script>
