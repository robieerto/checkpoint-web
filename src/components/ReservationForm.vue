<template>
  <form
    @submit.prevent="submitForm"
    class="m-0 shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] mt-[54px] mq1225:mt-[20px] rounded-medium bg-material-theme-extended-deep-blue-signature-seed flex flex-col items-center justify-start pt-[67px] px-[51px] pb-[40px] box-border gap-[25px] max-w-[600px] z-[1] mq850:pt-11 mq850:px-[50px] mq850:pb-10 mq850:box-border mq1225:min-w-full mq450:gap-[22px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1525:flex-1"
  >
    <h1
      v-if="state.success"
      class="m-0 mb-5 flex-1 relative text-32xl font-semibold font-roboto text-schemes-on-primary text-center inline-block max-w-full z-[1] mq450:leading-[22px]"
    >
      Vaši žádost jsme zaznamenali!
    </h1>
    <h1
      v-else-if="state.fail"
      class="m-0 mb-5 flex-1 relative text-32xl font-semibold font-roboto text-schemes-on-primary text-center inline-block max-w-full z-[1] mq450:leading-[22px]"
    >
      Nastala neočekávaná chyba
    </h1>
    <div v-if="!state.success && !state.fail" class="w-[580px] flex flex-col gap-[20px] max-w-full">
      <div class="self-stretch flex flex-col items-start justify-start max-w-full">
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[22px] mq850:flex-wrap"
        >
          <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
            <input
              class="input-text-size box-border border-[1px] border-solid border-material-theme-black [outline:none] self-stretch h-14 relative rounded-medium min-w-[167px] z-[2]"
              type="text"
              placeholder="*Jméno a společnost"
              v-model="formData.name"
            />
            <div v-if="state.emptyName" class="w-full">
              <p class="font-roboto mb-0 text-2xl text-red-400">*Jméno a společnost je povinní</p>
            </div>
          </div>
        </div>
      </div>
      <div class="self-stretch flex flex-row items-start justify-start gap-[22px] mq850:flex-wrap">
        <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
          <input
            class="input-text-size box-border border-[1px] border-solid border-material-theme-black [outline:none] self-stretch h-14 relative rounded-medium min-w-[167px] z-[2]"
            type="text"
            placeholder="*Email"
            v-model="formData.email"
          />
        </div>
      </div>
      <div class="self-stretch flex flex-row items-start justify-start gap-[22px] mq850:flex-wrap">
        <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
          <input
            class="input-text-size box-border border-[1px] border-solid border-material-theme-black [outline:none] self-stretch h-14 relative rounded-medium min-w-[167px] z-[2]"
            type="text"
            placeholder="*Telefonní číslo"
            v-model="formData.phone"
          />
        </div>
      </div>
      <div v-if="state.emptyMailOrPhone" class="w-full">
        <p class="font-roboto my-0 text-2xl text-red-400">
          *Email nebo telefonní čislo jsou povinní
        </p>
      </div>
      <div v-else-if="state.errorMail" class="w-full">
        <p class="font-roboto my-0 text-2xl text-red-400">*Email je v nesprávném formátu</p>
      </div>
      <div class="flex flex-col items-start justify-start">
        <textarea
          class="pt-4 input-text-size font-roboto box-border border-[1px] border-solid border-material-theme-black self-stretch h-[112px] w-auto [outline:none] resize-none relative rounded-medium z-[2]"
          placeholder="Poznámka (cokoliv důležité)"
          v-model="formData.message"
        />
      </div>
    </div>
    <div class="w-full flex justify-end">
      <button
        v-if="!state.success && !state.fail"
        class="cursor-pointer [border:none] rounded-medium py-[12px] px-[62px] mq450:px-[26px] bg-schemes-secondary-container hover:bg-wheat"
      >
        <div class="h-[70px] w-[146px] relative bg-schemes-secondary-container-100 hidden" />
        <div
          class="flex-1 text-2xl font-semibold tracking-[0.2px] relative text-schemes-on-primary-container text-center z-[1]"
        >
          Odeslat
        </div>
      </button>
    </div>
  </form>
</template>

<style scoped>
.input-text-size {
  font-size: 16px;
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
  reservation: 'Rezervácia ukážky',
  name: '',
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
