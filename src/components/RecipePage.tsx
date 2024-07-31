import { omeletteImage } from "../assets"
import { omelettedescription, omeletteTitle } from "../constants"
import { Ingredients, Instructions, Nutrition, Preparation } from "./"

const RecipePage = () => {

    return (
        <div className={`w-full md:max-w-[48rem] md:px-10 md:pt-8 md:my-[7rem] | bg-neutral-white | md:rounded-2xl | `}>
            <div className={` |  |  | `}>
                <img 
                    src={omeletteImage} 
                    alt="Omelette Image" 
                    className={` |  | object-cover object-center md:rounded-xl | `}
                />
            </div>

            <div className={`pl-8 pr-3 md:pl-0 md:pr-0 py-10 |  |  | `}>
                <h1 className={`mb-6 | text-neutral-dark-charcoal text-4xl font-young-serif font-normal leading-9 |  | `}>
                    {omeletteTitle}
                </h1>

                <p className={`mb-6 md:pr-6 | text-base text-neutral-wenge-brown font-outfit font-normal |  | `}>
                    {omelettedescription}
                </p>

                <Preparation />

                <Ingredients />

                <hr className={`my-6 |  |  | `} />

                <Instructions />

                <hr className={`my-6 |  |  | `} />
                
                <Nutrition />
            </div>
        </div>
    )

}

export default RecipePage