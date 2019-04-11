import { drawLabels } from '../../lib/drawing';
import { eColors } from '../enums/eColors';

export default class Label {
	private labelX: number;
	private labelY: number;
	private legend: string;
	private total: number;

	constructor(legend: string, total: number, labelX: number, labelY: number) {
		this.labelX = labelX;
		this.labelY = labelY;
		this.legend = legend;
		this.total = total;
	}

	//draw the corresponding text with total
	draw(ctx: CanvasRenderingContext2D) {
		drawLabels(ctx, this.total.toString(), 100, eColors.blue, this.labelX, this.labelY);
		drawLabels(ctx, this.legend, 22, eColors.navy, this.labelX, this.labelY + 35);
	}

	set Legend(legend: string) {
		this.legend = legend;
	}

	set Total(total: number) {
		this.total = total;
	}
}
