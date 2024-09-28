<template>
  <div class="mqMobile:flex mqMobile:justify-center">
    <div
      class="max-w-[1600px] relative bg-material-theme-white flex flex-row items-start justify-start pb-[62px] pr-9 pl-[127px] box-border gap-[56px] leading-[normal] tracking-[normal] text-left text-material-theme-extended-deep-blue-signature-seed font-roboto mq850:gap-[26px] mq850:pl-[31px] mq850:box-border mq1225:gap-[53px] mq1225:pl-[63px] mq1225:box-border mq1525:flex-wrap"
    >
      <div
        class="flex-1 flex flex-col items-start justify-start pt-[60px] mq900:pt-[30px] max-w-full mq850:min-w-full"
      >
        <div class="flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
          <h1
            class="m-0 mb-10 mq900:mb-8 flex-1 relative leading-[48px] font-bold font-inherit inline-block max-w-full z-[1] text-45xl mq900:text-32xl mq450:text-19xl mq450:leading-[36px]"
          >
            Zjistěte více informací
          </h1>
        </div>
        <h3
          class="m-0 self-stretch relative text-10xl tracking-[-0.25px] leading-[26px] text-material-theme-black z-[1] font-inherit mq450:text-[19px] mq450:leading-[21px]"
        >
          <span>Máte další otázky? Napište nám napřímo na </span>
          <b>checkpoint@ofrules.com</b>
          <span> nebo vyplňte formulář. Odpovídáme rychlostí světla.</span>
        </h3>
      </div>
      <GetInfoForm />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GetInfoForm from '../components/GetInfoForm.vue'

export default defineComponent({
  name: 'GetInfo',
  components: { GetInfoForm }
})
</script>
