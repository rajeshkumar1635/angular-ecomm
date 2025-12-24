import { Component } from '@angular/core';

@Component({
  selector: 'app-order-summary',
  imports: [],
  template: `
    <div class="bg-slate-100 p-4 rounded-xl shadow-xl border"> 
      <h2 class="text-2xl">Order Summary</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <span class="text-lg">Total</span>
          <span class="text-lg">$0.00</span>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class OrderSummaryComponent {

}
