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

};
