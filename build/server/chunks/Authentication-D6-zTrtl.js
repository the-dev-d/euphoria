import crypto from 'crypto';

const SECRET_KEY = "your-very-secure-secret-key";
function createAuthToken(id, email) {
  return crypto.createHmac("sha256", SECRET_KEY).update(id + "-" + email).digest("hex");
}

export { createAuthToken as c };
//# sourceMappingURL=Authentication-D6-zTrtl.js.map
