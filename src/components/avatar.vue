<template>
  <div class="avatar">
    <el-avatar class="left"> user </el-avatar>
    <div class="right">
      <span>name</span>
      <span>identity</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "avatar"
    }
</script>

<style lang="scss" scoped>
.avatar {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-avatar--circle {
    height: 80px;
    width: 80px;
    margin: 10px;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
}
</style>
