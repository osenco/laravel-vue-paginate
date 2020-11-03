import Paginate from "./components/Pagination.vue";

const ComponentLibrary = {
	install(Vue: any, options = {}) {
		Vue.component("paginate", Paginate);
	},
};

export default ComponentLibrary;
