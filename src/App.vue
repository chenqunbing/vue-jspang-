<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <button @click="goback">后退</button>
      <button @click="forward">前进</button>
      <button @click="gohome">首页</button>
    </div>
    <div>
      <router-link to='/'>首页</router-link> |
      <transition name="fade">
        <router-link to='/hi'>Hi页面</router-link> |
      </transition>
      <router-link :to='{name: "hi1", params: {username: "ZHH"}}'>Hi1页面</router-link> |
      <router-link to='/hi/hi2'>Hi2页面</router-link>> |
      <router-link to='/params/100/Come On'>Params Page</router-link>
      <router-link to="/somePath">Redirect</router-link>
      <router-link to='/zhh'>Alias</router-link>
      <router-link to='/aaaa'>瞎写的路径</router-link>
      <router-link to='/count'>Count计数</router-link>

    </div>
    <div>
      <p>{{$route.name}}</p>
    </div>
    <router-view></router-view>
    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px"></router-view>
    <router-view name="right" style="float:left;width:50%;background-color:#c0c;height:300px"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goback () {
      this.$router.go(-1)
    },
    forward () {
      this.$router.go(1)
    },
    gohome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
