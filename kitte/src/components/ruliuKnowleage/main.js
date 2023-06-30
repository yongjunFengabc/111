import React from 'react';
// import * as cheerio from 'cheerio';
import * as cheerio from 'cheerio';

// const $ = await cheerio.fromURL('https://example.com');

function readruliu() {
  
    return ( 
        <div>
            <p>测试输入框</p>
            <input onChange={InputChange}></input>
            <p>测试url获取html</p>
            <button onClick={geturl}>点击获取</button>
        </div>
     );

     function InputChange(e) {
        const {value} = e.target;
        console.log(e,value);
        if(value.length>0){
            const PDFJS=require('pdfjs-dist')
            PDFJS.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.js";
            const loadtest=PDFJS.getDocument(value);
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
           
        }
      
    }
    function geturl(){
        // const $ = cheerio.fromURL('https://example.com');
        // console.log($)
        // const request = require('request');
        // const cheerio = require('cheerio');
        // console.log($);
        // // 定义爬取的URL
        // const url = 'http://www.baidu.com/';
        // const $ = cheerio.fromURL('http://www.baidu.com').promise.then(($)=>{console.log($)});
        // console.log($)

        const cheerio = require('cheerio');
        const xhr = require('XMLHttpRequest');

        // 定义爬取的URL
        const url = 'http://www.baidu.com/';

        // 发送HTTP请求并获取响应
        xhr.open('GET', url, true);
        xhr.send();

        xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // 使用cheerio加载HTML文档
            const $ = cheerio.load(xhr.responseText);
             console.log($)
            // 获取需要爬取的元素
            const links = $('a');
        console.log($)
            // 输出爬取的元素
            links.each(function () {
            console.log($(this).attr('href'));
            });
        }
        };
        
    
    }
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

}

export default readruliu;