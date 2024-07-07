<template>
  <div
    class="flex flex-row items-start justify-center pt-[40px] pb-[30px] pr-0 box-border max-w-full"
  >
    <form
      @submit.prevent="submit"
      class="m-0 max-w-[800px] flex flex-col items-center justify-start gap-[15.5px] max-w-full"
    >
      <div
        class="self-stretch flex flex-col items-center justify-center gap-[37px] max-w-full mq900:gap-[18px]"
      >
        <div
          class="self-stretch flex flex-row items-center justify-center py-0 px-[58px] box-border max-w-full mq900:pl-[29px] mq900:pr-[29px] mq900:box-border"
        >
          <h1
            class="m-0 flex-1 relative text-45xl font-semibold font-roboto text-material-theme-extended-deep-blue-signature-seed text-center inline-block max-w-full z-[1] mq900:text-32xl mq900:leading-[29px] mq450:text-19xl mq450:leading-[22px]"
          >
            Zůstaňme v kontaktu
          </h1>
        </div>
        <div
          class="self-stretch relative text-5xl tracking-[-0.25px] leading-[23px] font-roboto text-material-theme-black text-center z-[1] mq450:text-lgi mq450:leading-[18px]"
        >
          Přihlaste se do nášho newsletteru a zůstaňte informováni o tom jak pomáháme hotelom růst.
          Bez jakýchkoli závazků.
        </div>
      </div>
      <div
        v-if="state.success"
        class="mt-[20px] shadow-[6px_12px_15px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-material-theme-extended-deep-blue-signature-seed flex flex-col items-start justify-start px-[157px] py-[23px] box-border gap-[53.5px] max-w-full z-[6] mq900:box-border mq1350:pl-[78px] mq1350:pr-[78px] mq1350:box-border"
      >
        <h1
          class="m-0 flex-1 relative text-32xl font-semibold font-roboto text-schemes-on-primary text-center inline-block max-w-full z-[1] mq450:leading-[22px]"
        >
          Byli jste úspěšně přihlášeni!
        </h1>
      </div>
      <div v-if="!state.success" class="self-stretch flex flex-col items-center justify-center">
        <div
          class="self-stretch flex flex-row items-center justify-center gap-[22px] mq850:flex-wrap"
        >
          <div class="flex-1 flex flex-col items-center justify-center gap-[5px] min-w-[181px]">
            <div
              class="box-border row flex flex-row items-start justify-start py-[23px] px-[27px] w-full z-[1] border-[1px] border-solid border-material-theme-black"
            >
              <input
                class="input-text-size [border:none] [outline:none] font-roboto text-base bg-[transparent] relative text-material-theme-black text-left flex items-center p-0 z-[2]"
                placeholder="*email"
                type="text"
                v-model="formData.email"
              />
            </div>
            <div v-if="state.emptyMail" class="w-full">
              <p class="font-roboto text-base text-red-400">*email je povinný</p>
            </div>
            <div v-else-if="state.errorMail" class="w-full">
              <p class="font-roboto text-base text-red-400">*email je v nesprávném formátu</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!state.success" class="self-stretch flex flex-col items-start justify-start">
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[22px] mq850:flex-wrap"
        >
          <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
            <div
              class="box-border row flex flex-row items-start justify-start py-[23px] px-[27px] w-full z-[1] border-[1px] border-solid border-material-theme-black"
            >
              <input
                class="input-text-size [border:none] [outline:none] font-roboto text-base bg-[transparent] relative text-material-theme-black text-left flex items-center p-0 z-[2]"
                placeholder="jméno"
                type="text"
                v-model="formData.name"
              />
            </div>
          </div>
          <div class="flex-1 flex flex-col items-start justify-start gap-[5px] min-w-[181px]">
            <div
              class="box-border row flex flex-row items-start justify-start py-[23px] px-[27px] w-full z-[1] border-[1px] border-solid border-material-theme-black"
            >
              <input
                class="input-text-size [border:none] [outline:none] font-roboto text-base bg-[transparent] relative text-material-theme-black text-left flex items-center p-0 z-[2]"
                placeholder="*společnost"
                type="text"
                v-model="formData.company"
              />
            </div>
            <div v-if="state.errorCompany" class="w-full">
              <p class="font-roboto text-base text-red-400">*společnost je povinná</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!state.success" class="flex flex-row items-center justify-end gap-[19px] w-full">
        <button
          class="cursor-pointer [border:none] py-7 px-[34px] bg-schemes-secondary-container shadow-[4px_6px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-wheat"
        >
          <div
            class="relative text-base tracking-[-0.25px] font-roboto text-schemes-on-primary-container text-left inline-block min-w-[77px] z-[1]"
          >
            Přihlásit se
          </div>
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.input-text-size {
  width: 100%;
  font-size: 20px;
}
</style>

