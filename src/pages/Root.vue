<template>
  <div
    class="w-full relative flex flex-col items-center justify-start leading-[normal] tracking-[normal]"
  >
    <LandingSection />
    <BotherSection />
    <ImmersiveSection />
    <section
      class="self-stretch bg-schemes-on-primary flex flex-col items-center justify-start pt-[59px] pb-[39px] pr-[23px] pl-5 box-border gap-[135px] max-w-full mq900:gap-[34px] mq900:pt-[25px] mq900:pb-3 mq900:box-border mq1350:gap-[67px] mq1350:pt-[38px] mq1350:pb[25px] mq1350:box-border mq450:gap-[17px]"
    >
      <!-- <CaseStudySection /> -->
      <ContactLandingSection />
    </section>
    <!-- <section class="self-stretch flex flex-col items-start justify-start max-w-full">
      <div
        class="flex flex-row items-start justify-start pt-0 pb-[469px] pr-0 box-border max-w-full text-justify text-45xl text-material-theme-extended-deep-blue-signature-seed font-roboto mq900:pb-[198px] mq900:box-border mq1350:pb-[305px] mq1350:box-border"
      ></div>
      <TestimonialsSection />
      <BenefitsSection />
    </section> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LandingSection from '../components/LandingSection.vue'
import BotherSection from '../components/BotherSection.vue'
import ImmersiveSection from '../components/ImmersiveSection.vue'
import CaseStudySection from '../components/CaseStudySection.vue'
import ContactLandingSection from '../components/ContactLandingSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import BenefitsSection from '../components/BenefitsSection.vue'
import FooterSection from '../components/FooterSection.vue'

export default defineComponent({
  name: 'RootPage',
  components: {
    LandingSection,
    CaseStudySection,
    ContactLandingSection,
    TestimonialsSection,
    BenefitsSection,
    FooterSection
  }
})
</script>
