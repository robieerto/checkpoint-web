<template>
  <div
    :class="{
      'bother-background': isDesktop,
      'overflow-hidden max-w-full flex flex-row items-start justify-start pt-[30px] mq1350:px-[46px] pb-[82px] box-border gap-[110px] mq900:gap-0 z-[1] mt-[-3px] text-left text-45xl text-material-theme-extended-deep-blue-signature-seed font-roboto mq900:pb-[53px] mq900:box-border mq450:pb-[34px] mq450:box-border mq1800:flex-wrap': true
    }"
  >
    <div
      class="max-w-[550px] flex flex-col items-start justify-start gap-[195px] mq1185:gap-[150px] mq900:gap-[60px] mq1800:flex-1"
    >
      <div class="self-stretch flex flex-row items-start justify-start">
        <h1
          class="m-0 relative italic leading-[59px] font-semibold text-19xl z-[2] mq900:text-32xl mq900:leading-[47px] mq450:text-19xl mq450:leading-[35px]"
        >
          Víme, co Vás trápí...
        </h1>
      </div>
      <div
        class="flex flex-1 flex-col items-start justify-start gap-[17px] mq900:text-left text-left text-29xl mq900:mb-[40px]"
      >
        <div class="self-stretch flex flex-row mq900:justify-start justify-start box-border">
          <div
            class="self-stretch flex flex-row items-start mq900:justify-start justify-end py-0 pl-0 max-w-[600px] box-border"
          >
            <h1
              class="m-0 flex-1 relative text-inherit leading-[44px] font-semibold font-inherit inline-block z-[2] mq900:text-19xl mq900:leading-[35px] mq450:text-10xl mq450:leading-[26px]"
            >
              <p class="m-0">Nedostatečný přehled</p>
              <p class="m-0">o probíhajících činnostech</p>
            </h1>
          </div>
        </div>
        <div class="relative text-5xl text-material-theme-black">
          <img
            class="mq900:hidden absolute !m-[0] right-[-142.5px] w-[522.5px] h-[34.5px] object-contain"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
          <div
            class="left-[0px] h-[180px] tracking-[-0.25px] leading-[30px] flex items-center z-[3] mq450:text-lgi mq450:leading-[24px]"
          >
            Provoz hotelového zařízení je složitý řetězec úkolů, na kterých se podílí celý personál
            hotelu. Udržet si přehled o všech úkolech a kvalitě jejich plnění všemi zaměstnanci a
            členy týmu může být někdy náročné.
          </div>
        </div>
      </div>
    </div>
    <div
      class="max-w-[550px] flex flex-col items-start justify-start pt-[97px] px-0 pb-0 box-border mq1185:pt-[0px] mq900:box-border mq900:min-w-full mq1800:flex-1"
    >
      <div
        class="self-stretch flex flex-col items-start justify-start gap-[126px] mq900:gap-[78px] mq450:gap-[39px]"
      >
        <div
          class="flex flex-col items-start justify-start gap-[43px] mq900:gap-[21px] mq900:mb-[40px]"
        >
          <div class="flex flex-row items-start justify-start py-0 box-border">
            <h1
              class="m-0 flex-1 relative leading-[44px] font-semibold inline-block z-[2] text-29xl mq900:leading-[35px] mq450:text-10xl mq450:leading-[26px]"
            >
              Neuspokojivá komunikace s hosty
            </h1>
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-start relative text-5xl text-material-theme-black"
          >
            <img
              class="mq900:hidden h-[59.5px] w-[358.5px] absolute !m-[0] top-[-21px] left-[-76px] object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
            <div
              class="h-[104px] flex-1 relative leading-[30px] inline-block z-[3] mq450:text-lgi mq450:leading-[24px]"
            >
              Udržet dostatečnou komunikaci s hosty během jejich pobytu není vždy snadné. Může se
              snadno stát, že vám hosté nedají vědět svá přání či požadavky nebo nevyužijí vaše
              další doplňkové služby.
            </div>
          </div>
        </div>
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 pr-0 box-border text-29xl"
        >
          <div
            class="flex-1 flex flex-col items-start justify-start gap-[37px] mq900:gap-[18px] mq900:mb-[80px]"
          >
            <div class="flex flex-row items-start justify-start relative">
              <img
                class="mq900:hidden h-[59.5px] w-[358.5px] absolute !m-[0] mq1350:bottom-[-40.5px] bottom-[-10.5px] left-[-77px] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/vector-5.svg"
              />
              <h1
                class="m-0 h-[86px] mq900:h-[27px] flex-1 relative text-inherit leading-[45px] font-semibold font-inherit flex items-center z-[3] mq900:text-19xl mq900:leading-[36px] mq450:text-10xl mq450:leading-[27px]"
              >
                Nedůstatek důležitých informací
              </h1>
            </div>
            <div
              class="self-stretch h-[130px] relative text-5xl leading-[30px] mq1350:mt-[40px] text-material-theme-black flex items-center shrink-0 z-[2] mq450:text-lgi mq450:leading-[24px]"
            >
              Abyste se mohli správně rozhodovat, potřebujete dostatek kvalitních informací. To může
              být při řízení hotelového zařízení někdy problém, protože většina důležitých procesů
              se z podstaty věci odehrává v reálném prostředí - ve fyzickém světě.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bother-background {
  background-image: url('/backgroundshapes1.png');
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
}
</style>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isDesktop = ref(window.innerWidth > 900)

const updateIsDesktop = () => {
  isDesktop.value = window.innerWidth > 900
}

onMounted(() => {
  window.addEventListener('resize', updateIsDesktop)
  updateIsDesktop() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('resize', updateIsDesktop)
})
</script>
