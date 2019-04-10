export default class Canvas {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	constructor(canvasEl: HTMLCanvasElement) {
		this.canvas = canvasEl;
		this.ctx = this.canvas.getContext('2d');
		this.canvas.height = window.innerHeight / 2;
		this.canvas.width = window.innerWidth / 2;
	}

	getCanvas(): HTMLCanvasElement {
		return this.canvas;
	}

	getContext(): CanvasRenderingContext2D {
		return this.ctx;
	}
}
