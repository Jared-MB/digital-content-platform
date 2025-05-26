export interface RawUser {
	id: string;
	nombre: string;
	fechaNacimiento: Date;
	direccion: string;
	numeroTarjeta: string;
	pais: string;
	estado: string;
	estadoSuscripcion: boolean;
	editorialesSeguidas: string[];
	email: string;
	rol: string;
	contrasena: string;
	telefono: string;
}

export interface User {
	id: string;
	name: string; //
	birthDate: Date;
	address: string;
	cardNumber: string;
	country: string;
	state: string;
	subscriptionState: boolean; //
	favoriteEditorials: string[];
	email: string; //
	role: string; //
	password: string; //
	phone: string;
}
