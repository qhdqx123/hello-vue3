<template>
  <div class="login-con">
    <el-form
    ref="formRef"
    class="login-form"
    :model="form"
    label-width="120px"
    :rules="rules"
    :label-position="'top'">
    <el-form-item label="手机号" prop="tel">
      <el-input v-model="form.tel"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input v-model="form.pwd" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(formRef)" class="login-btn">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const formRef = ref<InstanceType<typeof ElForm>>()
    const token = ref('kkkkkddkeeeeeeee')
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const form = reactive({
      tel: '18233221111',
      pwd: '111111'
    })

    const rules = reactive({
      tel: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        { pattern: /^1\d{10}$/, message: '请输入正确的手机号', trigger: 'blur' }
      ],
      pwd: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
      ]
    })
    const onSubmit = (formEl: InstanceType<typeof ElForm> | undefined) => {
      if (!formEl) {
        return
      }
      formEl.validate((valid) => {
        if (valid) {
          // TODO 缺少登录接口
          store.commit('setUser', { token: token.value })
          router.push(route.query.redirect as string || '/')
        } else {
          console.log('error submit!')
          return false
        }
      })
    }

    return {
      form,
      onSubmit,
      rules,
      formRef
    }
  }
})
</script>

<style lang="scss" scoped>
  .login-con{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #E9EEF3;
    .login-form{
      background: #fff;
      width: 300px;
      padding: 70px;
      border-radius: 5px;
    }
    .login-btn{
      width: 100%;
    }
  }
</style>
