import { routerReducer } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../states/app.state";
import { configReducers } from "./config.reducer";
import { userReducers } from "./user.reducer";

export const appReducers : ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  users: userReducers,
  config: configReducers
}