/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-07-31 16:36:02
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-07-31 16:44:12
 * @FilePath: /js-challenges/Array.prototype.flat.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Array.prototype.myFlat = function () {
	return this.reduce((a, b) => a.concat(Array.isArray(b) ? b.myFlat() : b), []);
};

const arr = [1, 2, 3, [4, 5, [6]], [7, [8]]];
console.log("-----------", arr.myFlat(), "-------------");
