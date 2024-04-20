import notion from "../../../lib/notion";

export async function getPage(pageId: string) {
  // const databaseId = "d68efbb3-382e-4ea9-a064-58e0bb90126e";
  const response = await notion.pages.retrieve({
    page_id: pageId,
  });
  return response;
}

export async function searchPage(pageTitle: string) {
  const response = await notion.search({
    query: pageTitle,
    filter: {
      value: "database",
      property: "object",
    },
    sort: {
      direction: "ascending",
      timestamp: "last_edited_time",
    },
  });
  console.log(response);
  return response;
}

export async function createDatabasePage(databaseId: string, params: any) {
  const response = await notion.pages.create({
    cover: {
      type: "external",
      external: {
        url: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg",
      },
    },
    icon: {
      type: "external",
      external: {
        url: "https://www.notion.so/icons/book-closed_gray.svg",
      },
    },
    parent: {
      type: "database_id",
      database_id: databaseId,
    },
    properties: {
      Title: {
        title: [
          {
            text: {
              content: "Example Row",
            },
          },
        ],
      },
      Developer: {
        rich_text: [
          {
            text: {
              content: "Rockstar games",
              link: { url: "www.google.com" },
            },
          },
        ],
      },
      Summary: {
        rich_text: [
          {
            text: {
              content: "A summary description that is written here",
            },
          },
        ],
      },
      Rating: {
        select: {
          name: "⭐️⭐️⭐️⭐️",
        },
      },
      Link: {
        url: "www.youtube.com",
      },
      Status: {
        status: {
          name: "Completed",
        },
      },
      "Date started": {
        date: {
          start: "2024-04-20",
        },
      },
      "Hours Played": {
        number: 7,
      },
    },
  });
  return response;
}

export async function updatePage(pageId: string, hours: number) {
  const response = await notion.pages.update({
    page_id: pageId,
    properties: {
      "Hours Played": {
        number: hours,
      },
    },
  });
  console.log(response);
  return response;
}
