export default {
  read: async (url) => {
    const res = await fetch(url);
    return res.json();
  },
  create: () => {},
  update: () => {},
  delete: () => {},
};
