import { configureStore } from "@reduxjs/toolkit";
import produceSlice from "./produce";

const store = configureStore({
    reducer: { // do we need to name this rootReducer?
        produce: produceSlice
    }
});

// let enhancer;

// if (import.meta.env.MODE !== "production") {
//   const logger = (await import("redux-logger")).default;
//   const composeEnhancers =
//     typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
//       : compose;
//   enhancer = composeEnhancers(applyMiddleware(logger));
// }

export default store;