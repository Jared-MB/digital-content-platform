"use server";

import "server-only";

import { db } from "@/lib/db/config";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	query,
	setDoc,
	where,
} from "firebase/firestore";
import type { RawUser, User } from "@/lib/user/types";
import { fromRawUser, toRawUser } from "./adapters/user";

const __USERS__DB__KEY__ = "usuarios";
const __USERS__REF__ = collection(db, __USERS__DB__KEY__);
const __USER__ID__REF__ = (id: string) => doc(db, __USERS__DB__KEY__, id);

export const getUsers = async (): Promise<User[]> => {
	const usersSnapshot = await getDocs(__USERS__REF__);
	const usersList = usersSnapshot.docs.map((doc) => doc.data());
	return usersList.map((user) => fromRawUser(user as RawUser));
};

export const getUserById = async (id: string): Promise<User | null> => {
	const response = await fetch(`http://localhost:8083/usuario/${id}`);
	const user = await response.json();

	return fromRawUser(user as RawUser);
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
	const q = query(__USERS__REF__, where("email", "==", email), limit(1));
	const usersSnapshot = await getDocs(q);
	const usersList = usersSnapshot.docs.map((doc) => doc.data());
	return fromRawUser(usersList[0] as RawUser);
};

export const addUser = async (user: User) => {
	try {
		const rawUser = toRawUser(user);
		await setDoc(__USER__ID__REF__(user.id), rawUser);
		return {
			success: true,
		};
	} catch (error) {
		return {
			success: false,
			error: error,
		};
	}
};
