<template>
  <v-col cols="12" class="filter-box pa-0">
    <v-card class="search-card">
      <v-card-title class="custom-title">QUICK SEARCH</v-card-title>
      <v-card-text class="search-padding">
        <v-row justify="center">
          <div class="slider-wrapper">
            <span class="slider-label left-label" @click="selectedIndex = 0">For Sale</span>
            <v-slider
              v-model="selectedIndex"
              :max="1"
              :min="0"
              track-fill-color="#636363"
              track-color="#636363"
              thumb-color="#bdbdbd"
              ticks="always"
              tick-size="0"
              class="custom-slider"
              hide-details>
            </v-slider>
            <span class="slider-label right-label" @click="selectedIndex = 1">For Rent</span>
          </div>
        </v-row>
        <v-select v-model="location" label="Location" :items="locations" :menu-props="{ bottom: true, offsetY: true }" outlined dense class="custom-select"></v-select>
        <v-select v-model="propertyType" label="Property type" :items="propertyTypes" :menu-props="{ bottom: true, offsetY: true }" outlined dense class="custom-select"></v-select>
        <v-select v-model="squareFeet" label="Square Feet" :items="squareFeetOptions" :menu-props="{ bottom: true, offsetY: true }" outlined dense class="custom-select"></v-select>
        <v-row>
          <v-col cols="6">
            <v-select v-model="beds" label="Beds" :items="bedOptions" :menu-props="{ bottom: true, offsetY: true }" outlined dense class="custom-select"></v-select>
            <v-select v-model="minPrice" label="Min price" :items="priceOptions" :menu-props="{ bottom: true, offsetY: true }" outlined dense class="custom-select"></v-select>
          </v-col>
          <v-col cols="6">
            <v-select v-model="baths" label="Baths" :items="bathOptions" :menu-props="{ bottom: true, offsetY: true }" outlined dense class="custom-select"></v-select>
            <v-select v-model="maxPrice" label="Max price" :items="priceOptions" :menu-props="{ bottom: true, offsetY: true }" outlined dense class="custom-select"></v-select>
          </v-col>
        </v-row>
        <v-row justify="end">
          <v-col cols="6">
            <v-btn block color="#3e6792" class="custom-btn">Search</v-btn>
            <a href="#" class="advanced-search">Advanced Search</a>
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