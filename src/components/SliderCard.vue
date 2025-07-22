<template>
  <v-col cols="8">
    
    <!-- Main image -->
    <v-carousel v-model="mainIndex" height="400" :cycle="cycle" hide-delimiters :show-arrows="false" class="carousel-container">
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="require(`@/assets/houses/${item.src}`)">
        <v-row class="fill-height house-images" align="center" justify="center">
          <v-card flat color="white" class="info-card">
            <v-row align="center" justify="center">
              <span>{{ item.address }}<br>{{ item.price }}</span>
            </v-row>  
          </v-card>
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <!-- Small image -->
    <v-col cols="12">
      <v-row>
        <v-col cols="11" class="pa-0">
          <v-carousel v-model="thumbnailIndex" height="115" :show-arrows="false" class="thumbnail-carousel" hide-delimiters>
            <v-carousel-item class="pa-0">
              <v-row align="center" justify="space-around" class="thumbnail-slide">
                <v-col v-for="(item, i) in currentThumbnails" :key="i" cols="2" class="pa-0">
                  <v-card @click="mainIndex = getItemIndex(i)" flat tile class="thumb-card" :class="{ 'active-thumb': mainIndex === getItemIndex(i) }">
                    <v-img :src="require(`@/assets/houses/${item.src}`)" height="100" class="custom-image"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="1" class="pa-3">
          <v-btn class="round-button" icon large @click="prevSlide">
            <v-icon size="20">fas fa-chevron-left</v-icon>
          </v-btn>
          <v-btn class="round-button" icon large @click="nextSlide">
            <v-icon size="20">fas fa-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-col>
</template>

<script>
export default {
  props: {
    items: Array,
    cycle: Boolean,
  },
  data() {
    return {
      mainIndex: 0,
      thumbnailIndex: 0,
      thumbnailStart: 0,
      intervalId: null,
    };
  },
  computed: {
    currentThumbnails() {
      const total = this.items.length;
      const thumbnailsToShow = 5;
      const half = Math.floor(thumbnailsToShow / 2);
      const start = this.mainIndex - half < 0
      ? 0
      : this.mainIndex + half >= total
      ? total - thumbnailsToShow
      : this.mainIndex - half;
      const end = Math.min(start + thumbnailsToShow, total);
      return this.items.slice(start, end);
    }
  },
 
  methods: {
    startAutoSlide() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.thumbnailStart = (this.thumbnailStart + 1) % this.items.length;
          if (this.thumbnailStart + 5 > this.items.length) {
            this.thumbnailStart = 0;
          }
        }, 3000);
      }
    },
    prevSlide() {
      this.mainIndex = (this.mainIndex - 1 + this.items.length) % this.items.length;
    },
    nextSlide() {
      this.mainIndex = (this.mainIndex + 1) % this.items.length;
    },
    getItemIndex(localIndex) {
      const thumbnails = this.currentThumbnails;
      const actualItem = thumbnails[localIndex];
      return this.items.findIndex(item => item === actualItem);
    }
  },
};
</script>