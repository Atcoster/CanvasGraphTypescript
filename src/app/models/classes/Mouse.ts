import { IPosition } from '../interfaces/IPosition';

export default class Mouse {
	private _posX: number;
	private _posY: number;

	constructor() {
		this._posX = 0;
		this._posY = 0;
	}

	get Position(): IPosition {
		return {
			x: this._posX,
			y: this._posY
		};
	}

	set Position(pos: IPosition) {
		this._posX = pos.x;
		this._posY = pos.y;
	}
}
