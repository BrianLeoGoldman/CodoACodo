class StorageManager {

    constructor() {
        if(isNaN (this.load("cart"))) {
            localStorage.setItem("cart", "[]");
        }
    }

    load(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    save(key, dataToSave) {
        /* let toStorage = this.load(key);
        toStorage.push(dataToSave); */
        localStorage.setItem(key, JSON.stringify(dataToSave));
    }
}

export const storage = new StorageManager();
