// Get environment variables
require("dotenv").config({ path: "../settings.env" });

// Get packages
const jwt = require("jsonwebtoken");

export const getUserId = context => {
  const Authorization = context.request.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    return userId;
  }
  throw new Error("Not authenticated");
};
