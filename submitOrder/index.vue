<template>
  <div>
    <el-card>
      <!-- 图标 -->
      <!-- 单件寄件|批量基建 -->
      <div class="tabs">
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="单件寄件" name="first">
            <SingletonForm></SingletonForm>
          </el-tab-pane>
          <el-tab-pane label="批量基建" name="second"> </el-tab-pane>
          <el-tab-pane label="查运费" name="third">
            <CheckFreight></CheckFreight>
             </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>
</template>

<script>
import SingletonForm from './singletonForm/index.vue'
import CheckFreight from './checkFreight/index.vue'
export default {
  components: {
    SingletonForm,
    CheckFreight
  },
  data() {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style lang="scss"></style>
