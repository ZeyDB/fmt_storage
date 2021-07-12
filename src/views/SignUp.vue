<template>
  <div class="flex justify-center items-center h-screen pl-4 pr-4 md:pl-8 md:pr-8">
    <div class="w-full max-w-sm">
      <h1 class="text-3xl font-semibold text-center mb-8">Регистрация</h1>
      <form class="bg-white shadow-md rounded p-4 sm:p-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-gray-300 focus:outline-none focus:shadow-outline" id="email" type="mail">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Имя
          </label>
          <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-gray-300 focus:outline-none focus:shadow-outline" id="name" type="text">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Пароль
          </label>
          <input class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="repeat-password" type="password">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Повторите пароль
          </label>
          <input class="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline" id="repeat-password" type="password">
        </div>
        <div class="flex items-center justify-center">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
            Зарегистрироваться
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2021 FMT. All rights reserved.
      </p>
    </div>
  </div>
</template>