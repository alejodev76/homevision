import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import monitorReducersEnhancer from "./enhancers/monitor-reducers";
import rootReducer from "../state/reducers";

export default function configureStore(preloadedState) {
	const middlewares = [];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	const store = createStore(rootReducer, preloadedState, composedEnhancers);

	if (process.env.NODE_ENV !== "production" && module.hot) {
		module.hot.accept("../state/reducers", () =>
			store.replaceReducer(rootReducer)
		);
	}

	return store;
}
