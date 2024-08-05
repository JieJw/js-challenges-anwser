/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-02 13:54:14
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-02 14:02:22
 * @FilePath: /js-challenges/js手写题/产生一个不重复的随机数组.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const generateRandomNumArr = (len, min, max) => {
	const set = new Set();

	while (set.size < len) {
		const randomNum = Math.floor(Math.random() * max);
		if (randomNum < min) continue;
		set.add(randomNum);
	}

	return [...set];
};

generateRandomNumArr(10, 10, 100);
