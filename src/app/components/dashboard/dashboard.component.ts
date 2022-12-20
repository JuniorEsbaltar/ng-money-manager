import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  Transaction,
  Transactions,
} from 'src/app/interfaces/transaction.interface';
import { TransactionService } from 'src/app/services/transaction.service';
import { DialogTransactionComponent } from '../dialog-transaction/dialog-transaction.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  $transactions: Observable<Transactions> =
    this.transactionService.getAllByMonth(new Date());
  constructor(
    private transactionService: TransactionService,
    public dialog: MatDialog
  ) {}

  openDialog(transaction?: Transaction): void {
    const dialogRef = this.dialog.open(DialogTransactionComponent, {
      data: transaction || null,
    });

    dialogRef.afterClosed().subscribe((data: FormGroup) => {
      if (!!data) {
        this.transactionService.create(data.value).subscribe(() => {
          this.$transactions = this.transactionService.getAllByMonth(
            new Date()
          );
        });
      }
    });
  }
}
