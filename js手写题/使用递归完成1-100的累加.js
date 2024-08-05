/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-02 14:07:11
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-02 14:09:24
 * @FilePath: /js-challenges/js手写题/使用递归完成1-100的累加.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const sum = (num) => {
	if (num === 0) return num;
	return num + sum(num - 1);
};

console.log("-----------", sum(100), "-------------");
