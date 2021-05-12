import { AppProps } from 'next/app'

import '@styles/init.sass'

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default App
