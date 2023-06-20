import { Injectable } from "@angular/core";
import { users } from "src/data/users";
import { User } from "src/models/users/user";

@Injectable()
export class UserRepository{

    getUsers(): User[] {
        return users
    }

}