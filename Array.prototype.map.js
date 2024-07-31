/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-07-31 17:48:00
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-07-31 18:00:59
 * @FilePath: /js-challenges/Array.prototype.map.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Array.prototype.myMap = (fn) => {
	const result = [];

	arr.forEach((_item, _index) => {
		const res = fn.call(null, _item, _index, arr);
		result.push(res);
	});
	return result;
};

const arr = [1, 2, 4];
arr.myMap((_item) => _item * 2);
