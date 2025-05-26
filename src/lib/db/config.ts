import "server-only";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyClplb5h9_zjq33I_KkWaha7yv4v48hmnI",
	authDomain: "sm-quiosco-digital.firebaseapp.com",
	databaseURL: "https://sm-quiosco-digital-default-rtdb.firebaseio.com",
	projectId: "sm-quiosco-digital",
	storageBucket: "sm-quiosco-digital.firebasestorage.app",
	messagingSenderId: "351036708694",
	appId: "1:351036708694:web:cd6b19479fc0cf890fe8f7",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
