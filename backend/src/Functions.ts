function parser(elements: any) {
  const json = JSON.stringify(elements, (key, value) => {
    return typeof value === "bigint" ? value.toString() : value;
    
  });
  return  json;
}
module.exports.parser = parser ;