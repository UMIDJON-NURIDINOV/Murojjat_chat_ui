import React, {useState , useContext, useEffect} from 'react';
import User from '../imgs/user.png'
import './sideMessage.css'
import  {DataContext} from '../Contex/Contex'

export default function SideMessage() {
  // const [acitve, setacitve] = useState();
  const [mas, setmas] = useState([]);
  const { data, updateData } = useContext(DataContext);
  useEffect(() => {
    const url = "http://93.114.128.200:7070/users"
    fetch(url)
      .then(response => response.json()).then(data => {
        setmas(data.data.items)
      }).catch(e => {
        console.log("e", e);
      },)
  }, []);

  function run(i , id){
    // setacitve(i)
    updateData([id , mas[i]]);
    console.log(data, 'ss');
  }

  return (
    <div>
      <h5 className='text-center sideTopText'>Xabarlar</h5>
      <ul>
        {/* {
          mas.map((item,index)=>{
            return(
              <li key={index}  onClick={()=>run(index , item.id)}>
                <div className="user waves-effect waves-green">
                  <img src={User} className='userImg' alt="Contact Person" />
                  <span className='userName'>{item.full_name}</span>
                  <span className='userTime'>{item.createdAt}</span>
                </div>
              </li>
            )
          })
        } */}
      </ul>
    </div>
  )
}
