import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format } from 'date-fns';
import { map, Observable } from 'rxjs';
import { Transaction, Transactions } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private readonly baseUrl = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  getAllByMonth(date: Date): Observable<Transactions> {
    const formatedDate = format(date, 'dd-MM-yyyy');
    return this.httpClient.get<Transactions>(
      `${this.baseUrl}/transactions/${formatedDate}`
    );
  }

  create(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(
      `${this.baseUrl}/transactions`,
      transaction
    );
  }
}
