import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const EndCallButton = () => {


    const call = useCall();//we get the info about the call with this hook
    const router = useRouter();
    const { useLocalParticipant } = useCallStateHooks(); //typically includes hooks for interacting with call state, managing participants, and other call-related functionalities.

    const LocalParticipant = useLocalParticipant();//used to access information about the local participant in the video call

    const isMeetingOwner = LocalParticipant &&
        call?.state.createdBy && LocalParticipant.userId === call.state.createdBy.id;

    if (!isMeetingOwner) return null;

    return (
        <Button onClick={async () => {
            await call.endCall();
            router.push('/')
        }} className="bg-red-500">
            End Call for everyone
        </Button>
    )



}

export default EndCallButton