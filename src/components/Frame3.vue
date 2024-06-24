<template>
  <div
    class="h-28 w-[294px] flex flex-row items-end justify-start gap-[15px] text-left text-5xl text-material-theme-black font-roboto"
    :style="frameDivStyle"
  >
    <div class="self-stretch w-28 relative rounded-[50%] bg-darkgray z-[2]" />
    <div
      class="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[26px]"
      :style="infoStyle"
    >
      <h3
        class="m-0 self-stretch relative text-inherit tracking-[-0.25px] leading-[23px] z-[2] font-inherit mq450:text-lgi mq450:leading-[18px]"
      >
        <span class="font-medium">{{peterHoteloid}}</span>
        <b> </b>
        <i class="font-medium">{{hotelResort}}</i>
      </h3>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Frame3",
    props: {
      peterHoteloid: { type: String },
      hotelResort: { type: String },
      propGap: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      frameDivStyle(): CSS.Properties {
        return {
          gap: this.propGap,
          width: this.propWidth,
        };
      },
      infoStyle(): CSS.Properties {
        return {
          padding: this.propPadding,
        };
      },
    },
  });
</script>
