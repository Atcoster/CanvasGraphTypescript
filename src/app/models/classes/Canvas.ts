export default class Canvas {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	constructor(canvasEl: HTMLCanvasElement) {
		this.canvas = canvasEl;
		this.ctx = canvasEl.getContext('2d');
		this.canvas.width = window.innerWidth / 2;
		this.canvas.height = window.innerHeight / 2;
	}

	get Canvas(): HTMLCanvasElement {
		return this.canvas;
	}

	get Context(): CanvasRenderingContext2D {
		return this.ctx;
	}

	get BoundingBox(): ClientRect | DOMRect {
		return this.canvas.getBoundingClientRect();
	}

	clearCanvas() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}
