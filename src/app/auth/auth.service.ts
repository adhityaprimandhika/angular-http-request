import { Injectable } from '@angular/core';
import { UserForm, User } from './auth';
import { Router } from '@angular/router';

const users: Array<User> = [
  {
    username: "adhit", password: "robin", name: "Adhitya Primandhika"
  },
  {
    username: "batman", password: "batman123", name: "Bruce Wayne"
  }
]

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | undefined;
  constructor(private router: Router) { }
  login(form: UserForm) {
    const response = users.find(user => this.matchUser(user, form))

    if (!response) {
      alert("User not found")
    } else {
      localStorage.setItem("user", JSON.stringify(response))
      this.router.navigate(["anime"])
    }
  }

  getAuth(): User | undefined {
    const response = localStorage.getItem("user")
    if (!response){
      return undefined
    } else {
      return JSON.parse(response)
    }
  }

  private matchUser(user: User, form: UserForm): boolean {
    return user.username === form.username && user.password === form.password
  }
}
