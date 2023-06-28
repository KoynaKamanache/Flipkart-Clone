import './App.css'
import Header from './Header.js'
import Home from './Home.jsx';
import {Box} from '@mui/material'
import DataProvider from './context/DataProvider';
function App() {
  return (
    <DataProvider>
     <Header/>
     <Box style={{marginTop:55}}>
      <Home/>
     </Box>
    </DataProvider>
  )
}

export default App;
