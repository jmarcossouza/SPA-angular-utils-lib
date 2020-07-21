import { Injectable } from '@angular/core';
import { InputContainersConfig } from '../models/input-containers-config.interface';

/**
 * @description singleton service dos input containers
 */
@Injectable({ providedIn: 'root' })
export class InputContainersService {

    public inputContainersConfig: InputContainersConfig;

    constructor() { }
}
