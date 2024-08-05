"use server";
// the code is only run in the server
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey=process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret=process.env.STREAM_SECRET_KEY;

export const tokenProvider= async ()=>
{
    const user=await currentUser();

    if(!user) throw new Error('User is not logged in ');
    if(!apiKey) throw new Error('No API key')
    if(!apiSecret) throw new Error('No API Secret')

        const client= new StreamClient(apiKey,apiSecret)

        const exp =Math.round(new Date().getTime() /1000)+ 60 * 60;
        //a token will be valid for 1 hour according to this math fct

        const issued= Math.floor(Date.now() / 1000) - 60
        //when the token was issued

        const token=client.createToken(user.id,exp,issued)

        return token
}

// The tokenProvider function is designed to:

// Ensure the user is authenticated.
// Validate the presence of necessary API credentials.
// Create a token with a set expiration time and issuance time.
// Return the token for further use in secure interactions with the Stream service.