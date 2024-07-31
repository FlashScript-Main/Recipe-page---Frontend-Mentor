import { nutritionInfo, nutritions, nutritionTitle } from "../constants"

const Nutrition = () => {

    return (
        <div>
            <h3 className={`mb-3 | text-2xl md:text-[1.7rem] text-primary-nutmeg font-young-serif font-normal |  | `}>
                {nutritionTitle}
            </h3>

            <p className={`mb-6 pr-4 | text-base text-neutral-wenge-brown font-outfit font-normal |  | `}>
                {nutritionInfo}
            </p>

            <div className={`mb-2 md:mb-0 |  |  | `}>
                {nutritions.map((item) => (
                    <div 
                        key={item.id}
                    >   
                        <div className={`px-6 |  | flex  | `}>
                            <span className={` | text-base text-neutral-wenge-brown font-outfit font-normal | basis-1/2 | `}>{item.serving}</span>
                            <span className={` | text-base text-primary-nutmeg font-outfit font-semibold | basis-1/2 | `}>{item.value}</span>
                        </div>

                        {item.hr && (
                            <hr className={`my-3 mr-4 | bg-black  |  | `} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Nutrition