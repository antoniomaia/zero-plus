/**
 * Convert CSV into JSON
 *
 * @param {Object} csv
 */
export const csvJSON = csv => {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  lines.map(function(line, indexLine) {
    if (indexLine < 1) return; // Jump header line

    const obj = {};
    const currentline = line.split(",");

    headers.map(function(header, indexHeader) {
      obj[header] = currentline[indexHeader];
    });

    result.push(obj);
  });

  return result;
};
