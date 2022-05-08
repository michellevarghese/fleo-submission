


const grid = (repos) => {
  const itemsPerPage = 12;
  const pages = Math.ceil(repos.length / itemsPerPage);

  const newrepos = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return repos.slice(start, start + itemsPerPage);
  });
  return newrepos;
};

export default grid;
