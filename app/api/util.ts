// getConfig - returns auth config for OSS upload authorization
export async function getConfig() {
  // Self-built version: always return valid config to enable file upload features
  return {
    version: "community",
    expireDay: "2099-12-31T23:59:59.000Z",
  };
}
