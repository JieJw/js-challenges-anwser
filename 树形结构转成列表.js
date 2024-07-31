/*
 * @Author: wangjieu wangjieu@yonyou.com
 * @Date: 2024-07-31 16:20:00
 * @LastEditors: wangjieu wangjieu@yonyou.com
 * @LastEditTime: 2024-07-31 16:25:07
 * @FilePath: /js-challenges/树形结构转成列表.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const data = [
	{
		id: "1",
		name: "父节点1",
		children: [
			{
				id: "1-1",
				name: "子节点1-1",
				children: [
					{
						id: "1-1-1",
						name: "子节点1-1-1",
					},
					{
						id: "1-1-2",
						name: "子节点1-1-2",
					},
				],
			},
		],
	},
	{
		id: "2",
		name: "父节点2",
		children: [
			{
				id: "2-1",
				name: "子节点2-1",
			},
		],
	},
];

const treeToList = (tree) => {
	const res = [];

	const dfs = (tree) => {
		tree.forEach((_item) => {
			const { children, ...rest } = _item;
			res.push(rest);

			if (Array.isArray(children) && children.length) {
				dfs(_item.children);
			}
		});
	};

	dfs(tree);
	return res;
};

const result = treeToList(data);
console.log("-----------", result, "-------------");
