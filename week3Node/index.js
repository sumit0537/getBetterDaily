const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('countWords')
  .description('COunts total number of words in file')
  .argument('<file>', 'file in which words to be counted')
  .action((file) => {
       fs.readFile(file,'utf-8',function(err,data){
          const words = data.split(' ').length;
          console.log(`file has ${words} in file ${file}`)
       })
  });

program.parse();
