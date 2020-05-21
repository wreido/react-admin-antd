import dayjs from 'dayjs';

export default {
  /**
  * @Title 随机生成字符串
  * @param len  生成字符串长度
  */
  randomString(len = 32) {
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    const maxPos = $chars.length;
    let str = '';
    let i = 0;
    while (i < len) {
      str += $chars.charAt(Math.floor(Math.random() * maxPos));
      i++;
    }
    return str;
  },

  /**
  * @Title 日期格式化   YYYY/MM/dd HH:mm:ss
  * @param dateStr     日期
  * @param formatType  格式化类型
  */
  formatDate(dateStr = '', formatType = 'YYYY/MM/DD HH:mm:ss') {
    return dayjs(Number(dateStr)).format(formatType);
  },

  /**
  * @Title 数组切割成等长的多个数组
  * @param array 切割数组
  * @param subGroupLength 切割长度
  */
  arryGroup(array, subGroupLength) {
    let index = 0;
    const newArray = [];
    while (index < array.length) {
      newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
  },

  /**
  * @Title json转url参数
  * @param param
  */
  parseParam(param) {
    let string = '';
    for (const key in param) {
      const str = `${key}=${param[key]}&`;
      string += str;
    }
    return string.slice(0, string.length - 1);
  },

  /**
   * @Title 数字精确位数处理
   * @param number 需处理的数字
   * @param length 精确长度
   * @param type down(向下保留) up(向上保留) round(四舍五入)
   */
  tofixedExtend(number, length = 2, type = "round") {
    let numberString = String(number)
    let arry = numberString.split(".")
    let int = arry[0]
    let float = arry[1] ? `${arry[1]}` : "0"

    if (float.length < length) {
      for (let i = 0; i < length + 1; i++) {
        float = float + "0"
      }
    }
    let newFlag = float.substring(0, length)

    if (type === "down") {
      return `${int}.${newFlag}`
    }
    if (type === "up") {
      return `${int}.${newFlag.substring(0, length - 1)}${
        Number(newFlag.substring(length - 1, length)) + 1
        }`
    }

    if (type === "round") {
      let lastFlag =
        Number(float.substring(length, length + 1)) > 4
          ? Number(newFlag.substring(length - 1, length)) + 1
          : Number(newFlag.substring(length - 1, length))
      return `${int}.${newFlag.substring(0, length - 1)}${lastFlag}`
    }
  }

};
