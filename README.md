# Laravel Vue Paginate

Vue pagination component for Laravel API backend.

### Installation

Install using `npm`

```cmd
npm-i @osenco/laravel-vue-paginate
```

Or with `yarn`

```cmd
yarn add @osenco/laravel-vue-paginate
```

## Usage

### Include Plugin

```ts
//main.ts
import { createApp } from "vue";
import paginate from  "@osenco/laravel-vue-paginate";

...
app.use(paginate);
```

### In Component

```vue
<template>
	...
    <!-- type can be either 'bs' for Bootstrap or 'tw' for Tailwind -->
	<paginate :data="data" :changed="fetchRecords" type="bs"></paginate>
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
	               })
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
