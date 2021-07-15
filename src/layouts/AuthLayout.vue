<template>
  <div class="w-full bg-indigo-50">
    <Header/>
    <main class="p-4">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {Header, Footer}
}
</script>