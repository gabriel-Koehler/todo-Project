import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
// import { UserRepository } from "src/repositories/user.repository";
import { AuthService } from "./auth-service";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {

        constructor(
                    private authservice:AuthService,
                    private router:Router){}
    
    canActivate(): boolean {       
        if(this.authservice.isAuthenticate()){
            console.log(this.authservice.isAuthenticate())
            return true;
        }else{
            console.log(this.authservice.isAuthenticate())
             this.router.navigate([''])
         }
        return false
    }
    
}