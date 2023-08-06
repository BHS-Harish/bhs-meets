import React, { useState } from "react";
import {useNavigate} from 'react-router';
import logo from '../assets/logo.png';
import {randomId} from '../util';
function Home() {
    const [roomID,setRoomID]=useState("")
    const navigate=useNavigate()
    async function handleClipboard(){
        try{
            await navigator.clipboard.writeText(`${window.location.protocol}//${window.location.host}/room/${roomID}`)
            alert("Link copied")
        }
        catch(error){
            console.log(error)
        }
    }
    async function handleShare(){
        try {
            await navigator.share({title:"Meeting Invitation - BHS MEETS",text:"Join the meeting on BHS Meets by clicking below link : ",url:`${window.location.protocol}//${window.location.host}/room/${roomID}`})
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: "100vw", height: "100vh",overflowX:"hidden" }}>
            <div className="d-flex flex-column justify-content-center align-items-center px-2 pt-5 pb-4 rounded border bg-primary" style={{ width: "300px", height: "auto" }}>
                <img src={logo} alt="bhs-meets-logo" style={{width:"150px",height:"auto"}}/>
                <h5 className="text-white my-3">Join meeting</h5>
                <form onSubmit={(e)=>{
                    e.preventDefault()
                    navigate(`/room/${roomID}`)
                }}>
                    <input type="text" placeholder="Meeting code" className="form-control" onChange={(e)=>{
                        setRoomID(e.target.value)
                    }} value={roomID} required/>
                    <button type="submit" className="w-100 py-1 btn btn-light my-3 fw-bold txt-primary">Join</button>
                </form>
                <hr className="w-75 border-light border-2"/>
                <button className="btn btn-light txt-primary w-75" onClick={()=>{
                    setRoomID(randomId(6))
                }}>Generate new room</button>
            </div>
            <div className="py-2 bg-primary rounded mt-3 d-flex flex-column justify-content-center align-items-center py-3" style={{width:"300px"}}>
                <h6 className="text-center text-light my-2">Invite your colleague</h6>
                <div className="bg-light p-2 rounded text-center mt-2" style={{width:"90%",fontSize:"13px"}}>
                    {`${window.location.protocol}//${window.location.host}/room/${roomID}`}
                </div>
                <button className="btn btn-light txt-primary w-75 mt-3" onClick={handleClipboard}>Copy to clipboard</button>
                <button className="btn btn-light txt-primary w-75 mt-3 mb-2" onClick={handleShare}>Share</button>
            </div>
        </div>
    )
}
export default Home;