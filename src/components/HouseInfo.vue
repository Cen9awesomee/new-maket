<template>
  <v-container fluid class="house-slider pa-0">
    <v-row>
      <v-col v-for="(house, index) in houses" :key="house.id" cols="12" sm="4" class="house-card-col">
        <v-card class="house-card" flat>
          <v-card-text class="d-flex justify-space-between align-center">
            <v-btn icon @click="prevImage(index)">
              <v-icon>fas fa-chevron-left</v-icon>
            </v-btn>
            <div class="image-info">
              <v-icon size="17">fas fa-camera</v-icon>
              <span>{{ house.images.length }} IMAGES AVAILBLE</span>
            </div>
            <v-btn icon @click="nextImage(index)">
              <v-icon>fas fa-chevron-right</v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="image-container">
            <v-carousel
              :ref="`imageCarousel-${index}`"
              v-model="currentImageIndices[index]"
              height="150"
              hide-delimiters
              :show-arrows="false"
              >
              <v-carousel-item v-for="(image, imgIndex) in house.images" :key="imgIndex">
                <div class="image-wrapper" @mouseover="hoverIndex = index" @mouseleave="hoverIndex = null">
                  <img :src="require(`@/assets/houses/${image}`)" class="house-image" />
                  <div class="hover-text" v-if="hoverIndex === index">
                    <p>{{ house.address }}</p>
                    <p>Beds: {{ house.beds }}</p>
                    <p>Baths: {{ house.baths }}</p>
                    <p><v-icon color="#fff" small>fas fa-video</v-icon> {{ house.videos }}</p>
                    <v-card flat color="white" class="info-map">
                <v-row align="center" justify="center">
                  <v-icon size="15" class="location-dot">fas fa-location-dot</v-icon><span>MAP</span>
                </v-row>  
              </v-card>
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-card-text>
          <v-card-text class="price-text text-center">
            ${{ house.price.toLocaleString() }}
          </v-card-text>
          <v-card-actions class="view-details-container">
            <div class="line-button-wrapper">
              <v-btn class="view-button" rounded text color="primary" @click="viewDetails(house)">VIEW DETAILS</v-btn>
            </div>
          </v-card-actions>
          <div class="dotted-lines"></div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['houses'],
  data() {
    return {
      currentImageIndices: this.houses.map(() => 0),
      hoverIndex: null, 
    };
  },
  
  methods: {
    prevImage(index) {
      const carousel = this.$refs[`imageCarousel-${index}`]?.[0];
      if (carousel) {
        carousel.prev();
      } else {
        const currentIndex = this.currentImageIndices[index];
        const imageCount = this.houses[index]?.images?.length || 1;
        this.currentImageIndices[index] = (currentIndex - 1 + imageCount) % imageCount;
      }
    },
    nextImage(index) {
      const carousel = this.$refs[`imageCarousel-${index}`]?.[0];
      if (carousel) {
        carousel.next();
      } else {
        const currentIndex = this.currentImageIndices[index];
        const imageCount = this.houses[index]?.images?.length || 1;
        this.currentImageIndices[index] = (currentIndex + 1) % imageCount;
      }
    },
    viewDetails(house) {
      alert(`Viewing details for ${house.address}`);
    },
  },
};
</script>

