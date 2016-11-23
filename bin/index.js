#!/usr/bin/env node

'use strict';

const Command = require('..');

let result = '';
try {
  const param = process.argv.slice(2);
  result = Command(param[0] || process.cwd(), param[1]);
  result = JSON.stringify(result, null, 2);
} catch (err)  {
  console.error(err.stack);
  process.exit(1);
};
console.log(result);
