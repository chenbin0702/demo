export const checkRules={
  recevierOption: [
    {
      required: true,
      message: "请选择地址",
      trigger: ["blur", "change"],
    },
  ],
  senderOption: [
    {
      required: true,
      message: "请选择地址",
      trigger: ["blur", "change"],
    },
  ],
  expressType: [
    { required: true, message: "请输入", trigger: "blur" },
  ],
  expressWeight: [
    { required: true, message: "请输入重量", trigger: "blur" },
  ],
}
