import { FlashScript, RecipePage } from "./components"

const App = () => {

    return (
        <div className="relative w-full bg-neutral-eggshell grid place-content-center">
            <RecipePage />

            <FlashScript />
        </div>
    )

}

export default App