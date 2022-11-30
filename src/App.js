import './App.css';
import React from 'react';
import {useState} from 'react';
function App(){
  
  const start = () => {
    
    run();
    setInterv(setInterval(run, 10));
    
    
  };
  var ij =1;
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [saved, setSaved] = useState([]);
  const [ijk, setIjk] = useState(ij);
  var upms = time.ms, ups = time.s, upm = time.m, uph = time.h;
  
  const lap = () => {
    var laph = document.getElementById('time1').innerHTML;
    var lapm = document.getElementById('time2').innerHTML;
    var laps = document.getElementById('time3').innerHTML;
    var lapms = document.getElementById('time4').innerHTML;
    var laptime = laph+":"+lapm+":"+laps+":"+lapms;
    
    setIjk(ijk+1);
    
    document.getElementById("laps").innerHTML =  ijk +'.&nbsp;&nbsp;'+ laptime + '<br /><br />' + document.getElementById("laps").innerHTML; 
    
    setSaved([...saved, laptime]);
    console.log(saved);
  }
  const run = () => {
    setStatus(1);
    if(upm === 60){
      uph++;
      upm = 0;
    }
    if(ups === 60){
      upm++;
      ups = 0;
    }
    if(upms === 99){
      ups++;
      upms = 0;
    }
    upms++;
    return setTime({ms:upms, s:ups, m:upm, h:uph});

  }
  const pause = () =>{
   clearInterval(interv);
   setStatus(0);
  

  }
  const resume = () =>{
    start();
    setStatus(1);

  }
  const reset = () =>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
    document.getElementById("laps").innerHTML = '<hr>' + document.getElementById("laps").innerHTML; 
    setIjk(1);
    
  }
  
  return (
    <div>
    <div id='rootin'>
   <div className='watch' id='watch'><span className='time' id='time1'>{(time.h >= 10) ? time.h : "0" + time.h}</span>:<span className='time' id='time2'>{(time.m >= 10)? time.m : "0" + time.m}</span>:<span className='time' id='time3'>{(time.s >= 10)? time.s : "0" + time.s}</span>:<span className='time' id='time4'>{(time.ms >= 10)? time.ms : "0" + time.ms}</span></div>
   <br />
   <div className='btns'>
   {(status === 0)? 
    <button className='btn' onClick={start}>Start</button> :<span id='dis'></span>
   }
   
       {(status === 1)?
    <button className='btn'onClick={pause}>Pause</button>
    :
    <button className='btn'onClick={resume}>Resume</button>
}
{(status === 1)?
    <button className='btn' onClick={lap}>Lap</button> : <span id='dis'></span>}
    <button className='btn' onClick={reset}>Reset</button>
   </div>
   <br />
   
   </div>
   <br />
   LAPS
   <div  id='laps'>
    
   
  
  </div>
  </div>


  );

}


export default App;
