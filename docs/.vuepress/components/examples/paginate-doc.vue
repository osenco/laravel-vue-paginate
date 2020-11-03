<template>
	<paginate :data="data"></paginate>
</template>

<script lang="ts">
	import { defineComponent, computed } from "vue";
	export default defineComponent({
		setup() {
			const data = computed(() => {
				return fetch("/api/users/").then((res: any) => res.data);
            });
            
            return { data }
		},
	});
</script>
