<template>
    <div>
        <h2>{{msg}}</h2>
        <hr />
        <h3>{{$store.state.count}}-{{count}}</h3>
        <div>
            <!-- 传递参数 -->
            <!-- <button @click="$store.commit('add', 10)">+</button>
            <button @click="$store.commit('reduce')">-</button> -->
            <!-- 模板获取mutations方法 -->
            <!-- <button @click="add">+</button>
            <button @click="reduce">-</button> -->
            <!-- action修改异步状态 -->
            <button @click="addAction">+</button>
            <button @click="reduceAction">+</button>
        </div>
    </div>

</template>


<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
    data () {
        return {
            msg: 'Hello vuex'
        }
    },
    // State访问状态对象
    // 方法一 （通过计算属性直接赋值）
    // computed: {
    //     count () {
    //         return this.$store.state.count
    //     }
    // },
    // 方法二 （通过mapState对象来赋值）
    // computed: mapState({
    //     count: state => state.count
    // }),
    // 方式三 （通过mapState数组来赋值）
    computed: mapState(['count']),
    // computed: {
    //     ...mapState(['count']),
    //     count () {
    //         return this.$store.getters.count
    //     }
    // },
    // 用mapGetters简化模板
    // computed: {
    //     ...mapGetters(['count'])
    // },
    // methods: mapMutations(['add','reduce']),
    methods: {
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction', 'reduceAction'])
    },
    store
}
</script>

<style>


</style>

