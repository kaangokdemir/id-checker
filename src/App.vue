<template lang="pug">
  #app
    Navbar
    router-view
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
components: {
  Navbar,
},
}
</script>
