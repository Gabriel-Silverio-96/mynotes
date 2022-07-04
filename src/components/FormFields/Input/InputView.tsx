import Button from "components/Button";
import { InputGroup, InputElement } from "components/FormFields/styled";
import Loading from "components/Loading";
import React, { forwardRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { IInput } from "./type";
import * as variables from "assets/styles/variables";

const InputView = forwardRef<HTMLInputElement, IInput>((props, ref) => {
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
		isVisiblePassword,
		visiblePassword,
		...rest
	} = props;

	return (
		<InputGroup>
			<label htmlFor={id}>{label}</label>
			<InputElement>
				<input
					ref={ref}
					type={typeInput === "password" && isVisiblePassword ? "text" : typeInput}
					id={id}
					name={name}
					onChange={onChange}
					defaultValue={!isLoadingData ? defaultValue : ""}
					disabled={disabled || isLoadingData}
					{...rest}
				/>
				<Loading className="loading-input" isLoading={isLoadingData}
					messageLoading={messageLoading || "Loading data"}
				/>
				{typeInput === "password" && (
					<Button
						type="button"
						variant="text"
						iconButton={
							isVisiblePassword ? (
								<FiEye size={18} stroke={variables.color_primary} />
							) : (
								<FiEyeOff size={18} stroke={variables.color_primary} />
							)
						}
						className="button-eye-password"
						onClick={visiblePassword}
					/>
				)}
			</InputElement>
			<span>{errorMessage}</span>
		</InputGroup>
	);
});

export default InputView;