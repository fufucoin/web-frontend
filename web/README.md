# Please read
Please read the entire `README` for unified development approach.

## Dynamic Path alias
List of path aliased:
- `@pages` - src/pages
- `@layouts` - src/layouts
- `@components` - src/components
- `@styles` - src/styles
- `@services` - src/services
- `@models` - src/models
- `@tailwind` - src/services/tailwind/index.ts
- `@stores` - src/stores
- `@atoms` - src/components/atoms
- `@molecules` - src/components/molecules
- `@organisms` - src/components/organisms
- `@contract` - src/generated/contract

Example of using path alias
```javascript
import { MainLayout } from '@layouts'
import SubLayout from '@layouts/sub-layout'
```

## Importing WASM
Since WASM module can't be compile to any javascript bundle, we have to use async import.

```javascript
useEffect(() => {
    import('@contract').then(module => {
        module.log("Hello")
    })
}, [])
```

## Tailwind
This repo use custom tailwind setup for reducing className in production.

Please do the following when using tailwind:
```javascript
import tw from '@tailwind'

const UsingTailwind = () => <h1 className={tw`text-blue-400`}>Hello</h1>
```

## CSS Module
We're using sass and css module to separate css className also reducing className in production.

It's ok to use either `scss` or `css` but please use `css module`.

Every css file should be name using `[name].module.sass`.

```javascript
import styles from './style.module.sass'
```

For global css file, please place in `src/styles`
