import { storage } from "./storage.js";
const { createApp } = Vue;

let url = "https://sheetdb.io/api/v1/f7bl7f40k06yl"
let imgPath = "../media/images/catalog/"
const idParent = "catalog";
const app = {
    data: () => {
        return {
            catalog: []
        };
    },
    methods: {
        getCatalog: async function () {
            try {
                const result = await fetch(url);
                const data = await result.json();
                data.forEach(product => {
                    product.img = imgPath + product.img
                    this.catalog.push(product)
                    console.log(product)
                });
            } catch(error) {
                console.log(error);
            }
        },
        addItemToCart: function (product) {
            let item = this.catalog.find((item) => item.description == product.description)
            if (item.stock > 0) {
                let productToAdd = {
                    description: product.description,
                    price: product.price,
                    img: product.img,
                    color: product.color,
                    size: product.size,
                    stock: 1
                }
                item.stock--
                storage.addToCart(productToAdd)
            }
            else {
                console.log("Out of stock")
            }
        }
    },
    mounted() {
        this.getCatalog();
    },
};

let catalogComponent = createApp(app);
catalogComponent.mount(`#${idParent}`);