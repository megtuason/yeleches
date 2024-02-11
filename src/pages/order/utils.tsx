import axios from "axios";
import { Order } from "./types";

export const InitialOrder = {
    firstName: '',
    lastName: '',
    phone: '',
    handle: '',
    email: '',
    order: [],
    paymentType: '',
    proofOfPayment: 'test proof',
    notes: '',
    deliveryDate: new Date()
} as Order

export const validateOrder = (values:Order) =>{
    const errors = {};
    return errors;
}

export const submitOrder = (values:Order) => {
    const url = 'https://script.google.com/macros/s/AKfycbwg-c3XBUN1HOoBASCx1H9ZrWl4vUCFbUeY-aRGw1eQXryjKoX3QpIofVK_w5VwnpyL/exec'
    axios.post(url, JSON.stringify(values))
    .then((res)=>{console.log(res)})
    .catch((err) => {console.log(err)})
}