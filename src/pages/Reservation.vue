<template>
  <div
    class="w-full relative bg-material-theme-white flex flex-row items-start justify-start pt-[10px] pb-[62px] pr-9 pl-[127px] box-border gap-[106px] leading-[normal] tracking-[normal] text-left text-[64px] text-material-theme-extended-deep-blue-signature-seed font-roboto mq850:gap-[26px] mq850:pl-[31px] mq850:box-border mq1225:gap-[53px] mq1225:pl-[63px] mq1225:box-border mq1525:flex-wrap"
  >
    <div
      class="flex-1 flex flex-col items-start justify-start pt-[20px] max-w-full mq850:min-w-full"
    >
      <div class="flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
        <h1
          class="m-0 mb-5 flex-1 relative text-inherit leading-[53px] font-bold font-inherit inline-block max-w-full z-[1] mq850:text-[51px] mq850:leading-[42px] mq450:text-[38px] mq450:leading-[32px]"
        >
          Zarezervujte si ukázku a dozvíte se všechno co chcete vědet
        </h1>
      </div>
      <h3
        class="m-0 self-stretch relative text-[24px] tracking-[-0.25px] leading-[26px] font-normal font-inherit text-material-theme-black z-[1] mq450:text-[19px] mq450:leading-[21px]"
      >
        <p class="m-0">
          Vyplňte své kontaktní údaje níže a my se vám ozveme s návrhem na společnou schůzku, během
          které se dozvíte více podrobností o tom:
        </p>
        <ul class="m-0 font-inherit text-inherit pl-8">
          <li class="mb-0">Jak Checkpoint funguje a co umí</li>
          <li class="mb-0">Jak vám může pomoci pro vaše konkrétní potřeby</li>
          <li>Odpovědi na všechny vaše další otázky</li>
        </ul>
      </h3>
    </div>
    <ReservationForm />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ReservationForm from '../components/ReservationForm.vue'

export default defineComponent({
  name: 'ReservationPage',
  components: { ReservationForm }
})
</script>
