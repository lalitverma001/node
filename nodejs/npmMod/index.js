const chalk=require("chalk");
const validator=require("validator");

console.log(chalk.green.underline.inverse("lalit verma"));
const res = validator.isEmail("lalitv18881@gmail.com");

console.log(res? chalk.green.inverse(res):chalk.red.inverse(res));

