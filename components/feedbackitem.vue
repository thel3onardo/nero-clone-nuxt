/* eslint-disable */
<template>
  <div class="absolute w-full h-full flex justify-center">
    <div class="container flex items-center">
      <div class="w-2/4 px-32">
        <img :src="image_url" />
      </div>
      <div class="w-2/4 pl-16">
        <p class="text-gray-600 pb-5 text-lg leading-6 py-10">
          {{ feedback_text }}
        </p>
        <img :src="brand_logo" class="w-28" />
        <p class="text-gray-600 text-lg">{{ name }}</p>

        <div class="flex py-10">
          <button
            class="px-10 py-3 rounded-3xl flex items-center transition-all mr-4"
            :class="{
              'bg-white': current_item_num === 1 ? false : true,
              'shadow-sm': current_item_num === 1 ? false : true,
              'hover:shadow': current_item_num === 1 ? false : true,
              'cursor-auto': current_item_num === 1,
              'opacity-30': current_item_num === 1,
            }"
            :disabled="current_item_num === 1"
            @click="changeFeedbackItem('previous')"
          >
            <span class="material-icons text-blue-400 px-3">arrow_back</span>
          </button>

          <button
            class="px-10 py-3 rounded-3xl flex items-center transition-all"
            :class="{
              'bg-white': !current_item_num === 3,
              'shadow-sm': !current_item_num === 3,
              'hover:shadow': !current_item_num === 3,
              'cursor-auto': current_item_num === 3,
              'opacity-30': current_item_num === 3,
            }"
            :disabled="current_item_num === 3"
            @click="changeFeedbackItem('next')"
          >
            <span class="material-icons text-blue-400 px-3">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackItem',
  props: {
    image_url: {
      type: String,
      required: true,
    },
    feedback_text: {
      type: String,
      required: true,
    },
    brand_logo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    current_item_num: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changeFeedbackItem(itemToGo) {
      if (itemToGo === 'previous') {
        return this.$emit(
          'changecurrentfeedbackitem',
          this.current_item_num - 1
        )
      } else {
        return this.$emit(
          'changecurrentfeedbackitem',
          this.current_item_num + 1
        )
      }
    },
  },
}
</script>