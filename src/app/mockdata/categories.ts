import { eCategories } from '../models/enums/eCategories';
import { ICategory } from '../models/interfaces/ICategory';

export const Categories: ICategory[] = [
	{
		name: eCategories.BackEnd,
		value: 25
	},
	{
		name: eCategories.FullStack,
		value: 20
	},
	{
		name: eCategories.FullStackJS,
		value: 30
	},
	{
		name: eCategories.FrontEnd,
		value: 90
	}
];
