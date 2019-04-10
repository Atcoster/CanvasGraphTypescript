import Canvas from './app/models/classes/Canvas';
import DonutChart from './app/models/classes/DonutChart';
import { Categories } from './app/mockdata/categories';
import { getTotalFromCat, getColorsSet } from './app/lib/helpers';
import { IOptions } from './app/models/interfaces/IOption';
import Label from './app/models/classes/Label';

const createChart = (canvasEl: HTMLCanvasElement) => {
	const canvas: Canvas = new Canvas(canvasEl);
	const centerX: number = canvas.getCanvas().width / 2;
	const centerY: number = canvas.getCanvas().height / 2;
	const donutCharts: DonutChart[] = [];
	const ctx: CanvasRenderingContext2D = canvas.getContext();
	// const legend: string = 'EMPLOYEES';
	const legend: string = 'Full-Stack Developer';
	const total: number = getTotalFromCat(Categories);

	const defaultOptions: IOptions = {
		centerX,
		centerY,
		context: ctx,
		category: null,
		pos: 0,
		total,
		colorSet: null,
		doughnutHoleSize: 0.9
	};

	for (const cat in Categories) {
		const pos = parseInt(cat);
		const category = Categories[cat];
		const colorSet = getColorsSet(category);

		const options = {
			...defaultOptions,
			category,
			pos,
			colorSet
		};

		const donutChart: DonutChart = new DonutChart(options);
		donutChart.draw();

		donutCharts.push(donutChart);
	}

	const label = new Label(ctx, legend, total, centerX, centerY);
	label.draw();
};

const canvasEl: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('canvas');
createChart(canvasEl);
