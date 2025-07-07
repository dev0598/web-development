import { worksData } from "@/lib/data/works";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const work = worksData.find((item) => item.id === id);

  if (!work) {
    return NextResponse.json({ error: "Work not found" }, { status: 404 });
  }

  return NextResponse.json(work, { status: 200 });
}


// import {worksData} from "@/lib/data/works";

// export async function GET(
//     request: Request,
//     {params}: { params: Promise<{ id: string }> }
// ) {
//     const {id} = await params;
//     const data = worksData;

//     if (!data) {
//         return new Response(JSON.stringify({error: "Data not found"}), {
//             status: 404,
//             headers: {"Content-Type": "application/json"},
//         });
//     }

//     const work = data.find((item) => item.id === id);

//     if (!work) {
//         return new Response(JSON.stringify({error: "Work not found"}), {
//             status: 404,
//             headers: {"Content-Type": "application/json"},
//         });
//     }

//     return new Response(JSON.stringify(work), {
//         status: 200,
//         headers: {"Content-Type": "application/json"},
//     });


// }