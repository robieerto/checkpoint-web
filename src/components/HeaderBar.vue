<template>
  <nav
    class="bg-schemes-on-primary fixed w-full flex justify-center z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="flex flex-wrap items-center w-full justify-between pt-4 pb-2 mq900:px-[30px] px-[92px] max-w-[1530px]"
    >
      <img
        class="cursor-pointer mq950:w-[206px] w-[306px] !m-[0] left-[-3px]"
        loading="lazy"
        alt=""
        src="/group-4834.png"
        @click="
          () => {
            goToPage(router, '/')
            collapseMenu()
          }
        "
      />

      <button
        id="navbar-toggle"
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full md:hidden bg-schemes-on-primary"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        @click="isMenuExpanded = !isMenuExpanded"
      >
        <span class="sr-only">Open main menu</span>
        <img v-if="!isMenuExpanded" class="w-[406px]" loading="lazy" alt="" src="/menu.svg" />
        <img v-else class="w-[406px]" loading="lazy" alt="" src="/close.svg" />
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-sticky">
        <div
          class="flex flex-col items-center md:flex-row md:item-start my-3 md:mt-0 justify-end max-w-full gap-[19px]"
        >
          <button
            class="cursor-pointer [border:none] rounded-medium py-[12px] px-[42px] mq450:px-[26px] bg-material-theme-extended-deep-blue-signature-light-color-container hover:bg-lightsteelblue"
            @click="
              () => {
                goToPage(router, '/reservation')
                collapseMenu()
              }
            "
          >
            <div
              class="flex-1 text-2xl font-semibold tracking-[0.2px] relative text-schemes-on-primary-container text-center z-[1]"
            >
              Rezervovat ukázku
            </div>
          </button>
          <button
            class="cursor-pointer [border:none] rounded-medium py-[12px] px-[42px] mq450:px-[26px] bg-schemes-secondary-container hover:bg-wheat"
            @click="
              () => {
                goToPage(router, '/getInformation')
                collapseMenu()
              }
            "
          >
            <div
              class="flex-1 text-2xl font-semibold tracking-[0.2px] relative text-schemes-on-primary-container text-center z-[1]"
            >
              Zjistit více
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { goToPage } from '../helpers'
import { useRouter } from 'vue-router'

const router = useRouter()

const isMenuExpanded = ref(false)

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})

function collapseMenu() {
  const navbar = document.getElementById('navbar-sticky')
  const navbarToggle = document.getElementById('navbar-toggle')
  if (!navbar?.classList.contains('hidden')) {
    navbarToggle?.click()
  }
}
</script>
