import { Field, isReady, shutdown } from "snarkyjs";

export { myFunc };

async function myFunc() {
  await setup();
}

async function setup() {
  await isReady;
  console.log(Field(3).toString());
}

shutdown();
