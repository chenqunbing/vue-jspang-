<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>{{$route.params.username}}</h2>
    </div>
</template>


<script>
export default {
    data () {
        return {
            msg: 'I am Hi1 page!'
        }
    }
}
</script>

<style>

</style>


