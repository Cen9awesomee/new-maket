<template>
  <v-app>
    <v-main>
      <header class="header">
        <div class="logo">
          <img src="@/assets/House-Logo.png" class="logo-image" />
        </div>
          <div class="contact">Toll Free: 0081 123-456</div>
      </header>
      <div class="main-container">
        <nav class="nav">
          <ul>
            <li v-for="item in navItems" :key="item" :class="{ active: activeTab === item }" @click="activeTab = item">
              {{ item }}
            </li>
          </ul>
        </nav>
        <SliderCard />
        <v-row class="card-row">
          <v-col cols="12" md="9">
            <v-row>

              <!-- About Royal Estate -->
              <v-col cols="12" md="6">
                <v-card class="card-royal" flat>
                  <v-card-text class="text-center d-flex flex-column justify-center align-center fill-height">
                    <v-avatar size="200" class="mt-2">
                      <img src="@/assets/avatar.jpg" />
                    </v-avatar>
                    <h3 class="mt-3">About Royal Estate</h3>
                    <p class="card-text">Learn more about our premium real estate services and rich history. Learn more about our premium real estate services and rich history. Learn more about our premium real estate services and rich history. Learn more about our premium real estate services and rich history.</p>
                  </v-card-text>
                </v-card>
              </v-col>

              <!-- Live Support -->
              <v-col cols="12" md="6">
                <v-card class="card-support" flat>
                  <v-card-text class="d-flex flex-row align-center fill-height">
                    <v-col cols="3">
                      <v-icon size="60" color="light-blue darken-4" class="ma-0">fas fa-headphones-simple</v-icon>
                    </v-col>
                    <v-col cols="9">
                      <h3 class="card-title">Live Support</h3>
                      <p class="card-text">Get instant assistance from our dedicated support team. Get instant assistance from our dedicated.</p>
                    </v-col>
                  </v-card-text>
                </v-card>
              
                <!-- User Friendly -->
                <v-card class="card-friendly" flat>
                  <v-card-text class="d-flex flex-row align-center fill-height">
                    <v-col cols="3">
                      <v-icon size="60" color="light-blue darken-4" class="ma-0">fas fa-circle-user</v-icon>
                    </v-col>
                    <v-col cols="9">
                      <h3 class="card-title">User Friendly</h3>
                      <p class="card-text">Enjoy a seamless and intuitive user experience. Enjoy a seamless and intuitive user experience.</p>
                    </v-col>
                  </v-card-text>
                </v-card>

                <!-- Clean Code -->
                <v-card class="card-code" flat>
                  <v-card-text class="d-flex flex-row align-center fill-height">
                    <v-col cols="3">
                      <v-icon size="60" color="light-blue darken-4" class="ma-0">fas fa-gauge-high</v-icon>
                    </v-col>
                    <v-col cols="9">
                      <h3 class="card-title">Clean Code</h3>
                      <p class="card-text">Built with high-quality, maintainable code standards. Built with high-quality, maintainable code.</p>
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>

          <!-- Login -->
          <v-col cols="12" md="3">
            <v-card class="login-card" flat>
              <v-card-title class="login-title">USER LOGIN</v-card-title>
                <v-card-text>
                  <div class="field-label">Username</div>
                  <v-text-field v-model="username" outlined dense></v-text-field>
                  <div class="field-label">Password</div>
                  <v-text-field v-model="password" type="password" outlined dense></v-text-field>
                  <v-row justify="end">
                    <v-col cols="9" class="text-right">
                      <v-checkbox v-model="checkbox" label="Remember me" dense hide-details></v-checkbox>
                    </v-col>
                  </v-row>
                  <v-col cols="12">
                    <v-row justify="end">
                      <v-btn color="orange lighten-2" class="login-btn">Login</v-btn>
                    </v-row>
                    <v-row justify="end">
                      <a href="#" class="forgot-password">I forgot my password</a>
                    </v-row>
                    <v-row justify="end">
                      <a href="#" class="create-account">Create an account</a>
                    </v-row>
                  </v-col>
                </v-card-text>
            </v-card>
          </v-col>

          <!-- HouseInfo -->
          <v-col cols="12" md="9">
            <HouseInfo :houses="houseData"/>
          </v-col>

          <!-- Testimonials -->
          <v-col cols="12" md="3">
            <FeedbackSlider :feedback-items="feedbackData"/>

           <!-- Calculator -->
           <v-card class="calculator-card" flat>
             <v-card-title class="login-title">LOAN CALCULATOR</v-card-title>
              <v-card-text>
                <div class="input-row">
                  <div class="calculate-label">Amount</div>
                  <v-text-field class="calculate-field" v-model.number="amount" outlined dense @input="resetMonthlyPayment"></v-text-field>
                </div>
                <div class="input-row">
                  <div class="calculate-label">Down Payment</div>
                  <v-text-field v-model.number="downPayment" outlined dense @input="resetMonthlyPayment"></v-text-field>
                </div>
                <div class="input-row">
                  <div class="calculate-label">Term</div>
                  <v-text-field v-model.number="years" outlined dense @input="resetMonthlyPayment"></v-text-field>
                </div>
                <div class="input-row">
                  <div class="calculate-label">Rate</div>
                  <v-text-field v-model.number="rate" outlined dense @input="resetMonthlyPayment"></v-text-field>
                </div>
                <v-col cols="12">
                  <v-row justify="end">
                    <v-btn color="orange lighten-2" class="login-btn" @click="calculatePayment">Calculate</v-btn>
                    <div class="monthly-payment">Payments will be:  ${{ monthlyPayment.toFixed(2) }}</div>
                  </v-row>
                </v-col>
             </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Footer -->
      <v-footer
        dark
        padless
        class="footer-container"
        >
        <v-card
          flat
          tile
          color="#2f5178"
          class="text-center"
          >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
              >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
          <v-card-text class="white--text pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="white--text">
            {{ new Date().getFullYear() }} — <strong>Royal Estate</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import FeedbackSlider from './components/FeedbackSlider.vue';
