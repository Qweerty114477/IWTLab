const fs=require('fs');

fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)
}) 
/*
fs.readFile('File1.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error: ",err.message);
        return;

    }
    console.log("File content : ",data);
})
    */
   console.log