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
        validateName: function (name) {
            return (name != null) && (name.length > 3)
        },
        validateLastname: function (lastname) {
            return (lastname != null) && (lastname.length > 3)
        },
        validateEmail: function (email) {
            var mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (email != null) && (email.length > 10) && (email.toLowerCase().match(mailformat))
        },
        validateComment: function (comment) {
            return (comment != null) && (comment.length > 10)
        },
        sendContact: function () {
            if(!this.validateName(this.contact.name)) {
                Swal.fire({
                    title: `Bad input`, 
                    text: `Please check and correct your name`, 
                    icon: "error",
                    confirmButtonText: "Try again",
                });
                return
            }
            if(!this.validateLastname(this.contact.lastname)) {
                Swal.fire({
                    title: `Bad input`, 
                    text: `Please check and correct your lastname`, 
                    icon: "error",
                    confirmButtonText: "Try again",
                });
                return
            }
            if(!this.validateEmail(this.contact.email)) {
                Swal.fire({
                    title: `Bad input`, 
                    text: `Please check and correct your email`, 
                    icon: "error",
                    confirmButtonText: "Try again",
                });
                return
            }
            if(!this.validateComment(this.contact.comment)) {
                Swal.fire({
                    title: `Bad input`, 
                    text: `Please check and correct your comment`, 
                    icon: "error",
                    confirmButtonText: "Try again",
                });
                return
            }
            storage.save("contact", this.contact);
            this.contact = {
                name: null,
                lastname: null,
                email: null,
                comment: null
            }
            Swal.fire({
                title: `Thanks!`, 
                text: `We will check your comments and get back to you!`, 
                icon: "success",
                confirmButtonText: "OK",
            });
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