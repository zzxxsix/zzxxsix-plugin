import {
	plugin,
	segment
} from 'alemon'

export class bqb extends plugin {
	constructor() {
		super({
			dsc: '表情包',
			rule: [{
				reg: "^/.*$", //  表情包：/小黑子，/柴郡，/布布，/mc酱, /兽猫酱
				fnc: 'bqb'
			}]
		})
	}

	async bqb(e) {
		let urls;
		let tag=e.msg.content.replace(/^(<@!\d+>\s*)?\/\s*/, '')
		if (tag=='小黑子') {
			urls = "http://api.yujn.cn/api/cxk.php";
		} else if (tag=='柴郡') {
			urls = "http://api.yujn.cn/api/chaijun.php";
		} else if (tag=='布布') {
			urls = "http://api.yujn.cn/api/bubu.php";
		} else if (tag=='mc酱') {
			urls = "http://api.yujn.cn/api/mcj.php";
		} else if (tag=='兽猫酱') {
			urls = "http://api.yujn.cn/api/smj.php";
		} else {
			return false;
		}
		console.log('tag='+tag)
		let flag = 0;
		let flagA = 0;
		while (flag < 1 && flagA < 50) {
		let resA = await fetch(urls)
			const res = await e.reply(segment.at(e.msg.author.id), segment.image(resA.url));
			if (res === true) {
				flag++;
			}
			flagA++;
		}
		if (flagA >= 50) {
			e.reply(segment.at(e.msg.author.id)+"没找到图，再来一次吧！");
		}
		return false;

	}
	}