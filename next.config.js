module.exports = {
  exportPathMap: async function (defaultPathMap) {
    return {
      "/": { page: "/" },
      "/discussion": { page: "/discussion" }
    };
  }
};
