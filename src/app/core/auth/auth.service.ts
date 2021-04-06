import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from '../services/storage/storage.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    token: string;
    auth$: BehaviorSubject<boolean>;
    auth: Observable<boolean>;
    baseUrl = environment.api_url;

    constructor(
        private router: Router,
        private storageService: StorageService) {
            const isAuthenticated = this.autoSignin();
            this.auth$ = new BehaviorSubject(isAuthenticated);
            this.auth = this.auth$.asObservable();
            this.auth.subscribe();
    }

    signup() {
        console.log('signup');
    }

    signin() {
        this.auth$.next(true);
        this.storageService.setItem('admin-token', true);
        this.router.navigateByUrl('');
    }


    getToken(): string {
        return this.storageService.getItem('admin-token');
    }

    autoSignin(): boolean {
        return this.storageService.getItem('admin-token');
    }

    resetPassword() {
        console.log('reset');
    }

    logout() {
        this.storageService.clear();
        this.router.navigateByUrl('sign/login');
        this.auth$.next(false);
    }

}
