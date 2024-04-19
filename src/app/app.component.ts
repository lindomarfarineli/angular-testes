import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { FormsModule } from '@angular/forms';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalsComponent } from "./components/template/signals/signals.component";

//componentes

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
  <h1> Signal </h1>
  <app-signals>
  <h1> Deferrable Views </h1>
  <app-template-deferrable-views/>

  <h1>Curso de Angular</h1>
  <app-template-binding/>
  <app-new-component/> 
  
  {{title}}

  <app-template-variables/>  
  
  
  <!--<router-outlet />-->`,
    imports: [
        RouterOutlet,
        NewComponent,
        TemplateBindingComponent,
        FormsModule,
        TemplateVariablesComponent,
        TemplateControlFlowComponent,
        TemplateDeferrableViewsComponent,
        SignalsComponent
    ]
})
export class AppComponent {
  title = 'primeiro-projeto-latest';
}

//<RouterOutlet> <router-outlet/>
