import Link from "next/link"

export const Button = ({text,className}) => {
  return (
    <div>
        <button 
            className={`${className} bg-primary-500 text-white px-4 py-2 rounded-lg bg-stone-950`}
        >{text}</button> 
    </div>
  )
}
