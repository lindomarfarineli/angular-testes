import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { FormsModule } from '@angular/forms';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

//componentes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NewComponent, 
    TemplateBindingComponent, 
    FormsModule,
    TemplateVariablesComponent,
    TemplateControlFlowComponent
  ],
  template: `
  <h1>Curso de Angular</h1>
  <app-template-binding/>
  <app-new-component/> 
  
  {{title}}

  <app-template-variables/>
  <app-template-control-flow/> 
  
  <!--<router-outlet />-->`,  
  
})
export class AppComponent {
  title = 'primeiro-projeto-latest';
}

//<RouterOutlet> <router-outlet/>
