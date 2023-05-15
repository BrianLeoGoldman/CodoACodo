import { storage } from "./storage.js";
const { createApp } = Vue;

const idParent = "form";
const app = {
    data: () => {
        return {
            contact: {
                name: null,
                lastname: null,
                email: null,
                comment: null
            }
        };
    },
    methods: {
        sendContact: function () {
            storage.save("contact", this.contact);
            this.contact = {
                name: null,
                lastname: null,
                email: null,
                comment: null
            };
        },
        resetContact: function () {
            this.contact = {
                name: null,
                lastname: null,
                email: null,
                comment: null
            };
        },
    },
};

let formComponent = createApp(app);
formComponent.mount(`#${idParent}`);