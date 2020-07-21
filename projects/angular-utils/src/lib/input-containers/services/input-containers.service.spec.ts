import { TestBed } from '@angular/core/testing';

import { InputContainersService } from './input-containers.service';

describe('InputContainersService', () => {
    let service: InputContainersService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(InputContainersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
