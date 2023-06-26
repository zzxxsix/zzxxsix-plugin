import {
	plugin,
	segment
} from 'alemon'

export class ercy extends plugin {
	constructor() {
		super({
			dsc: '随机图片',
			rule: [{
					reg: "^/tag.*$", //二次元图片，可后面接标签，比如/tag萝莉
					fnc: 'tag'
				},
				{
					reg: "^/r18.*$", //r18+二次元图片，可后面接标签
					fnc: 'setu'
				},
				{
					reg: "^/二次元.*$",
					fnc: 'eryc' //随机二次元图片
				},
				{
					reg: "^/看看腿.*$", //看白丝，看黑丝
					fnc: 'kkt'
				},
				{
					reg: "^/三次元.*$",
					fnc: 'sanyc' //随机三次元图片
				},
				/*		{
						reg: "^/三次元r18.*$",
						fnc: 'sanycr18' //随机三次元r18+图片
					},*/
			]
		})
	}


	async tag(e) {

		const tagContent = e.msg.content.replace(/^(<@!\d+>\s*)?\/tag\s*/, '');
		console.log(tagContent);
		let flag = 0;
		let flagA = 0;
		let url = [
			`https://api.lolicon.app/setu/v2?tag=${tagContent}&size=original`,
			`https://api.lolicon.app/setu/v2?tag=${tagContent}&size=regular`,
			`https://api.lolicon.app/setu/v2?tag=${tagContent}&size=small`
		]
		let imageUrl;
		while (flag < 2 && flagA < 50) {
			const randomNum = Math.floor(Math.random() * url.length);
			try {
				const response = await fetch(url[randomNum]);
				const data = await response.json(); // 解析 JSON 数据
				if (randomNum == 0) {
					imageUrl = data.data[0].urls.original;
				} else if (randomNum == 1) {
					imageUrl = data.data[0].urls.regular;
				} else {
					imageUrl = data.data[0].urls.small;
				}

				const res = await e.reply(segment.at(e.msg.author.id), segment.image(imageUrl));
				if (res === true) {
					flag++;
					console.log(flag);
				}
			} catch (error) {
				let urla = `https://api.lolicon.app/setu/v2?size=regular`;
				const response = await fetch(urla);
				const data = await response.json(); // 解析 JSON 数据
				const imageUrla = data.data[0].urls.regular;

				const res = await e.reply(segment.at(e.msg.author.id), segment.image(imageUrla))
				if (res === true) {
					flag++;
					console.log(flag);
				}
			}
			flagA++;
		}
		if (flagA >= 50) {
			e.reply(segment.at(e.msg.author.id), "没找到图，再来一次吧！");
		}
		return false;

	}


	async setu(e) {
		const tagContent = e.msg.content.replace(/^(<@!\d+>\s*)?\/r18\s*/, '');
		console.log(tagContent);
		let flag = 0;
		let flagA = 0;
		while (flag < 2 && flagA < 50) {
			const randomNum = Math.floor(Math.random() * 2) + 1;
			if (randomNum == 1) {
				let url = `https://api.lolicon.app/setu/v2?tag=${tagContent}&r18=1`;
				const response = await fetch(url);
				const data = await response.json(); // 解析 JSON 数据
				const imageUrl = data.data[0].urls.original;

				const res = await e.reply(segment.at(e.msg.author.id), segment.image(imageUrl));
				if (res === true) {
					flag++;
					console.log(flag);
				}
			} else {
				let urla = `https://www.acy.moe/api/r18`;
				const res = await e.reply(segment.at(e.msg.author.id), segment.image(urla));
				if (res === true) {
					flag++;
					console.log(flag);
				}
			}

			flagA++;
		}
		if (flagA >= 50) {
			e.reply(segment.at(e.msg.author.id), "没找到图，再来一次吧！");
		}
		return false;

	}


	async eryc(e) {
		const urls = [
			"https://moe.jitsu.top/img",
			"http://www.yzxdd.icu/api/",
			"https://api.caonm.net/api/dm/index.php",
			"https://image.anosu.top/pixiv/direct?size=small"
		];

		let flag = 0;
		let flagA = 0;
		while (flag < 2 && flagA < 50) {
			const randomNum = Math.floor(Math.random() * urls.length);
			const res = await e.reply(segment.at(e.msg.author.id), segment.image(urls[randomNum]));
			if (res === true) {
				flag++;
				console.log(flag);
			}
		}

		return false;
	}

	async kkt(e) {
		const urls = [
			"http://api.yujn.cn/api/heisi.php",
			"http://api.yujn.cn/api/baisi.php",
			"http://api.yujn.cn/api/duitang.php?type=image&msg=白丝",
			"http://api.yujn.cn/api/duitang.php?type=image&msg=黑丝",
			"http://api.yujn.cn/api/tui.php",
			"http://shanhe.kim/api/tu/hs.php",
			"https://api.f4team.cn/API/meizi/api.php?type=image"
		];

		let flag = 0;
		let flagA = 0;
		while (flag < 2 && flagA < 50) {
			const randomNum = Math.floor(Math.random() * urls.length);
			let resA = await fetch(urls[randomNum])
			console.log(resA.url);
			const res = await e.reply(segment.at(e.msg.author.id), segment.image(resA.url));
			if (res === true) {
				flag++;
				console.log(flag);
			}
			flagA++;
		}
		if (flagA >= 50) {
			e.reply(segment.at(e.msg.author.id), "没找到图，再来一次吧！");
		}
		return false;

	}


	async sanyc(e) {
		const urls = [
			"http://dsyai.club/api/youhuotu.php",
			"https://cdn.seovx.com/?mom=302",
			"http://api.yujn.cn/api/yangyan.php",
			"http://api.yujn.cn/api/yht.php",
			"http://api.yujn.cn/api/cos.php",
			"http://api.yujn.cn/api/xjjtp.php?",
			"http://api.yujn.cn/api/jk.php?",
			"http://api.yujn.cn/api/yscos.php?"
		];

		let flag = 0;
		let flagA = 0;
		while (flag < 2 && flagA < 50) {
			const randomNum = Math.floor(Math.random() * urls.length);
			let resA = await fetch(urls[randomNum])
			console.log(resA.url);
			const res = await e.reply(segment.at(e.msg.author.id), segment.image(resA.url));
			if (res === true) {
				flag++;
				console.log(flag);
			}
			flagA++;
		}
		if (flagA >= 50) {
			e.reply(segment.at(e.msg.author.id), "没找到图，再来一次吧！");
		}
		return false;

	}

	async sanycr18(e) {
		const urls = [
			"https://imagesapi.sesepic.top/3r18",
			"https://imagesapi.sesepic.top/cos"
		];

		let flag = 0;
		let flagA = 0;
		while (flag < 2 && flagA < 50) {
			const randomNum = Math.floor(Math.random() * urls.length);
			const res = await e.reply(segment.at(e.msg.author.id), segment.image(urls[randomNum]));
			if (res === true) {
				flag++;
				console.log(flag);
			}
			flagA++;
		}
		if (flagA >= 50) {
			e.reply(segment.at(e.msg.author.id), "没找到图，再来一次吧！");
		}
		return false;

	}


}
