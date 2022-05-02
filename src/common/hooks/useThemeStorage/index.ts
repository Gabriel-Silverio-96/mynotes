import { ContextTheme } from "provider/theme";
import { useState, useEffect, Dispatch, SetStateAction, useContext } from "react";

type useThemeStorageProps<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

function useThemeStorage<T>(key: string, initialState?: T): useThemeStorageProps<T> {
	const { setThemeContext } = useContext(ContextTheme);
	const [state, setState] = useState(() => {
		const storage = localStorage.getItem(key);

		if (storage) {
			return JSON.parse(storage);
		} else {
			return initialState;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
		if(setThemeContext) setThemeContext(state);
	}, [key, state]);

	return [state, setState];
}

export default useThemeStorage;