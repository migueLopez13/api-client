import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public get(key: string): string | null {
    return localStorage.getItem(key);
  }

  public getToken(): string | null {
    return this.get('token');
  }

  public setToken(token: string) {
    this.set('token', token);
  }

  public removeToken(): void {
    localStorage.removeItem('token');
  }
}
