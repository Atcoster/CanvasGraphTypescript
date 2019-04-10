import { ICategory } from '../models/interfaces/ICategory';
import { eCategories } from '../models/enums/eCategories';
import { eColors } from '../models/enums/eColors';
import { IColorSet } from '@app/models/interfaces/IColorSet';

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
	ctx.textAlign = 'center';
	const text = label.toUpperCase();

	ctx.fillStyle = color;
	ctx.font = `bold ${fontSize}px Arial`;
	ctx.fillText(text, labelX, labelY);
};

//Get total from categories
export const getTotal = (cat: ICategory[]): number => {
	const initialValue: number = 0;
	const total = cat.reduce((accumulator, currentValue) => {
		return accumulator + currentValue.value;
	}, initialValue);

	return total;
};

// get colorSet by category
export const getColorsSet = (cat: ICategory): IColorSet => {
	let colorSet: IColorSet;

	switch (cat.name) {
		case eCategories.FrontEnd:
			colorSet = {
				arc: eColors.blue,
				full: eColors.lightBlue
			};
			break;
		case eCategories.BackEnd:
			colorSet = {
				arc: eColors.red,
				full: eColors.lightRed
			};
			break;
		case eCategories.FullStack:
			colorSet = {
				arc: eColors.paleRed,
				full: eColors.lightRed
			};
		case eCategories.FullStackJS:
			colorSet = {
				arc: eColors.navy,
				full: eColors.lightBlue
			};
			break;
		default:
			eCategories.FrontEnd;
			break;
	}

	return colorSet;
};
