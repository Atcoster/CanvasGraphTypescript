import { ICategory } from '../models/interfaces/ICategory';
import { eCategories } from '../models/enums/eCategories';
import { eColors } from '../models/enums/eColors';
import { IColorSet } from '@app/models/interfaces/IColorSet';

//Get total from categories
export const getTotalFromCat = (cat: ICategory[]): number => {
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
		case eCategories.BackOffice:
			colorSet = {
				arc: eColors.navy,
				full: eColors.offgreen
			};
			break;
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
				arc: eColors.lightRed,
				full: eColors.paleRed
			};
			break;
		case eCategories.FullStackJS:
			colorSet = {
				arc: eColors.babyBlue,
				full: eColors.veryLightBlue
			};
			break;
		default:
			eCategories.FrontEnd;
			break;
	}

	return colorSet;
};
