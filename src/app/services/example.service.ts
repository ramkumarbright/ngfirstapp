import { Injectable } from '@angular/core';
import{} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private _todos = new BehaviorSubject<Todo[]>([]);

  constructor() { }
}
