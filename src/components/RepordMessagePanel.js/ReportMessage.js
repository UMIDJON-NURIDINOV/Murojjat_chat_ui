import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../Contex/Contex'
import './reportMessage.css'

export default function ReportMessage() {

  const [mas, setmas] = useState([]);
  const [val, setVal] = useState('');
  const { data } = useContext(DataContext);

  useEffect(() => {
    const url = `http://93.114.128.200:7070/appeals-by-user-id/${data[0]}`
    fetch(url)
      .then(response => response.json()).then(data => {
        setmas(data.items)
      }).catch(e => {
        console.log("e", e);
      },)
  }, [data]);

  function sendSms(){
    console.log("Send BTN Ishlamoqda");
    const posturl = `http://93.114.128.200:7070/answer-for-appeal/${data[0]}`
    fetch(posturl ,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        answer: val
      })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e) )
  }


  return (
    <div className='reportMessage'>
      <h5 className='text-center'>{(data.length > 0) && data[1].full_name}</h5>
      <p className='text-bold'>{(data.length > 0) && data[1].phone_number}</p>
      <div className='message-past'>
      {
          (mas) && mas.map((item, index) => {
            return (
              <div key={index} >
                <div className='userSmsBox '>
                  <p>{item.text}</p>
                </div>
                <div className='operatorSmsBox row float-end'>
                  {
                    (item.answer !== null) ? <p>{item.answer}</p> : ''
                  }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="d-flex">
        <div className='form-input input-field'>
          <input type='text' onInput={(val)=>setVal(val.target.value)} id="textarea1" class="materialize-textarea"></input>
          <label for="textarea1">Textarea</label>
        </div>
        <div className="senderBtn">
          <button className="btn waves-effect waves-light" type="submit" onClick={sendSms} name="action">Submit</button>
        </div>
      </div>
    </div>
  )
}
