import { ICategory } from '@app/models/interfaces/ICategory';
import { IColorSet } from './IColorSet';

export interface IOptions {
	centerX: number;
	centerY: number;
	context: CanvasRenderingContext2D;
	total: number;
	category: ICategory;
	pos: number;
	doughnutHoleSize?: number;
	colorSet: IColorSet;
}
