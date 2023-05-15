class StorageManager {

    load(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    save(key, dataToSave) {
        localStorage.setItem(key, JSON.stringify(dataToSave));
    }

    addToCart(product) {
        let cart = this.load("cart");
        cart.push(product);
        this.save("cart", cart); 
    }

    constructor() {
        localStorage.setItem("contact", "");
        localStorage.setItem("cart", []);
    }
}

export const storage = new StorageManager();
