import './App.css'
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'

function App() {
  return (
    <>
      <h1>Fundamentos do react</h1> {/* comentario em jsx */}
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  )
}

export default App
