import './App.css'
import Nav from './page/NavgationBar/Nav'
import TopNav from './page/TopNav/TopNav'
import Side from './page/SideBar/Side'
import UserInformation from './page/userInformation/UserInformation'
import BarSections from './page/barSections/BarSections'
import Todo from './page/sections/Todo/Todo'
import Work from './page/sections/InWork/Work'
import Review from './page/sections/Review/Review'
import Done from './page/sections/Done/Done'


function App() {
  return (
    <>
      <TopNav />
      <div className='' style={{paddingTop: '20px', background: 'rgba(247, 248, 250, 1)'}}>
        <Nav />
        <div className='pageContent d-flex' style={{width: '100%'}}>
          <div className='sideBar' style={{width: '6%'}}> <Side /> </div>
          <div className='sideBar' style={{width: '22%'}}> <UserInformation /> </div>
          <div className='boards' style={{width: '72%'}}>
            <div className='sectionControlsBars' style={{width: '100%'}}> <BarSections /> </div>
            <div className='allBoxesContent d-flex gap-4'>
              <div className='ToDo' style={{width: '23%'}}> <Todo /> </div>
              <div className='ToDo' style={{width: '23%'}}> <Work /> </div>
              <div className='ToDo' style={{width: '23%'}}> <Review /> </div>
              <div className='ToDo' style={{width: '23%'}}> <Done /> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
