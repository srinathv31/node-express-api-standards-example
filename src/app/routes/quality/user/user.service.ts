import { wait } from "../../../utils/utils";
import { User } from "./user.model";

export async function getUser() {
  await wait(300);
  const user: User = {
    id: 17,
    name: "Happy",
    emoji: "🐶",
  };
  return [user];
}

export async function updateUser(id: number, name: string): Promise<User> {
  await wait(750);
  return {
    id: id,
    name: name,
    emoji: "🚀",
  };
}
