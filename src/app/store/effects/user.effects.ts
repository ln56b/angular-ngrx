import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { select } from "@ngrx/store";
import { of } from "rxjs";
import { map, switchMap, withLatestFrom } from "rxjs/operators";

import { EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess } from "../actions/user.actions";
import { IAppState } from "../states/app.state";

@Injectable()
export class UserEffects {

  constructor(
    private _userService: UserService,
    private _actions: Actions,
    private _store: Store<IAppState>
  ) {}


  getUsers$ = createEffect(() => this._actions.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this._userService.getUsers()),
    switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
  ))

  getUser$ = createEffect(() => this._actions.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this._store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.filter(user => user.id === +id)[0]
      return of(new GetUserSuccess(selectedUser))
    })

  ))
}