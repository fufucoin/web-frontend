`wasm-pack` is need before building the module.

Make sure you have Rust installed before running the script.
```bash
// Install wasm pack
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

Compiling to wasm will automate replacing module in `web`:
```bash
./build-wasm.sh
```

After building, the file will be place in `/web/generated/contract`, you can import from JavaScript file as:
```javascript
import { someFunction } from '@contract'
```
