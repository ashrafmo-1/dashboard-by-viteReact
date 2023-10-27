import './App.css'
import Nav from './page/NavgationBar/Nav'
import TopNav from './page/TopNav/TopNav'
import Side from './page/SideBar/Side'
import UserInformation from './page/userInformation/UserInformation'


function App() {
  return (
    <>
      <TopNav />
      <div className='' style={{paddingTop: '20px', background: 'rgba(247, 248, 250, 1)'}}>
        <Nav />
        <div className='pageContent d-flex' style={{width: '100%'}}>
          <div className='sideBar' style={{width: '6%'}}>
            <Side />
          </div>
          <div className='sideBar' style={{width: '6%'}}>
            <UserInformation />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
