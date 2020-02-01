import moment from '~/plugins/moment';

export const state = () =>({
    cart_data: null,
    getcartdata:null,
    updata_data:null,
})

export const getters = {
    cart_data: state => state.cart_data,
    getcartdata: state => state.getcartdata,
}

export const mutations = {
    setCart_data(state,cart_data){
        state.cart_data = cart_data;
        console.log(cart_data)
    },
    setGetcartdata(state,getcartdata){
        state.getcartdata = getcartdata;
        console.log(getcartdata)
    },
}

export const actions = {
    async upd_cart({commit},{upd_data}){
        console.log('コロナウイルス到来！！');
        const user_id = payload.user_id;
        const product_id = payload.product_id;
        const count = payload.count;
        const now = moment().format('YYYY-MM-DD')
        const cartdata = await this.$axios.$get(`http://133.18.194.128:5000/cart/cart_up?cart_data=${product_id}&user_data=${user_id}&count=${count}&date=${now}`);
        console.log('APIから戻ってきた!!');
        console.log(cartdata);
        commit("setCart_data", cartdata);
    },

    async cart_upload({commit},{payload}){
        console.log('コロナウイルス到来！！');
        const user_id = payload.user_id;
        const product_id = payload.product_id;
        const count = payload.count;
        const now = moment().format('YYYY-MM-DD')
        const cartdata = await this.$axios.$get(`http://133.18.194.128:5000/cart/cart_up?cart_data=${product_id}&user_data=${user_id}&count=${count}&date=${now}`);
        console.log('APIから戻ってきた!!');
        console.log(cartdata);
        commit("setCart_data", cartdata);
    },
    
    async get_cartdata({commit},{userid}){
        console.log('カート情報引き出し')
        const u_id = userid;
        console.log(u_id)
        const get_cart = await this.$axios.$get(`http://133.18.194.128:5000/cart/get_cart_data?user_id=${u_id}`);
        console.log(get_cart)
        commit("setGetcartdata", get_cart);
    },
}