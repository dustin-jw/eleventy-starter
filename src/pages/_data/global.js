module.exports = {
  // generate a random string for service worker versioning, such as "36f4-1234-8c7a"
  random() {
    // eslint-disable-next-line no-bitwise
    const segment = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

    return `${segment()}-${segment()}-${segment()}`;
  },
};
