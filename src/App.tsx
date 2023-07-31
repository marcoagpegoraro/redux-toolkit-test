import ComponentOne from './Components/ComponentOne'
import ComponentTwo from './Components/ComponentTwo'
import './app.css'

function App() {

  return (
    <div className='content'>
      <section className='logos'>
        <img src='./react-logo.png' alt='React logo' className='image-logo'/>
        <h1>+</h1>
        <img src='./redux-logo.png' alt='Redux logo' className='image-logo'/>
      </section>
      <div style={{ flexBasis: '100%', height: '0'}} />
      <ComponentOne className='component-test'/>
      <ComponentTwo className='component-test' />
    </div>
  )
}

export default App
