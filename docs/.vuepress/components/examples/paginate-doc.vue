<template>
	<paginate :data="data"></paginate>
</template>

<script lang="ts">
	//import axios from "axios"
	import { defineComponent, computed } from "vue";
	export default defineComponent({
		setup() {
			const data = computed(() => fetch("/api/users/")
                .then((res: any) => res.json());
			
			// const data = computed(() => {
			// 	return axios.get("path/to/api/").then((res: any) => res.data);
            // });
            
            return { data }
		},
	});
</script>
