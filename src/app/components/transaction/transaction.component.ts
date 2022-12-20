import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Transactions } from 'src/app/interfaces/transaction.interface';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent  {
  date = new FormControl();
  @Input() transactions!: Transactions | null;
  @Output() editTransaction = new EventEmitter();
}
