import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import BasicInfo from './components/BasicInfo/BasicInfo'
import MainInfo from './components/MainInfo'
import Header from './components/Header'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <div className='w-full'>
        <BasicInfo />
        <MainInfo />
      </div>
    </ThemeProvider>
  )
}

export default App
