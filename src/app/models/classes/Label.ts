import { drawLabels } from '../../lib/drawing';
import { eColors } from '../enums/eColors';

export default class Label {
	private ctx: CanvasRenderingContext2D;
	private labelX: number;
	private labelY: number;
	private legend: string;
	private total: number;

	constructor(ctx: CanvasRenderingContext2D, legend: string, total: number, labelX: number, labelY: number) {
		// this.offset = (this.radius * this.options.doughnutHoleSize) / 2;
		// this.labelX = this.centerX + (this.offset + this.radius / 2) * Math.cos(this.startAngle + this.slicePiece / 2);
		// this.labelY = this.centerY / 2 + (this.offset + this.radius / 2) * Math.sin(this.startAngle + this.slicePiece / 2);

		this.ctx = ctx;
		this.labelX = labelX;
		this.labelY = labelY;
		this.legend = legend;
		this.total = total;
	}

	//draw the corresponding text with total
	draw() {
		drawLabels(this.ctx, this.total.toString(), 100, eColors.blue, this.labelX, this.labelY);
		drawLabels(this.ctx, this.legend, 25, eColors.navy, this.labelX, this.labelY + 50);
	}
}
