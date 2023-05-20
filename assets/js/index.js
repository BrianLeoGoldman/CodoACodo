import { storage } from "./storage.js";
const { createApp } = Vue;

let url = "https://sheetdb.io/api/v1/9a14vle9mievy"
let imgPath = "./assets/media/images/promos/"
const idParent = "app";
const app = {
    data: () => {
        return {
            packs: [
                /* {name: "PACK 1", content: "SHIRT + PANTS + SOCKS", price: "$1000", img: "./assets/media/images/promos/Combo1.jpg"},
                {name: "PACK 2", content: "HOODIE + CAP + SCARF", price: "$2000", img: "./assets/media/images/promos/Combo2.jpg"},
                {name: "PACK 3", content: "JACKET + GLOVES + SOCKS", price: "$3000", img: "./assets/media/images/promos/Combo3.jpg"} */
            ],
        };
    },
    methods: {
        getPromos: async function () {
            try {
                const result = await fetch(url);
                const data = await result.json();
                data.forEach(promo => {
                    promo.img = imgPath + promo.img
                    this.packs.push(promo)
                });
                const shuffled = this.packs.sort(() => 0.5 - Math.random());
                console.log(shuffled)
                this.packs = shuffled.slice(0, 3);
            } catch(error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getPromos();
    },
};

let rootComponent = createApp(app);
rootComponent.mount(`#${idParent}`);