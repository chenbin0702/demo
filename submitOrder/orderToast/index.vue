<template>
  <div>
    <div class="box" v-for="(item,index) in list" :key="item[0].channelId">
        <div class="left">
          <el-avatar size="large" :src="item[0].logoPictureUrl"></el-avatar>
          <div>{{ item[0].tagType }}</div>
        </div>
        <div class="right" v-for="(item1,index1) in item" :key="item1.channelId" @click="hanldeChange(index,index1)">
          <div class="right-item" :class="{'active':item1.checked}">
            <el-card class="box-card" shadow="hover">
            <el-row>
              <el-col :span="12">
                <div>估计金额:<span class="font">{{ item1.estimationAmount }}</span></div>
              </el-col>
              <el-col :span="12">
                <div>拆分原始金额:<span class="font">{{ item1.splitOriginAmount }}</span></div>
              </el-col>
            </el-row>
            <el-row class="mt">
              <el-col :span="12" >
                <div >{{ item1.opinion }}</div>
              </el-col>
              <el-col :span="12">
                <div>{{ item1.prohibit}}</div>
              </el-col>
            </el-row>
          </el-card>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      list:[],
    };

  },
  methods:{
    changeArr()
    {
      let arr=this.info.expressVos
      let newArr=[]
      const _arr=[]
      let _tmp;
      arr=arr.sort((a,b)=>{
        const s=a['tagType']
        const t=b['tagType']
        return s<t?-1:1
      })
      if(arr.length)
      {
        _tmp=arr[0]['tagType']
      }
      for(const i in arr)
      {
        if(arr[i]['tagType']===_tmp)
        {
          newArr.push(arr[i])
        }
        else{
          _tmp=arr[i]['tagType'];
          _arr.push(newArr);
          newArr=[arr[i]]
        }

      }
      _arr.push(newArr)
      console.log(_arr);
        return _arr
    },
    hanldeChange(index,index1)
    {
      this.list.map(item=>{
        if(Array.isArray(item))
        {
          item.map(item1=>{
            this.$set(item1,'checked',false)

          })
        }
      })
      this.$set(this.list[index][index1],'checked',true)
      console.log(this.list);
    }

  },
  mounted()
  {
    this.list=this.changeArr()
  }
};
</script>

<style lang="scss" scoped>
.box
{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
    .left
    {
      width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .right
    {

      .right-item
      {
      width: 300px;
      margin-right: 10px;
      margin-bottom: 10px;
      .el-card
      {
        min-height:150px;
        border-radius: 20px !important;
      }
      }

      .divier
     {
    width: 100%;
   border-bottom: 2px solid #ccc;
   margin: 20px 0;
    }
    }


}
.font
{
  font-size: 22px;
  font-weight: 700;
  color: #ff5c5d;
}
.mt
{
  margin-top: 30px;
}
.active
{
  border: #ff5c5d 2px solid;
  border-radius: 20px;
}
</style>
