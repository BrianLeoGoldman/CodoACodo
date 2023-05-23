import { storage } from "./storage.js";
const { createApp } = Vue;

const idParent = "nav";
const nav = {
    data: () => {
        return {
            cartTotal: storage.getCartTotal()
        };
    },
}

let navComponent = createApp(nav);
navComponent.mount(`#${idParent}`);

