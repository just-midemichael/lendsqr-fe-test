import React from 'react'
import '../../assets/style/noMatchRoute.css'
import { useNavigate } from 'react-router-dom'



const NoMatchRouteStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '80vh',
  textAlign: 'center',
  //border: '2px solid black' as '2px solid black',
}

const ButtonStyle: React.CSSProperties = {
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '45px',
  boxSizing: 'border-box',
  borderRadius: '5px',
  fontSize: '0.8em',
  margin: '0',
}

const NoMatchRoute = () => {
  //Changes the page title
  const docTitle = () => {
    document.title = '🚫 Page Not Found'
  }
  docTitle();


  const navigate = useNavigate()

  return (
    <>
      <div className='no-match-container content-box' style={NoMatchRouteStyle}>
        <div className='content-wrapper'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
        <h3>🚫 Page Not Found</h3>
        <button style={ButtonStyle} onClick={() => navigate('/', {replace: true})}>Go back to LendSqr</button>
        </div>
      </div>
       
    </>
    
  )
}

export default NoMatchRoute
