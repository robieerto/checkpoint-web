<template>
  <nav
    class="bg-schemes-on-primary fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="flex flex-wrap items-center justify-between pt-4 pb-2 mq900:px-[30px] pl-[92px] pr-[62px]"
    >
      <img
        class="cursor-pointer mq950:w-[206px] w-[306px] !m-[0] left-[-3px]"
        loading="lazy"
        alt=""
        src="/group-4737.svg"
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
        <svg v-else viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-sticky">
        <div
          class="flex flex-col items-center my-5 md:flex-row md:item-start md:mt-0 justify-end max-w-full gap-[29px]"
        >
          <button
            class="cursor-pointer [border:none] pt-[18px] px-[26px] pb-[17px] bg-material-theme-extended-deep-blue-signature-light-color-container flex-1 shadow-[7px_9px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start hover:bg-lightsteelblue"
            @click="
              () => {
                goToPage(router, '/reservation')
                collapseMenu()
              }
            "
          >
            <a
              class="[text-decoration:none] flex-1 relative text-base tracking-[-0.25px] leading-[17px] font-roboto text-schemes-on-primary-container text-center z-[1]"
              >Rezervovat ukázku</a
            >
          </button>
          <button
            class="cursor-pointer [border:none] md:py-7 pt-[18px] pb-[17px] pl-[44px] pr-[24px] bg-schemes-secondary-container flex-[0.8298] shadow-[7px_9px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-start justify-start whitespace-nowrap hover:bg-wheat"
            @click="
              () => {
                goToPage(router, '/getInformation')
                collapseMenu()
              }
            "
          >
            <a
              class="[text-decoration:none] relative text-base tracking-[-0.25px] leading-[14px] font-roboto text-schemes-on-primary-container text-left inline-block min-w-[77px] z-[1]"
              >Zjistit více</a
            >
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
