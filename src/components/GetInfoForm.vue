<template>
  <form
    @submit.prevent="submitForm"
    class="m-0 shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-11xl bg-schemes-inverse-on-surface flex flex-col items-center justify-start pt-[67px] px-[101px] pb-[40px] box-border gap-[25px] min-w-[793px] max-w-full z-[1] mq850:pt-11 mq850:px-[50px] mq850:pb-10 mq850:box-border mq1225:min-w-full mq450:gap-[22px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1525:flex-1"
  >
    <h1
      v-if="state.success"
      class="m-0 mb-5 flex-1 relative text-32xl font-semibold font-roboto text-material-theme-extended-deep-blue-signature-seed text-center inline-block max-w-full z-[1] mq450:leading-[22px]"
    >
      Váš dotaz jsme zaznamenali!
    </h1>
    <h1
      v-else-if="state.fail"
      class="m-0 mb-5 flex-1 relative text-32xl font-semibold font-roboto text-material-theme-extended-deep-blue-signature-seed text-center inline-block max-w-full z-[1] mq450:leading-[22px]"
    >
      Nastala neočekávaná chyba
    </h1>
    <div v-if="!state.success && !state.fail" class="w-[580px] flex flex-col gap-[20px] max-w-full">
      <div class="self-stretch flex flex-col items-start justify-start max-w-full">
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[22px] mq850:flex-wrap"
        >
          <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
            <div class="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-6">
              <div
                class="flex-1 relative text-base tracking-[-0.25px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
              >
                *jméno
              </div>
            </div>
            <input
              class="input-text-size [border:none] [outline:none] bg-gainsboro self-stretch h-14 relative rounded-xl min-w-[167px] z-[2]"
              type="text"
              v-model="formData.name"
            />
            <div v-if="state.emptyName" class="w-full">
              <p class="font-roboto text-base text-red-400">*jméno je povinní</p>
            </div>
          </div>
          <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
            <div class="self-stretch flex flex-row items-start justify-start py-0 pl-6">
              <div
                class="flex-1 relative text-base tracking-[-0.25px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
              >
                název hotela (společnost)
              </div>
            </div>
            <input
              class="input-text-size [border:none] [outline:none] bg-gainsboro self-stretch h-14 relative rounded-xl min-w-[167px] z-[2]"
              type="text"
              v-model="formData.company"
            />
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-row items-start justify-start gap-[22px] mq850:flex-wrap">
        <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
          <div class="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-6">
            <div
              class="flex-1 relative text-base tracking-[-0.25px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
            >
              *mail
            </div>
          </div>
          <input
            class="input-text-size [border:none] [outline:none] bg-gainsboro self-stretch h-14 relative rounded-xl min-w-[167px] z-[2]"
            type="text"
            v-model="formData.email"
          />
        </div>
        <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
          <div class="self-stretch flex flex-row items-start justify-start py-0 pr-7 pl-6">
            <div
              class="flex-1 relative text-base tracking-[-0.25px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
            >
              *telefonní číslo
            </div>
          </div>
          <input
            class="input-text-size [border:none] [outline:none] bg-gainsboro self-stretch h-14 relative rounded-xl min-w-[167px] z-[2]"
            type="text"
            v-model="formData.phone"
          />
        </div>
      </div>
      <div v-if="state.emptyMailOrPhone" class="w-full">
        <p class="font-roboto text-base text-red-400">*email nebo telefón jsou povinní</p>
      </div>
      <div v-else-if="state.errorMail" class="w-full">
        <p class="font-roboto text-base text-red-400">*email je v nesprávném formátu</p>
      </div>
      <div class="flex flex-col items-start justify-start">
        <div class="flex flex-row items-start justify-start py-0 px-6">
          <div
            class="relative text-base tracking-[-0.25px] leading-[27px] font-roboto font-bold text-schemes-on-primary-container text-left z-[2]"
          >
            zpráva
          </div>
        </div>
        <textarea
          class="pt-4 input-text-size [border:none] bg-gainsboro self-stretch h-[141px] w-auto [outline:none] resize-none relative rounded-xl z-[2]"
          rows="7"
          cols="21"
          v-model="formData.message"
        />
      </div>
    </div>
    <button
      v-if="!state.success && !state.fail"
      class="cursor-pointer [border:none] py-7 pr-[45px] pl-[46px] bg-material-theme-extended-deep-blue-signature-seed flex flex-row items-start justify-start z-[2] hover:bg-steelblue"
    >
      <div class="h-[70px] w-[146px] relative bg-schemes-secondary-container-100 hidden" />
      <div
        class="relative text-base tracking-[-0.25px] leading-[14px] font-roboto text-material-theme-white text-left inline-block min-w-[55px] z-[1]"
      >
        Odeslat
      </div>
    </button>
  </form>
</template>

<style scoped>
.input-text-size {
  font-size: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>

<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { validateEmail } from '@/helpers'

const state = reactive({
  emptyName: false,
  emptyMailOrPhone: false,
  errorMail: false,
  success: false,
  fail: false
})

const formData = reactive({
  access_key: '49d2b29b-a01a-4a61-b8f0-7693493d5631',
  information: 'Otázka na informáciu',
  name: '',
  company: '',
  email: '',
  phone: '',
  message: ''
})

const submitForm = async () => {
  let error = false
  state.emptyName = false
  state.emptyMailOrPhone = false
  state.errorMail = false
  state.success = false
  state.fail = false

  if (formData.email.length == 0 && formData.phone.length == 0) {
    state.emptyMailOrPhone = true
    state.errorMail = false
    error = true
  } else if (formData.email.length && !validateEmail(formData.email)) {
    state.emptyMailOrPhone = false
    state.errorMail = true
    error = true
  }
  if (formData.name.length == 0) {
    state.emptyName = true
    error = true
  }
  if (error) {
    return
  }

  try {
    const response = await axios.post('https://api.web3forms.com/submit', formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    state.success = true
    console.log('Form submitted:', response.data)
  } catch (error) {
    state.fail = true
    console.error('Error submitting form:', error)
  }
}
</script>
