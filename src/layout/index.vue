<template>
    <el-container>
        <el-aside width="200px">
            <AppSide></AppSide>
        </el-aside>
        <el-container>
        <el-header>
            <AppHeader></AppHeader>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppSide from './components/app-side.vue'
import AppHeader from './components/app-header.vue'
export default defineComponent({
  components: {
    AppSide,
    AppHeader
  }
})
</script>

<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
}
.el-aside {
  background: #d3dce6;
}
.el-header {
  background: #fff;
}
.el-main {
  background: #e9eef3;
}
</style>
