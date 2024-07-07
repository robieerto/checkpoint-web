<template>
  <div
    class="self-stretch bg-schemes-on-primary flex flex-row items-start justify-start pt-[50px] px-[62px] pb-[12px] box-border gap-auto z-[1] mt-[-3px] text-left text-45xl text-material-theme-extended-deep-blue-signature-seed font-roboto"
  >
    <div
      class="w-[673px] mq1225:pl-0 pl-[150px] flex flex-col items-start justify-start gap-[240px] mq1350:gap-[60px] mq1800:flex-1"
    >
      <div class="self-stretch flex flex-row items-start">
        <h1
          class="m-0 relative text-inherit leading-[59px] font-semibold font-inherit z-[2] mq900:text-32xl mq900:leading-[47px] mq450:text-19xl mq450:leading-[35px]"
        >
          Víme, co Vás trápí
        </h1>
      </div>
    </div>
  </div>

  <div
    class="self-stretch bg-schemes-on-primary flex flex-row items-start justify-start pt-[50px] px-[62px] pb-[82px] box-border gap-auto z-[1] mt-[-3px] text-left text-45xl text-material-theme-extended-deep-blue-signature-seed font-roboto"
  >
    <div
      class="flex flex-1 flex-col items-start justify-start gap-[17px] pt-[190px] text-right text-29xl"
    >
      <div
        class="self-stretch flex flex-row items-start justify-end py-0 pr-5 pl-0 max-w-[600px] box-border"
      >
        <h1
          class="m-0 flex-1 relative text-inherit leading-[44px] font-semibold font-inherit inline-block z-[2] mq900:text-19xl mq900:leading-[35px] mq450:text-10xl mq450:leading-[26px]"
        >
          <p class="m-0">Nedostatečný přehled</p>
          <p class="m-0">o probíhajících činnostech</p>
        </h1>
      </div>
      <div class="w-[704px] h-[150px] relative text-5xl text-material-theme-black">
        <div
          class="absolute top-[0px] left-[181.5px] w-[422.5px] h-[24.5px] z-[2] flex items-center justify-center"
        >
          <img
            class="w-full h-full z-[2] object-contain absolute left-[7px] top-[6px] [transform:scale(1.661)]"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div
          class="absolute top-[19px] left-[0px] tracking-[-0.25px] leading-[30px] flex items-center w-[547px] h-[131px] z-[3] mq450:text-lgi mq450:leading-[24px]"
        >
          Provoz hotelového zařízení je složitý řetězec úkolů, na kterých se podílí celý personál
          hotelu. Udržet si přehled o všech úkolech a kvalitě jejich plnění všemi zaměstnanci a
          členy týmu může být někdy náročné.
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-1 flex-col items-start justify-start max-w-[600px] gap-[157px] mq900:gap-[78px] mq450:gap-[39px] text-29xl"
    >
      <div class="flex flex-col items-start justify-start gap-[43px] mq900:gap-[21px]">
        <div class="w-[394px] flex flex-row items-start justify-start py-0 px-1 box-border">
          <h1
            class="m-0 flex-1 relative text-inherit leading-[44px] font-semibold font-inherit inline-block z-[2] mq900:text-19xl mq900:leading-[35px] mq450:text-10xl mq450:leading-[26px]"
          >
            Příliš dlouhá reakční doba
          </h1>
        </div>
        <div
          class="self-stretch flex flex-row items-start justify-start relative text-5xl text-material-theme-black"
        >
          <img
            class="h-[59.5px] w-[358.5px] absolute !m-[0] top-[-21px] left-[-76px] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/vector-4.svg"
          />
          <div
            class="h-[104px] flex-1 relative leading-[30px] inline-block z-[3] mq450:text-lgi mq450:leading-[24px]"
          >
            U tak složitých procesů, jako je provoz hotelového zařízení, nelze problémům nikdy zcela
            zabránit. Někdy se prostě vyskytne problém, který je třeba rychle a správně vyřešit.
          </div>
        </div>
      </div>
      <div
        class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border text-29xl"
      >
        <div class="flex-1 flex flex-col items-start justify-start gap-[37px] mq900:gap-[18px]">
          <div class="flex flex-row items-start justify-start relative">
            <img
              class="h-[59.5px] w-[358.5px] absolute !m-[0] mq1350:bottom-[-40.5px] bottom-[-20.5px] left-[-78px] object-contain z-[2]"
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
            <h1
              class="m-0 h-[86px] flex-1 relative text-inherit leading-[45px] font-semibold font-inherit flex items-center z-[3] mq900:text-19xl mq900:leading-[36px] mq450:text-10xl mq450:leading-[27px]"
            >
              Nedůstatek důležitých informací
            </h1>
          </div>
          <div
            class="self-stretch h-[130px] relative text-5xl leading-[30px] mq1350:mt-[60px] text-material-theme-black flex items-center shrink-0 z-[2] mq450:text-lgi mq450:leading-[24px]"
          >
            Abyste se mohli správně rozhodovat, potřebujete dostatek kvalitních informací. To může
            být při řízení hotelového zařízení někdy problém, protože většina důležitých procesů se
            z podstaty věci odehrává v reálném prostředí - ve fyzickém světě.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BotherSection'
})
</script>
