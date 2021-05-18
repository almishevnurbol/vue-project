<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-sm-4 mx-auto">

        <form @submit.prevent="register" novalidate>
          <div class="mb-3">
            <label for="name" class="form-label">Ваше имя</label>

            <input 
              @blur="$v.name.$touch()" 
              v-model="name" 
              :class="{'is-invalid': $v.name.$error}"
              type="text" class="form-control" id="name">

            <div v-if="!$v.name.required" class="invalid-feedback">Поле обязатель для заполнения</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Email</label>

            <input 
              @blur="$v.email.$touch()" 
              v-model="email" 
              :class="{'is-invalid': $v.email.$error}"
              type="text" class="form-control" id="email">

            <div v-if="!$v.email.required" class="invalid-feedback">Поле обязатель для заполнения</div>
          </div>

          <div class="mb-3">
            <label for="email" class="form-label">Возвраст</label>

            <input 
              @blur="$v.age.$touch()" 
              v-model="age" 
              :class="{'is-invalid': $v.age.$error}"
              type="text" class="form-control" id="age">

            <div v-if="!$v.age.required" class="invalid-feedback">Поле обязатель для заполнения</div>
          </div>
          

          <!-- <router-link to="/profile"> -->
            <button
              :disabled="isDisabledBtn"
              type="submit" class="btn btn-primary">Зарегистрироваться
            </button>
          <!-- </router-link>  -->
        </form>


      </div>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import {mapGetters} from 'vuex';


export default {
  

  data() {
    return {
      name: '',
      email: '',
      age: '',
    }
  },
  computed: {
    isDisabledBtn() {
      return this.$v.name.$invalid ||
        this.$v.email.$invalid ||
        this.$v.age.$invalid
    },
    ...mapGetters(['NAME']),
  },
  methods: {
    register() {
      this.$store.commit('SET_NAME', this.name);
      this.$store.commit('SET_EMAIL', this.email);
      this.$store.commit('SET_AGE', this.age);
      this.$store.commit('LOGIN');

      // console.log(this.$router)  
      this.$router.push('/profile')
    },
  },
  validations: {
    name: {
      required
    },
    email: {
      required
    },
    age: {
      required
    }
  },

}
</script> 