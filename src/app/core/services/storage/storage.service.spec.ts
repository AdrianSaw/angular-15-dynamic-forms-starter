import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('Storage Service', () => {
  let storageService: StorageService;
  let storageCheck;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StorageService]
    });
    storageService = TestBed.inject(StorageService);
  });

  it('GIVEN there is access to local storage THEN the storage should be created', () => {
    storageService.hasStorage = true;
    expect(storageService).toBeTruthy();
  });

  it('GIVEN the user saved resource to storage. WHEN he want to preview it it should return this resource', () => {
    storageService.setItem('foo', 'bar');
    expect(storageService.setItem('foo', 'bar')).toBeUndefined();
    expect(storageService.getItem('foo')).toBe('bar');
  });

  it(`GIVEN the user had resource in storage and he triggered remove action.
      WHEN he want to get this resource again it should return null`, () => {
    storageService.setItem('foo', 'bar');
    storageService.removeItem('foo')
    expect(storageService.getItem('foo')).toBeNull();
  });

  it(`GIVEN the user had resources in storage and he triggered clear action.
      WHEN he want to get any of those resources again it should return null`, () => {
    storageService.setItem('foo1', 'bar1');
    storageService.setItem('foo2', 'bar2');
    expect(storageService.getItem('foo1')).toBe('bar1');
    expect(storageService.getItem('foo2')).toBe('bar2');
    storageService.clear();
    expect(storageService.getItem('foo1')).toBeNull();
    expect(storageService.getItem('foo2')).toBeNull();
  });

  it('GIVEN there is no access to local storage THEN any action should return undefined', () => {
    storageCheck = spyOn(storageService, 'checkStorageState');
    storageService.hasStorage = false;
    expect(storageService.clear()).toBeUndefined();
    expect(storageService.removeItem('foo')).toBeUndefined();
    expect(storageService.setItem('foo', 'bar')).toBeUndefined();
    expect(storageService.getItem('foo')).toBeUndefined();
  });

});
