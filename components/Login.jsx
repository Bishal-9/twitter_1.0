import Image from "next/image"
import { signIn } from 'next-auth/react'

const Login = ({ providers }) => {
    return (
        <div className="flex flex-col items-center space-y-8 justify-center h-screen">
            <Image
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png'
                width={150}
                height={150}
                objectFit="contain"
            />
            <div>
                {
                    Object.values(providers).map(provider => (
                        <div key={provider.name}>
                            <button
                                className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                            >
                                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#1e9bf0] opacity-[3%]"></span>
                                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#1e9bf0] opacity-100 group-hover:-translate-x-8"></span>
                                <span className="relative w-full text-left text-[#1e9bf0] transition-colors duration-200 ease-in-out group-hover:text-gray-900">Sign in with {provider.name}</span>
                                <span className="absolute inset-0 border-2 border-[#1e9bf0] rounded-full"></span>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Login
