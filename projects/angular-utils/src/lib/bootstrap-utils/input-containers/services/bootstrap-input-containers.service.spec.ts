import { TestBed } from '@angular/core/testing';

import { BootstrapInputContainersService } from './bootstrap-input-containers.service';

describe('BootstrapInputContainersService', () => {
    let service: BootstrapInputContainersService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BootstrapInputContainersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
