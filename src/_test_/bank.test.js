import {state, deposit, withdraw, transfer} from '../bank.js'

//kolla om amount och account är tilllåtna värde
//account - object
//amount - positive number

// test('correct state for deposit on kalle with number', () => {
//    let currentBalance = state.kalle.balance;
//    deposit(state.kalle, 100);
//    expect(state.kalle.balance).toBe(currentBalance + 100);
//  });



describe('withdraw function', ()=>{

  test('amount is valid value - positive number 100', ()=>{
    let kalle = { name: 'Kalle', balance: 150 };
    withdraw(kalle, 100);
    expect(kalle.balance).toBe(50)
  })
  test('amount is negative number', ()=>{
    let kalle = { name: 'Kalle', balance: 150 };
    expect(()=> withdraw(kalle, -500)).toThrow();
  })

  test('amount is string "200"', ()=>{
    let kalle = { name: 'Kalle', balance: 1500 };
    withdraw(kalle, "200");
    expect(kalle.balance).toBe(1300);
  })
  test('amount is string "hello"', ()=>{
    let greta = { name: 'Greta', balance: 1200 };
    expect(()=> withdraw(greta, "hello")).toThrow();
  })
  test('amount is not valid parameter', ()=>{
    let greta = { name: 'Greta', balance: 1200 };
    expect(()=> withdraw(greta, null)).toThrow();
  })
  test('amount is positive Infinity', ()=>{
    let kalle = { name: 'Kalle', balance: 1500 };
    expect(()=> withdraw(kalle, Infinity)).toThrow();
  })
  test('account is not valid value', ()=>{
    let kalle = { name: 'Kalle', balance: 1500 };
    expect(()=> withdraw(1234, 100)).toThrow();
  })
})
