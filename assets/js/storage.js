import { reduceElementAmount, removeAllItems } from "./functions.js";

class StorageManager {

    load(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    save(key, dataToSave) {
        localStorage.setItem(key, JSON.stringify(dataToSave));
    }

    getCartTotal() {
        let cart = this.load("cart");
        return cart.length
    }

    addToCart(product) {
        let cart = this.load("cart");
        cart.some((item) => {return item.description === product.description}) 
            ? cart.map((item) => item.description === product.description && item.stock++)
            : cart.push(product);
        this.save("cart", cart); 
    }

    reduceStockFromCart(item) {
        let cart = this.load("cart")
        cart = reduceElementAmount(cart, item)
        this.save("cart", cart)
        
    }

    removeFromCart(item) {
        let cart = this.load("cart")
        cart = removeAllItems(cart, item)
        this.save("cart", cart)
    }

    emptyCart() {
        localStorage.setItem("cart", "[]");
    }

    constructor() {
        if(localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", "[]");
        }
        if(localStorage.getItem("contact") === null) {
            localStorage.setItem("contact", "");
        }
    }

}

export const storage = new StorageManager();
