import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const EndCallButton = () => {
    const call = useCall(); // Get information about the call
    const router = useRouter();
    const { useLocalParticipant } = useCallStateHooks(); // Get hooks for interacting with call state
    const LocalParticipant = useLocalParticipant(); // Access information about the local participant

    // Check if the current participant is the meeting owner
    const isMeetingOwner = LocalParticipant &&
        call?.state.createdBy &&
        LocalParticipant.userId === call.state.createdBy.id;

    if (!isMeetingOwner) return null;

    // Function to end the call and handle redirection
    const handleEndCall = async () => {
        try {
            // End the call
            await call.endCall();

            // Redirect to the home page
            router.push('/');
        } catch (error) {
            console.error('Error ending call:', error);
        }
    };

    return (
        <Button onClick={handleEndCall} className="bg-red-500">
            End Call for everyone
        </Button>
    );
};

export default EndCallButton;
