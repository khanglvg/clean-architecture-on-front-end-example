class UserModel {
	private id: string = '';
	private name: string = '';
	private email: string = '';

	constructor(id: string, name: string, email: string) {
		this.id = id;
		this.name = name;
		this.email = email;
	}

	getId(): string {
		return this.id;
	}

	setId(newId: string): void {
		this.id = newId;
	}

	getName(): string {
		return this.name;
	}

	setName(newName: string): void {
		this.name = newName;
	}

	getEmail(): string {
		return this.email;
	}

	setEmail(newEmail: string): void {
		this.email = newEmail;
	}
}

export default UserModel;
