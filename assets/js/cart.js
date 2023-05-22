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
                this.cartContent = cart
                if (cart.length > 0) {
                    this.cartEmpty = !this.cartEmpty
                }
            } catch(error) {
                console.log(error);
            }
        },
        removeUnit: function (item) {
            this.cartContent.map((elem) => elem.description === item.description && ((elem.stock > 0) && elem.stock--))
        },
        removeAll: function (item) {
            this.cartContent = this.cartContent.filter((elem) => elem.description !== item.description)
        }
    },
    mounted() {
        this.getCartContent();
    },
};

let cartComponent = createApp(app);
cartComponent.mount(`#${idParent}`);