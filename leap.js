// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
const yargs = require('yargs');

// argv: This is the modified process.argv which we have configured with yargs
const argv = yargs
  // command(): This method is used to add commands, their description and options which are specific to these commands only,
  // like in the above code lyr is the command and -y is lyr specific option: node myapp.js lyr -y 2016
  .command('lyr', 'Tells you whether a year is a leap year or not', {
    year: {
      // alias(): This method provides an alias name to an option,
      alias: 'y',
      description: 'the year to check for',
      type: 'number',
    },
  })
  // Individual options(flags) become properties of argv, such as with argv.h and argv.time.
  // Note that non-single-letter flags must be passed in as --flag like: node myapp.js --time.
  // ----------------------------------------------------------------
  // option(): This method is used to add global options(flags)
  // which can be accessed by all commands or without any command.
  .option('time', {
    alias: 't',
    description: 'Tell the present time',
    type: 'boolean',
  })
  // help(): This method is used to display a help dialogue when --help option is encountered
  // which contains description of all the commands and options available.
  .help()
  // alias(): This method provides an alias name to an option,
  // like in the above code both --help and -h triggers the help dialogue.
  .alias('help', 'h').argv;

if (argv.time) {
  console.log('The current time is: ', new Date().toLocaleTimeString());
}

// argv._ is an array containing each element not attached to an option(or flag)
// these elements are referred as commands in yargs
if (argv._.includes('lyr')) {
  // either gets user input -year from year or --y, or current year
  const year = argv.year || new Date().getFullYear();
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is NOT a leap year`);
  }
}

// argv.$0 contains the name of the script file which is executed like: '$0': 'leap.js'
console.log(argv);
