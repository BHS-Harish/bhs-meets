import React, { useEffect } from "react";
import { getRandomName } from '../util';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router';
function Room() {
    const { id } = useParams()
    const myMeeting = async (element) => {
        const appID = "*****************";
        const serverSecret = "*****************************";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id,
            Date.now().toString(),
            getRandomName()
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
        });
    }
    useEffect(() => {
        setInterval(() => {
            console.clear()
        }, 500)
    }, [])
    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <div ref={myMeeting} id="meet" className="w-100 h-100">
            </div>
        </div>
    )
}
export default Room;