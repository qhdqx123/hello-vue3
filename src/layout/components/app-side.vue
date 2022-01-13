<template>
  <div class="aside">
    <div class="fold" @click="isToggle">
      <el-icon><fold /></el-icon>
    </div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      :collapse="isCollapse"
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
        <el-menu-item index="/course"
          ><el-icon><location /></el-icon>课程管理</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><location /></el-icon>
          <span>资源中心</span>
        </template>
        <el-menu-item index="/resource"
          ><el-icon><location /></el-icon>资源管理</el-menu-item
        >
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Location, Fold } from '@element-plus/icons-vue'

export default defineComponent({
  components: {
    Location,
    Fold
  },
  setup () {
    const isCollapse = ref(false)
    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    const isToggle = () => {
      // isCollapse = !isCollapse.value
    }

    return {
      handleOpen,
      handleClose,
      isCollapse,
      isToggle
    }
  }
})
</script>

<style lang="scss" scoped>
.aside {
  .el-menu {
    min-height: 100vh;
  }
}
</style>
