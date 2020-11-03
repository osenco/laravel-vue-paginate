import Pagination from "./components/Pagination.vue";

const paginate = {
	install(Vue: any, options = {}) {
		Vue.component("paginate", Pagination);
	},
};

export default paginate;
