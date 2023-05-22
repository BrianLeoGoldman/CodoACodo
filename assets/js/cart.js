import { storage } from "./storage.js";
const { createApp } = Vue;

let imgPath = "./assets/media/images/promos/"
const idParent = "cart";
const app = {
    data: () => {
        return {
            cartEmpty: true,
            cartContent: [],
        };
    },
    methods: {
        getCartContent: function () {
            try {
                let cart = storage.load("cart")
                if (cart.length > 0) {
                    this.cartEmpty = !this.cartEmpty
                }
            } catch(error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getCartContent();
    },
};

let cartComponent = createApp(app);
cartComponent.mount(`#${idParent}`);