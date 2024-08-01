/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-01 16:34:32
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-01 17:30:15
 * @FilePath: /js-challenges/实现promise/实现promise.finally.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Promise.prototype.myFinally = function (fn) {
	return this.then(
		(res) => {
			fn();
			return res;
		},
		(err) => {
			fn();
			throw err;
		}
	);
};
