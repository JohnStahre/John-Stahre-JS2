export default {
    state: {
        // cart en array med produkter
        cart:[]
    },
    getters: {
        shoppingCart: state => state.cart
    },
    mutations: {
        // om den finns ska det inte läggas till en ny
            // kollar igenom carten och kollar igenom produkterna i arrayen jämför id med det som skickas med i funtkionen matrchas id så kommer den finnas med i det objektet annars null
            
        ADD_TO_CART: (state, { product, quantity}) => {
            
            let exists = state.cart.find(item => item.product.id === product.id)
            // om den finns
            if(exists) {
                console.log(quantity)
                exists.quantity += quantity
                return
            }
            // om den inte finns 
            state.cart.push({ product, quantity })
        }
    },
    // vill kunna lägga till saker i carten alla saker kallas för item som är ett objekt som är produkt och hur många vi lägger till och kommittar genom addtocart där produkter och quantity skickas me i item
    actions: {
        addProductToCart: ({commit}, { product, quantity}) => {
            commit('ADD_TO_CART', { product, quantity})
        }

    }
}
// // skapar en cart i våran store så vi kan spara och skriva ut lägger in den i index.js