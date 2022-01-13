<template>
  <div class="header">
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item
        ><a href="/">promotion management</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
        <span class="el-dropdown-link">
        <el-avatar shape="square" :size="50" :src="img"></el-avatar>
        <el-icon class="el-icon--right">
            <arrow-down />
        </el-icon>
        </span>
        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item>{{userName}}</el-dropdown-item>
            <el-dropdown-item @click="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
        </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
export default defineComponent({
  setup () {
    const userInfo = reactive({
      userName: 'qhd',
      img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    })
    const router = useRouter()
    const store = useStore()
    const logOut = () => {
      store.commit('setUser')
      router.push('./login')
      ElMessage({
        message: '退出成功',
        type: 'success'
      })
    }

    return {
      logOut,
      ...toRefs(userInfo)
    }
  }
})
</script>

<style lang="scss" scoped>
    .header{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
