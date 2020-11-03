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

			return { data };
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
