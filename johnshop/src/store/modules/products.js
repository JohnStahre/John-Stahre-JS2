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
    mutations:{

    },
    actions: {
        // en action som kan hämta alla produkter mha axios men skapar en ny instans av axios i sourcemappen döpt till axios med en js fil
    getProducts: async ({commit}) => {
        // 
        const res = await axios.get('products')     
        commit('SET_PRODUCTS', res.data)    
    }
    }
}