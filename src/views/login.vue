<template>
  <div class="login">
    <div class="content">
      <div><input type="text" v-model="loginForm.username" placeholder="用户名"/></div>
      <div><input type="text" v-model="loginForm.password" placeholder="密码"/></div>
      <el-button class="btn-hollow confirm" @click="login">登录</el-button>
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

<style lang="scss" scoped>
  .login {
    height: 100%;
    position: relative;
    .content {
      height: 300px;
      width: 600px;
      margin: 0 auto;
      position: absolute;
      left: 800px;
      top: 300px;
      transform: translate(-50%,-50%);
      background-color: #c2cb81;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 20px;
    }
  }
</style>
