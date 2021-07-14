import { createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { IConfig } from "src/app/models/config.interface";
import { EConfigActions, GetConfigSuccess } from "../actions/config.actions";

export class ConfigEffects {
  constructor(private _configService: ConfigService, private _actions$: Actions) {}

  getConfig$ = createEffect(() => this._actions$.pipe(ofType(EConfigActions.GetConfig), switchMap(() => this._configService.getConfig()),
  switchMap((config: IConfig) => {
    return of(new GetConfigSuccess(config))
  })))  
}