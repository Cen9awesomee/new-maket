<template>
  <v-card class="feedback-card" flat>
    <v-card-title class="feedback-title">TESTIMONIALS</v-card-title>
    <v-carousel v-model="currentSlide" height="auto" :show-arrows="false" hide-delimiters>
      <v-carousel-item v-for="(item, index) in feedbackItems" :key="index">
        <v-card-text class="feedback-text">
          {{ item.text }}
        </v-card-text>
        <v-card-text class="author-info">
          <span class="author">{{ item.author }}</span>
          <span class="role">Buyer</span>
        </v-card-text>
      </v-carousel-item>
    </v-carousel>
   
    <div class="slider-controls">
      <div class="indicators-container">
        <v-item-group v-model="currentSlide" class="slider-indicators" mandatory>
          <v-item v-for="n in feedbackItems.length" :key="n" :value="n - 1" v-slot="{ active }">
            <v-icon :color="active ? '#333' : 'grey lighten-2'" size="12" @click="selectSlide(n - 1)">fas fa-square</v-icon>
          </v-item>
        </v-item-group>
      </div>
      <div class="buttons-container">
        <v-btn class="round-button" icon @click="prev">
          <v-icon size="20">fas fa-chevron-left</v-icon>
        </v-btn>
        <v-btn class="round-button" icon @click="next">
          <v-icon size="20">fas fa-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['feedbackItems'],
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    prev() {
      this.currentSlide = (this.currentSlide - 1 + this.feedbackItems.length) % this.feedbackItems.length;
    },
    next() {
      this.currentSlide = (this.currentSlide + 1) % this.feedbackItems.length;
    },
    selectSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>

