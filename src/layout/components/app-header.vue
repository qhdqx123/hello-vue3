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
        <el-avatar shape="square" :size="30" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
        <el-icon class="el-icon--right">
            <arrow-down />
        </el-icon>
        </span>
        <template #dropdown>
        <el-dropdown-menu>
            <el-dropdown-item>qhd</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
        </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>

<style lang="scss" scoped>
    .header{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
