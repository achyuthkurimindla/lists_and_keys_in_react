import UserProfile from './components/UserProfile/index'
import './App.css'
const userDetailsList = [
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Achyuth',
    role: 'Software Enigneer',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Achyuth',
    role: 'Software Enigneer',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Achyuth',
    role: 'Software Enigneer',
  },
]
//  <UserProfile userDetails={userDetailsList} />
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  </div>
)

export default App
