import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { FormsModule } from '@angular/forms';

//componentes

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent, FormsModule],
  template: `
  <h1>Curso de Angular</h1>
  <app-template-binding/>
  <app-new-component/> 
  
  
  {{title}}
  
  <!--<router-outlet />-->`,  
  
})
export class AppComponent {
  title = 'primeiro-projeto-latest';
}

//<RouterOutlet> <router-outlet/>
