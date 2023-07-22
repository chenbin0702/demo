<template>
  <div class="box">
    <el-form
      :model="checkForm"
      label-width="100px"
      :rules="checkRules"
      ref="checkForm"
    >
      <el-form-item label="寄件省市区" prop="senderOption">
        <el-cascader
          style="width: 50%"
          size="large"
          :options="regionData"
          v-model="checkForm.senderOption"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item label="收件省市区" prop="recevierOption">
        <el-cascader
          style="width: 50%"
          size="large"
          :options="regionData"
          v-model="checkForm.recevierOption"
        >
        </el-cascader>
      </el-form-item>
      <el-form-item label="托寄物" prop="expressType">
        <el-input v-model="checkForm.expressType" style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item label="重量" prop="expressWeight" style="width: 30%">
        <el-row>
          <el-col :span="6">
            <el-input
              v-model="checkForm.expressWeight"
              type="number"
              min="0"
            ></el-input>
          </el-col>
          <el-col :span="10">
            <el-radio-group v-model="checkForm.expressWeight" size="small">
              <el-radio-button label="1"></el-radio-button>
              <el-radio-button label="2"></el-radio-button>
              <el-radio-button label="5"></el-radio-button>
              <el-radio-button label="10"></el-radio-button>
            </el-radio-group>
          </el-col>
          <el-col :span="8">
            <el-tag>kg</el-tag>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="checkForm.billRemark" style="width: 50%"></el-input>
      </el-form-item>
      <el-form-item label="体积" style="width: 60%">
        <el-row>
          <el-col :span="7">
            <el-row>
              <el-col :span="4">
                <el-tag>长</el-tag>
              </el-col>
              <el-col :span="20">
                <el-input
                  v-model="checkForm.volumeLong"
                  type="number"
                  min="0"
                ></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="7">
            <el-row>
              <el-col :span="4">
                <el-tag>宽</el-tag>
              </el-col>
              <el-col :span="20">
                <el-input
                  v-model="checkForm.volumeWidth"
                  type="number"
                  min="0"
                ></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="7">
            <el-row>
              <el-col :span="4">
                <el-tag>高</el-tag>
              </el-col>
              <el-col :span="20">
                <el-input
                  v-model="checkForm.volumeHeight"
                  type="number"
                  min="0"
                ></el-input>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="3"> 单位:cm </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="保价金额">
        <el-input
          v-model="checkForm.insuredPriceAmount"
          style="width: 50%"
        ></el-input>
      </el-form-item>
    </el-form>
    <div class="submit">
      <el-button type="primary" @click="submitCheck">查看运费</el-button>
    </div>
  </div>
</template>

<script>
import { regionData, TextToCode, CodeToText } from "element-china-area-data";
import { checkRules } from "./rules";
import {
  QueryCost
} from "@/api/express/address";
export default {
  data() {
    return {
      regionData,
      checkRules,
      checkForm: {
        billRemark: "",
        expressType: "",
        expressWeight: 1,
        insuredPriceAmount: 0,
        orderType: 0,
        recevierOption: [],
        senderOption: [],
        volumeHeight: "",
        volumeLong: "",
        volumeWidth: "",
      },
    };
  },
  methods: {
    submitCheck() {
      this.$refs["checkForm"].validate((valid) => {
        if (valid) {
          const senderAddress = this.checkForm.senderOption;
          const receiverAddress = this.checkForm.recevierOption;
          const sender = this.changeAreaText(senderAddress);
          const totalVolume=this.checkForm.volumeHeight*this.checkForm.volumeLong*this.checkForm.volumeWidth
          const receiver = this.changeAreaText(receiverAddress);
          const data = {
            billRemark: this.checkForm.billRemark,
            expressType: this.checkForm.expressType,
            expressWeight: this.checkForm.expressWeight,
            insuredPriceAmount: this.checkForm.insuredPriceAmount,
            orderType: 0,
            receiveCity:receiver[1],
            receiveCounty:receiver[2],
            receiveProvince:receiver[0],
            senderCity: sender[1],
            senderCounty: sender[2],
            senderProvince: sender[0],
            totalVolume,
            volumeHeight: this.checkForm.volumeHeight,
            volumeLong: this.checkForm.volumeLong,
            volumeWidth: this.checkForm.volumeWidth,
          };
          QueryCost(data).then(res=>{
             console.log(res);
             this.$message({
            type: 'success',
            message: '查询成功!'
          });
          }).catch(err=>err)
        } else {
          return false;
        }
      });
    },
    changeAreaText(arr) {
      const newArr = [
        CodeToText[arr[0]],
        CodeToText[arr[1]],
        CodeToText[arr[2]],
      ];
      return newArr;
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  margin: 20px 100px;
  .submit {
    display: flex;
    justify-content: center;
    .el-button {
      font-size: 16px;
      width: 100px;
      height: 40px;
    }
  }
}
</style>
