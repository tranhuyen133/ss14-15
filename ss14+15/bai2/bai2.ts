class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class CartProduct extends Product {
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        super(id, name, price);
        this.quantity = quantity;
    }

    calculatePrice(): number {
        return this.price * this.quantity;
    }

    increaseQuantity(amount: number): void {
        this.quantity += amount;
    }

    decreaseQuantity(amount: number): void {
        if (this.quantity - amount >= 0) {
            this.quantity -= amount;
        } else {
            console.log("Quantity cannot be less than 0.");
        }
    }
}

class ShopProduct extends Product {
    stock: number;

    constructor(id: number, name: string, price: number, stock: number) {
        super(id, name, price);
        this.stock = stock;
    }
}

class Cart {
    items: CartProduct[];

    constructor() {
        this.items = [];
    }

    addItem(product: ShopProduct, quantity: number): void {
        if (quantity <= product.stock) {
            const cartProduct = new CartProduct(product.id, product.name, product.price, quantity);
            this.items.push(cartProduct);
            product.stock -= quantity;
        } else {
            console.log(`Not enough stock for ${product.name}.`);
        }
    }

    removeItem(index: number): void {
        if (index >= 0 && index < this.items.length) {
            const removedProduct = this.items.splice(index, 1)[0];
            console.log(`Removed ${removedProduct.name} from the cart.`);
        } else {
            console.log("Invalid index.");
        }
    }

    getTotal(): number {
        let total = 0;
        this.items.forEach(item => {
            total += item.calculatePrice();
        });
        return total;
    }
}

// Example Usage:
const products: ShopProduct[] = [
    new ShopProduct(1, "Product 1", 10, 5),
    new ShopProduct(2, "Product 2", 20, 10),
    new ShopProduct(3, "Product 3", 30, 15)
];

const cart = new Cart();
cart.addItem(products[0], 2);
cart.addItem(products[1], 3);
cart.addItem(products[2], 5);
cart.removeItem(1);

console.log(cart.getTotal());
