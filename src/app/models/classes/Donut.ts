import { IData } from '../interfaces/IData';
import { drawPieSlice } from '../../lib/drawing';
import { eColors } from '../enums/eColors';
import { ICircleBounding } from '../interfaces/ICircleBounding';

export default class Donut {
	private PI2: number = Math.PI * 2;
	private startAngle: number;
	private doughnutHoleSize: number;
	private centerX: number;
	private centerY: number;
	private index: number;
	private legend: string;
	private defaultColor: eColors;
	private arcColor: eColors;
	private fullColor: eColors;
	private catTotal: number;
	private value: number;
	private radius: number;
	private slicePiece: number;
	private fixedRadius: number;
	private isHovered: boolean;
	private margin: number;

	constructor(data: IData) {
		this.centerX = data.centerX;
		this.centerY = data.centerY;
		this.index = data.index;
		this.value = data.category.value;
		this.legend = data.category.name;
		this.defaultColor = eColors.paleBlue;
		this.arcColor = data.colorSet.arc;
		this.fullColor = data.colorSet.full;
		this.catTotal = data.total;
		this.isHovered = false;
		this.margin = 15;
		this.doughnutHoleSize = data.doughnutHoleSize;
		this.startAngle = Math.PI + this.index / 2;
		this.radius = Math.min(this.centerX, this.centerY);
		this.fixedRadius = (this.doughnutHoleSize - this.index / 10) * this.radius;
		this.slicePiece = this.PI2 * (this.value / this.catTotal);
	}

	draw(ctx: CanvasRenderingContext2D) {
		const color = this.isHovered ? this.fullColor : this.defaultColor;

		//Draw a pieSlice representing the total of all the categories (Employeees)
		drawPieSlice(ctx, this.centerX, this.centerY, this.fixedRadius, 0, this.PI2, color);

		//Draw a pieSlice representing the total of the current category (Front-end)
		drawPieSlice(
			ctx,
			this.centerX,
			this.centerY,
			this.fixedRadius,
			this.startAngle,
			this.startAngle + this.slicePiece,
			this.arcColor
		);

		//Draw a white donut representing the middle (for the text and total)
		drawPieSlice(ctx, this.centerX, this.centerY, this.fixedRadius - this.margin, 0, this.PI2, eColors.white);
	}

	get Legend(): string {
		return this.legend;
	}

	get Value(): number {
		return this.value;
	}

	get Bounding(): ICircleBounding {
		return {
			cx: this.centerX,
			cy: this.centerY,
			r: this.fixedRadius - this.margin,
			fr: this.fixedRadius
		};
	}

	set IsHovered(status: boolean) {
		this.isHovered = status;
	}
}
