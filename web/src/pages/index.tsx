import { useEffect } from 'react'

import tw from '@tailwind'

const Landing = () => {
    useEffect(() => {
        import('@contract').then(module => {
            module.log("Hello")
        })
    }, [])

    return <h1 className={tw`text-blue-400`}>Hello World!!</h1>
}

export default Landing
