<template>
  <div
    class="w-full relative flex flex-col items-start justify-start gap-[574px] leading-[normal] tracking-[normal] mq900:gap-[143px] mq1350:gap-[287px]"
  >
    <main
      class="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full"
    >
      <section class="flex-1 flex flex-col items-end justify-start max-w-full">
        <FRAME2 /><Frame1 /><frame />
      </section>
    </main>
    <div
      class="self-stretch flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border max-w-full"
    >
      <div
        class="self-stretch flex flex-row items-start justify-start relative max-w-full"
      >
        <GroupFrame /><CheckpointFeatures />
      </div>
      <footer />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import FRAME2 from "../components/FRAME2.vue";
  import Frame1 from "../components/Frame1.vue";
  import Frame from "../components/Frame.vue";
  import GroupFrame from "../components/GroupFrame.vue";
  import CheckpointFeatures from "../components/CheckpointFeatures.vue";
  import Footer from "../components/Footer.vue";

  export default defineComponent({
    name: "Root",
    components: {
      FRAME2,
      Frame1,
      Frame,
      GroupFrame,
      CheckpointFeatures,
      Footer,
    },
  });
</script>
