<template>
  <div class="flex justify-center items-center py-10 md:py-20">
    <div class="w-full max-w-sm">
      <h1 class="text-3xl font-semibold text-center mb-8">Авторизация</h1>
      <form class="bg-white shadow-md rounded p-4 sm:p-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Логин
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-gray-300 focus:outline-none focus:shadow-outline" id="username" type="text">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Пароль
          </label>
          <input class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:outline-none focus:shadow-outline" id="password" type="password">
          <p class="text-red-500 text-xs italic">Введите пароль.</p>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Войти
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
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