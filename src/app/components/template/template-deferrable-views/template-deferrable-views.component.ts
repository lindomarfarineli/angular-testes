import { Component } from '@angular/core';
import { TemplateControlFlowComponent } from '../template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [TemplateControlFlowComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})

export class TemplateDeferrableViewsComponent {
  
  public isTrue = false;
}