import HouseInfo from './components/HouseInfo.vue';
import SliderCard from './components/SliderCard.vue';



export default {
  components: {
    SliderCard,
    HouseInfo,
    FeedbackSlider
  },
  data() {
    return {
      amount: null,
      downPayment: null,
      years: null,
      rate: null,
      monthlyPayment: 0,
      navItems: ['Home', 'Browse', 'Listings', 'Buying', 'Selling', 'Renting', 'About', 'Services', 'FAQs', 'Contact'],
      activeTab: 'Home',
      saleType: 'sale',
      locations: ['City A', 'City B'],
      types: ['House', 'Apartment'],
      houseData: [
        {
          id: 1,
          images: ['house1.jpg', 'house2.jpg', 'house3.jpg', 'house4.jpg'],
          address: 'American Address',
          beds: 3,
          baths: 2,
          videos: 3,
          price: '535.000.00',
        },
        {
          id: 2,
          images: ['house5.jpg', 'house1.jpg'],
          address: 'American Address',
          beds: 2,
          baths: 1,
          videos: 1,
          price: '300.000.00',
        },
        {
          id: 3,
          images: ['house2.jpg', 'house3.jpg', 'house4.jpg'],
          address: 'American Address',
          beds: 4,
          baths: 3,
          videos: 2,
          price: '750.000.00',
        },
        {
          id: 4,
          images: ['house2.jpg', 'house3.jpg', 'house4.jpg'],
          address: 'American Address',
          beds: 4,
          baths: 3,
          videos: 2,
          price: '750.000.00',
        },
        {
          id: 5,
          images: ['house2.jpg', 'house3.jpg', 'house4.jpg'],
          address: 'American Address',
          beds: 4,
          baths: 3,
          videos: 2,
          price: '750.000.00',
        },
        {
          id: 6,
          images: ['house2.jpg', 'house3.jpg', 'house4.jpg'],
          address: 'American Address',
          beds: 4,
          baths: 3,
          videos: 2,
          price: '750.000.00',
        },
      ],

      feedbackData: [
        {
          text: 'Great service and excellent properties! Highly recommend.',
          author: 'John Doe',
        },
        {
          text: 'Very smooth process, the team was very helpful.',
          author: 'Jane Smith',
        },
        {
          text: 'Amazing experience, will buy again!',
          author: 'Mike Johnson',
        },
        {
          text: 'Amazing experience, will buy again!',
          author: 'Mike Johnson',
        },
      ],

      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
      checkbox: true,
    }
  },

  methods: {
    resetMonthlyPayment() {
      this.monthlyPayment = 0;
    },
    calculatePayment() {
      const principal = this.amount - this.downPayment;
      const monthlyRate = this.rate / 12 / 100;
      const numberOfPayments = this.years * 12;

      if (principal > 0 && monthlyRate > 0 && numberOfPayments > 0) {
        const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
        this.monthlyPayment = payment;
      } else {
        this.monthlyPayment = 0;
      }
    },
  },
}
</script>

<style src="@/assets/style.css"></style>