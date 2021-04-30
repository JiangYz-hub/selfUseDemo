<template>
  <div>
    <el-upload
      class="upload"
      action="none"
      :auto-upload="false"
      :on-change="checkFile"
      :show-file-list="false">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">upload__tip</div>
    </el-upload>
    <el-button size="small" type="primary" @click="download">下载TXT模板</el-button>
  </div>
</template>

<script>
  import { upload } from '../api/sqlGeneration';
  export default {
    name: "sqlGeneration",
    data() {
      return {
        uploadFiles: '',
      }
    },
    methods: {
      async checkFile(file, fileList) {
        const fileType = await file.name.substring(file.name.lastIndexOf('.')+1).toLowerCase();
        const allowedTypes=['xlsx', 'xls'];
        if (!_.includes(allowedTypes, fileType)){
          return console.log('文件格式不正确');
          // return message(this, '文件格式不正确，只允许上传excel文件', 'error');
        }
        if(file.size / 1024 / 1024 > 2) {
          return console.log('文件不能超过2M');
          // return message(this, '文件不能超过2M', 'error');
        }
        this.uploadFiles = file;
        this.handleUpload(file);
      },
      handleUpload(file) {
        let formData = new FormData;
        formData.append(file, file.raw);
        upload(formData).then(res => console.log('上传成功')).catch(err => console.log('上传失败'));
        // upload(formData).then(res => message(this, '上传成功')).catch(err => message(this, '上传失败', 'error'));
      },
      download() {
        const downloadUrl = '/file/download';
        window.open(downloadUrl);
      },
    },
  }
</script>

<style scoped>

</style>
