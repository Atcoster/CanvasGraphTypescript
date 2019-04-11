import { getTotalFromCat, getColorsSet } from '../../lib/helpers';
import Donut from './Donut';
import Label from './Label';
import { IOptions } from '../interfaces/IOption';
import { ICategory } from '../interfaces/ICategory';
import Canvas from './Canvas';
import Mouse from './Mouse';
import { IPosition } from '../interfaces/IPosition';

export default class Chart {
	private canvas: Canvas;
	private context: CanvasRenderingContext2D;
	private donuts: Donut[] = [];
	private label: Label;
	private mouse: Mouse;
	private legend: string;
	private centerX: number;
	private centerY: number;
	private total: number;
	private categories: ICategory[];
	private doughnutHoleSize: number;

	constructor(options: IOptions) {
		this.canvas = options.canvas;
		this.context = options.context;
		this.categories = options.categories;
		this.total = getTotalFromCat(options.categories);
		this.legend = options.legend;
		this.doughnutHoleSize = options.doughnutHoleSize;
		this.centerX = options.canvas.Canvas.width / 2;
		this.centerY = options.canvas.Canvas.height / 2;
	}

	initialize() {
		for (const cat in this.categories) {
			const index = parseInt(cat);
			const category = this.categories[cat];
			const colorSet = getColorsSet(category);

			const data = {
				category,
				doughnutHoleSize: this.doughnutHoleSize,
				total: this.total,
				centerX: this.centerX,
				centerY: this.centerY,
				colorSet: colorSet,
				index
			};

			this.donuts.push(new Donut(data));
		}

		this.label = new Label(this.legend, this.total, this.centerX, this.centerY);

		this.createMouse();
		this.draw();
	}

	createMouse() {
		const canvasRect: ClientRect | DOMRect = this.canvas.BoundingBox;
		this.mouse = new Mouse();

		this.canvas.Canvas.addEventListener('mousemove', event => {
			event.preventDefault();
			const position = {
				x: event.clientX - canvasRect.left,
				y: event.clientY - canvasRect.top
			};

			this.mouse.Position = position;

			this.mousePointerOnDonut();
		});
	}

	//check if mouse is hovering object (a is mouse pos, b is object boundingbox)
	mousePointerOnDonut() {
		const mousePos: IPosition = this.mouse.Position;
		let isHovering: boolean;

		this.donuts.forEach((donut, index) => {
			const donutBounding = donut.Bounding;
			const distanceSquared =
				(mousePos.x - donutBounding.cx) * (mousePos.x - donutBounding.cx) +
				(mousePos.y - donutBounding.cy) * (mousePos.y - donutBounding.cy);

			const outsideRadius2: number = donutBounding.fr * donutBounding.fr;
			const insideRadius2: number = donutBounding.r * donutBounding.r;

			if (distanceSquared >= insideRadius2 && distanceSquared <= outsideRadius2) {
				this.donuts[index].IsHovered = true;
				this.label.Legend = donut.Legend;
				this.label.Total = donut.Value;
				isHovering = true;
			} else {
				this.donuts[index].IsHovered = false;
				isHovering = false;
			}
			this.draw();
		});

		this.label.Legend = this.legend;
		this.label.Total = this.total;
	}

	draw() {
		this.canvas.clearCanvas();
		for (const donut in this.donuts) {
			if (this.donuts.hasOwnProperty(donut)) {
				this.donuts[donut].draw(this.context);
			}
		}

		this.label.draw(this.context);
	}
}
