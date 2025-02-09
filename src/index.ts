import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const secret = "#chave";

const token = sign({
  exp: Date.now() + 24 * 60 * 60 * 1000,
  data: {
    sub: "@diogojrc",
  },
  secret,
});

const decoded = verify({
  token,
  secret,
});

console.log({ decoded });
