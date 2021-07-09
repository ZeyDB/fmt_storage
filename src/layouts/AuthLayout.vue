<template>
  <div class="w-full bg-indigo-50">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {Header}
}
</script>