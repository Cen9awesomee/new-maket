<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="8">
        <!-- Основное изображение -->
        <v-carousel v-model="mainIndex" height="400" :cycle="cycle" hide-delimiters :show-arrows="false" class="carousel-container">
          <v-carousel-item v-for="(item, i) in items" :key="i">
            <v-sheet height="100%" tile class="carousel-item">
              <v-row class="fill-height house-images" align="center" justify="center">
                <v-img :src="require(`@/assets/houses/${item.src}`)" height="400" contain></v-img>
              </v-row>
              <v-card flat color="white" class="info-card">
                <v-row align="center" justify="center">
                  <span>{{ item.address }}<br>{{ item.price }}</span>
                </v-row>  
              </v-card>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <!-- Миниатюры и кнопки навигации -->
          <v-col cols="12">
            <v-row>
              <v-col v-for="(item, i) in items" :key="i" cols="2" class="pa-1">
                <v-card @click="mainIndex = i" :color="mainIndex === i ? 'grey lighten-2' : ''" height="100">
                  <v-img :src="require(`@/assets/houses/${item.src}`)" height="100" contain></v-img>
                </v-card>
              </v-col>
              <v-col cols="1">
                <v-btn icon large @click="prevSlide">
                  <v-icon>fas fa-chevron-left</v-icon>
                </v-btn>
                <v-btn icon large @click="nextSlide">
                  <v-icon>fas fa-chevron-right</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
      </v-col>

      <!-- Второй столбец: Блок поиска -->
      <v-col cols="4">
        <v-card class="search-card">
          <v-card-title class="custom-title">QUICK SEARCH</v-card-title>
          <v-card-text>
            <v-radio-group v-model="saleType" row class="ma-0 radio-group">
              <v-radio label="For Sale" value="1" class="custom-radio"></v-radio>
              <v-radio label="For Rent" value="2" class="custom-radio"></v-radio>
            </v-radio-group>
            <v-select v-model="location" label="Location" :items="locations" outlined dense class="custom-select"></v-select>
            <v-select v-model="propertyType" label="Property type" :items="propertyTypes" outlined dense class="custom-select"></v-select>
            <v-select v-model="squareFeet" label="Square Feet" :items="squareFeetOptions" outlined dense class="custom-select"></v-select>
            <v-row>
              <v-col cols="6">
                <v-select v-model="beds" label="Beds" :items="bedOptions" outlined dense class="custom-select"></v-select>
                <v-select v-model="baths" label="Baths" :items="bathOptions" outlined dense class="custom-select"></v-select>
              </v-col>
              <v-col cols="6">
                <v-select v-model="minPrice" label="Min price" :items="priceOptions" outlined dense class="custom-select"></v-select>
                <v-select v-model="maxPrice" label="Max Price" :items="priceOptions" outlined dense class="custom-select"></v-select>
              </v-col>
            </v-row>
            <v-row justify="end">
              <v-col cols="6">
                <v-btn block color="primary" class="custom-btn">Search</v-btn>
                <a href="#" class="advanced-search">Advanced search</a>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mainIndex: 0,
      saleType: 1,
      location: null,
      propertyType: null,
      squareFeet: null,
      beds: null,
      baths: null,
      minPrice: null,
      maxPrice: null,
      cycle: true,
      items: [
        {
          src: 'house1.jpg',
          thumbnailSrc: 'house1.jpg',
          address: 'Big American House 1',
          price: '$500.000.00',
        },
        {
          src: 'house2.jpg',
          thumbnailSrc: 'house2.jpg',
          address: 'Big American House 2',
          price: '$280.000.00',
        },
        {
          src: 'house3.jpg',
          thumbnailSrc: 'house3.jpg',
          address: 'Big American House 3',
          price: '$340.000.00',
        },
        {
          src: 'house4.jpg',
          thumbnailSrc: 'house4.jpg',
          address: 'Big American House 4',
          price: '$450.000.00',
        },
        {
          src: 'house5.jpg',
          thumbnailSrc: 'house5.jpg',
          address: 'Big American House 5',
          price: '$300.000.00',
        },
      ],
      locations: ['New York', 'Los Angeles', 'Chicago'],
      propertyTypes: ['House', 'Apartment', 'Condo'],
      squareFeetOptions: ['1000', '1500', '2000', '2500+'],
      bedOptions: ['1', '2', '3', '4+'],
      bathOptions: ['1', '2', '3', '4+'],
      priceOptions: ['$100.000', '$200.000', '$300.000', '$400.000', '$500.000+'],
    };
  },
  methods: {
    prevSlide() {
      this.mainIndex = (this.mainIndex - 1 + this.items.length) % this.items.length;
    },
    nextSlide() {
      this.mainIndex = (this.mainIndex + 1) % this.items.length;
    },
  },
};
</script>