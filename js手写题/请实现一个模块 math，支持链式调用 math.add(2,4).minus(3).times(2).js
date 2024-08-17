/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-08-06 22:23:01
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-08-07 08:35:34
 * @FilePath: /js-challenges/js手写题/请实现一个模块 math，支持链式调用 math.add(2,4).minus(3).times(2).js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Math2 {
	constructor() {
		this.val = null;
	}

	add(val1, val2) {
		this.val = val1 + val2;
		return this;
	}

	minus(val) {
		this.val = this.val - val;
		return this;
	}

	times(time) {
		this.val = this.val * time;
		return this;
	}
}

const math = new Math2();
console.log("-----------", math.add(2, 4).minus(3).times(2), "-------------");
