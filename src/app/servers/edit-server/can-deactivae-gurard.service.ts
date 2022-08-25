import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

//ask user before leaving componet

export interface canComponentDeactivated {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class canDecativaeGuard
  implements CanDeactivate<canComponentDeactivated>
{
  canDeactivate(
    component: canComponentDeactivated,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate();
  }
}
