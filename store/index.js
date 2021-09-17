//state
export const state = () => ({
    varieties: [],
    loadingVarieties: true,
   // url_base: 'http://localhost/apiphp/',
     url_base: 'https://phpapi.identidadesjuveniles.org/',
    carrito: [],
    search_product: '',
    total: 0,
    canttotal: 0,
    userLoguer: false,
    nameUser: '',
    urlaccount: '/account',
    active_li: {
        panel: 'nav-item active',
        info: 'nav-item',
        order: 'nav-item'
    },
    systemInfo: {
        openLoginModal: false,
        openSignupModal: false,
        openCheckoutModal: false,
        openAddProductoModal: false
    },
})

//mutations
export const mutations = {

    saveIdEspacio: (state, data) => {
        localStorage.setItem("data", data)
    }
}

//actions
export const actions = {
    async varieties({ commit }) {
        const response = await this.$axios.get('variety_products')
        commit('setVarieties', response.data.result)
        commit('setLoadingVarieties', false)
    },
    saveToken({ commit }, data) {
        localStorage.setItem("data", data)
    }
}

//getters
export const getters = {
    varieties(state) {
        return state.varieties
    },
    isAddModalOpen: state => {
        return state.systemInfo.openAddProductoModal;
    },

}