/* eslint-disable */

<template>
  <div>
    <header
      class="container mx-auto mx-0 md:px-7 h-screen"
      style="max-height: 800px"
    >
      <NavBar />
      <transition name="fade" appear>
        <div class="grid md:grid-cols-2 grid-cols-1 pt-28">
          <div class="flex flex-col justify-center items-center md:items-start">
            <h1
              class="text-blue-700 text-6xl font-bold text-center md:text-left"
            >
              Drive Customers Through Digital Channels.
            </h1>
            <p class="w-3/4 py-3 text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div class="flex flex-col md:flex-row py-4">
              <button class="py-3 px-10 rounded-3xl bg-blue-400 text-white">
                Clone this template
              </button>
              <button class="text-gray-600 px-5">See our Process</button>
            </div>
          </div>
          <div>
            <img
              src="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd344a5708b4d6f39b4ff1b_image%20here.png"
            />
          </div>
        </div>
      </transition>
    </header>
    <section class="container mx-auto py-20">
      <div class="flex items-center grid grid-cols-5 w-11/12 mx-auto">
        <div
          v-for="partner in partners"
          :key="partner"
          class="mx-10 transform-gpu hover:scale-105 cursor-pointer transition-all duration-300"
        >
          <img :src="partner.url" />
        </div>
      </div>
    </section>

    <section class="container py-28 mx-auto px-10" ref="our-services" v-scroll="teste">
      <transition name="fade" appear>
        <h4
          class="text-blue-400 font-bold text-sm"
          style="letter-spacing: 0.2rem"
          v-show="visible.ourServices"
        >
          OUR SERVICES
        </h4>
      </transition>
      <h1 class="font-bold text-blue00 text-5xl w-2/4 py-5">
        Services to help your business-7
        <span class="text-blue-400">drive success</span>
      </h1>

      <div class="grid grid-cols-3 gap-7 my-7">
        <div
          v-for="service in services"
          :key="service.title"
          class="flex flex-col shadow px-7 py-12 rounded-xl border-2 border-transparent"
        >
          <div>
            <span
              class="material-icons text-blue-400 text-5xl bg-gray-100 p-3 rounded-full"
              >{{ service.icon }}</span
            >
          </div>
          <h1 class="font-bold text-2xl pt-5 text-gray-700 pb-3">
            {{ service.title }}
          </h1>
          <p class="text-gray-600">{{ service.text }}</p>
          <div>
            <button
              class="my-5 px-8 py-3 bg-blue-400 text-white w-auto rounded-3xl"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="container flex px-10 mx-auto" ref="content-section" v-scroll="teste2">
      <div class="w-2/4">
      <transition name="fade" appear>
        <h4
          class="text-blue-400 font-bold text-sm uppercase"
          style="letter-spacing: 0.2rem"
          v-show="visible.contentSection"
        >
          content section
        </h4>
      </transition>
        <h1 class="font-bold text-blue-700 text-5xl py-5">
          Creative and Technology Partner for Growing Brands
        </h1>
        <p class="text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p class="text-gray-600 py-3">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </p>
      </div>
      <div class="pl-10">
        <img
          src="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd344ad708b4d7c07b4ff21_image%20here.png"
        />
      </div>
    </section>
    <section class="container flex px-10 mx-auto pt-40 pb-20">
      <div class="pr-20">
        <img
          src="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd344a5708b4d6f39b4ff1b_image%20here.png"
        />
      </div>
      <div class="w-2/4">
        <h4
          class="text-blue-400 font-bold text-sm uppercase"
          style="letter-spacing: 0.2rem"
        >
          content section
        </h4>
        <h1 class="font-bold text-blue-700 text-5xl py-5">
          Creative and Technology Partner for Growing Brands
        </h1>
        <p class="text-gray-600 py-3">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </p>
        <button class="bg-blue-400 text-white rounded-full px-10 py-4 my-5">
          Learn more
        </button>
      </div>
    </section>
    <section class="mt-10 bg-blue-900">
      <div class="flex flex-col items-center py-32">
        <h2 class="text-white font-bold text-5xl text-center py-5 w-2/4">
          Experience a smarter way to close deals.
        </h2>
        <p class="text-white text-center w-2/4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
        <div class="flex my-10">
          <button class="bg-blue-400 text-white px-7 py-4 mx-3 rounded-full">
            Clone this template
          </button>
          <button class="text-white px-3">See our process</button>
        </div>
      </div>
    </section>
    <section class="container py-24 mx-auto">
      <h4
        class="text-blue-400 font-bold text-sm uppercase text-center py-5"
        style="letter-spacing: 0.2rem"
      >
        blog & case studies
      </h4>
      <h1 class="text-5xl text-blue-700 font-bold text-center">
        Our Latest News & Updates
      </h1>
      <div class="grid grid-cols-3 gap-7 my-10 px-10">
        <div
          v-for="update in news"
          :key="update.title"
          class="p-5 flex flex-col rounded-2xl cursor-pointer shadow transition ease-in duration-400 transform hover:-translate-y-1"
        >
          <img :src="update.img_url" class="rounded-lg" />
          <div class="mt-7 mb-5">
            <span
              class="text-xs px-5 py-3 bg-green-100 text-green-500 rounded-full uppercase tracking-wide"
              >{{ update.tag }}</span
            >
          </div>
          <h1 class="text-2xl font-bold text-gray-700">{{ update.title }}</h1>
          <p class="text-gray-400 mt-2">{{ update.text_content }}</p>
          <div>
            <button
              class="bg-blue-400 text-white px-8 py-3 rounded-full my-7 transition duration-300 hover:bg-blue-600"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-blue-200 py-24 mx-auto">
      <div class="flex flex-col items-center">
        <h4
          class="text-blue-400 font-bold text-sm uppercase text-center py-5"
          style="letter-spacing: 0.2rem"
        >
          statistics about us
        </h4>
        <h1 class="text-5xl text-blue-700 font-bold text-center w-2/4">
          Over 600+ completed webflow projects.
        </h1>
        <div class="flex pt-16">
          <div
            class="flex flex-col items-center justify-center bg-white mr-4"
            style="border-radius: 50%; height: 250px; width: 250px"
          >
            <h1 class="text-6xl font-bold text-blue-400">623</h1>
            <p class="text-blue-500 tracking-widest uppercase mt-3">projects</p>
          </div>
          <img
            src="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5d42801833c18dbaa7c4a_arrow-right.svg"
          />
          <div
            class="flex flex-col items-center justify-center bg-white mx-4"
            style="border-radius: 50%; height: 250px; width: 250px"
          >
            <h1 class="text-6xl font-bold text-blue-400">13,323</h1>
            <p class="text-blue-500 tracking-widest uppercase mt-3">
              GITHUB PULLS
            </p>
          </div>
          <img
            src="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5d4b2cd567c45e25f12a6_arrow-right-02.svg"
          />
          <div
            class="flex flex-col items-center justify-center bg-white ml-4"
            style="border-radius: 50%; height: 250px; width: 250px"
          >
            <h1 class="text-6xl font-bold text-blue-400">34</h1>
            <p class="text-blue-500 uppercase mt-3 tracking-widest">awards</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white py-28">
      <div class="flex container mx-auto">
        <div class="w-2/4">
          <img
            src="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5e057ccc7083623527802_002.png"
          />
        </div>
        <div class="w-2/4 px-20">
          <h4
            class="text-blue-400 font-bold text-sm uppercase py-3"
            style="letter-spacing: 0.2rem"
          >
            about us
          </h4>
          <h1 class="text-blue-700 font-bold text-5xl">
            Creative and Technology Partner for Growing Brands
          </h1>
          <p class="text-gray-500 py-3 font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p class="text-gray-500 font-normal">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book
          </p>
          <div class="flex py-4">
            <div class="relative pr-3">
              <label class="material-icons text-blue-400">water_drop</label>
            </div>
            <div>
              <h2 class="text-blue-400 font-medium">
                Search Engine Optimization
              </h2>
              <p class="text-md text-gray-500 font-medium py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-blue-200 py-18 relative" style="height: 600px">
      <transition name="fade" appear>
        <feedback-item
          v-if="feedback_item_active === 1"
          image_url="https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd3600677520f566d487a24_profile-03-p-500.png"
          brand_logo="https://assets.website-files.com/5cbc1cadfad96c3229989372/5cfaf4a293a0724a690c5368_forest_webflow.svg"
          name="Mark Smith (CEO & Founder)"
          feedback_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          :current_item_num="1"
          @changecurrentfeedbackitem="changeCurrentFeedbackItem"
        />
      </transition>

      <transition name="fade" appear>
        <feedback-item
          v-if="feedback_item_active === 2"
          :image_url="'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd36006740f6113db7c8218_profile-01-p-500.png'"
          :brand_logo="'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd3514477520f3af747ee10_forest_sketch.svg'"
          :name="'Joran Lee (Head of Marketing)'"
          :feedback_text="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'"
          :current_item_num="2"
          @changecurrentfeedbackitem="changeCurrentFeedbackItem"
        />
      </transition>

      <transition name="fade" appear>
        <feedback-item
          v-if="feedback_item_active === 3"
          :image_url="'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd3606877520f2841488526_profile-02-p-500.png'"
          :brand_logo="'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd351335d0bd9f025a84d8c_forest_mailchimp.svg'"
          :name="'Kate Jose (Business Advisor)'"
          :feedback_text="'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'"
          :current_item_num="3"
          @changecurrentfeedbackitem="changeCurrentFeedbackItem"
        />
      </transition>
    </section>
  </div>
