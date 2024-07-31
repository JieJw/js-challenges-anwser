/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-07-31 16:35:39
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-07-31 16:54:24
 * @FilePath: /js-challenges/列表转树状结构.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let arr = [
	{ id: 1, name: "部门1", pid: 0 },
	{ id: 2, name: "部门2", pid: 1 },
	{ id: 3, name: "部门3", pid: 1 },
	{ id: 4, name: "部门4", pid: 3 },
	{ id: 5, name: "部门5", pid: 4 },
	{ id: 6, name: "部门6", pid: 0 },
];

const listToTree = (arr, id = 0) => {
	return arr
		.filter((_item) => _item.pid === id)
		.map((_item) => {
			return {
				..._item,
				children: listToTree(arr, _item.id),
			};
		});
};

const res = listToTree(arr);
console.log("-----------", res, "-------------");
