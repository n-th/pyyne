import { AccountBalanceAdapter } from '../bank/common';
import { Bank1AccountBalanceAdapter } from './Bank1AccountBalanceAdapter';

describe('Bank1AccountBalanceAdapter', () => {
  let adapter: AccountBalanceAdapter;

  beforeEach(() => {
    adapter = new Bank1AccountBalanceAdapter(1000, 'USD');
  });

  it('should return the balance', () => {
    const balance = adapter.getBalance();
    expect(balance).toBe(1000);
  });

  it('should return the currency', () => {
    const currency = adapter.getCurrency();
    expect(currency).toBe('USD');
  });
});
