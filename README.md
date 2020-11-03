# Laravel Vue Paginate

## Usage (Vue 3)
```vue
<template>
	<paginate :data="data"></paginate>
</template>

<script lang="ts">
	import { defineComponent, computed } from "vue";
    import axios from "axios"
	export default defineComponent({
		setup() {
			const data = computed(() => {
				return axios("/api/users/").then((res: any) => res.data);
            });
            
            return { data }
		},
	});
</script>
```

## Developer Mode
### Project setup
```
yarn install
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
