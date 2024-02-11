import { PaymentType, Size } from "../../constants"

export enum FormSteps {
    ORDER_DELIVERY,
    CONTACT_PAYMENT,
    CONFIRM,
}

export interface Order{
    firstName: string
    lastName: string
    phone: string
    handle: string
    email: string
    order: OrderItem[]
    paymentType: PaymentType
    proofOfPayment: string //temp
    notes: string
    deliveryDate: Date
}

export interface OrderItem {
    productId: number
    quantity: number
    size: Size
}

export interface Product{
    id: number
    title: string
    desc: string
    prices: ProductPrices
}

export type ProductPrices = {
    [key:string]: number
}
