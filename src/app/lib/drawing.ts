import { eColors } from '@app/models/enums/eColors';

export const drawPieSlice = (
	ctx: CanvasRenderingContext2D,
	centerX: number,
	centerY: number,
	radius: number,
	startAngle: number,
	endAngle: number,
	color: string
) => {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(centerX, centerY);
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.closePath();
	ctx.fill();
};

export const drawArc = (
	ctx: CanvasRenderingContext2D,
	centerX: number,
	centerY: number,
	radius: number,
	startAngle: number,
	endAngle: number,
	color: string
) => {
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, startAngle, endAngle);
	ctx.fill();
	ctx.closePath();
};

//Draw label
export const drawLabels = (
	ctx: CanvasRenderingContext2D,
	label: string,
	fontSize: number,
	color: eColors,
	labelX: number,
	labelY: number
) => {
	const words: string[] = label.toLocaleUpperCase().split(' ');

	ctx.textAlign = 'center';
	ctx.fillStyle = color;
	ctx.font = `bold ${fontSize}px Overpass`;
	words.forEach((word, index) => {
		ctx.fillText(word, labelX, labelY + index * fontSize);
	});
};
