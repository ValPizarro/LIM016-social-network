const search = () => {
  const showSearch = `
  <div>
    <h2>Búsqueda</h2>
  </div>
`;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = showSearch;

  return divElemt;
};

export default search;
