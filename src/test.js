// Importing File System and Utilities module 
const fs = require('fs') 
const util = require('util') 

// Convert callback based methods to promise 
// based methods 
const readDir = util.promisify(fs.readdir) 
const rename = util.promisify(fs.rename) 

const renameOperation = async (oldpath, newpath) => { 
console.log(`Contents before rename operation: `) 
	
// Fetching contents of the directory before 
// rename operation. The process.cwd() gives 
// current working directory 
const oldFiles = await 
	fs.promises.readdir(process.cwd()) 

// Contents of the current working directory 
for(let file of oldFiles){ 
	console.log(file) 
} 

console.log('\nAttempt to rename file : \n') 

// Rename operation 
await fs.promises.rename(oldpath, newpath) 
console.log(`Contents after rename operation: `) 
	
// Fetching contents of directory before 
// rename operation 
const newFiles = await 
	fs.promises.readdir(process.cwd()) 
	
// Contents of the current working directory 
for(let file of newFiles) { 
	console.log(file) 
} 
} 

renameOperation('test.txt', 'testFile.txt') 
.catch(err => { 
console.log(`Error occurs, Error code -> ${err.code}, 
Error No -> ${err.errno}`); 
}); 

// Extra function call without definition 
undefinedFunctionCall();
