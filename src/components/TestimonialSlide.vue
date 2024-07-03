<template>
  <div
    class="w-[768px] flex flex-row items-end justify-start gap-[13px] min-w-[768px] max-w-full text-justify text-9xl text-material-theme-black font-roboto mq1350:flex-wrap mq1350:min-w-full mq1800:flex-1"
    :style="testimonialSlideStyle"
  >
    <div
      class="h-[218px] w-48 flex flex-col items-start justify-end pt-0 px-0 pb-[26px] box-border min-w-[192px] mq1350:flex-1"
    >
      <div
        class="self-stretch flex-1 relative rounded-[50%] bg-darkgray z-[1]"
      />
    </div>
    <div
      class="flex-1 flex flex-row items-start justify-start relative min-w-[366px] max-w-full mq900:min-w-full"
    >
      <div
        class="h-[86px] w-[322px] absolute !m-[0] top-[-53px] left-[0px] leading-[36px] flex items-center z-[1] mq450:text-3xl mq450:leading-[29px]"
      >
        <span class="w-full">
          <p class="m-0">
            <b>Janka Referencoidná, </b>
          </p>
          <p class="m-0">Bestreviews,</p>
        </span>
      </div>
      <blockquote
        class="m-0 h-[163px] flex-1 relative text-xl leading-[36px] flex italic items-center max-w-full z-[2] mq450:text-base mq450:leading-[29px]"
      >
        “Checkpoint sa u nás v hoteli veľmi osvedčil. Pomohol nám ušetriť
        náklady a zvýšiť pohodlie našich klientov bez potreby navýšenia
        personálu.”
      </blockquote>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "TestimonialSlide",
    props: {
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      testimonialSlideStyle(): CSS.Properties {
        return {
          width: this.propWidth,
          minWidth: this.propMinWidth,
          padding: this.propPadding,
        };
      },
    },
  });
</script>
