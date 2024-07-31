import { omeletteImage } from "../assets"
import { ingredients, ingredientTitle, instructions, instructionTitle, nutritionInfo, nutritions, nutritionTitle, omelettedescription, omeletteTitle, preparInfo, preparTime } from "../constants"

const RecipePage = () => {

    return (
        <div className={`w-full bg-neutral-white |  |  | `}>
            <div className={` |  |  | `}>
                <img 
                    src={omeletteImage} 
                    alt="Omelette Image" 
                    className={` |  | object-cover object-center | `}
                />
            </div>

            <div className={`pl-8 pr-3 py-10 |  |  | `}>
                <h1 className={`mb-6 | text-neutral-dark-charcoal text-4xl font-young-serif font-normal leading-9 |  | `}>
                    {omeletteTitle}
                </h1>

                <p className={`mb-6 | text-base text-neutral-wenge-brown font-outfit font-normal |  | `}>
                    {omelettedescription}
                </p>

                <div className={`px-6 py-6 mb-6 |  | bg-neutral-rose-white rounded-xl | `}>
                    <h5 className={`mb-2 | text-lg text-primary-dark-raspberry font-outfit font-semibold |  | `}>
                        {preparTime}
                    </h5>

                    <ul className={`px-6 space-y-[6px] |  |  | `}>
                        {preparInfo.map((item) => (
                            <li 
                                key={item.id}
                                className={` | text-base font-outfit text-neutral-wenge-brown | list-disc | preparation_li`}
                            >   
                                <div className={` |  |  | bullet_mover_preparation`}>
                                    <span className={` | font-semibold |  | `}>{item.bold}</span>
                                    {item.normal}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className={`mb-3 | text-2xl text-primary-nutmeg font-young-serif font-normal |  | `}>
                        {ingredientTitle}
                    </h3>

                    <ul className={`px-6 space-y-[6px] |  |  | `}>
                        {ingredients.map((item) => (
                            <li
                                key={item.id}
                                className={` | text-base font-outfit font-normal text-neutral-wenge-brown | list-disc | ingredients_li`}
                            >
                                <span className={` |  |  | bullet_mover_ingredients`}>
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className={`my-6 |  |  | `} />

                <div>
                    <h3 className={`mb-3 | text-2xl text-primary-nutmeg font-young-serif font-normal |  | `}>
                        {instructionTitle}
                    </h3>

                    <ul className={`pl-6 pr-5 space-y-[6px] |  |  | `}>
                        {instructions.map((item) => (
                            <li
                                key={item.id}
                                className={` | text-base font-outfit text-neutral-wenge-brown | list-decimal | instructions_li`}
                            >
                                <div className={` |  |  | bullet_mover_instructions`}>
                                    <span className={` | font-semibold |  | `}>{item.bold}</span>
                                    {item.normal}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <hr className={`my-6 |  |  | `} />
                
                <div>
                    <h3 className={`mb-3 | text-2xl text-primary-nutmeg font-young-serif font-normal |  | `}>
                        {nutritionTitle}
                    </h3>

                    <p className={`mb-6 pr-4 | text-base text-neutral-wenge-brown font-outfit font-normal |  | `}>
                        {nutritionInfo}
                    </p>

                    <div className={`mb-2 |  |  | `}>
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
            </div>
        </div>
    )

}

export default RecipePage