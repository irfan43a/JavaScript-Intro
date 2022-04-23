const devideAndSort = (value) => {
  const result = value
    .toString()
    .split("0")
    .map((x) =>
      x
        .split("")
        .sort((a, b) => a - b)
        .join("")
    );
  const final = result.join("");
  console.log(final);
};

devideAndSort("5956560159466056");
