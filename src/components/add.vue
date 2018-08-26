<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
<h1 class="text--secondary mb-3"> Создать новый товар</h1>
<v-form ref="form" v-model="valid" validation>
<v-text-field name="title" label="Add title" type="text" v-model="title" :rules="[v => !!v || 'Title is required']"  required></v-text-field>
<v-text-field name="description" label="Add description" type="text" :rules="[v => !!v || 'Title is required']" multi-line v-model="description"></v-text-field>
</v-form>
<v-layout row>
<v-flex>
  <v-btn>
  Upload
    <v-icon right dark>cloud_upload</v-icon>
  </v-btn>

  <v-layout>
    <v-flex>
      <v-switch
        label="`Add to promo?"
        v-model="promo" color="primary"
      ></v-switch>
    </v-flex>
  </v-layout>

  <v-layout>
    <v-flex>
     <v-spacer>
<v-btn class="primary" @click="createAd" :disabled="!valid">Create ad</v-btn>

     </v-spacer>
    </v-flex>
  </v-layout>


</v-flex>
</v-layout>

      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'add',
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
          console.log(ad)
        }
      }
    }
  }
</script>

<style scoped>

</style>
