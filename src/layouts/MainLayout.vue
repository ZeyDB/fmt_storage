<template>
  <div class="w-full">
    <Header/>
    <div class="px-4"> 
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
  components: {Header, Sidebar}
}
</script>