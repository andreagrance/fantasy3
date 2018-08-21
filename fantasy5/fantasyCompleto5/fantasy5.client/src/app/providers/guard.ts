import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // si esta logueado permite recorrer el menu
            return true;
        }
 
        // Si no esta logueado obliga a iniciar sesion
                            
        this.router.navigate(['/login']);
        return false;
    }
}