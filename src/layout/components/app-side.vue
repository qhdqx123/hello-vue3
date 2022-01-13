<template>
  <div class="aside">
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-sub-menu index="1">
            <template #title>
                <el-icon><location /></el-icon>
                <span>课程中心</span>
            </template>
            <el-menu-item index="/course"><el-icon><location /></el-icon>课程管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
            <template #title>
                <el-icon><location /></el-icon>
                <span>资源中心</span>
            </template>
            <el-menu-item index="/resource"><el-icon><location /></el-icon>资源管理</el-menu-item>
        </el-sub-menu>
      </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Location } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Location
  },
  setup () {
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    return {
      handleOpen,
      handleClose
    }
  }
})
</script>

<style lang="scss" scoped>
    .aside{
        .el-menu{
            min-height: 100vh;
        }
    }
</style>
