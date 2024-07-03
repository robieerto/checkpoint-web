<template>
  <div
    class="w-[1920px] !m-[0] absolute top-[-229px] left-[5px] bg-schemes-inverse-on-surface flex flex-col items-start justify-start pt-[77px] pb-[86px] pr-[101px] pl-[348px] box-border gap-[116px] max-w-full text-justify text-45xl text-material-theme-extended-deep-blue-signature-seed font-roboto"
  >
    <div
      class="w-[1920px] h-[628px] relative bg-schemes-inverse-on-surface hidden max-w-full"
    />
    <div class="w-[1224px] flex flex-row items-start justify-center max-w-full">
      <h1
        class="m-0 relative text-inherit leading-[36px] font-semibold font-inherit z-[1] mq450:text-19xl mq450:leading-[22px] mq900:text-32xl mq900:leading-[29px]"
      >
        Co o Checkpointu říkají ostatní
      </h1>
    </div>
    <div
      class="self-stretch flex flex-col items-end justify-start gap-[80px] max-w-full text-9xl text-material-theme-black"
    >
      <div
        class="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1800:flex-wrap mq1800:justify-center"
      >
        <TestimonialSlide />
        <div
          class="w-[527px] flex flex-row items-start justify-start gap-[13px] min-w-[527px] max-w-full mq900:flex-wrap mq1350:min-w-full mq1800:flex-1"
        >
          <div
            class="h-48 w-48 relative rounded-[50%] bg-darkgray min-w-[192px] z-[1] mq900:flex-1"
          />
          <div
            class="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[209px] max-w-full"
          >
            <div
              class="self-stretch relative leading-[36px] z-[1] mq450:text-3xl mq450:leading-[29px]"
            >
              <p class="m-0">
                <b>Peter Mĺkvy, </b>
              </p>
              <p class="m-0">Grandhotel Budapešť,</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-[468px] h-[15px] flex flex-row items-start justify-end py-0 px-[45px] box-border max-w-full"
      >
        <div
          class="self-stretch flex-1 relative rounded-11xl bg-schemes-on-primary max-w-full z-[1]"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import TestimonialSlide from "./TestimonialSlide.vue";

  export default defineComponent({
    name: "TestimonialContent",
    components: { TestimonialSlide },
  });
</script>
