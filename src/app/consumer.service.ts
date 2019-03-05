import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  // tslint:disable-next-line: variable-name
  constructor(private _socket: Socket) {}
}
