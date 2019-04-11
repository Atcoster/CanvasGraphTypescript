import { eColors } from 'app/models/enums/eColors';

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
	const fSize: number = words.length < 3 ? fontSize : fontSize - 4;

	ctx.textAlign = 'center';
	ctx.fillStyle = color;
	ctx.font = `bold ${fSize}px arial`;
	ctx.beginPath();
	words.forEach((word, index) => {
		ctx.fillText(word, labelX, labelY + index * fSize);
	});
	ctx.closePath();
};
