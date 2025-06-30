import {worksData} from "@/lib/data/works";

export async function GET(
    request: Request,
    {params}: { params: Promise<{ id: string }> }
) {
    const {id} = await params;
    const data = worksData;

    if (!data) {
        return new Response(JSON.stringify({error: "Data not found"}), {
            status: 404,
            headers: {"Content-Type": "application/json"},
        });
    }

    const work = data.find((item) => item.id === id);

    if (!work) {
        return new Response(JSON.stringify({error: "Work not found"}), {
            status: 404,
            headers: {"Content-Type": "application/json"},
        });
    }

    return new Response(JSON.stringify(work), {
        status: 200,
        headers: {"Content-Type": "application/json"},
    });


}