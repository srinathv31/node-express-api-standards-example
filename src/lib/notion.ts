import "../../config.js";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SCERET,
});

export default notion;
