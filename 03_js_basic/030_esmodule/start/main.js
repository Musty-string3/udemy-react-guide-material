import functionB, { hello, User } from "./module.js";

hello();
const user = new User('Tom');
user.hello();

functionB();