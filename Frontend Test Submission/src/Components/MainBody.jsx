import React, { useEffect, useState } from 'react'
import "./mainBody.css"

const MainBody = () => {
 
    const [url,setUrl] = useState("")
    const [load,setLoad] = useState(true)

    const handleFetch = async() =>{
        try{
            if(url == ""){
                return;
            }

            const data = await fetch("http://localhost:8080/short",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    originalurl:url
                })
            })
            
            if(data) setLoad(!load)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{

        const data = fetch('http://localhost:8080/')
        console.log(data)

    },[load])
  return (
    <div className='mainBody'>
        {/* <div className='boxmain'>   
            <h1>Url Shortener</h1>
            <input type="text" className='mainInpur' name="" id=" " />
            <Button className="mainbtn">Convert</Button>
        </div> */}
        <div className="boxmain">
            <h1 className="">Url Shortener</h1>
            <input type="text" placeholder='Enter your url here' onChange={(e)=>setUrl(e.target.value)} />
            <button onClick={handleFetch}>
                Convert
            </button>
        </div>
    </div>
  )
}

export default MainBody