// import { BoxModal } from '../components/modal.js';
// class Board extends BoxModal {
// 	static Button = class extends GAME.Component {
// 		constructor(options) {
// 			super();
// 			this.Text = new GAME.Component.Text(options).setPosition(109, 40);
// 			this.Color = '#A6A6A6';
// 			this.addChild();
// 		}
// 		set State(state) {
// 			this.Color = state ? '#FFFFFF' : '#A6A6A6';
// 			this.Text.style.fillStyle = state ? '#A6A6A6' : '#FFFFFF';
// 		}
// 		update(Context) {
// 			Context.ArcRect(0, 0, 218, 100, 20).Fill(this.Color);
// 		}
// 		checkPoint(touch) {
// 			return touch.x > 0 && touch.x < 218 && touch.y > 0 && touch.y < 100;
// 		}
// 	};
// 	Friend = new Board.Button({ font: { size: 32 }, value: '好友排行榜' }).setPosition(-335, -480);
// 	World = new Board.Button({ font: { size: 32 }, value: '世界排行榜' }).setPosition(-110, -480);
// 	Share = new Board.Button({ font: { size: 45 }, style: { fillStyle: '#926639' }, value: '分享' }).setPosition(-109, 460);
// 	constructor() {
// 		super(670, 800, 0).AddClose();
// 		this.addChild(this.Share, this.Friend, this.World);
// 		this.World.zIndex = this.Friend.zIndex = -1;
// 		this.Share.touchTap = () => {
// 			GAME.Reward('Board');
// 		};
// 		this.Friend.touchTap = () => {
// 			this.Friend.State = true;
// 			this.World.State = false;
// 			GAME.Shared.Send({
// 				friend: { sorts: ['SaveKey2'], keys: { ['HighScore' + ENV.input.mode]: 'SaveKey2' } },
// 				scene: 'Board',
// 				board: { sort: 'SaveKey2', keys: ['SaveKey2'] },
// 			});
// 		};
// 		this.World.touchTap = () => {
// 			this.Friend.State = false;
// 			this.World.State = true;
// 			// Promise.resolve((this.touchChildren = false))
// 			// 	.then(() => GAME.Server.SelectWorldList(GAME.User.Map('ServerInfo').Data))
// 			// 	.then(data => {
// 			// 		GAME.Shared.Send({
// 			// 			merge: { data, sorts: ['SaveKey1'], keys: { frequency: 'SaveKey1' } },
// 			// 			scene: 'Board',
// 			// 			board: { sort: 'SaveKey1', keys: ['SaveKey1'] },
// 			// 		});
// 			// 	})
// 			// 	.catch(r => {
// 			// 		console.log(r);
// 			// 	})
// 			// 	.then(() => (this.touchChildren = true));
// 		};
// 		this.Friend.touchTap();
// 	}
// 	update(Context) {
// 		let bg = GAME.Image.get('rank/boxbg');
// 		let face = GAME.Image.get('rank/boxface');
// 		Context.drawImage(bg, 0, 322);
// 		super.update(Context);
// 		Context.drawImage(face, 0, 400);
// 	}
// 	create() {
// 		if (ENV.input.target != 'wxgame') return;
// 		if (GAME.User.Map('ServerInfo').Get('nickname')) return;
// 		GAME.Api.Login({
// 			left: 10,
// 			top: 10,
// 			width: 100,
// 			height: 100,
// 			backgroundColor: '#000000',
// 		})
// 			.then(res => GAME.Server.Login(res, { is_auth: 1 }).then(ServerInfo => res.user))
// 			.then(ThirdInfo => {
// 				return GAME.User.Map('ServerInfo')
// 					.Set(ThirdInfo.nickName, 'nickname')
// 					.SetStorage();
// 			})
// 			.then(() => this.World.touchTap());
// 	}
// 	destroy() {
// 		GAME.Shared.Send({ scene: 'Null' });
// 		if (ENV.input.target != 'wxgame') return;
// 		if (GAME.Api.Login.GetUserInfo.Abort) GAME.Api.Login.GetUserInfo.Abort();
// 	}
// }
export default class Home extends GAME.Container {
	Background = new GAME.Sprite('play/bg').setSize(GAME.Director.width, GAME.Director.height);
	Play = new GAME.Sprite('play/Common//button').setSize(200, 100).setPosition(-200, -100);
	Rank = new GAME.Sprite('play/Common//button').setSize(200, 100).setPosition(200, -100);
	Share = new GAME.Sprite('play/Common//button').setSize(200, 100).setPosition(-200, 100);
	Audio = new GAME.Sprite('play/Common//button').setSize(200, 100).setPosition(200, 100);
	create() {
		GAME.Audio.get('home').play();
	}
	destroy() {
		GAME.Audio.get('home').stop();
	}
	constructor() {
		super();
		this.Play.name = 'Play';
		this.Rank.name = 'Rank';
		this.Share.name = 'Share';
		this.Audio.name = 'Audio';
		this.Background.name = 'Background';
		new GAME.Text({ font: { size: 36 }, color: 0xff0000, value: '开始游戏<i=load/shadow>\n富文<size=16>本<i=load/shadow>测<fillStyle=#FFFFFF>试' }).put(
			this.Play,
		);
		this.Play.touchTap = () => {
			console.log('Play');
			GAME.Director.Go('Play');
		};
		new GAME.Text({ font: { size: 36 }, color: 0x000000, value: '排行榜' }).put(this.Rank);
		this.Rank.touchTap = () => {
			console.log('Rank');
			// GAME.Director.addChild(new Board());
		};
		new GAME.Text({ font: { size: 36 }, color: 0xff00ff, value: '分享' }).put(this.Share);
		this.Share.touchTap = () => {
			console.log('Share');
			// GAME.Reward('Home');
		};
		let Auido = new GAME.Text({ font: { size: 26 } });
		Auido.setValue(GAME.Audio.mute ? '声音:关' : '声音:开').put(this.Audio);
		this.Audio.touchTap = () => {
			console.log('Audio');
			GAME.Audio.mute = !GAME.Audio.mute;
			Auido.setValue(GAME.Audio.mute ? '声音:关' : '声音:开');
			return 'refresh';
		};
		this.add(this.Background, this.Play, this.Rank, this.Share, this.Audio);
		// return new GAME.Component.Scroll(this, { clip: { x: 0, y: 0, width: GAME.Pos.width, height: GAME.Pos.height } }).refresh(
		// 	GAME.Pos.width + 200,
		// 	GAME.Pos.height + 400,
		// );
	}
}
