import { sign } from "./jwt/sign";

const token = sign({
  exp: Date.now() + 24 * 60 * 60 * 1000,
  data: {
    sub: "@diogojrc",
  },
  secret: "",
});

console.log(token);
