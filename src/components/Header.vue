<template>
  <header class="p-4">

    <nav class="shadow-md rounded-lg bg-white py-2 md:py-4">
      <div class="px-4 flex justify-between items-center">

        <div class="px-1 w-56">
          <router-link to="/" class="text-2xl text-blue-800"><strong>FMT</strong> Склад</router-link>
        </div>

        <div class="hidden md:flex flex-col md:flex-row mt-3 md:mt-0">
          <router-link to="/" class="p-2 lg:px-4 md:mx-2 font-medium text-blue-800 rounded hover:bg-blue-50 transition-colors duration-300">Главная</router-link>
          <router-link to="/" class="p-2 lg:px-4 md:mx-2 font-medium text-blue-800 rounded hover:bg-blue-50 transition-colors duration-300">Склады</router-link>
          <router-link to="/about" class="p-2 lg:px-4 md:mx-2 font-medium text-blue-800 rounded hover:bg-blue-50 transition-colors duration-300">О нас</router-link>
          <router-link to="/contacts" class="p-2 lg:px-4 md:mx-2 font-medium text-blue-800 rounded hover:bg-blue-50 transition-colors duration-300">Контакты</router-link>
        </div>

        <div class="hidden md:flex flex-col md:flex-row mt-3 md:mt-0 w-56">
          <router-link to="/sign-up" class="p-2 lg:px-4 md:mx-2 text-blue-800 text-center border border-transparent rounded hover:bg-blue-50 transition-colors duration-300">Регистрация</router-link>
          <router-link to="/login" class="p-2 lg:px-4 md:mx-2 text-blue-800 text-center border border-solid border-blue-800 rounded hover:bg-blue-50  transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Войти</router-link>
        </div>
      </div>
    </nav>

  </header>
</template>

<script>
export default {
}
</script>