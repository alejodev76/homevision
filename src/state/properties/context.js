import { useDispatch, useSelector } from "react-redux";
import { getProperties as getPropertiesAction } from "./actions";

const usePropertiesListContext = () => {
  const dispatch = useDispatch();

  const useIsLoading = () => useSelector((state) => state.properties.isLoading);

  const usePropertyList = () =>
    useSelector((state) => state.properties.propertyList);

  const useError = () => useSelector((state) => state.properties.error);

  const state = {
    useIsLoading,
    usePropertyList,
    useError,
  };

  const getProperties = (params) => {
    return getPropertiesAction(dispatch, params);
  };

  const actions = {
    getProperties,
  };

  return {
    state,
    actions,
  };
};

export { usePropertiesListContext };
