import React, { useState ,useEffect} from 'react';
// url='https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/WTP3bCqlR-/qzUGU-Ukrip3V-' 
// import test from './ruliu'
import tabletoparam from './testtable'
import './ruliu.css'
// import { set } from 'immer/dist/internal';

// let params = {
//   titleQuestion,
//   econtentAnswer: emi.md,
//   hcontentAnswer: help.md,
//   sort: help.isChecked ? help.sort : undefined,
//   emiBox: emi.isChecked ? 1 : 0, // 选择为1 不选择为0
//   helpBox: help.isChecked ? 1 : 0, // 选择为1 不选为0
//   emiProduceLine: emi.emiProduceLine, // emi产品线ID
//   emiKlg: emi.emiKlg, // emi知识库ID
//   emiProblemSort: emi.emiProblemSort, // emi问题分类
//   catalogId: libIds[libIds.length - 1], // 目录节点ID
//   emiLink: emi.emiAttrLink,
//   state: 2,
//   onOff: channel === 1 ? 'on' : 'off',
//   emiMob: emi.emiIsMobileChecked ? 1 : 0,
//   mobileContent: emi.mobileMd,
//   emiExpanProblem: emi.emiExpanProblem,
//   type: emi.isChecked ? emi.updateType : ''
// };

function Spider() {
  
  const [data,setData]=useState([]);
  
  const forceconfig={
          catalogId: 679,
          emiBox: 1,
          emiLink: "",
          emiMob: 1,
          emiProduceLine: undefined,
          hcontentAnswer: "",
          helpBox: 0,
          onOff: "off",
          sort: undefined,
          state: 2
    }
    const mapProblemindex={
   
    }
    const MapEmiKLGindex={
      
    }
  useEffect(() => {
    // console.log(count);
    console.log('useeffect',data)
    // console.log(data)
  }, [data]);

  const handleClick = async () => {
    // console.log(test)
    try {
      const response = await fetch('http://www.baidu.com');
      const data = await response.text();
      // setResult(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
    // const cheerio = require('cheerio');
    // const xhr = new XMLHttpRequest();

    // // 定义爬取的URL
    // const url = 'www.baidu.com/';

    // // 发送HTTP请求并获取响应
    // xhr.open('GET', url, true);
    // xhr.send();

    // xhr.onreadystatechange = function() {
    // if (xhr.readyState === 4 && xhr.status === 200) {
    //     // 使用cheerio加载HTML文档
    //     const $ = cheerio.load(xhr.responseText);
    //      console.log($)
    //     // 获取需要爬取的元素
    //     const links = $('a');
    // console.log($)
    //     // 输出爬取的元素
    //     links.each(function () {
    //     console.log($(this).attr('href'));
    //     });
    // }
    // };
    
  };
    function gettable(){
      const cheerio =require('cheerio')
      const $=cheerio.load(tabletoparam)
      const tr=$('tr');
      const length=tr.length
      const paramstitle=["titleQuestion","emiExpanProblem","econtentAnswer","type","emiProblemSort","emiKlg"]
      for(let i=0;i<length;i++){
        let eachtr=tr[i].children;
        // console.log("每个tr",eachtr.children)
        // let length=eachtr.length;
        let objparam={}
   
        for(let j=0;j<6;j++){
          let objecttitle=paramstitle[j];
          if(j===4)//for problemsort
          {
             objparam[objecttitle]=MaptheEmiProblemSort($(eachtr[j]).text())
          }
          else if(j===2){//for answercontent html
            objparam[objecttitle]=$(eachtr[j]).html()
            objparam['mobileContent']=$(eachtr[j]).html();
          }
          else if(j===5)//for emiklg
          {
            const textklg=$(eachtr[j]).text().split('，').map((item)=>MaptheEmiKLG(item));
            // console.log('klgToArray',textklg)
            // objparam[objecttitle]=MaptheEmiKLG($(eachtr[j]).text())
            objparam[objecttitle]=textklg
          }
          else
          {
            objparam[objecttitle]=$(eachtr[j]).text()
          }
         
         
        }
        objparam={...objparam,...forceconfig}
        // setParams({...params,...objparam})
      //  console.log(params)
       setData(data=>[...data,objparam])
      }
      // console.log(tr);
    }

  function MaptheEmiProblemSort(answer){
  if(mapProblemindex[answer]){
    return mapProblemindex[answer]

  }else{
    return 62//默认其他
  }}

  function MaptheEmiKLG(answer){
   if(MapEmiKLGindex[answer]){
    return MapEmiKLGindex[answer]
   }else{
    return 45//待确认，新增知识库，在选择知识库列表的时候，没有兜底选项，如果出现无法识别的类别，可能会报错
   }
  }
const SIZE=2*1024*1024;
  function uploadFile(file){
let FileList=[];
let cur=0;
while (cur<file.size){
  FileList.push(file.slice(cur,cur+SIZE));
  cur+=SIZE;
}
uploadOneByOne(FileList,file.name);
  }

  async function endall(){
    
  }
  async function uploadOneByOne(FileList,name){
    let list=FileList.map((item,index)=>{
      const formdata = new FormData() 
      formdata.append('file',item)
      formdata.append('hash',index)
      formdata.append('name',name)
      return {formdata}
    })
      .map(({formdata})=>Request({url:'xxx',data:formdata}))
      await Promise.all(list) // 所有请求完成后，执行回调函数
      await endall()// 告知完成
  }

  
  return (
    <div className='parent'>
      {/* <button onClick={handleClick}>爬取www.baidu.com页面</button> */}
      {/* <div> <button className='children' onClick={getContent2}>获取本地知识库html的列表</button></div> */}
     <div> <button className='children' onClick={gettable}>获取table的tr,模拟params传递参数</button></div>
     <div><input type='file'></input><button onClick={uploadFile}>上传</button><p>用到断点续传</p></div>
      {/* <div className='children'><p>pppp</p></div> */}
      {/* <iframe src="https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/WTP3bCqlR-/qzUGU-Ukrip3V-"></iframe> */}
    </div>
  );
}

export default Spider;