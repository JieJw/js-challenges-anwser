/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-02 14:10:13
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-02 15:03:13
 * @FilePath: /js-challenges/js手写题/打印出1～10000的对称数.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const getNum = () => {
	const res = [];
	for (let i = 1; i < 10; i++) {
		res.push(i);
		res.push(i * 11);
		for (let j = 0; j < 10; j++) {
			res.push(i * 101 + j * 10); //101-999
			res.push(i * 1001 + j * 110); //1001-9999
		}
	}
	return res;
};

getNum();
