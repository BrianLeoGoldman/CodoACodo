import { storage } from "./storage.js";
const { createApp } = Vue;

let url = "https://sheetdb.io/api/v1/9a14vle9mievy"
// let url = "../assets/data/promos.json"
let imgPath = "./assets/media/images/promos/"
const idParent = "app";
const app = {
    data: () => {
        return {
            loading: true,
            packs: [],
            cartTotal: storage.getCartTotal()
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
                this.packs = shuffled.slice(0, 3);
                this.loading = !this.loading
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