class ProductModel {
	private id: string = '';
	private title: string = '';
	private price: number = 0;

	constructor(id: string, title: string, price: number) {
		this.id = id;
		this.title = title;
		this.price = price;
	}

	getId(): string {
		return this.id;
	}

	setId(newId: string): void {
		this.id = newId;
	}

	getTitle(): string {
		return this.title;
	}

	setTitle(newTitle: string): void {
		this.title = newTitle;
	}

	getPrice(): number {
		return this.price;
	}

	setPrice(newPrice: number): void {
		this.price = newPrice;
	}
}

export default ProductModel;
