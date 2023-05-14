import { storage } from "./storage.js";
const { createApp } = Vue;

const idParent = "app";
const app = {
    data: () => {
        return {
            packs: [
                {name: "PACK 1", content: "SHIRT + PANTS + SOCKS", price: "$1000", img: "./assets/media/images/combo1.jpg"},
                {name: "PACK 2", content: "HOODIE + CAP + SCARF", price: "$2000", img: "./assets/media/images/combo2.jpg"},
                {name: "PACK 3", content: "JACKET + GLOVES + SOCKS", price: "$3000", img: "./assets/media/images/combo3.jpg"}
            ],
        };
    },
};

let rootComponent = createApp(app);
rootComponent.mount(`#${idParent}`);