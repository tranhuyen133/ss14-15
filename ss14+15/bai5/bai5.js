"use strict";
class Transaction {
    constructor(id, type, amount, newBalance) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.newBalance = newBalance;
    }
}
class Account {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
    }
    deposit(amount) {
        this.balance += amount;
        const transaction = new Transaction(this.history.length + 1, "deposit", amount, this.balance);
        this.history.push(transaction);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = new Transaction(this.history.length + 1, "withdraw", amount, this.balance);
            this.history.push(transaction);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    transfer(amount, recipient) {
        if (this.balance >= amount) {
            this.balance -= amount;
            recipient.deposit(amount);
            const transaction = new Transaction(this.history.length + 1, "transfer", amount, this.balance);
            this.history.push(transaction);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    showHistory() {
        console.log("Transaction History:");
        this.history.forEach(transaction => {
            console.log(`ID: ${transaction.id}, Type: ${transaction.type}, Amount: ${transaction.amount}, New Balance: ${transaction.newBalance}`);
        });
    }
}
// Example Usage:
const accounts = [];
const account1 = new Account("123456", 1000);
const account2 = new Account("654321", 500);
accounts.push(account1, account2);
account1.deposit(500);
account1.withdraw(200);
account1.transfer(300, account2);
account1.showHistory();
account2.showHistory();
