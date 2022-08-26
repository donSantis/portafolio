<template>
  
    <span v-if= "i.status === 'Alive' " class="card-status-char text-center rounded-circle">{{i.status}}</span>
    <span v-else  class="card-status-char2 text-center rounded-circle">{{i.status}}</span>
</template>

<script>
export default {
    name:'status',
}
</script>

<style>

</style>