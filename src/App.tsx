import { FlashScript, ProductCard } from "./components"

const App = () => {

    return (
        <div className="relative w-full h-screen bg-primary-cream grid place-content-center">
            <ProductCard />

            <FlashScript />
        </div>
    )

}

export default App