<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { validateEmail } from '@/helpers'

const state = reactive({
  emptyMail: false,
  errorMail: false,
  errorCompany: false,
  success: false
})

const formData = reactive({
  email: '',
  name: '',
  company: ''
})

async function submit() {
  let error = false
  if (formData.email.length == 0) {
    state.emptyMail = true
    state.errorMail = false
    error = true
  } else if (!validateEmail(formData.email)) {
    state.emptyMail = false
    state.errorMail = true
    error = true
  }
  if (formData.company.length == 0) {
    state.errorCompany = true
    error = true
  }
  if (error) {
    return
  }

  state.success = true
  console.log(
    sendPostRequest(
      'https://connect.mailerlite.com/api/subscribers',
      {
        email: formData.email,
        fields: {
          name: formData.name,
          company: formData.company
        }
      },
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZDM4ZmIyYTY3MDI0ZmFmY2VjZjVmYmRjMmIxZmY3ODZkOTc0OGY1NjNlZTdlM2ZiZmJlMzRkNzM1OTY5NDQyYWI5NjhlZWEwYjlmZGIzZjEiLCJpYXQiOjE3MjAyNzEyMzQuMDUwNzYyLCJuYmYiOjE3MjAyNzEyMzQuMDUwNzY0LCJleHAiOjQ4NzU5NDQ4MzQuMDQ4MDc3LCJzdWIiOiI5NzIzNzQiLCJzY29wZXMiOltdfQ.teAlloCzSaA9nOQZJbbyssQ1Sr_i2XfcX3IcarurmeG_xTyNK62PhpusPxjn6oLhQyrUisvh8m7RyypkBqVdAno-jEGwgqtjYoJmViAPHHf_sTd_8ZD9EBvhil-pIszmAkLFdTF8xtm8HQ2Wk8kqbS9yHudgpx-Bb1KB_YLzjrqSi3-IGH2TnEwYGkqiymGORN87QT__l8A5eqBh0j8bX8lW8pi2C7QtqAw_S6sUz8mBze7-FRTg4PvG5QakTG6VsuUs2N9aNPMquL9MqkZFv6w75iDCIABddnTJxNM7Fg6ZGf0hEXJ82CYS4XcywToiaPsB_gTrFZDhHETMkwthF8SaMMAfZg78bW9xLQmwsOWLeBZizxczlMMbVUYhYqSEZdZ1C15tkNvArLa7lcM3UTVlgxs9SLEArohRK4LT4eoOGw6369s2U0vMY50SXgEZO1dSroDd25hqJLoUY8bdPuhmJiM_ErFXpVG5hWsaZgsk9Mzt2FrJv4gUpm94_GOBVRZUg30AtNxtrHLcsWGn5trFLjy8KucK1sGDsDhoPn1gs-E6zESOb7WEljpQYwkl5JySBLCWmXIhuv8B9KnbQWzQ1Cu95FDglziDs_jOa993VhJNCVsZRaYQJtQhZ_q1wf7wVvc6GGoH40aboQC5LAmD4csveSfIZBvQP5kOVGo'
    )
  )
}

async function sendPostRequest(url: string, data: object, token: string) {
  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    console.log('Data submitted successfully:', response.data)
    return response.data
  } catch (error) {
    console.error('Error submitting data:', error)
    throw error
  }
}
</script>
