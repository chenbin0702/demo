export const receiverRules={
  receiver: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" },
  ],

  receiverMobile: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      pattern: /^1[3-9](\d{9})$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
  receiverAreaOptions: [
    {
      required: true,
      message: "请选择地址",
      trigger: ["blur", "change"],
    },
  ],
  receiveAddress: [
    { required: true, message: "请填写详细地址", trigger: "blur" },
  ],
}
export const senderRules={
  sender: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" },
  ],
  senderAddress: [
    { required: true, message: "请填写详细地址", trigger: "blur" },
  ],
  senderAreaOptions: [
    {
      required: true,
      message: "请选择地址",
      trigger: ["blur", "change"],
    },
  ],
  senderMobile: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      pattern: /^1[3-9](\d{9})$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
}
export const InfoRules={
  num: [
    { required: true, message: "请输入包裹数量", trigger: "blur" },
  ],
  expressType: [
    { required: true, message: "请输入", trigger: "blur" },
  ],
  expressWeight: [
    { required: true, message: "请输入重量", trigger: "blur" },
  ],
}
export const addAddressRules={
  name: [
    { required: true, message: "请输入姓名", trigger: "blur" },
    { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" },
  ],
  phone: [
    { required: true, message: "请输入手机号", trigger: "blur" },
    {
      pattern: /^1[3-9](\d{9})$/,
      message: "请输入正确的手机号",
      trigger: "blur",
    },
  ],
  address: [
    {
      required: true,
      message: "请选择地址",
      trigger: ["blur", "change"],
    },
  ],
  detail: [
    { required: true, message: "请填写详细地址", trigger: "blur" },
  ],
}