</template>

<script>
import FeedbackItem from '../components/feedbackitem.vue'
import NavBar from '../components/navbar.vue'

export default {
  components: {
    NavBar,
    FeedbackItem,
  },
  data() {
    return {
      feedback_item_active: 1,
      visible: {
        ourServices: false,
        contentSection: false,
      },
      partners: [
        {
          name: 'linkedin',
          url: 'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5106f9fa9b1f6596d56ad_3.svg',
        },
        {
          name: 'eventbrite',
          url: 'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5106f3da92a73115c8c8e_2.svg',
        },
        {
          name: 'algolia',
          url: 'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5106f79b5fa440db3b928_4.svg',
        },
        {
          name: 'behance',
          url: 'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5106f5472200e2a795e0a_1.svg',
        },
        {
          name: 'buffer',
          url: 'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5106fb1461ddc41ea1203_Symbols.svg',
        },
      ],
      services: [
        {
          icon: 'developer_board',
          title: 'Webflow Development',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          icon: 'gesture',
          title: 'Design Services',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
          icon: 'water_drop',
          title: 'Branding Services',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
      ],
      news: [
        {
          img_url:
            'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5e4cbcd567c2af95f70d4_unsplash_img_03.jpeg',
          tag: 'marketing',
          title: 'Why will webflow dominate the web in 2020.',
          text_content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          img_url:
            'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5e4cbcd567c69745f70d3_unsplash_img.jpeg',
          tag: 'design',
          title: 'How to craft a perfect marketing campaign.',
          text_content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
          img_url:
            'https://assets.website-files.com/5db2e8f6b44d610f91587fe2/5dd5e485bfa2907d75c4db81_unsplash_img_02.jpeg',
          tag: 'business',
          title: 'Learn how to get started with webflow interactions.',
          text_content:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
      ],
    }
  },
  methods: {
    changeCurrentFeedbackItem(action) {
      this.feedback_item_active = action
    },
    teste() {
      console.log(this.$refs['our-services'].getBoundingClientRect());
      if(this.$refs['our-services'].getBoundingClientRect().top < 300) {
        console.log('visible');
        return this.visible.ourServices = true;
      }
    },
    teste2() {
      if(this.$refs['content-section'].getBoundingClientRect().top < 300) {
        console.log('visible');
        return this.visible.contentSection = true;
      }
    }
  },
}
</script>
<style lang="scss">
/* stylelint-disable */
.slideInBottom-enter-active {
  transition: all 0.3s;
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

.fade-enter-active,
.fade-leave-active {
  transition: all .8s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
  transform: translateY(0px);
}
</style>
