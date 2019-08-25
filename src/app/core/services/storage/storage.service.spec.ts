import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('Storage Service', () => {
  let storageService: StorageService;
  let storageCheck;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
    storageService = TestBed.get(StorageService);
  });

  it('should create storageService', () => {
    expect(storageService).toBeTruthy();
  });

  it('should set data and read it', () => {
    storageService.setItem('foo', 'bar');
    expect(storageService.setItem('foo', 'bar')).toBeUndefined();
    expect(storageService.getItem('foo')).toBe('bar');
  });

  it('should remove data', () => {
    storageService.setItem('foo', 'bar');
    expect(storageService.removeItem('foo')).toBeUndefined();
    expect(storageService.getItem('foo')).toBeNull();
  });

  it('should clear storage', () => {
    storageService.setItem('foo', 'bar');
    storageService.clear();
    expect(storageService.getItem('foo')).toBeNull();
  });

  it('should return null', () => {
    storageCheck = spyOn(storageService, 'checkStorageState');
    storageService.hasStorage = false;
    expect(storageService.clear()).toBeUndefined();
    expect(storageService.removeItem('foo')).toBeUndefined();
    expect(storageService.setItem('foo', 'bar')).toBeUndefined();
    expect(storageService.getItem('foo')).toBeUndefined();
  });

});