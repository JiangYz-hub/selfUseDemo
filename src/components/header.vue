<template>
  <div class="header-component">
    <div class="left">
      <Avatar></Avatar>
    </div>
    <div class="right">
      <div class="tab-nav">
        <span>登录</span>
        <span>消息中心</span>
      </div>
      <mainMenu class="main-nav"></mainMenu>
    </div>
  </div>

</template>

<script>
  import mainMenu from "./menu";
  import Avatar from "./avatar";
  export default {
    name: "header",
    components: {Avatar, mainMenu},
  }
</script>

<style lang="scss" scoped>
  .header-component {
    height: 110px;
    display: flex;
    justify-content: flex-end;
    .left {
      flex: 1;
    }
    .right {
      flex: 3;
      .tab-nav {
        display: flex;
        justify-content: flex-end;
        span {
          margin: 10px;
          padding: 0 10px;
        }
      }
      .main-nav {
        float: right;
        clear: both;
        width: 100%;
      }
    }
  }
</style>
