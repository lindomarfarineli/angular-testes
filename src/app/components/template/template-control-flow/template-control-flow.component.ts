import { AsyncPipe, NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, NgSwitch],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.scss'
})
export class TemplateControlFlowComponent {

  public isTrue = false;

  public itens: Array<{name: string}> = [];
  public loadingData$: Observable<string[]> = of([
    "item1",
    "item2",
    "item3"
  ]).pipe(delay(3000));

  public trackByFn(index: number){
    return index;
  }

  public addNewName(value: string){

    return this.itens.push({name: value});

  }

  public condition = "C";
}
