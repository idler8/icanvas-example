import { BoxModal } from '../components/modal.js';
class Board extends BoxModal {
	static Button = class extends GAME.Component {
		constructor(style) {
			super();
			this.addChild(this.Text.setStyle(style));
		}
		Text = new GAME.Component.Text().setPosition(109, 40);
		Color = '#A6A6A6';
		set State(state) {
			this.Color = state ? '#FFFFFF' : '#A6A6A6';
			this.Text.options.color = state ? '#A6A6A6' : '#FFFFFF';
		}
		update(Context) {
			Context.ArcRect(0, 0, 218, 100, 20).Fill(this.Color);
		}
		hitMe(x, y) {
			return x > 0 && x < 218 && y > 0 && y < 100;
		}
	};
	Friend = new Board.Button({ size: 32, value: '好友排行榜' }).setPosition(-335, -480);
	World = new Board.Button({ size: 32, value: '世界排行榜' }).setPosition(-110, -480);
	Share = new Board.Button({ color: '#926639', size: 45, value: '分享' }).setPosition(-109, 460);
	constructor() {
		super(670, 800, 0).AddClose();
		let Texture = GAME.Native.Shared.Texture.setAnchorSize();
		this.addChild(this.Share, this.Friend, this.World, Texture);
		this.World.zIndex = this.Friend.zIndex = -1;
		this.Share.touchTap = () => {
			console.log('分享');
		};
		this.Friend.touchTap = () => {
			this.Friend.State = true;
			this.World.State = false;
			GAME.Native.Shared.Send({
				friend: { sorts: ['SaveKey2'], keys: { ['HighScore' + ENV.input.mode]: 'SaveKey2' } },
				scene: 'Board',
				board: { sort: 'SaveKey2', keys: ['SaveKey2'] },
			});
		};
		this.World.touchTap = () => {
			this.Friend.State = false;
			this.World.State = true;
			Promise.resolve((this.touchChildren = false))
				.then(() => {
					GAME.Native.Shared.Send({
						merge: { data: [], sorts: ['SaveKey1'], keys: { frequency: 'SaveKey1' } },
						scene: 'Board',
						board: { sort: 'SaveKey1', keys: ['SaveKey1'] },
					});
				})
				.catch(r => {
					console.log(r);
				})
				.then(() => (this.touchChildren = true));
		};
		this.Friend.touchTap();
	}
	update(Context) {
		Context.Image('rank/boxbg', 0, 322);
		super.update(Context);
		Context.Image('rank/boxface', 0, 400);
	}
	destroy() {
		GAME.Native.Shared.Send({ scene: 'Null' });
	}
}
export default class Home extends GAME.Component {
	Background = new GAME.Component.Texture('play/bg').setSize(GAME.Pos.width, GAME.Pos.height);
	Play = new GAME.Component.Texture('play/Common')
		.setClip(120, 6, 39, 24)
		.setAnchorSize()
		.setScale(5, 5)
		.setPosition(GAME.Pos.center - 100, GAME.Pos.middle);
	Rank = new GAME.Component.Texture('play/Common')
		.setClip(120, 6, 39, 24)
		.setAnchorSize()
		.setScale(5, 5)
		.setPosition(GAME.Pos.center + 100, GAME.Pos.middle);
	Share = new GAME.Component.Texture('play/Common')
		.setClip(120, 6, 39, 24)
		.setAnchorSize()
		.setScale(5, 5)
		.setPosition(GAME.Pos.center - 100, GAME.Pos.middle + 120);
	Audio = new GAME.Component.Texture('play/Common')
		.setClip(120, 6, 39, 24)
		.setAnchorSize()
		.setScale(5, 5)
		.setPosition(GAME.Pos.center + 100, GAME.Pos.middle + 120);
	create() {
		GAME.Audio.channel('background', 'home');
	}
	destroy() {
		GAME.Audio.channel('background');
	}
	constructor() {
		super();
		new GAME.Component.Text({ size: 6, value: '开始游戏' }).setParent(this.Play);
		this.Play.touchTap = () => {
			GAME.Director.Go('Play');
		};
		new GAME.Component.Text({ size: 6, value: '排行榜' }).setParent(this.Rank);
		this.Rank.touchTap = () => {
			GAME.Director.addChild(new Board());
		};
		new GAME.Component.Text({ size: 6, value: '分享' }).setParent(this.Share);
		this.Share.touchTap = () => {
			console.log('分享');
		};
		let Auido = new GAME.Component.Text({ size: 6 });
		Auido.setValue(GAME.Audio.mute ? '声音:关' : '声音:开').setParent(this.Audio);
		this.Audio.touchTap = () => {
			GAME.Audio.mute = !GAME.Audio.mute;
			Auido.setValue(GAME.Audio.mute ? '声音:关' : '声音:开');
		};
		this.addChild(this.Background, this.Play, this.Audio, this.Share, this.Rank);
	}
}
