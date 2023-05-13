import plugin from '../src/lib/plugins'
import {
	EType,
	Messgetype,
	PluginType
} from '../src/lib/types'


export class ercy extends plugin {
	[parameter: string]: PluginType
	constructor() {
		super({
			dsc: '图片',
			rule: [{
					reg: "^/tag.*$", //二次元图片，可后面接标签，比如/tag萝莉
					fnc: 'tag'
				},
				{
					reg: "^/r18.*$", //r18+二次元图片，可后面接标签，需要自己删
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
				{
					reg: "^/三次元r18.*$",
					fnc: 'sanycr18' //随机三次元r18+图片
				},
			]
		})
	}


	async tag(e: Messgetype) {

		const tagContent = e.msg.content.replace(/^\/tag\s*/, '');
		console.log(tagContent);

		let url;
		for (let i = 0; i < 5; i++) {
			try {
				let url = `https://api.lolicon.app/setu/v2?tag=${tagContent}`;
				const response = await fetch(url);
				const data = await response.json(); // 解析 JSON 数据
				const imageUrl = data.data[0].urls.original;
				console.log(imageUrl);

				e.reply(segment.at(e.msg.author.id), segment.image(imageUrl))
			} catch (error) {
				let urla = `https://api.lolicon.app/setu/v2`;
				const response = await fetch(urla);
				const data = await response.json(); // 解析 JSON 数据
				const imageUrla = data.data[0].urls.original;
				console.log(imageUrla);

				e.reply(segment.at(e.msg.author.id), segment.image(imageUrla))
			}
			return true
		}
	}


	async setu(e: Messgetype) {
        const tagContent = e.msg.content.replace(/^\/r18\s*/, '');
		console.log(tagContent);

		for (let i = 0; i < 3; i++) {
			const randomNum = Math.floor(Math.random() * 2) + 1;
			if (randomNum == 1) {

				let url = `https://api.lolicon.app/setu/v2?tag=${tagContent}&r18=1`;
				const response = await fetch(url);
				const data = await response.json(); // 解析 JSON 数据
				const imageUrl = data.data[0].urls.original;
				console.log(imageUrl);

				e.reply(segment.at(e.msg.author.id), segment.image(imageUrl));
			} else {
				let urla = `https://www.acy.moe/api/r18`;
				let res = await fetch(urla);

				console.log(res.url);

				e.reply(segment.at(e.msg.author.id), segment.image(res.url));
			}

		}
		return true;
	}


	async eryc(e) {
		const urls = [
			"https://moe.jitsu.top/img",
			"http://www.yzxdd.icu/api/",
			"https://api.caonm.net/api/dm/index.php",
			"https://image.anosu.top/pixiv/direct?size=small"
		];

		for (let i = 0; i < 3; i++) {
			const randomNum = Math.floor(Math.random() * urls.length);
			const res = await fetch(urls[randomNum]);
			e.reply(segment.at(e.msg.author.id), segment.image(res.url));
		}

		return true;
	}

	async kkt(e) {
		const urls = [
			"https://api.caonm.net/api/bhs/b.php",
			"https://api.caonm.net/api/bhs/h.php"
		];

		for (let i = 0; i < 4; i++) {
			const randomNum = Math.floor(Math.random() * urls.length);
			const res = await fetch(urls[randomNum]);
			e.reply(segment.at(e.msg.author.id), segment.image(res.url));
		}

		return false;
	}


	async sanyc(e) {
		const urls = [
			"https://api.caonm.net/api/mnt/index.php",
			"https://api.vvhan.com/api/girl",
			"http://dsyai.club/api/youhuotu.php",
			"https://api.caonm.net/api/mnt/index.php"
		];

		for (let i = 0; i < 3; i++) {
			const randomNum = Math.floor(Math.random() * urls.length);
			const res = await fetch(urls[randomNum]);
			e.reply(segment.at(e.msg.author.id), segment.image(res.url));
		}

		return true;
	}
	async sanycr18(e) {
		const urls = [
			"https://imagesapi.sesepic.top/3r18",
			"https://imagesapi.sesepic.top/cos"
		];

		for (let i = 0; i < 3; i++) {
			const randomNum = Math.floor(Math.random() * urls.length);
			const res = await fetch(urls[randomNum]);
			e.reply(segment.at(e.msg.author.id), segment.image(res.url));
		}

		return true;
	}


}
