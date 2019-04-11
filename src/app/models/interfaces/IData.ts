import { ICategory } from '../../models/interfaces/ICategory';
import { IColorSet } from './IColorSet';

export interface IData {
	category: ICategory;
	doughnutHoleSize?: number;
	centerX: number;
	centerY: number;
	index: number;
	twirl: boolean;
	colorSet: IColorSet;
	total: number;
}
