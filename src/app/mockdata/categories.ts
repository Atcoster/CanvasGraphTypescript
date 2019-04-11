import { eCategories } from '../models/enums/eCategories';
import { ICategory } from '../models/interfaces/ICategory';
import { eTypes } from '../../app/models/enums/eType';

export const Categories: ICategory[] = [
	{
		name: eCategories.BackOffice,
		type: eTypes.donut,
		value: 10
	},
	{
		name: eCategories.BackEnd,
		type: eTypes.donut,
		value: 25
	},
	{
		name: eCategories.FullStack,
		type: eTypes.donut,
		value: 22
	},
	{
		name: eCategories.FullStackJS,
		type: eTypes.donut,
		value: 31
	},
	{
		name: eCategories.FrontEnd,
		type: eTypes.donut,
		value: 42
	}
];
