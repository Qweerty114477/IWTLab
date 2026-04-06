const fs=require('fs');

fs.readFile('file.txt','utf8',(err,data)=>{
   console.log(err,data)
}) 

fs.readFile('File1.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error: ",err.message);
        return;

    }
    console.log("File content : ",data);
})
    
   const a=fs.readFileSync('file.txt');
   const a4=fs.readFileSync('file.txt','utf8');
   console.log(a4);
  console.log(a);
   console.log(a.toString());

   fs.writeFile('file2.txt',"This is the date ,I have written in file2 through file module of nodejs",()=>{
    console.log("Written to the file");
   })
   let b=fs.writeFileSync('file2.txt',"This is the date ,I have written in file2 through file module of nodejs using synchronously");
   console.log(b);
   console.log("Finished reading file");