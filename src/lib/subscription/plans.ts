export interface Plan {
	id: number;
	name: string;
	key: string;
	price: string;
	period: string;
	description: string;
	features: string[];
	popular: boolean;
}

export const plans: Plan[] = [
	{
		id: 1,
		name: "Básico",
		key: "basic",
		price: "199.99",
		period: "mes",
		description: "Acceso a contenido básico para lectores ocasionales",
		features: [
			"Acceso a periódicos seleccionados",
			"10 revistas al mes",
			"3 libros al mes",
			"Acceso desde 1 dispositivo",
			"Cancelación en cualquier momento",
		],
		popular: false,
	},
	{
		id: 2,
		name: "Premium",
		key: "premium",
		price: "399.99",
		period: "mes",
		description: "Nuestra opción más popular para lectores habituales",
		features: [
			"Acceso ilimitado a periódicos",
			"Revistas ilimitadas",
			"5 libros al mes",
			"Acceso desde 3 dispositivos",
			"Descarga para lectura offline",
			"Cancelación en cualquier momento",
		],
		popular: true,
	},
	{
		id: 3,
		name: "Familiar",
		key: "familiar",
		price: "599.99",
		period: "mes",
		description: "Ideal para compartir con toda la familia",
		features: [
			"Acceso ilimitado a periódicos",
			"Revistas ilimitadas",
			"25 libros al mes",
			"Hasta 5 perfiles de usuario",
			"Acceso desde 5 dispositivos",
			"Descarga para lectura offline",
			"Contenido infantil y juvenil",
			"Cancelación en cualquier momento",
		],
		popular: false,
	},
];
