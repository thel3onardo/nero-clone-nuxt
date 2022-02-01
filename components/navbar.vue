/* eslint-disable */
<template>
  <nav
    class="relative flex items-center xs:justify-end md:justify-center font-inter pt-8"
  >
    <div class="absolute left-0">
      <img
        src="https://uploads-ssl.webflow.com/5db2e8f6b44d610f91587fe2/5dd348d4e192cd1bd5b744b7_logo.svg"
        class="h-2/4"
      />
    </div>
    <ul class="items-center text-gray-700 xs:hidden md:flex">
      <li class="px-3">
        <a href="" class="hover:text-blue-400 transition duration-300">Home</a>
      </li>
      <li
        class="px-3"
        @mouseover="ServicePopupOpened = true"
        @mouseleave="ServicePopupOpened = false"
      >
        <a
          class="flex items-center hover:text-blue-400 cursor-pointer transition duration-300"
        >
          Services
          <span class="material-icons text-blue-400">expand_more</span>
        </a>
        <transition name="slideInBottom" appear>
          <div
            v-if="ServicePopupOpened"
            class="absolute bottom-0 top-full grid grid-cols-2 gap-4 rounded-xl shadow-lg text-gray-700 h-40 px-5 py-8 bg-white"
          >
            <div class="flex items-center w-52">
              <div>
                <span
                  class="material-icons px-3 text-purple-500"
                  style="font-size: 2rem"
                  >drive_file_rename_outline</span
                >
              </div>
              <div>
                <h3 class="font-semibold">Interface Design</h3>
                <p>Learn More</p>
              </div>
            </div>
            <div class="flex items-center w-52">
              <div>
                <span
                  class="material-icons px-3 text-indigo-400"
                  style="font-size: 2rem"
                  >gesture</span
                >
              </div>
              <div>
                <h3 class="font-semibold">Illustrations</h3>
                <p>Learn More</p>
              </div>
            </div>
            <div class="flex items-center w-52">
              <div>
                <span
                  class="material-icons px-3 text-green-400"
                  style="font-size: 2rem"
                  >water_drop</span
                >
              </div>
              <div>
                <h3 class="font-semibold">Branding</h3>
                <p>Learn More</p>
              </div>
            </div>
            <div class="flex items-center w-52">
              <div>
                <span
                  class="material-icons px-3 text-yellow-400"
                  style="font-size: 2rem"
                  >developer_board</span
                >
              </div>
              <div>
                <h3 class="font-semibold">Development</h3>
                <p>Learn More</p>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li
        class="px-3"
        @mouseover="CompanyPopupOpened = true"
        @mouseleave="CompanyPopupOpened = false"
      >
        <a
          class="flex items-center hover:text-blue-400 cursor-pointer transition duration-300"
        >
          Company
          <span class="material-icons text-blue-400">expand_more</span>
        </a>
        <transition name="slideInBottom" appear>
          <div
            v-if="CompanyPopupOpened"
            class="absolute bottom-0 top-full grid grid-cols-2 gap-4 rounded-xl shadow-lg text-gray-700 h-24 p-5 bg-white"
          >
            <div class="flex items-center w-52">
              <div>
                <span
                  class="material-icons px-3 text-purple-500"
                  style="font-size: 2rem"
                  >drive_file_rename_outline</span
                >
              </div>
              <div>
                <h3 class="font-semibold">Our Office</h3>
                <p>Learn More</p>
              </div>
            </div>
            <div class="flex items-center w-52">
              <div>
                <span
                  class="material-icons px-3 text-indigo-400"
                  style="font-size: 2rem"
                  >gesture</span
                >
              </div>
              <div>
                <h3 class="font-semibold">Jobs</h3>
                <p>Learn More</p>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li class="px-3">
        <a href="" class="hover:text-blue-400 transition duration-300">Blog</a>
      </li>
      <li class="px-3">
        <a href="" class="hover:text-blue-400 transition duration-300">Shop</a>
      </li>
    </ul>
    <div class="xs:hidden md:flex items-center absolute right-0">
      <p class="text-gray-700">(+66) 3332 1123</p>
      <button
        class="bg-blue-400 px-8 py-2 rounded-3xl capitalize ml-3 text-white"
      >
        login
      </button>
    </div>
    <div class="xs:block md:hidden">
      <img
        src="https://img.icons8.com/material-outlined/24/000000/circled-menu.png"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      ServicePopupOpened: false,
      CompanyPopupOpened: false,
    }
  },
}
</script>

/* stylelint-disable */
<style lang="css" scoped>
/* stylelint-disable */
.slideInBottom-enter-active,
.slideInBottom-leave-active {
  transition: all 0.3s ease;
}
.slideInBottom-enter-from,
.slideInBottom-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.slideInBottom-enter-to,
.slideInBottom-leave {
  opacity: 1;
  transform: translateY(0);
}
</style>
