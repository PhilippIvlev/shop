<template>
  <v-app>
    <v-navigation-drawer app temporary v-model="drawer" >

      <v-list>
        <v-list-tile @click="" v-for="link in links" :key="link.title" :to="link.url">


          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar app dark>

        <v-toolbar-side-icon @click="drawer = !drawer" class="hidden-md-and-up">
        </v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" class="pointer" tag="span"> Cosmic Shop</router-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat v-for="link in links" :key="link.title" :to="link.url"><v-icon left>{{link.icon}}</v-icon>{{link.title}}</v-btn>




        </v-toolbar-items>




    </v-toolbar>
    <v-content>

        <router-view></router-view>

    </v-content>
    <v-footer dark height="auto">
<v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Get connected!</strong>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-actions class="grey darken-3 justify-center">
          &copy;2018 — <strong>Philipp</strong>
        </v-card-actions>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        links: [
          {title: 'Корзина', icon: 'shopping_cart', url: '/box'},
          {title: 'Добавить', icon: 'add_comment', url: '/add'},
          {title: 'Личный кабинет', icon: 'home', url: '/personal'},
          {title: 'Регистрация', icon: 'done', url: '/registration'},
          {title: 'Логин', icon: 'vpn_key', url: '/login'}
        ]
      }
    }
  }
</script>

<style scoped>
 .pointer{ cursor:pointer}
</style>
