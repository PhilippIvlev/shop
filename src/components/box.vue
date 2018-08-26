<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
<h1 class="text--secondary mb-3">Корзина</h1>
        <v-list subheader two-line>
          <v-list-tile avatar v-for="order in orders" :key="order.id">
            <v-list-tile-action>
              <v-checkbox @change="markDone(order)" :input-value="order.done" color="primary"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
 <v-list-tile-content>
  <v-btn class="primary" :to="'/add/' + order.photoId">Open</v-btn>
 </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'box',
    data () {
      return {
        orders: [{id: 'fff', name: 'Philipp', phone: '267758', photoId: '123', done: false}]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>

<style scoped>

</style>
