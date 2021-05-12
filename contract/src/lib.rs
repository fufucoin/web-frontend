use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn js_log(a: &str);
}

#[wasm_bindgen]
pub fn log(name: &str) {
    js_log(&format!("{}!", name));
}