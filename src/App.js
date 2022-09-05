
import './App.css';
import Header from './header';
import Main from './main';
import Card from './cards';
import { useEffect,useState } from 'react';
;
 
function App() {
let y ;
const [info,settingInfo] = useState([]) 
const [ready,settingReady] = useState(true)

      async function getData() {
      settingReady(false);
        try{
          const res = await fetch("https://api.jikan.moe/v4/top/anime")
          const data = await res.json()
          settingInfo(data)

      console.log(data.data[0].title)//working 
      console.log(info.data)//not working ?

      Object.keys(info.data).forEach(item => {
        return(
          y = <Card title={item.title}//cant display y into the component 
                    
          />
        )
      })
      
   
    
    settingReady(true)
        }
        catch(error){
          console.log(error)
        }
     
      }
  useEffect(() => {
    getData()  
  },[]);

  

  return (
    <div>
      <Header />
      <section className='body-cont'>
        <Main />
        <section className='treding'>  
          {ready ? y : <Card />}
          </section>
        {/* <Lower /> */}
      </section>
    </div>
  )
}

export default App;


// for(let o = 0; o<4 ; o++){
            
//   
//   }
// console.log("data:")
//   update((prev) => ({
    
//     ...prev,
//     title: data.data[o].title,
//     episode: data.data[o].episodes,
//     rating: data.data[o].score,
//     year: data.data[o].year,
//     genre: x.map((item, indexs) => {
//       if (indexs === (length - 1)) {
//         return item + "."
//       }
//       else {
//         return item + ", "

//       }

//     })

    
//   }))
 
 
 
// }