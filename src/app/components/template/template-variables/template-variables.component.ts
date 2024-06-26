import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {

  @ViewChild('name') public nameInput!: ElementRef;
  @ViewChild('h2') public nameh2!: ElementRef;  

  ngAfterViewInit(): void {
    console.log(this.nameInput.nativeElement.value);
    console.log(this.nameh2.nativeElement.innerText);
    
  }

}
