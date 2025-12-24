import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <p>
       <button class=" text-black w-full  px-5 py-2 rounded-xl shadow-md hover:bg-gray-100" 
       (click)="btnClicked.emit()">
    {{label()}}
</button>
    </p>
  `,
  styles: ``
})
export class ButtonComponent {
  label=input('');
  btnClicked=output();

}
