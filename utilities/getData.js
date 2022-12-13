const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = res.json();
  return data;
};

export default getData;
