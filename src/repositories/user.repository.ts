import { Injectable } from "@angular/core";
import { User } from "src/models/users/user";
import { HttpClient } from '@angular/common/http';
import { Observable} from "rxjs";
import { map } from "rxjs/operators";
import { async } from "rxjs/internal/scheduler/async";

const API_URL = 'http://localhost:4300/usuarios'

@Injectable()
export class UserRepository {

    constructor(
        private httpClient: HttpClient
    ) {}

    public getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>(API_URL)
        .pipe(
            map(values => {
                const users: User[] = []; 
                for (const value of values) {
                    users.push(Object.assign(new User(), value));
                }
                return users;
            })
        );
    }
    public getUserById(id): Observable<User> {
        return this.httpClient.get<User[]>(API_URL)
        .pipe(
            map(values => {
                let user: User; 
                for (const value of values) {
                    if(value.id==id){
                        user=value
                    }
                }
                return user;
            })
        );
    }
    public criarUser(userCriado:User):Observable<User>{
        console.log(userCriado)
        return this.httpClient.post<User>(API_URL,userCriado)
    }
    public removerUsuario(id:string): Observable<void>{
        console.log(id)
        return this.httpClient.delete<void>(API_URL+"/"+id)
    }
}
