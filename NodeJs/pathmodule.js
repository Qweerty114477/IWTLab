const path1=require('path');

const a1=path1.basename('c:\\temp\\myfile.html');
const a2 =path1.dirname('c:\\temp\\myfile.html');
console.log(a1);
console.log(a2);
console.log(__filename);
const a3=path1.extname(__filename);
console.log(a3);