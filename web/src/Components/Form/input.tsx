import {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input(props: InputProps){
    return (
        <input
            {...props}
            className="bg-zinc-900 px-3 py-4 rounded text-sm placeholder:text-zinc-500"
            
            />
    )
}