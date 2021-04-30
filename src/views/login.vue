<template>
  <div class="login">
    <div class="content">
      <div><input type="text" v-model="loginForm.username" placeholder="用户名"/></div>
      <div><input type="text" v-model="loginForm.password" placeholder="密码"/></div>
      <el-button class="btn-hollow" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
  import { login } from '../api/account';
  export default {
    name: "login",
    data () {
      return {
        loginForm: {
          username: 'username',
          password: '785488',
        }
      }
    },
    methods:{
      login() {
        // login(this.loginForm).then(res => {
        //   console.log(res);
        //   if (res.data.resultCode === 200) {
        //     const token = 'token';
        //     Message.success('登录成功');
        //     // 存储token到浏览器
        //     localStorage.setItem('eleToken', token);
        //     this.$router.push('/home');
        //   } else {
        //     Message.error(res.data.resultMsg);
        //     console.log('错误')
        //   }
        // });
        this.$router.push('/sqlGeneration');
      },
    },
  }
</script>

<style scoped>
  .login {
    background-color: aliceblue;
  }
</style>
