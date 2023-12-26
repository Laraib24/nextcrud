import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Parse the JSON body from the request
      const data = req.body;

      console.log(data);

      const result = await prisma.task?.create({
        data: {
          title: data.title,
          content: data.content,
          // author: { create: { name: "ryan" } },
        },
      });
      // Return the result
      res.status(200).json({ result });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
