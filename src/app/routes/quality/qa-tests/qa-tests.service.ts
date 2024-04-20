import { wait } from "../../../../utils/utils";
import { QATest } from "./qa-tests.model";

export async function getTests() {
  await wait(500);
  const test: QATest = {
    id: 99,
    name: "My Test",
    values: [3, 5, 7, 9, 31, 19],
  };
  return [test];
}

export async function updateTest(id: number, name: string): Promise<QATest> {
  await wait(1250);
  return {
    id: id,
    name: name,
    values: [3, 9, 7, 1],
  };
}
