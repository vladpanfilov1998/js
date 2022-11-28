//1 Створити картку користувча

function UserCard(key) {
    this.getCardOptions = function () {
        this.balance = 100;
        this.transactionLimit = 100;
        this.historyLogs = [];
        this.key = key;
    }

    this.putCredits = function (credits) {
        this.balance += credits;
        this.historyLogs.push({
            operationType: 'Received credits',
            credits: credits,
            operationTime: `${new Date()}`
        })
    }

    this.takeCredits = function (credits) {
        if (this.transactionLimit >= credits && this.balance >= credits) {
            this.balance -= credits;
            this.historyLogs.push({
                operationType: 'Withdrawal of credits',
                credits: credits,
                operationTime: `${new Date()}`
            })
        } else {
            console.error('Error')
        }
    }

    this.setTransactionLimit = function (credits) {
        this.transactionLimit = credits;
        this.historyLogs.push({
            operationType: 'Transaction limit change',
            credits: credits,
            operationTime: `${new Date()}`
        })
    }

    this.transferCredits = function (numberCredits, card) {
        let creditsWithImpost = numberCredits + (numberCredits * 0.005);
        this.takeCredits(creditsWithImpost)
        card.putCredits(numberCredits);
    }
}

// let card1 = new UserCard(1);
// console.log(card1);
// card1.getCardOptions();
// console.log(card1);
// card1.putCredits(100);
// console.log(card1);
// card1.takeCredits(50);
// console.log(card1);
// card1.setTransactionLimit(500);
// console.log(card1);
// let card2 = new UserCard(2);
// card2.getCardOptions();
// card1.transferCredits(20,card2);
// console.log(card1);
// console.log(card2);

//2. Створити user Account

class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
    }


    addCard(key) {
        if (this.cards.length <= 3) {
            this.cards.push(new UserCard(key))
        } else {
            console.error('Ви перевищуєте ліміт карток')
        }

    }

    getCardByKey(key) {
        for (const card of user.cards) {
            if (card.key === key) {
                return card;
            }
        }
    }
}

//debugger
let user = new UserAccount('Bob');
user.addCard(1);
user.addCard(2);
user.addCard(3);
for (const userElement of user.cards) {
    userElement.getCardOptions();
}

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);


card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1);
console.log(card2);
