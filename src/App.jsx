import './App.css'
import Nav from './page/NavgationBar/Nav'
import TopNav from './page/TopNav/TopNav'
import Side from './page/SideBar/Side'
import UserInformation from './page/userInformation/UserInformation'
import BarSections from './page/barSections/BarSections'


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
          <div className='sideBar' style={{width: '22%'}}>
            <UserInformation />
          </div>
          <div className='boards' style={{width: '72%'}}>
            <div className='sectionControlsBars' style={{width: ''}}>
              <div style={{widows: '90%'}}><BarSections /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
