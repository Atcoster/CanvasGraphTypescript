import { ICategory } from '../../models/interfaces/ICategory';
import { IColorSet } from './IColorSet';

export interface IData {
	category: ICategory;
	doughnutHoleSize?: number;
	centerX: number;
	centerY: number;
	index: number;
	colorSet: IColorSet;
	total: number;
}
