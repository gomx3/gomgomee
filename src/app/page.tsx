import { Header } from '../components/common/Header'
import { MainSection } from './_components/section'

function App() {
    return (
        <div className="h-fit min-h-screen w-4/5">
            <Header />
            <div className="text-red-500 dark:text-blue-300">testt</div>
            <MainSection />
        </div>
    )
}

export default App
