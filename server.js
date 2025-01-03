const { createStrapi } = require("@strapi/strapi");

let strapiInstance;

module.exports = async (req, res) => {
  if (!strapiInstance) {
    strapiInstance = await createStrapi();
    await strapiInstance.load();
  }

  strapiInstance.server.handleRequest(req, res);
};