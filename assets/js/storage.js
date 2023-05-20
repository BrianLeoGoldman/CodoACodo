class StorageManager {

    load(key) {
        return JSON.parse(localStorage.getItem(key))
    }

    save(key, dataToSave) {
        localStorage.setItem(key, JSON.stringify(dataToSave));
    }

    addToCart(product) {
        let cart = this.load("cart");
        cart.some((item) => {return item.description === product.description}) 
            ? cart.map((item) => item.description === product.description && item.stock++)
            : cart.push(product);
        this.save("cart", cart); 
    }

    constructor() {
        localStorage.setItem("contact", "");
        localStorage.setItem("cart", "[]");
    }
}

export const storage = new StorageManager();
