import { IOptions } from '../interfaces/IOption';
import { drawPieSlice } from '../../lib/drawing';
import { eColors } from '../enums/eColors';
import { IColorSet } from '../interfaces/IColorSet';

export default class DonutChart {
	private PI2: number = Math.PI * 2;
	private startAngle: number;
	private doughnutHoleSize: number;
	private ctx: CanvasRenderingContext2D;
	private centerX: number;
	private centerY: number;
	private pos: number;
	private legend: string;
	private colorSet: IColorSet;
	private total: number;
	private value: number;
	private radius: number;
	private slicePiece: number;
	private fixedRadius: number;

	constructor(options: IOptions) {
		this.centerX = options.centerX;
		this.centerY = options.centerY;
		this.ctx = options.context;
		this.pos = options.pos;
		this.value = options.category.value;
		this.legend = options.category.name;
		this.colorSet = options.colorSet;
		this.total = options.total;
		this.doughnutHoleSize = options.doughnutHoleSize;
		this.startAngle = Math.PI + this.pos / 2;
		this.radius = Math.min(this.centerX, this.centerY);
		this.fixedRadius = (this.doughnutHoleSize - this.pos / 10) * this.radius;
		this.slicePiece = this.PI2 * (this.value / this.total);
	}

	draw() {
		//Draw a pieSlice representing the total of all the categories (Employeees)
		drawPieSlice(this.ctx, this.centerX, this.centerY, this.fixedRadius, 0, this.PI2, eColors.paleBlue);

		//Draw a pieSlice representing the total of the current category (Front-end)
		drawPieSlice(
			this.ctx,
			this.centerX,
			this.centerY,
			this.fixedRadius,
			this.startAngle,
			this.startAngle + this.slicePiece,
			this.colorSet.arc
		);

		//Draw a white donut representing the middle (for the text and total)
		drawPieSlice(this.ctx, this.centerX, this.centerY, this.fixedRadius - 15, 0, this.PI2, eColors.white);
	}
}
