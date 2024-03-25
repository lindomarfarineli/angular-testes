import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {

  public name: string = "Lindomar Farineli";
  public age: number = 47;
  public isDisabled = false;

  public sum (){
    return this.age++;
  }

  public oneKeyDown (event: Event) {
    return console.log(event);
  }

  public onMouseMove (event: MouseEvent){
    return console.log({
      clientx: event.clientX,
      clienty: event.clientY
    });
  }

}
