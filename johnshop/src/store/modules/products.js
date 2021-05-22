import axios from '@/axios'

export default {
    state: {
        // lista med produkter i en array
        products:[]
    },
 
    getters: {
        // state som skickar state.products
        products: state => state.products
    },
    mutations: {
        // tillgång till state och vår med produkter, funktion som kan hämta produkterna
        SET_PRODUCTS: (state, products) => {
            state.products = products
        }

    },
    actions: {
        // en action som kan hämta alla produkter mha axios men skapar en ny instans av axios i sourcemappen döpt till axios med en js fil
    getProducts: async ({commit}) => {
        // gör en commit set products och skickar med vår responsdata
        const res = await axios.get('products')     
        commit('SET_PRODUCTS', res.data)    

    },
    getOneProduct: async ({commit}, id) => {
        const res = await axios.get('products' +id)
        commit('SET_PRODUCTS', res.data)
    }
    }
}