import { inject, Injectable } from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private _user = new BehaviorSubject<User | null>(null);
  public user$ = this._user.asObservable();

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this._user.next(user);
    });
  }

  loginWithGoogle(): void {
    signInWithPopup(this.auth, new GoogleAuthProvider())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.error(error));
  }

  signOut(): void {
    signOut(this.auth);
  }
}
