import React from 'react'
import { PDFDocument } from 'pdf-lib';
import pdfjsLib  from 'pdfjs-dist';
// import{PDFJS } from 'pdfjs-dist';
import pdfwprker from 'pdfjs-dist/build/pdf.worker.js'
// import { isArrayBuffer } from 'pdfjs-dist/types/src/shared/util';
export default function Read() {
  return (
    <div>
        <h2>测试pdf的读取</h2>
    <div>Read,控制台会输出文件的内容</div>
    {/* <input type='file'
    // accept='.pdf'
onChange={FileChange}>
    </input> */}
    <p></p>
    <input type='file'
    // accept='.pdf'
onChange={changefile}>
   </input>
    </div>
  )
  function changefile(e){
    const PDFJS=require('pdfjs-dist')
    PDFJS.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.js";
    console.log('chenggong',PDFJS)
    const FileList=e.target.files;
    let readertest2=new FileReader()
    const PdfArrayBuffer= readFileAsync(FileList[0]).then((PdfArrayBuffer)=>{
        console.log("late",PdfArrayBuffer);
        console.log("isarrybuffer",typeof(PdfArrayBuffer))
        // PDFJS.getDocument(PdfArrayBuffer).then((pdfDoc)=>{ console.log("getpdf",pdfDoc)} )
        const loadtest=PDFJS.getDocument(PdfArrayBuffer);
        loadtest.promise.then(
            (result)=>{console.log("getdocument",
            result.getPage(1).then(
                (page)=>{page.getTextContent().then(
                    (text)=>{
                        var textItems = text.items;
                        var finalString = '';

                        // Concatenate the string of the item to the final string
                        for (var i = 0; i < textItems.length; i++) {
                        var item = textItems[i];

                        finalString += item.str + ' ';
                        }
                         console.log("content",finalString)})}))})
       
    });
    const arraybuffer=readertest2.readAsArrayBuffer(FileList[0]);
    console.log("array",arraybuffer);
    console.log("arrbuffer2",PdfArrayBuffer)
    // PDFJS.getDocument(arraybuffer).then(function(pdfDoc ){
    //     console.log(`pdfDoc is ${pdfDoc.numPages} pages`)
    // })
  }
 async function FileChange(e){
    // pdfjsLib.GlobalWorkerOptions.workerSrc = pdfwprker
console.log('改变',e)
const FileList=e.target.files;
console.log('filelist',FileList)
if(FileList.length>0){
    const PdfArrayBuffer=await readFileAsync(FileList[0]);
    console.log("here arraybuffer",PdfArrayBuffer)
    const urlfile=window.URL.createObjectURL(FileList[0]);
    console.log("url",urlfile)
    const pdfDoc=await PDFDocument.load(PdfArrayBuffer);
    const loadingTask = pdfjsLib.getDocument(PdfArrayBuffer).then((e)=>{
        console.log(e)
    })
      const pdfDocument = await loadingTask.promise
       console.log(pdfDocument, 'pdf')
    // PDFJS.getDocument(urlfile).then((res)=>{console.log("1111",res)})
    console.log("test",pdfjsLib)
    console.log("test2",PDFDocument)
//     var loadingTask = pdfjsLib.getDocument(urlfile);
// loadingTask.promise.then(function(pdf) {
//   // you can now use *pdf* here
//   console.log("pdf",pdf)
// });
//    const pdflib=await pdfjsLib.getDocument(FileList[0]);
//    console.log("pdflib",pdflib)
    console.log("pdfdoc",pdfDoc);
    // await console.log('subject',pdfDoc.context);
    // console.log('title',pdfDoc.getTitle());
    const pages=pdfDoc.getPages('1');
    console.log("pages",pages);
    const content=pages.getTextContent();
    console.log("content",content)
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
