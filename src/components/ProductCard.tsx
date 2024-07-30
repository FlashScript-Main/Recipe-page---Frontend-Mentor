
const ProductCard = () => {

    return (
        <div className={`max-w-[400px] md:max-w-[600px] | flex flex-col md:flex-row |  | `}>
            <div className={` |  | md:basis-1/2 | `}>
                <img 
                    src="/mobile.png" 
                    alt="Product Image" 
                    className={` | rounded-t-2xl md:hidden |  | `}
                />
                <img 
                    src="/desktop.png" 
                    alt="Product Image" 
                    className={` | max-md:hidden rounded-l-2xl h-full object-cover object-center |  | `}
                />
            </div>

            <div className={`px-9 py-7 | bg-neutral-white rounded-b-2xl md:rounded-none md:rounded-r-2xl | md:basis-1/2 md:grid md:place-content-center | `}>
                <span className={`md:mb-4 | text-sm font-montserrat font-medium uppercase text-neutral-dark-grayish-blue tracking-[4px] |  | `}>
                    Perfume
                </span>

                <h3 className={`mt-2 mb-4 md:mb-6 w-11/12 | text-neutral-very-dark-blue font-fraunces font-bold text-3xl |  | `}>
                    Gabrielle Essence Eau De Parfum
                </h3>

                <p className={`mb-4 md:mb-8 |  text-sm text-neutral-dark-grayish-blue font-montserrat font-medium |  | `}>
                    A floral, solar and voluptuous interpretation 
                    composed by Olivier Polge, 
                    Perfumer-Creator for the House of CHANEL.
                </p>

                <div className={`mb-5 md:mb-8 |  | flex items-center gap-6 | `}>
                    <span className={` | text-2xl md:text-3xl text-primary-dark-cyan font-fraunces font-bold |  | `}>
                        $149.99
                    </span>
                    <span className={` | text-base text-neutral-dark-grayish-blue line-through font-montserrat font-medium |  | `}>
                        $169.99
                    </span>
                </div>

                <button className="w-full py-4 | bg-primary-dark-cyan hover:bg-[hsl(158,45%,20%)] transition-colors text-neutral-white |  flex justify-center items-center gap-2 rounded-xl | ">
                    <i className="fa-solid fa-cart-shopping fa-sm" />
                    <span className={` | text-sm font-montserrat font-medium |  | `}>
                        Add to Cart
                    </span>
                </button>
            </div>
        </div>
    )

}

export default ProductCard