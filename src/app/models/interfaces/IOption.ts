import { ICategory } from '../../models/interfaces/ICategory';
import Canvas from '../classes/Canvas';

export interface IOptions {
	canvas: Canvas;
	context: CanvasRenderingContext2D;
	categories: ICategory[];
	legend: string;
	doughnutHoleSize?: number;
}
