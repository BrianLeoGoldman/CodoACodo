import { storage } from "./storage.js";
const { createApp } = Vue;

let imgPath = "./assets/media/images/promos/"
const idParent = "cart";
const app = {
    data: () => {
        return {
            cartEmpty: true,
            cartContent: [],
            total: 0,
            deliveryMethod: null,
            paymentMethod: null
        };
    },
    methods: {
        checkEmptyCart: function () {
            if (this.cartContent.length > 0) {
                this.cartEmpty = false
                this.total = this.cartContent
                    .map((elem) => elem.stock * elem.price)
                    .reduce((a, b) => a + b, 0)
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
        },
        buyCart: function () {
            storage.emptyCart()
            this.getCartContent()
            Swal.fire({
                title: `Purchase successful`, 
                text: `You have successfully completed your purchase. Thanks a lot!`, 
                icon: "success",
                confirmButtonText: "OK",
            });
        }
    },
    mounted() {
        this.getCartContent();
    },
};

let cartComponent = createApp(app);
cartComponent.mount(`#${idParent}`);