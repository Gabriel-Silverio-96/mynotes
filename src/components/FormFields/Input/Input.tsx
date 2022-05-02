import React, { forwardRef, memo, useState } from "react";
import InputView from "./InputView";
import { IInput } from "./type";

const Input = forwardRef<HTMLInputElement, Omit<IInput, "isVisiblePassword" | "visiblePassword" | "ref">>((props, ref) => {
	const {
		label,
		id,
		name,
		typeInput,
		defaultValue,
		errorMessage,
		onChange,
		disabled,
		isLoadingData,
		messageLoading,
		...rest
	} = props;

	const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);
	const visiblePassword = () => {
		setIsVisiblePassword((prevState: boolean) => !prevState);
	};

	return (
		<InputView {... {
			label,
			id,
			name,
			typeInput,
			defaultValue,
			errorMessage,
			onChange,
			disabled,
			isLoadingData,
			messageLoading,
			isVisiblePassword,
			visiblePassword,
			ref,
			...rest
		}} />
	);
});

export default memo(Input);