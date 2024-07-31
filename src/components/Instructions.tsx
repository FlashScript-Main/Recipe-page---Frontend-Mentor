import { instructions, instructionTitle } from "../constants"

const Instructions = () => {

    return (
        <div>
            <h3 className={`mb-3 | text-2xl md:text-[1.7rem] text-primary-nutmeg font-young-serif font-normal |  | `}>
                {instructionTitle}
            </h3>

            <ul className={`pl-6 pr-5 md:pr-12 space-y-[6px] |  |  | `}>
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
    )

}

export default Instructions