import { preparInfo, preparTime } from "../constants"

const Preparation = () => {

    return (
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
    )

}

export default Preparation