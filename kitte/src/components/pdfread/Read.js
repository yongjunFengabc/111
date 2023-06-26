import React from 'react'
import { PDFDocument } from 'pdf-lib';
export default function Read() {
  return (
    <div>
        <h2>测试pdf的读取</h2>
    <div>Read</div>
    <input type='file'
    // accept='.pdf'
onChange={FileChange}>
    </input>
    </div>
  )
 async function FileChange(e){
console.log('改变',e)
const FileList=e.target.files;
console.log('filelist',FileList)
if(FileList.length>0){
    // const PdfArrayBuffer=await readFileAsync(FileList[0]);
    // const pdfDoc=await PDFDocument.load(PdfArrayBuffer);
   
    // console.log("pdfdoc",pdfDoc);
    // await console.log('subject',pdfDoc.context);
    // console.log('title',pdfDoc.getTitle());
    let readertest=new FileReader()
    readertest.readAsText(FileList[0],"UTF-8");
    readertest.onload=()=>{
        var urlData = readertest.result;
        console.log(urlData)
}

  }}
  function readFileAsync(pdffile){
    return new Promise((resolve,reject)=>{
        let reader=new FileReader();
        reader.onload=()=>{
            resolve(reader.result)
        };
        reader.onerror=reject;
        reader.readAsArrayBuffer(pdffile)
    })
  }
  function page(start,end){
const length=end-start+1;
return Array.from({length},(item,index)=>start+index-1)
  }
}
