import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { GetUser, GetUsers } from "src/app/store/actions/user.actions";
import { selectUserList } from "src/app/store/selectors/user.selector";
import { IAppState } from "src/app/store/states/app.state";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users$ = this._store.pipe(select(selectUserList))

  constructor(private _store: Store<IAppState>, private _router: Router, private _route: ActivatedRoute) {}
  
  ngOnInit() {
    this._store.dispatch(new GetUsers())

    this._store.dispatch(new GetUser(this._route.snapshot.paramMap.get(id)))
  }

  navigateToUser(id: number) {
    this._router.navigate(['user', id])
  }
}