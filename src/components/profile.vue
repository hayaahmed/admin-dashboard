<template>
    <div class="profile">
       <sideBarVue></sideBarVue>
        <p class="center uppercase">my profile</p>
    </div>
    
</template>
<script>
import sideBarVue from './sideBar.vue';
export default {
    components: { sideBarVue },
    name:'profile',
    data(){
        return{
            hello:"hi from home",
            username:"",
            cats:[]
    ,    }
    },
}
</script>
<style lang="scss">

</style>