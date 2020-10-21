export class Dish {

	constructor(public name: string = null,
		public category: any = null,
		public ingredients: string = null,
		public prepare_time: number = null,
		public directions: string = null,
		public is_available: boolean = null,
		public cost: number = null) { }

	isExpencive(): boolean {
		return this.cost > 200;
	}

	longTimeToPrepare(): boolean {
		return this.prepare_time > 30;
	}
}
