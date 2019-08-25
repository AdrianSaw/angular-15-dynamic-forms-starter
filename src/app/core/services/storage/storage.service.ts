import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    hasStorage = true;

    constructor() {
        this.checkStorageState();
    }

    checkStorageState() {
        try {
            localStorage.setItem('storage_test', 'test');
            localStorage.removeItem('storage_test');
        } catch (e) {
            this.hasStorage = false;
        }
    }

    clear() {
        if (this.hasStorage) {
            localStorage.clear();
            return;
        }
        return;
    }

    getItem(key: string): string | any {
        if (this.hasStorage) {
            return localStorage.getItem(key);
        }
        return;
    }

    setItem(key: string, value: any): void {
        if (this.hasStorage) {
            localStorage.setItem(key, value);
            return;
        }
    }

    removeItem(key: string): void {
        if (this.hasStorage) {
            localStorage.removeItem(key);
            return;
        }
        return;
    }

}