import Canvas from './app/models/classes/Canvas';
import { Categories } from './app/mockdata/categories';
import { IOptions } from './app/models/interfaces/IOption';
import Chart from './app/models/classes/Chart';

const init = () => {
	const canvasEl: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
	const canvas: Canvas = new Canvas(canvasEl);
	const ctx: CanvasRenderingContext2D = canvas.Context;

	const defaultOptions: IOptions = {
		canvas,
		context: ctx,
		categories: Categories,
		legend: 'EMPLOYEES',
		doughnutHoleSize: 0.9
	};

	const chart = new Chart(defaultOptions);
	chart.initialize();
};

init();
