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
        checkEmptyCart: function () {
            if (this.cartContent.length > 0) {
                this.cartEmpty = false
            }
            else {
                this.cartEmpty = true
            }
        },
        getCartContent: function () {
            try {
                let cart = storage.load("cart")
                this.cartContent = cart
                this.checkEmptyCart()
            } catch(error) {
                console.log(error);
            }
        },
        removeUnit: function (item) {
            storage.reduceStockFromCart(item)
            this.getCartContent()
        },
        removeAll: function (item) {
            storage.removeFromCart(item)
            this.getCartContent()
        }
    },
    mounted() {
        this.getCartContent();
    },
};

let cartComponent = createApp(app);
cartComponent.mount(`#${idParent}`);