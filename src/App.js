
import './App.css';
import Header from './header';
import Main from './main';
import Card from './cards';
import { useEffect,useState } from 'react';
;
 
function App() {
let y ;
const [info,settingInfo] = useState([]) 
const [ready,settingReady] = useState(false)

      
    //   settingReady(false);
    
         

    //   console.log(data.data[0].title)//working 
    //   console.log(info.data)//not working ?

    //   Object.keys(info.data).forEach(item => {
    //     return(
    //       y = <Card title={item.title}//cant display y into the component 
                    
    //       />
    //     )
    //   })
      
      
    
    // settingReady(true)
        
       
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
    .then(res => res.json())
    .then(data => settingInfo(data))
    if(info){
      settingReady(true)
    }
      
  },[]);

  function render (){
    if(Object.keys(info).length > 0){
      
      console.log(info.data)
      info.data.map((item)=>{
        return (
          y = <Card  pic={item.images.jpg.image_url}
          title={item.title}
          episode={item.episodes}
          // gernes={} needs to loop into the array , 
          // but because of concastination all the gernes are displaying 
          rating={item.score}
          year={item.year}/>
        )
      })

  }
 
  }

  const myTimeout = setTimeout(render(), 5000);

    function myStopFunction() {
     clearTimeout(myTimeout);
 }
 myStopFunction();
 
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