const spinnerArray = ['|   ', '/   ', '-   ', '\\   '];
const spinner = (array) => {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinnerArray[i]}`);
    }, i * 200);
  };
};
spinner(spinnerArray);