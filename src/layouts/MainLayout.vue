<template>
  <div class="w-full bg-blue-50">
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
import Sidebar from '@/components/Sidebar'

export default {
  components: {Header, Footer, Sidebar}
}
</script>