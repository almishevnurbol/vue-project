import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    email: "",
    age: "",
    isLogged: false
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
      localStorage.setItem('name', name)
      // console.log(localStorage)
    },
    SET_EMAIL: (state, email) => {
      state.email = email;
      localStorage.setItem('email', email)
    },
    SET_AGE: (state, age) => {
      state.age = age;
      localStorage.setItem('age', age)
    },
    LOGIN: () => {

      localStorage.setItem('isLogged', true)
      // console.log(localStorage.isLogged)
    },
    LOGOUT: (state) => {
 
      localStorage.setItem('isLogged', false)
      state.isLogged = false
      // console.log(localStorage.isLogged)
    },
  },
  getters : {
    NAME: () => {
      return localStorage.getItem('name')
    },
    EMAIL: () => {
      return localStorage.getItem('email')
    },
    AGE: () => {
      return localStorage.getItem('age')
    },
    ISLOGGED: () => {
      return localStorage.getItem('isLogged')
    },
    
  }
})