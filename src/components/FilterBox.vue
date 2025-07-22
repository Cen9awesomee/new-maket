<template>
  <v-col cols="4">
    <v-card class="search-card">
      <v-card-title class="custom-title">QUICK SEARCH</v-card-title>
      <v-card-text>
        <v-row justify="center">
          <div class="slider-wrapper">
            <span class="slider-label left-label" @click="selectedIndex = 0">For Sale</span>
            <v-slider
              v-model="selectedIndex"
              :max="1"
              :min="0"
              track-fill-color="#524e4e"
              track-color="#524e4e"
              thumb-color="#c7baba"
              ticks="always"
              tick-size="0"
              class="custom-slider"
              hide-details>
            </v-slider>
            <span class="slider-label right-label" @click="selectedIndex = 1">For Rent</span>
          </div>
        </v-row>
        <v-select v-model="location" label="Location" :items="locations" outlined dense class="custom-select"></v-select>
        <v-select v-model="propertyType" label="Property type" :items="propertyTypes" outlined dense class="custom-select"></v-select>
        <v-select v-model="squareFeet" label="Square Feet" :items="squareFeetOptions" outlined dense class="custom-select"></v-select>
        <v-row>
          <v-col cols="6">
            <v-select v-model="beds" label="Beds" :items="bedOptions" outlined dense class="custom-select"></v-select>
            <v-select v-model="minPrice" label="Min price" :items="priceOptions" outlined dense class="custom-select"></v-select>
          </v-col>
          <v-col cols="6">
            <v-select v-model="baths" label="Baths" :items="bathOptions" outlined dense class="custom-select"></v-select>
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
</template>

<script>
export default {
props: {
    locations: Array,
    propertyTypes: Array,
    squareFeetOptions: Array,
    bedOptions: Array,
    bathOptions: Array,
    priceOptions: Array,
  },
  data() {
    return {
      selectedIndex: 0,
      location: null,
      propertyType: null,
      squareFeet: null,
      beds: null,
      baths: null,
      minPrice: null,
      maxPrice: null,
    };
  },
};
</script>