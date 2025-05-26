"use client";

export interface Notification {
	id: string;
	type: "NEW_USER" | "NEW_BOOK" | "SYSTEM";
	title: string;
	message: string;
	read: boolean;
	createdAt: Date;
	data?: any;
}

import { createContext, useContext, useState, useEffect } from "react";
import { io, type Socket } from "socket.io-client";
import { toast } from "sonner";

interface NotificationContextType {
	notifications: Notification[];
	unreadCount: number;
	// markAsRead: (id: string) => void;
	// markAllAsRead: () => void;
	// clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
	undefined,
);

export function NotificationProvider({
	children,
}: { children: React.ReactNode }) {
	const [notifications, setNotifications] = useState<Notification[]>([]);

	const unreadCount = notifications.filter((n) => !n.read).length;

	useEffect(() => {
		const socket = io(
			process.env.NEXT_PUBLIC_WEBSOCKET_URL || "http://localhost:3001",
			{
				withCredentials: true,
			},
		);

		socket.on("connect", () => {
			console.log("Conectado al servidor de notificaciones");
		});

		socket.on("notification", (notification: Notification) => {
			setNotifications((prev) => [notification, ...prev]);
			toast.success(notification.title);
		});

		return () => {
			socket.disconnect();
		};
	}, []);

	// // Cargar notificaciones desde la API al montar
	// useEffect(() => {
	// 	const fetchNotifications = async () => {
	// 		try {
	// 			const response = await fetch("/api/notifications");
	// 			if (response.ok) {
	// 				const data = await response.json();
	// 				setNotifications(data.notifications);
	// 			}
	// 		} catch (error) {
	// 			console.error("Error al cargar notificaciones:", error);
	// 		}
	// 	};

	// 	fetchNotifications();

	// 	// Pedir permiso para notificaciones del navegador
	// 	if (
	// 		typeof window !== "undefined" &&
	// 		Notification.permission === "default"
	// 	) {
	// 		Notification.requestPermission();
	// 	}
	// }, []);

	// // Marcar una notificación como leída
	// const markAsRead = async (id: string) => {
	// 	try {
	// 		// Actualizar en la API
	// 		await fetch(`/api/notifications/${id}/read`, {
	// 			method: "PUT",
	// 		});

	// 		// Actualizar estado local
	// 		setNotifications((prev) =>
	// 			prev.map((notification) =>
	// 				notification.id === id
	// 					? { ...notification, read: true }
	// 					: notification,
	// 			),
	// 		);
	// 	} catch (error) {
	// 		console.error("Error al marcar notificación como leída:", error);
	// 	}
	// };

	// // Marcar todas las notificaciones como leídas
	// const markAllAsRead = async () => {
	// 	try {
	// 		// Actualizar en la API
	// 		await fetch("/api/notifications/read-all", {
	// 			method: "PUT",
	// 		});

	// 		// Actualizar estado local
	// 		setNotifications((prev) =>
	// 			prev.map((notification) => ({ ...notification, read: true })),
	// 		);
	// 	} catch (error) {
	// 		console.error(
	// 			"Error al marcar todas las notificaciones como leídas:",
	// 			error,
	// 		);
	// 	}
	// };

	// // Eliminar todas las notificaciones
	// const clearNotifications = async () => {
	// 	try {
	// 		// Actualizar en la API
	// 		await fetch("/api/notifications/clear", {
	// 			method: "DELETE",
	// 		});

	// 		// Actualizar estado local
	// 		setNotifications([]);
	// 	} catch (error) {
	// 		console.error("Error al eliminar notificaciones:", error);
	// 	}
	// };

	return (
		<NotificationContext
			value={{
				notifications,
				unreadCount,
				// markAsRead,
				// markAllAsRead,
				// clearNotifications,
			}}
		>
			{children}
		</NotificationContext>
	);
}

// Hook personalizado para usar el contexto
export function useNotifications() {
	const context = useContext(NotificationContext);
	if (context === undefined) {
		throw new Error(
			"useNotifications debe usarse dentro de un NotificationProvider",
		);
	}
	return context;
}
