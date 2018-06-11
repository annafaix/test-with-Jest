var state = {
    kalle: {
        name: 'kalle', balance: 0
    },
    greta : {
        name: 'greta', balance: 0
    }
}
function deposit(account, amount) {
    if (isNaN(amount) || amount === Infinity || amount === null)
        throw new Error('error converting to number');
    account.balance += Number(amount);
}

function withdraw(account, amount) {
	if(amount <= 0 ){
    throw new Error('Amount must be a positive number!');
  }else if(isNaN(amount) || (amount === Infinity) || (amount === null) || (typeof account !== 'object')){
    throw new Error ('Not valid parmeter');
  }else{
    account.balance -= Number(amount);
  }
}

function transfer(accountSender, accountReceiver, amount) {
	if( isNaN(amount)
 			/*|| accountReceiver.balance)*/)
        throw new Error('')
    else if (amount > accountSender.balance || amount <= 0)
        throw new Error('Kalle, you don`t have enough money or you`re trying to steal from someone. We won`t report you this time...')
    else
        accountSender.balance -= Number(amount);
        accountReceiver.balance += Number(amount);
}

export {state, deposit, withdraw, transfer}
