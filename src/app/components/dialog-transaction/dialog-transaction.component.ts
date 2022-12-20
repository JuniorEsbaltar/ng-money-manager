import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/interfaces/transaction.interface';

@Component({
  selector: 'app-dialog-transaction',
  templateUrl: './dialog-transaction.component.html',
  styleUrls: ['./dialog-transaction.component.scss'],
})
export class DialogTransactionComponent {
  transactionForm = this.fb.group({
    id: [this.data?.id || null],
    name: [this.data?.name || '', Validators.required],
    description: [this.data?.description || ''],
    amount: [this.data?.amount || '', Validators.required],
    type: [this.data?.type || 'EXPENSE', Validators.required],
    date: [this.data?.date || new Date(), Validators.required],
    isRecurring: [this.data?.isRecurring || false, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Transaction
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
