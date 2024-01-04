import { Button } from "./Button"

export const Card = ({img}) => {
  return (
    <article className="relative flex flex-col justify-end">
        <header className="flex flex-col text-black absolute bottom-20">
            <p className="text-tiny  uppercase font-bold">What to watch</p>
            <h4 className="font-medium text-large">Stream the Acme event</h4>
        </header>
        <picture>
            <img src={img} alt="" />
        </picture>
        <Button text="Comprar" className="absolute bottom-2 left-[35%]"/>
    </article>
  )
}
