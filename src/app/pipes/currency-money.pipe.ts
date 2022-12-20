import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyMoney',
})
export class CurrencyMoneyPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }
}
