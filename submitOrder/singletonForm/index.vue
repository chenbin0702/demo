<template>
  <div>
    <!-- 寄件/收件 -->
    <el-row>
      <el-col :span="12">
        <div class="title">寄件人</div>
        <el-form
          ref="senderForm"
          :model="singletonForm"
          label-width="auto"
          :rules="senderRules"
        >
          <el-form-item style="width: 80%">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="粘贴如：浙江省杭州市西湖区西湖名胜风景区,王小二,1232312321"
              v-model="singletonForm.senderInfo"
            >
            </el-input>
            <el-button type="primary" @click="StandardAnay(0)"
              >标准解析</el-button
            >
          </el-form-item>

          <el-form-item label="姓名" prop="sender">
            <el-row>
              <el-col :span="15">
                <el-input
                  v-model="singletonForm.sender"
                  style="width: 80%"
                  placeholder="请填写姓名"
                ></el-input>
              </el-col>
              <el-col :span="7">
                <el-button
                  type="text"
                  icon="el-icon-document"
                  @click="openAddress(0)"
                  >地址簿</el-button
                >
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="联系方式" prop="senderMobile">
            <el-input
              v-model="singletonForm.senderMobile"
              style="width: 36%"
              placeholder="请填写手机号"
            ></el-input>
            <span style="margin: 0 20px"> 或</span>
            <el-input
              v-model="singletonForm.senderLandline"
              style="width: 36%"
              placeholder="请填写座机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="省市区" prop="senderAreaOptions">
            <el-cascader
              style="width: 80%"
              size="large"
              :options="regionData"
              v-model="singletonForm.senderAreaOptions"
            >
            </el-cascader>
          </el-form-item>
          <el-form-item label="详细地址" prop="senderAddress">
            <el-input
              v-model="singletonForm.senderAddress"
              style="width: 80%"
              placeholder="请填写详细地址"
            ></el-input>
          </el-form-item>
          <el-form-item class="clear" style="width: 80%">
            <el-button type="text" @click="clearInfo(0)"
              >清空当前信息</el-button
            >
            <el-checkbox v-model="singletonForm.senderCheck"
              >下单后保存地址簿</el-checkbox
            >
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="12">
        <div class="title">收件人</div>
        <el-form
          ref="receiverForm"
          :model="singletonForm"
          label-width="auto"
          :rules="receiverRules"
        >
          <el-form-item style="width: 80%">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="粘贴如：浙江省杭州市西湖区西湖名胜风景区,王小二,1232312321"
              v-model="singletonForm.receiverInfo"
            >
            </el-input>
            <el-button type="primary" @click="StandardAnay(1)"
              >标准解析</el-button
            >
          </el-form-item>

          <el-form-item label="姓名" prop="receiver">
            <el-row>
              <el-col :span="15">
                <el-input
                  v-model="singletonForm.receiver"
                  style="width: 80%"
                  placeholder="请填写姓名"
                ></el-input>
              </el-col>
              <el-col :span="7">
                <el-button
                  type="text"
                  icon="el-icon-document"
                  @click="openAddress(1)"
                  >地址簿</el-button
                >
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="联系方式" prop="receiverMobile">
            <el-input
              v-model="singletonForm.receiverMobile"
              style="width: 36%"
              placeholder="请填写手机号"
            ></el-input>
            <span style="margin: 0 20px"> 或</span>
            <el-input
              v-model="singletonForm.receiverLandline"
              style="width: 36%"
              placeholder="请填写座机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="省市区" prop="receiverAreaOptions">
            <el-cascader
              style="width: 80%"
              size="large"
              :options="regionData"
              v-model="singletonForm.receiverAreaOptions"
            >
            </el-cascader>
          </el-form-item>
          <el-form-item label="详细地址" prop="receiveAddress">
            <el-input
              v-model="singletonForm.receiveAddress"
              style="width: 80%"
              placeholder="请填写详细地址"
            ></el-input>
          </el-form-item>
          <el-form-item class="clear" style="width: 80%">
            <el-button type="text" @click="clearInfo(1)"
              >清空当前信息</el-button
            >
            <el-checkbox v-model="singletonForm.senderCheck"
              >下单后保存地址簿</el-checkbox
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <!-- 快递信息 -->
    <div>
      <div class="title">快递信息</div>
      <el-form
        ref="InfoForm"
        :model="singletonForm"
        label-width="auto"
        inline
        :rules="InfoRules"
      >
        <el-form-item label="包裹数" prop="num">
          <el-input v-model="singletonForm.num"></el-input>
        </el-form-item>
        <el-form-item label="托寄物" prop="expressType">
          <el-input v-model="singletonForm.expressType"></el-input>
        </el-form-item>
        <el-form-item label="重量" prop="expressWeight">
          <el-row>
            <el-col :span="6">
              <el-input v-model="singletonForm.expressWeight"></el-input>
            </el-col>
            <el-col :span="12">
              <el-radio-group
                v-model="singletonForm.expressWeight"
                size="small"
              >
                <el-radio-button label="1"></el-radio-button>
                <el-radio-button label="2"></el-radio-button>
                <el-radio-button label="5"></el-radio-button>
                <el-radio-button label="10"></el-radio-button>
              </el-radio-group>

            </el-col>
            <el-col :span="6">
              <el-tag>kg</el-tag>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="预约取件">
          <el-date-picker
            v-model="singletonForm.subscribeTime"
            type="datetime"
            placeholder="选择预约时间"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="singletonForm.billRemark"></el-input>
        </el-form-item>
        <el-form-item label="体积">
          <el-row>
            <el-col :span="7">
              <el-row>
                <el-col :span="4">
                  <el-tag>长</el-tag>
                </el-col>
                <el-col :span="20">
                  <el-input v-model="singletonForm.volumeLong"></el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="7">
              <el-row>
                <el-col :span="4">
                  <el-tag>宽</el-tag>
                </el-col>
                <el-col :span="20">
                  <el-input v-model="singletonForm.volumeWidth"></el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="7">
              <el-row>
                <el-col :span="4">
                  <el-tag>高</el-tag>
                </el-col>
                <el-col :span="20">
                  <el-input v-model="singletonForm.volumeHeight"></el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="3"> 单位:cm </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
    <!-- 附加业务 -->
    <div>
      <div class="title">附加业务</div>
      <el-form ref="form" :model="singletonForm" label-width="auto">
        <el-form-item label="保价金额">
          <el-input
            v-model="singletonForm.insuredPriceAmount"
            style="width: 40%"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 提交 -->
    <div class="submit">
      <el-button type="primary" style="width: 100px" @click="submitForm"
        >提交</el-button
      >
    </div>
    <!-- 寄件/收件地址 -->
    <el-dialog :title="AddTitle" :visible.sync="showAddress" width="70%" @close="closeMethod">
      <el-form :model="searchForm" inline ref="searchForm">
        <el-form-item label="姓名" prop="name">
          <el-input
            v-model="searchForm.name"
            placeholder="请输入姓名"
          ></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input
            v-model="searchForm.phone"
            placeholder="请输入电话"
          ></el-input>
        </el-form-item>
        <el-form-item label="省份" prop="province">
          <el-input
            v-model="searchForm.province"
            placeholder="请输入省份"
          ></el-input>
        </el-form-item>
        <el-form-item label="城市" prop="city">
          <el-input
            v-model="searchForm.city"
            placeholder="请输入城市"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchAddress">搜索</el-button>
          <el-button type="primary" @click="showAddAddress = true">
            {{ AddTitle === "寄件地址" ? "新增寄件地址" : "新增收件地址" }}
          </el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list" style="width: 100%" v-loading="loading">
        <el-table-column label="选择">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.defaultStatus" disabled></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          :label="AddTitle === '寄件地址' ? '寄件人姓名' : '收件人姓名'"
        >
        </el-table-column>
        <el-table-column
          prop="mobileNo"
          :label="AddTitle === '寄件地址' ? '寄件人电话' : '收件人电话'"
        >
        </el-table-column>
        <el-table-column
          prop="province"
          :label="AddTitle === '寄件地址' ? '寄件省' : '收件省'"
        >
        <template slot-scope="scope">
         {{ getAreaListChange(scope.row).province}}
        </template>
        </el-table-column>
        <el-table-column
          prop="city"
          :label="AddTitle === '寄件地址' ? '寄件市' : '收件市'"
        >
        <template slot-scope="scope">
          {{ getAreaListChange(scope.row).city}}
        </template>
        </el-table-column>
        <el-table-column
          prop="district"
          :label="AddTitle === '寄件地址' ? '寄件区' : '收件区'"
        >
          <template slot-scope="scope">
          {{ getAreaListChange(scope.row).city}}
        </template>
        </el-table-column>
        <el-table-column
          prop="street"
          :label="AddTitle === '寄件地址' ? '寄件街道/乡镇' : '收件街道/乡镇'"
        >
        <template>
          /
        </template>
        </el-table-column>
        <el-table-column
          prop="detail"
          :label="AddTitle === '寄件地址' ? '寄件详细地址' : '收件详细地址'"
        >
        <template slot-scope="scope">
          {{ getAreaListChange(scope.row).detail}}
        </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text"  @click="deleteAddress(scope.row)">删除</el-button>
            <el-button type="text" @click="updataUserDefault(scope.row)">设置为默认地址</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-size="pageSize"
        @size-change="handleSizeChange"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        class="pagination"
      >
      </el-pagination>
      <!--  -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="showAddress = false;loading=true">取 消</el-button>
        <el-button type="primary" @click="submitAddressInfo">确 定</el-button>
      </div>
    </el-dialog>
    <!--新增寄件地址  append-to-body -->
    <el-dialog
      :title="AddTitle === '寄件地址' ? '新增寄件地址' : '新增收件地址'"
      :visible.sync="showAddAddress"
    >
      <el-form
        :model="addAddressFrom"
        label-width="auto"
        :rules="addAddressRules"
        ref="addAddressFrom"
      >
        <el-form-item style="width: 80%">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="粘贴如：浙江省杭州市西湖区西湖名胜风景区,王小二,1232312321"
            v-model="addAddressFrom.info"
            maxlength="300"
            show-word-limit
          >
          </el-input>
          <el-button type="primary" @click="StandardAddAddress"
            >标准解析</el-button
          >
        </el-form-item>
        <el-form-item
          prop="name"
          :label="AddTitle === '寄件地址' ? '寄件人姓名' : '收件人姓名'"
        >
          <el-input
            v-model="addAddressFrom.name"
            placeholder="请输入姓名"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="phone"
          :label="AddTitle === '寄件地址' ? '寄件人电话' : '收件人电话'"
        >
          <el-input
            v-model="addAddressFrom.phone"
            placeholder="请输入电话"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="address"
          :label="AddTitle === '寄件地址' ? '寄件人地址' : '收件人地址'"
          placeholder="请选择"
        >
          <el-cascader
            style="width: 80%"
            size="large"
            :options="regionData"
            v-model="addAddressFrom.address"
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="街道/乡道" prop="street">
          <el-input
            v-model="addAddressFrom.street"
            placeholder="请输入街道/乡道"
            style="width: 80%"
          ></el-input>
        </el-form-item>
        <el-form-item label="详细地址" prop="detail">
          <el-input
            v-model="addAddressFrom.detail"
            placeholder="请输入详细地址"
            style="width: 80%"
            maxlength="80"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAddAddress">取 消</el-button>
        <el-button type="primary" @click="sumbitAddAddress">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 订单弹窗 -->

    <el-dialog title="" :visible.sync="showOrderToast" width="70%">
      <OrderToast :info="expressInfo" />
      <span slot="footer" class="dialog-footer">
        <el-button @click="showOrderToast = false">取 消</el-button>
        <el-button type="primary" @click="showOrderToast = false"
          >下单</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { regionData, TextToCode, CodeToText } from "element-china-area-data";
