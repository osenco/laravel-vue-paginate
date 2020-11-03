
<template>
    ...
	<paginate :data="data" :changed="fetchRecords"></paginate>
</template>

<script lang="ts">
	//import axios from "axios"
	import { defineComponent, ref, onMounted } from "vue";

	export default defineComponent({
		setup() {
			const data = ref();
            
            function fetchRecords() {
                fetch("/api/users/")
                .then((res: any) => {
                    data.value = res.json()
                }
            }

            // Or using axios
            // function fetchRecords() {
            //     axios.get("/api/users/")
            //     .then((res: any) => {
            //         data.value = res.json()
            //     }
            // }
            onMounted(() => fetchRecords());

			return { data, fetchRecords };
		},
	});
</script>