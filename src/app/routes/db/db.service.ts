// import notion from "@/lib/notion";

import notion from "../../../lib/notion";

export async function getDatabase(databaseId: string) {
  // const databaseId = "d68efbb3-382e-4ea9-a064-58e0bb90126e";
  const response = await notion.databases.retrieve({
    database_id: databaseId,
  });
  return response;
}

export async function queryDatabase(databaseId: string) {
  //   const databaseId = "d68efbb3-382e-4ea9-a064-58e0bb90126e";
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: "Title",
      title: {
        contains: "Example Row",
      },
    },
  });
  return response;
}
