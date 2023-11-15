/**
 * Created by jiachenpan on 16/11/18.
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

//
// export function formatTime(time, option) {
//   time = +time * 1000
//   const d = new Date(time)
//   const now = Date.now()
//
//   const diff = (now - d) / 1000
//
//   if (diff < 30) {
//     return '刚刚'
//   } else if (diff < 3600) { // less 1 hour
//     return Math.ceil(diff / 60) + '分钟前'
//   } else if (diff < 3600 * 24) {
//     return Math.ceil(diff / 3600) + '小时前'
//   } else if (diff < 3600 * 24 * 2) {
//     return '1天前'
//   }
//   if (option) {
//     return parseTime(time, option)
//   } else {
//     return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
//   }
// }
export function formatTime(timespan) {
  const nowTime = Math.max(Date.now(), +timespan + 1000);
  var mistiming = Math.round((nowTime - timespan) / 1000);
  var arrr = [' years', ' mons', ' weeks', ' days', ' hours', ' mins', ' s'];
  var arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];
  for (var i = 0; i < arrn.length; i++) {
    var inm = Math.floor(mistiming / arrn[i]);
    if (inm !== 0) {
      return inm + arrr[i];
    }
  }
}

export function IsPC() {
  var userAgentInfo = navigator.userAgent
  var Agents = ['Android', 'iPhone',
    'SymbianOS', 'Windows Phone',
    'iPad', 'iPod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

/**
 * 保留小数位（非负）
 * @param {number} num 待处理数据
 * @param {number} n 位数
 */
// export function toPrecision(num,n)
// {
//   let r=Math.pow(10,Number(n)) ;
//   var result=Math.floor(Number(num) * r) / r;
//   if (result.toNonExponential) {
//     return toNonExponential(result);
//   } else {
//     result
//   }

// }


// export function toNonExponential(num) {
//   if(num.toExponential) {
//     var m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
//     return num.toFixed(Math.max(0, (m[1] || '').length - m[2]));
//   } else {
//     return num
//   }
// }

export function toPrecision(num, decimal) {
  num = num.toString()
  let index = num.indexOf('.')
  if (index !== -1) {
    num = num.substring(0, decimal + index + 1)
  } else {
    num = num.substring(0)
  }
  if (num.length <= 10) {
    return num
  }
  return parseFloat(num).toFixed(decimal)
}

/**
 * 两个数相成 精确计算
 *
 * @param {any} f1
 * @param {any} f2
 * @returns
 */
export function fxf(f1, f2) {
  f1 += '';
  f2 += '';
  const f1Len = f1.split('.')[1] ? f1.split('.')[1].length : 0;
  const f2Len = f2.split('.')[1] ? f2.split('.')[1].length : 0;
  if (f1Len) {
    f1 = f1.replace('.', '');
  }
  if (f2Len) {
    f2 = f2.replace('.', '');
  }
  return (f1 * f2) / (10 ** (f1Len + f2Len));
  // return f1 * f2 / Math.pow(10, f1Len + f2Len);
}

/**
 * 两个数相除 精确计算
 *
 * @param {any} arg1
 * @param {any} arg2
 //  * @returnss
 */
export function accDiv(arg1, arg2) {
  let t1 = 0;
  let t2 = 0;
  try {
    t1 = arg1.toString().split('.')[1].length
  } catch (e) {
  }
  try {
    t2 = arg2.toString().split('.')[1].length
  } catch (e) {
  }
  const r1 = Number(arg1.toString().replace('.', ''));
  const r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

//加法函数
export function accAdd(arg1, arg2) {
  var r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length;
  }
  catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  }
  catch (e) {
    r2 = 0;
  }

  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

//减法函数
export function Subtr(arg1, arg2) {
  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  }
  catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  }
  catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  //last modify by deeka
  //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
