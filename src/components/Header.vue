<template>
  <div class="header-2 shadow-md">

    <nav class="bg-indigo-500 py-2 md:py-4">
      <div class="px-4 flex justify-between items-center">

        <div>
          <router-link to="/" class="font-bold text-3xl text-white"><strong>FMT</strong> Storage</router-link>
        </div>

        <div class="hidden md:flex flex-col md:flex-row mt-3 md:mt-0">
          <router-link to="/" class="p-2 lg:px-4 md:mx-2 font-medium text-white rounded hover:bg-white hover:text-indigo-600 transition-colors duration-300">Склады</router-link>
          <router-link to="/" class="p-2 lg:px-4 md:mx-2 font-medium text-white rounded hover:bg-white hover:text-indigo-600 transition-colors duration-300">Склады</router-link>
          <router-link to="/" class="p-2 lg:px-4 md:mx-2 font-medium text-white rounded hover:bg-white hover:text-indigo-600 transition-colors duration-300">Склады</router-link>
          <router-link to="/" class="p-2 lg:px-4 md:mx-2 font-medium text-white rounded hover:bg-white hover:text-indigo-600 transition-colors duration-300">Склады</router-link>
        </div>

        <div class="hidden md:flex flex-col md:flex-row mt-3 md:mt-0">
          <router-link to="/sign-up" class="p-2 lg:px-4 md:mx-2 text-white text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Регистрация</router-link>
          <router-link to="/login" class="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-white rounded hover:bg-white hover:text-indigo-600 transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Войти</router-link>
        </div>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
}
</script>