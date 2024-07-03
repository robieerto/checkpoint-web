<template>
  <div
    class="w-[379px] flex flex-col items-start justify-start gap-[19px] min-w-[379px] max-w-full text-justify text-29xl text-material-theme-extended-deep-blue-signature-seed font-roboto mq1350:min-w-full mq1800:flex-1"
    :style="availabilityContentStyle"
  >
    <img
      class="w-32 h-32 relative object-contain z-[4]"
      loading="lazy"
      alt=""
      :src="group4748"
    />
    <div
      class="self-stretch flex flex-col items-start justify-start max-w-full"
    >
      <h1
        class="m-0 relative text-inherit leading-[36px] font-semibold font-inherit z-[1] mq450:text-10xl mq450:leading-[22px] mq900:text-19xl mq900:leading-[29px]"
      >
        {{vdyPoRuce}}
      </h1>
      <div
        class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full mt-[-10px] text-left text-xl text-material-theme-black"
      >
        <div
          class="h-[108px] flex-1 relative leading-[22px] flex items-center max-w-full z-[1] mq450:text-base mq450:leading-[18px]"
        >
          {{checkpointJeVmKDispozici7}}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "AvailabilityContent",
    props: {
      group4748: { type: String },
      vdyPoRuce: { type: String },
      checkpointJeVmKDispozici7: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propFlex: { type: String },
    },
    computed: {
      availabilityContentStyle(): CSS.Properties {
        return {
          width: this.propWidth,
          minWidth: this.propMinWidth,
          flex: this.propFlex,
        };
      },
    },
  });
</script>
