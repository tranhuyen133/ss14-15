"use strict";
class MenuItem {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Table {
    constructor(id, capacity) {
        this.id = id;
        this.capacity = capacity;
        this.available = true;
    }
}
class Reservation {
    constructor(id, customerName, tableId) {
        this.id = id;
        this.customerName = customerName;
        this.tableId = tableId;
    }
}
class Order {
    constructor(id, tableId) {
        this.id = id;
        this.tableId = tableId;
        this.items = [];
    }
    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total += item.price;
        });
        return total;
    }
}
class Restaurant {
    constructor() {
        this.menu = [];
        this.tables = [];
        this.reservations = [];
        this.orders = [];
    }
    addMenuItem(item) {
        this.menu.push(item);
    }
    addTable(table) {
        this.tables.push(table);
    }
    makeReservation(reservation) {
        const table = this.tables.find(table => table.id === reservation.tableId);
        if (table) {
            if (table.available) {
                table.available = false;
                this.reservations.push(reservation);
                console.log(`Table ${table.id} has been reserved for ${reservation.customerName}.`);
            }
            else {
                console.log(`Table ${table.id} is not available.`);
            }
        }
        else {
            console.log(`Table with id ${reservation.tableId} does not exist.`);
        }
    }
    placeOrder(order) {
        this.orders.push(order);
    }
    generateBill(tableId) {
        const order = this.orders.find(order => order.tableId === tableId);
        if (order) {
            const total = order.getTotal();
            console.log(`Total bill for Table ${tableId}: $${total}`);
            const table = this.tables.find(table => table.id === tableId);
            if (table) {
                table.available = true;
            }
        }
        else {
            console.log(`No order found for Table ${tableId}.`);
        }
    }
}
// Example Usage:
const restaurant = new Restaurant();
const menuItem1 = new MenuItem(1, "Pizza", 12);
const menuItem2 = new MenuItem(2, "Burger", 8);
restaurant.addMenuItem(menuItem1);
restaurant.addMenuItem(menuItem2);
const table1 = new Table(1, 4);
const table2 = new Table(2, 6);
restaurant.addTable(table1);
restaurant.addTable(table2);
const reservation = new Reservation(1, "John Doe", 1);
restaurant.makeReservation(reservation);
const order = new Order(1, 1);
order.items.push(menuItem1);
order.items.push(menuItem2);
restaurant.placeOrder(order);
restaurant.generateBill(1);
