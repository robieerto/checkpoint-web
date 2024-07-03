<template>
  <footer
    class="self-stretch bg-schemes-inverse-on-surface flex flex-col items-start justify-end pt-[380px] pb-[23px] pr-[663px] pl-[664px] box-border gap-[11px] max-w-full z-[4] mt-[-523px] text-justify text-13xl text-material-theme-black font-roboto mq900:pl-[166px] mq900:pr-[165px] mq900:pb-5 mq900:box-border mq1350:pl-[332px] mq1350:pr-[331px] mq1350:box-border"
  >
    <div
      class="w-[1920px] h-[670px] relative bg-schemes-inverse-on-surface hidden max-w-full"
    />
    <div
      class="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1.5"
    >
      <h1
        class="m-0 relative text-inherit leading-[36px] font-semibold font-inherit z-[5] mq900:text-7xl mq900:leading-[29px] mq450:text-lgi mq450:leading-[22px]"
      >
        Dávame fyzickému světu digitálni rozměr
      </h1>
    </div>
    <div
      class="w-[419.7px] flex flex-row items-start justify-start pt-0 px-2 pb-[12.2px] box-border max-w-full"
    >
      <img
        class="h-[66.8px] flex-1 relative max-w-full overflow-hidden z-[5]"
        loading="lazy"
        alt=""
        src="/group-4674.svg"
      />
    </div>
    <div class="w-[550px] flex flex-row items-start justify-center max-w-full">
      <div
        class="flex flex-row items-start justify-start gap-[28px] mq900:flex-wrap"
      >
        <img class="h-[62px] w-[62px] relative z-[5]" loading="lazy" alt="" />
        <div class="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <img
            class="w-12 h-12 relative overflow-hidden shrink-0 z-[5]"
            loading="lazy"
            alt=""
            src="/social-icons.svg"
          />
        </div>
      </div>
    </div>
    <div
      class="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full text-left text-9xl text-material-theme-extended-deep-blue-signature-seed"
    >
      <h2
        class="m-0 h-[51px] w-[332px] relative text-inherit leading-[36px] font-normal font-inherit flex items-center shrink-0 max-w-full z-[5] mq450:text-3xl mq450:leading-[29px]"
      >
        Copyright © ofrules 2024
      </h2>
    </div>
  </footer>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Footer",
  });
</script>
