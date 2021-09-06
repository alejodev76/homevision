import { useDispatch, useSelector } from "react-redux";
import { sample as sampleAction } from "./actions";

const usePropertiesContext = () => {
	const dispatch = useDispatch();

	const useIsLoading = () =>
		useSelector((state) => state.properties.isLoading);

	const state = {
		useIsLoading
	};

	const sample = (status) => {
		return sampleAction(dispatch, status);
	};
	const actions = {
		sample
	};

	return {
		state,
		actions
	};
};

export { useHomeContext };