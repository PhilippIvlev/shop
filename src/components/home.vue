<template>
  <div>

<v-container fluid>
  <v-layout row>
    <v-flex xs12>
      <v-carousel>
        <v-carousel-item v-for='photo in photos' :key='photo.id' :src="photo.src">
<div class="car-link">
  <v-btn class="error" :to="'/add/' + photo.id">{{photo.title}}</v-btn>

</div>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
 </v-layout>
</v-container>

  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="photo in photos" :key="photo.id">
<v-card>
<v-card-media  :src="photo.src" height="250px">
</v-card-media>

 <v-card-title primary-title>
<div>
<div class="headline">{{photo.title}}</div>
 <span>{{photo.description}}</span>
</div>
</v-card-title>

<v-card-actions>
  <v-spacer></v-spacer>
<v-btn raised :to="'/add/' + photo.id">Open</v-btn>
<v-btn raised>Buy</v-btn>
<v-spacer></v-spacer>
  <v-btn icon @click="show = !show">
    <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
  </v-btn>
</v-card-actions>

  <v-slide-y-transition>
    <v-card-text v-show="show" >
  {{photo.longdescription}}
    </v-card-text>
  </v-slide-y-transition>
</v-card>
      </v-flex>

    </v-layout>



  </v-container>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        show: false,
        photos: [{title: 'First', description: 'Descr', longdescription: 'Description 1', src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', promo: false, id: '123'},
          {title: 'Second', description: 'Descr1', longdescription: 'Description 2', src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', promo: false, id: '1234'},
          {title: 'Third', description: 'Descr2', longdescription: 'Description 3', src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', promo: false, id: '12345'}]
      }
    }
  }
</script>

<style scoped>
.car-link{position: absolute; bottom:50px; padding:5px 15px ; border-radius: 5%;
left: 50%; transform: translate(-50%, 0); background: rgba(0,0,0, 0.5)}
</style>
