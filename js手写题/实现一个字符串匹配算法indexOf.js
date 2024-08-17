/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-06 22:17:27
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-06 22:22:55
 * @FilePath: /js-challenges/js手写题/实现一个字符串匹配算法indexOf.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const myIndexOf = (str1, str2) => {
	const len1 = str1.length,
		len2 = str2.length;

	for (let i = 0; i <= len1 - len2; i++) {
		const str = str1.slice(i, len2 + i);
		if (str === str2) {
			return i;
		}
	}

	return -1;
};

console.log("-----------", myIndexOf("hello", "lo"), "-------------");
