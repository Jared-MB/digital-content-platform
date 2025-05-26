import type { RawUser, User } from "../types";

export const toPublic = (user: User) => {
	const { password, ...publicUser } = user;
	return publicUser;
};

export const toRawUser = (user: User): RawUser => {
	return {
		id: user.id,
		nombre: user.name,
		fechaNacimiento: user.birthDate,
		direccion: user.address,
		numeroTarjeta: user.cardNumber,
		pais: user.country,
		estado: user.state,
		estadoSuscripcion: user.subscriptionState,
		editorialesSeguidas: user.favoriteEditorials,
		email: user.email,
		rol: user.role,
		contrasena: user.password,
		telefono: user.phone,
	};
};

export const fromRawUser = (user: RawUser): User => {
	return {
		id: user.id,
		name: user.nombre,
		birthDate: user.fechaNacimiento,
		address: user.direccion,
		cardNumber: user.numeroTarjeta,
		country: user.pais,
		state: user.estado,
		subscriptionState: user.estadoSuscripcion,
		favoriteEditorials: user.editorialesSeguidas,
		email: user.email,
		role: user.rol,
		password: user.contrasena,
		phone: user.telefono,
	};
};
