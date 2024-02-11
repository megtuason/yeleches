export const PRODUCTS = [
    {
        id: 0, 
        title: 'Classic', 
        desc: 'An ultra-light sponge cake soaked in three kinds of milk topped off with our homemade vanilla whipped cream, and dusted with cocoa powder.',
        prices: {
            mini: 350,
            regular: 600,
            large: 1050
        }
    },
    {
        id: 1, 
        title: 'Strawberry', 
        desc: '*BEST-SELLER* Our signature tres leches cake base topped with homemade strawberry whipped cream and fresh strawberry slices.',
        prices: {
            mini: 450,
            regular: 720,
            large: 1300
        }
    },
    {
        id: 2, 
        title: 'Cookies & Cream', 
        desc: 'Our signature tres leches cake with an Oreo cookie base layer and an Oreo crumble topping.',
        prices: {
            mini: 400,
            regular: 650,
            large: 1150
        }
    },
    {
        id: 3, 
        title: 'Ube Coconut', 
        desc: 'Ube sponge cake generously drenched in a coconut milk mixture. Topped with coconut whipped cream and a sprinkle of desiccated coconut.',
        prices: {
            mini: 400,
            regular: 650,
            large: 1150
        }
    },
    {
        id: 4, 
        title: 'Mango Graham', 
        desc: 'Our signature tres leches cake base topped with homemade mango whipped cream, fresh mangoes, and our own toasted graham crumble.',
        prices: {
            mini: 400,
            regular: 650,
            large: 1150
        }
    },
]
export type PaymentType = 'bpi' | 'gcash' | 'bdo' | ''
export type Size = 'mini' | 'regular' | 'large'

