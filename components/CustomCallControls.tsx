import { CallControls, useCall, useCallStateHooks } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const MeetingRoom = () => {
    const call = useCall();
    const router = useRouter();
    const { useCallState } = useCallStateHooks();
    const { callingState } = useCallState();

    useEffect(() => {
        const handleEndCall = async () => {
            if (callingState !== 'joined' && call) {
                try {
                    await call!.endCall(); // End the call
                    router.push('/'); // Redirect to home
                } catch (error) {
                    console.error('Error ending the call:', error);
                }
            }
        };

        handleEndCall();
    }, [callingState, call, router]);

    return (
        <section>
            <div>State: {!callingState}</div>
            <CallControls />
            {/* Other components */}
        </section>
    );
};

export default MeetingRoom;
