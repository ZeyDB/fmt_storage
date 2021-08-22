<template>
  <div class="flex justify-center items-center py-10 md:py-20">
    <div class="w-full max-w-sm">
      <h1 class="text-3xl font-semibold text-center mb-8">Авторизация</h1>
      <form class="bg-white shadow-md rounded p-4 sm:p-8 mb-4" @submit.prevent="submitHandler">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input 
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-gray-300 focus:outline-none focus:shadow-outline" 
            id="username" 
            type="text"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
          >
          <span 
            class="text-red-500 text-xs italic" 
            v-if="$v.email.$dirty && !$v.email.required"
          >Введите email</span>
          <span 
            class="text-red-500 text-xs italic" 
            v-else-if="$v.email.$dirty && !$v.email.email"
          >Введите корректный email</span>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Пароль
          </label>
          <input 
            class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
          >
          <span 
            class="text-red-500 text-xs italic"
            v-if="$v.password.$dirty && !$v.password.required"
          >Введите пароль</span>
          <span 
            class="text-red-500 text-xs italic"
            v-if="$v.password.$dirty && !$v.password.minLength"
          >Минимум 8 символов</span>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Войти
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" @click.prevent="forgetPassword ">
            Забыли пароль?
          </a>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 FMT. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '', 
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(8)}
  },
  methods: {
    submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return 
      }
      this.$router.push('/')
    },
    forgetPassword() {
      this.$router.push('/sign-up?message=logout')
    }
  }
}
</script>