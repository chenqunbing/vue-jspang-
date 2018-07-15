<template>

    <div class="hi">
        
        <h1>{{msg}}</h1>

        <router-view></router-view>
    </div>

</template>


<script>
export default {
    data () {
        return {
            msg: 'Hello, I am ZHH!'
        }
    }
}
</script>

<style>

</style>

