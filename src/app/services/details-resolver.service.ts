import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ValidatorService } from './validator.service';

@Injectable({
  providedIn: 'root'
})
export class DetailsResolverService implements Resolve<null> {
  
  constructor(private router: Router,private validator:ValidatorService) {}

  
  public resolve(route: ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<null> | Promise<null> | null {

    const id = route.paramMap.get('id');

    if(this.validator.isNumber(id)) {
        return null;
    } else {
        this.router.navigate(['404']);
    }           

     
  }
}


}
