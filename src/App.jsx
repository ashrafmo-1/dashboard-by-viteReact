import './App.css'
import Nav from './page/NavgationBar/Nav'
import TopNav from './page/TopNav/TopNav'


function App() {
  return (
    <>
      <TopNav />
      <div className='container-fluid' style={{paddingTop: '20px', background: '#eee'}}>
        <Nav />
        <div className='container'>
        </div>
      </div>
    </>
  )
}

export default App
