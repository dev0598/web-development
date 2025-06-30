import {worksData} from "@/lib/data/works";

export async function GET() {
    const data = worksData;

    if (!data) {
        return new Response(JSON.stringify({error: "Data not found"}), {
            status: 404,
            headers: {"Content-Type": "application/json"},
        });
    }

    const res = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            image: item.image,
        };
    })

    return new Response(JSON.stringify(res), {
        status: 200,
        headers: {"Content-Type": "application/json"},
    });
}