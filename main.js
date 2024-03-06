const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id)
        },
        removeCart(id){
           // this.cart.pop(id) //method 1
           //method 2
           const index = this.cart.indexOf(id);
           if(index > -1){
            this.cart.splice(index, 1)
           }
        }
    }
})