import OrderToast from '../orderToast/index.vue'
import {
  addAddressRules,
  receiverRules,
  senderRules,
  InfoRules,
} from "./rules";
import {
  addressParse,
  userAddress,
  OrderDemand,
  getAddressPage,
  getUserAddress,
  deleteUserAddress,
  updatedefaultAddress
} from "@/api/express/address";
export default {
  data() {
    return {
      regionData,
      loading:true,
      showAddress: false,
      showAddAddress: false,
      showOrderToast: false,
      list: [],
      pageNum: 1,
      pageSize: 10,
      total:0,
      AddTitle: "",
      searchForm: {
        name: "",
        phone: "",
        province: "",
        city: "",
      },
      addAddressFrom: {
        info: "",
        name: "",
        phone: "",
        address: [],
        street: "",
        detail: "",
      },
      singletonForm: {
        billRemark: "",
        num: 1,
        subscribeTime: "",
        expressType: "",
        expressWeight: 1,
        senderAreaOptions: [],
        receiverAreaOptions: [],
        insuredPriceAmount: 0,
        orderType: 0,
        receiveAddress: "",
        receiver: "",
        receiverCheck: false,
        receiverInfo: "",
        receiverMobile: "",
        receiverLandline: "",
        sender: "",
        senderCheck: false,
        senderAddress: "",
        senderInfo: "",
        senderMobile: "",
        senderLandline: "",
        volumeHeight: "",
        volumeLong: "",
        volumeWidth: "",
      },
      expressInfo:{},
      addAddressRules: addAddressRules,
      receiverRules: receiverRules,
      senderRules: senderRules,
      InfoRules: InfoRules,
    };
  },
  components:{
    OrderToast
  },
  methods: {
    StandardAnay(type) {
      if (type === 0) {
        const { senderInfo } = this.singletonForm;
        const data = {
          text: senderInfo,
        };
        addressParse(data)
          .then((res) => {
            console.log(res);
            const oldData = this.singletonForm;

            const areaList = [
              res.data.province,
              res.data.city,
              res.data.district,
            ];

            const newList = this.changeAreaCode(areaList);
            const newData = {
              senderMobile: res.data.phone,
              sender: res.data.name,
              senderAddress: res.data.detail,
              senderAreaOptions: newList,
            };
            this.singletonForm = Object.assign(oldData, newData);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (type === 1) {
        const { receiverInfo } = this.singletonForm;
        const data = {
          text: receiverInfo,
        };
        addressParse(data)
          .then((res) => {
            console.log(res);
            const oldData = this.singletonForm;
            const areaList = [
              res.data.province,
              res.data.city,
              res.data.district,
            ];
            const newList = this.changeAreaCode(areaList);
            const newData = {
              receiverMobile: res.data.phone,
              receiver: res.data.name,
              receiveAddress: res.data.detail,
              receiverAreaOptions: newList,
            };
            this.singletonForm = Object.assign(oldData, newData);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    clearInfo(type) {
      const oldData = this.singletonForm;
      if (type === 0) {
        const newData = {
          senderInfo: "",
          senderMobile: "",
          senderLandline: "",
          senderCheck: false,
          sender: "",
          senderAddress: "",
          senderAreaOptions: [],
        };
        this.singletonForm = Object.assign(oldData, newData);
      } else {
        const newData = {
          receiverInfo: "",
          receiverMobile: "",
          receiverLandline: "",
          receiverCheck: false,
          receiver: "",
          receiveAddress: "",
          receiverAreaOptions: [],
        };
        this.singletonForm = Object.assign(oldData, newData);
      }
    },
    openAddress(type) {
      this.showAddress = true;
      if (type === 0) {
        this.AddTitle = "寄件地址";
       this.getAddressList()
      } else {
        this.AddTitle = "收件地址";
        this.getAddressList()
      }
    },
    changeAreaCode(arr) {
      const newArr = [
        TextToCode[arr[0]].code,
        TextToCode[arr[0]][arr[1]].code,
        TextToCode[arr[0]][arr[1]][arr[2]].code,
      ];
      return newArr;
    },
    StandardAddAddress() {
      const { info } = this.addAddressFrom;
      const data = {
        text: info,
      };
      addressParse(data)
        .then((res) => {
          console.log(res);
          const oldData = this.addAddressFrom;
          const areaList = [
            res.data.province,
            res.data.city,
            res.data.district,
          ];
          const newList = this.changeAreaCode(areaList);
          const newData = {
            phone: res.data.phone,
            name: res.data.name,
            detail: res.data.detail,
            street: res.data.street,
            address: newList,
          };
          this.addAddressFrom = Object.assign(oldData, newData);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 关闭 地址弹窗回调
    closeMethod()
    {
       this.loading=true
       this.pageNum=1
    },
    // 提交表单
    submitForm() {
      this.$refs["senderForm"].validate((valid) => {
        if (valid) {
          this.$refs["receiverForm"].validate((valid1) => {
            if (valid1) {
              this.$refs["InfoForm"].validate((valid2) => {
                if (valid2) {
                  const data = {
                    billRemark: this.singletonForm.billRemark,
                    expressType: this.singletonForm.expressType,
                    expressWeight: this.singletonForm.expressWeight,
                    insuredPriceAmount: this.singletonForm.insuredPriceAmount,
                    orderType: 0,
                    receiveAddress: this.singletonForm.receiveAddress,
                    receiver: this.singletonForm.receiver,
                    receiverMobile: this.singletonForm.receiver,
                    sender: this.singletonForm.sender,
                    senderAddress: this.singletonForm.senderAddress,
                    senderMobile: this.singletonForm.senderMobile,
                    volumeHeight: this.singletonForm.volumeHeight,
                    volumeLong: this.singletonForm.volumeLong,
                    volumeWidth: this.singletonForm.volumeWidth,
                  };
                  const senderOption = this.singletonForm.senderAreaOptions;
                  const senderProvince = CodeToText[senderOption[0]];
                  const senderCity = CodeToText[senderOption[1]];
                  const senderCounty = CodeToText[senderOption[2]];
                  const receiverOption = this.singletonForm.receiverAreaOptions;
                  const receiveProvince = CodeToText[receiverOption[0]];
                  const receiveCity = CodeToText[receiverOption[1]];
                  const receiveCounty = CodeToText[receiverOption[2]];
                  const areaData = {
                    senderProvince,
                    senderCity,
                    senderCounty,
                    receiveProvince,
                    receiveCity,
                    receiveCounty,
                  };
                  const newData = Object.assign(data, areaData);
                  console.log(newData);
                  OrderDemand(newData)
                    .then((res) => {
                      this.expressInfo=res.data
                      console.log(this.expressInfo);
                      this.showOrderToast = true;
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                } else {
                  return false;
                }
              });
            } else {
              return false;
            }
          });
        } else {
          return false;
        }
      });
    },
    // 添加地址
    sumbitAddAddress() {
      const {address} = this.addAddressFrom;
      const city = CodeToText[address[1]];
      const district = CodeToText[address[2]];
      const province = CodeToText[address[0]];
      const type=this.AddTitle==='寄件地址'?0:1
      const data = {
        city,
        defaultStatus: false,
        detail: this.addAddressFrom.detail,
        district,
        location: "",
        locationAddress: `${province}/${city}/${district}`,
        name: this.addAddressFrom.name,
        pasteAddress: this.addAddressFrom.info,
        phone: this.addAddressFrom.phone,
        province,
        street: this.addAddressFrom.street,
        type
      };
      console.log(1122312);
      this.$refs["addAddressFrom"].validate((valid) => {
        if (valid) {
          userAddress(data)
            .then((res) => {
              console.log(res);
              this.loading=true
              this.$message({
                type: "success",
                message: "新增地址成功",
              });
              this.showAddAddress = false;
              this.resetData();
              this.getAddressList()
            })
            .catch((err) => {
              this.$message({
                type: "error",
                message: "新增地址失败",
              });
              this.showAddAddress = false;
              this.resetData();
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 删除用户地址
    deleteAddress(data)
    {
      this.$confirm('确认删除该地址？')
          .then(_ => {
            deleteUserAddress(data.userAddressId).then(res=>{
                console.log(res);
                this.$message({
          message: '删除成功',
          type: 'success'
        });
        this.loading=true
            this.getAddressList()
            }).catch(err=>{

            })
          })
          .catch(_ => {});

    },
    // 更新用户默认地址
    updataUserDefault(data)
    {
      updatedefaultAddress(data.userAddressId).then(res=>{
        this.$message({
          message: '更新默认地址成功',
          type: 'success'
        })
        this.loading=true
        this.getAddressList()
      }).catch(err=>err)
    },
    // 提交用户地址
    submitAddressInfo()
    {
      const data=this.list.filter(item=>item.defaultStatus)
      console.log(data);
        getUserAddress(data[0].userAddressId).then(res=>{
          let obj=res.data
          console.log(obj);
          const oldData = this.singletonForm;
            const areaList = [
              obj.province,
              obj.city,
              obj.district,
          ];
          const newList = this.changeAreaCode(areaList);
          let newData={}
          if(this.AddTitle==='寄件地址')
          {
             newData = {
            senderMobile: obj.phone,
            sender: obj.name,
            senderAddress: obj.detail,
            senderAreaOptions: newList,
          };
          }
          else
          {
             newData = {
             receiverMobile: obj.phone,
              receiver: obj.name,
              receiveAddress: obj.detail,
              receiverAreaOptions: newList,
          };

          }
          this.addAddressFrom = Object.assign(oldData, newData);
          this.showAddress=false
        }).catch(err=>err)
    },
    // 取消添加地址
    cancelAddAddress() {
      this.showAddAddress = false;
    },
    // 搜索地址
    searchAddress() {
      const name = this.searchForm.name;
      const phone = this.searchForm.phone;
      this.getAddressList(name, phone);
      // 重置搜索表单数据
      this.$refs["searchForm"].resetFields();
    },
    // 获取数据
    getAddressList(...Term) {
      const type =
        this.AddTitle === "寄件地址" ? "SENDER_ADDRESS" : "RECIPIENT_ADDRESS";
      const data = {
        type,
        pageNum:this.pageNum,
        pageSize:this.pageSize
      };
      let params;
      if(Term!=='')
      {
        const addData={
        searchTerm:Term[0]===''?Term[1]:Term[0],
        }
       params = { ...data, ...addData};
      }
      else{
        params={...data}
      }
      getAddressPage(params)
        .then((res) => {
          this.list=res.data.list
          this.total=res.data.total
          this.loading=false
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAreaListChange(obj)
    {
      console.log(obj);
      let {recommend}=obj
      let data
      if(recommend)
      {
        let reg=/.+?(省|市|区|自治区|自治州|县|旗|会)/g
        let str=`${recommend.match(reg)[0]}${recommend.match(reg)[1]}${recommend.match(reg)[2]}`
        console.log(str,"str");
        let detail=recommend.split(str)[1]
        data={
        province:recommend.match(reg)[0],
        city:recommend.match(reg)[1],
        district:recommend.match(reg)[2],
        detail
        }
      }
      else{
        data={
          province:'',
          city:'',
          district:'',
          detail:''
        }
      }
      return data
    },
    // 分页栏跳转到 某一页
    handleCurrentChange(e) {
      console.log(e);
      this.pageNum = e;
      this.getAddressList();
    },
    // 分页面大小改变
    handleSizeChange(e)
    {
       this.pageSize=e
       this.getAddressList();
    },
    // 重置数据
    resetData() {
      this.addAddressFrom = {
        info: "",
        name: "",
        phone: "",
        address: [],
        street: "",
        detail: "",
      };
    },
  },
};
</script>

<style lang="scss">
.title {
  height: 40px;
  padding: 10px;
  width: 100px;
  background-color: #6b93b6;
  color: #fff;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  margin-bottom: 20px;
}
.clear {
  display: flex;
  justify-content: flex-end;
}
.submit {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
}
.pagination {
  margin-top: 20px;
}
</style>
