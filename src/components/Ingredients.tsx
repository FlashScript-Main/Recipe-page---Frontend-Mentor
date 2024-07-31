import { ingredients, ingredientTitle } from "../constants"

const Ingredients = () => {

    return (
        <div>
            <h3 className={`mb-3 | text-2xl md:text-[1.7rem] text-primary-nutmeg font-young-serif font-normal |  | `}>
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
    )

}

export default Ingredients