import { liveblocks } from "@/lib/liveblocks";
import { getUserColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export async function POST(request: Request) {
  // Get the current user from your database
  const clerkUser=await currentUser()

  if(!clerkUser)redirect('/sign-in')
  const {id ,firsName,lastName,emailAddress,imageUrl} = clerkUser;

    const user ={
        id,
        info:{
            id:,
            name:`${firsName} ${lastName}`,
            email:emailAddress[0].emailAddress,
            avatar:imageUrl,
            color:getUserColor(id)
        }
    }

  const user = __getUserFromDB__(request);

  // Identify the user and return the result
  const { status, body } = await liveblocks.identifyUser(
    {
      userId: user.id,
      groupIds, // Optional
    },
    { userInfo: user.metadata },
  );

  return new Response(body, { status });
}