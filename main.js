// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
};

// створити пустий масив, наповнити його 10 об'єктами new User(....)

const userArr = [
    new User(11, 'Ivan', 'Ivaniv', 'w000@i.ua', 30501111111),
    new User(13, 'Sergiy', 'Sergiiv', 'a123@i.ua', 30672222222),
    new User(16, 'John', 'Johniv', 'b123@i.ua', 30913333333),
    new User(19, 'Abram', 'Abramiv', 'c123@i.ua', 30504444444),
    new User(25, 'Nina', 'Niniv', 'd123@i.ua', 30665555555),
    new User(31, 'Abram', 'Isaakiv', 'e123@i.ua', 30676666666),
    new User(41, 'Isaak', 'Abramiv', 'y123@i.ua', 30507777777),
    new User(49, 'Nina', 'Niniv', 'f123@i.ua', 30668888888),
    new User(52, 'Levko', 'Isaakiv', 'h123@i.ua', 30679999999),
    new User(75, 'Fox', 'Abramiv', 'k123@i.ua', 30501011010)
];
console.log(userArr);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filterUser = userArr.filter((item) => {
    if (item.id % 2 === 0) {
        return item;
    }
});
console.log(filterUser);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortUser = userArr.sort((a, b) => a.id - b.id);
console.log(sortUser)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client

let newArray = [
    new Client(11, 'Ivan', 'Ivaniv', 'w000@i.ua', 30501111111, ['vegetables', 'mashrooms', 'nuts']),
    new Client(13, 'Sergiy', 'Sergiiv', 'a123@i.ua', 30672222222,['flowers', 'roses', 'nuts']),
    new Client(16, 'John', 'Johniv', 'b123@i.ua', 30913333333,['vegetables', 'books', 'nuts','choklad', 'flowers']),
    new Client(19, 'Abram', 'Abramiv', 'c123@i.ua', 30504444444,['meat', 'mashrooms', 'oil']),
    new Client(25, 'Nina', 'Niniv', 'd123@i.ua', 30665555555,['vegetables', 'mashrooms', 'nuts','choklad', 'books']),
    new Client(31, 'Abram', 'Isaakiv', 'e123@i.ua', 30676666666,['vegetables', 'oil', 'books']),
    new Client(41, 'Isaak', 'Abramiv', 'y123@i.ua', 30507777777,['trausers', 'choklad', 'books', 'oil']),
    new Client(49, 'Nina', 'Niniv', 'f123@i.ua', 30668888888,['fruits', 'mashrooms', 'nuts', 'vegetables']),
    new Client(52, 'Levko', 'Isaakiv', 'h123@i.ua', 30679999999,['vegetables', 'fruits', 'nuts']),
    new Client(75, 'Fox', 'Abramiv', 'k123@i.ua', 30501011010,['vegetables', 'books', 'nuts'])
];
console.log(newArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClient = newArray.sort((a, b) => a.order.length - b.order.length);
console.log(sortClient);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, о
// б'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    };
}

let addCar = new Car(model, manufacturer, year, maxSpeed, volume);
console.log(addCar);
addCar.drive();
addCar.info();
addCar.increaseMaxSpeed(newSpeed);
addCar.changeYear(newValue);
addCar.addDriver(driver);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarClass {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    };

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`);
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };
}

let addCarClass = new CarClass(model, manufacturer, year, maxSpeed, volume);
console.log(addCarClass);
addCarClass.drive();
addCarClass.info();
addCarClass.increaseMaxSpeed(newSpeed);
addCarClass.changeYear(newValue)
addCarClass.addDriver(driver)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popelushka {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.footsize = size;
    }
}

let popelushkas = [
    new Popelushka('Popelushka1', 16, 30),
    new Popelushka('Popelushka2', 17, 31),
    new Popelushka('Popelushka3', 18, 30),
    new Popelushka('Popelushka4', 19, 31),
    new Popelushka('Popelushka5', 20, 33),
    new Popelushka('Popelushka6', 21, 29),
    new Popelushka('Popelushka7', 22, 34),
    new Popelushka('Popelushka8', 23, 33),
    new Popelushka('Popelushka9', 20, 34),
    new Popelushka('Popelushka10', 18, 32),
];
console.log(popelushkas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const prince = new Prince('Prince', 28, 32);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

const newlyweds = (popelushkas, prince) => {
    for (const popelushka of popelushkas) {
        if (item.size === prince.slipper) {
            return `Знайдена попелюшка: ${item.name}`
        }
    }
};
console.log(newlyweds(popelushkas, prince))

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let futurePrincess = popelushkas.find((item) => item.size === prince.slipper);
console.log(futurePrincess);