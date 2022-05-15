const getPaginationData = (data, page, limit) => {
  const counts = data.length;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(data.length / limit);
  return { counts, data, totalPages, currentPage };
};
const getPagination = (page, size) => {
  const limit = size ? +size : 20;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

module.exports = {
  getPaginationData,
  getPagination,
};
