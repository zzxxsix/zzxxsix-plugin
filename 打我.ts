import { plugin, segment } from 'alemon'

let ks = 0
let ks2 = 0
let uid = 0
let time;
let time2;
let user_id = ""
export class HitMe extends plugin {
	constructor() {
		super({
			dsc: '打我',
			rule: [{
				reg: '^/打我|石头|剪刀|布$|(.*)/打他(.*)$',
				fnc: 'dawo'
			}, ]
		})
	}



	async dawo(e) {
		if (e.msg.channel_id) {

			let i = Math.floor(Math.random() * 3);
			let cq = ""
			if (i == 0 && ks == 1) {
				cq = "石头"
			}
			if (i == 1 && ks == 1) {
				cq = "剪刀"
			}
			if (i == 2 && ks == 1) {
				cq = "布"
			}
			console.log(i)

			if (e.msg.content.includes('/打他') && ks2 == 0) {
				const str = e.msg.content;
				const regex = /\d+/;
				const match = str.match(regex);
				user_id = match[0];
				e.reply(segment.at(user_id) + '给你20秒，跟我来把猜拳，赢了我就不打你，输了给我寄！你先发,石头，剪刀，布，出吧')
				console.log(user_id)

				ks2 = 1

				time = setTimeout(function() {

					if (ks2 == 1) {
						e.reply('20秒已过，还不出，给我寄！')
						ks2 = 0

					}

				}, 20000);

			}

			if (e.msg.content == "石头" && user_id == e.msg.author.id && ks2 == 1) {
				if (i == 0) {
					e.reply('我出石头，平局，饶你一回')

				}
				if (i == 1) {
					let msg = '我出剪刀，我输了，给你张图吧。快谢谢我！没图就是我反悔了(o゜▽゜)o☆'
					e.reply(msg)
					e.reply(segment.image('https://api.caonm.net/api/bhs/b.php'))
					//https://iw233.cn/API/Random.php


				}
				if (i == 2) {
					e.reply('我出布，你输了，给我寄！')

				}

				ks2 = 0
				clearTimeout(time)

			}
			if (e.msg.content == "剪刀" && user_id == e.msg.author.id && ks2 == 1) {
				if (i == 0) {
					e.reply('我出石头，你输了，给我寄！')
				}
				if (i == 1) {
					e.reply('我出剪刀，平局，饶你一回')

				}
				if (i == 2) {
					let msg = '我出布，我输了，给你张图吧。快谢谢我！没图就是我反悔了(o゜▽゜)o☆'
					e.reply(msg)
					e.reply(segment.image('https://api.caonm.net/api/bhs/b.php'))

				}
				ks2 = 0
				clearTimeout(time)
			}
			if (e.msg.content == "布" && user_id == e.msg.author.id && ks2 == 1) {
				if (i == 0) {
					let msg = '我出石头，我输了，给你张图吧。快谢谢我！没图就是我反悔了(o゜▽゜)o☆'
					e.reply(msg)
					e.reply(segment.image('https://api.caonm.net/api/bhs/b.php'))

				}
				if (i == 1) {
					e.reply('我出剪刀，你输了，给我寄！')

				}
				if (i == 2) {
					e.reply('我出布，平局，饶你一回')

				}
				ks2 = 0
				clearTimeout(time)
			}

			if (e.msg.content == "/打我" && ks == 1) {
				e.reply('我正在打别人，没空，你待会再挨打。')
				return
			}

			if (e.msg.content == "/打我" && ks == 0) {

				e.reply(segment.at(e.msg.author.id) + '给你20秒，跟我来把猜拳，赢了我就不打你，输了给我寄！你先发,石头，剪刀，布，出吧')
				ks = 1
				uid = e.msg.author.id

				time2 = setTimeout(function() {

					if (ks == 1) {
						e.reply('20秒已过，还不出，给我寄！')
						ks = 0
					}

				}, 20000);

			}

			if (e.msg.content == "石头" && ks == 1 && uid == e.msg.author.id) {
				if (i == 0) {
					e.reply('我出石头，平局，饶你一回')

				}
				if (i == 1) {
					let msg = '我出剪刀，我输了，给你张图吧。快谢谢我！没图就是我反悔了(o゜▽゜)o☆'
					e.reply(msg)
					e.reply(segment.image('https://api.caonm.net/api/bhs/b.php'))
					//https://iw233.cn/API/Random.php


				}
				if (i == 2) {
					e.reply('我出布，你输了，给我寄！')

				}
				ks = 0
				clearTimeout(time2)

			}

			if (e.msg.content == "剪刀" && ks == 1 && uid == e.msg.author.id) {
				if (i == 0) {
					e.reply('我出石头，你输了，给我寄！')

				}
				if (i == 1) {
					e.reply('我出剪刀，平局，饶你一回')

				}
				if (i == 2) {
					let msg = '我出布，我输了，给你张图吧。快谢谢我！没图就是我反悔了(o゜▽゜)o☆'
					e.reply(msg)
					e.reply(segment.image('https://api.caonm.net/api/bhs/b.php'))

				}
				ks = 0
				clearTimeout(time2)
			}
			if (e.msg.content == "布" && ks == 1 && uid == e.msg.author.id) {
				if (i == 0) {
					let msg = '我出石头，我输了，给你张图吧。快谢谢我！没图就是我反悔了(o゜▽゜)o☆'
					e.reply(msg)
					e.reply(segment.image('https://api.caonm.net/api/bhs/b.php'))
				}
				if (i == 1) {
					e.reply('我出剪刀，你输了，给我寄！')
				}
				if (i == 2) {
					e.reply('我出布，平局，饶你一回')

				}
				ks = 0
				clearTimeout(time2)
			}
		} else {
			e.reply('只能在频道里被打')
		}

	}

}
