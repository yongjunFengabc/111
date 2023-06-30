import React, { useState ,useEffect} from 'react';
// url='https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/WTP3bCqlR-/qzUGU-Ukrip3V-' 
import test from './ruliu'
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
  const [result, setResult] = useState('');
  const [data,setData]=useState([]);
  const [params,setParams]=useState({});
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
      "介绍":55,
      "操作":56,
      "优化":57,
      "政策":58,
      "审核":59,
      "财务":60,
      "反馈":61,
      "其他":62,
      "客服":63,
    }
    const MapEmiKLGindex={
        "商业阿拉丁":39,
        "品牌产品":40,
        "百度统计":41,
        "爱番番":42,
        "爱采购":43,
        "公有库":44,
        "搜索推广":45,
        "信息流推广":46,
        "商业开发者中心":47,
        "基木鱼":48,
        "观星盘":49,
        "百度指数":50,
        "度小店":51,
        "售前":54,
    }
  useEffect(() => {
    // console.log(count);
    console.log('useeffect',data)
    // console.log(data)
  }, [data]);
  // const handleClick = async () => {
  //   console.log(test)
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.text();
  //     setResult(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
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
        console.log(i);
        // const $2= cheerio.load(eachtr[2]);
        // console.log("huoqudaan",$(eachtr[2]).text());
        // console.log("huoqudaan-html",$(eachtr[2]).html());

        // console.log("contentDomGet",eachtr[2]);
        for(let j=0;j<6;j++){
          let objecttitle=paramstitle[j];
          if(j===4)//for problemsort
          {
             objparam[objecttitle]=MaptheEmiProblemSort($(eachtr[j]).text())
          }
          else if(j===2){
            objparam[objecttitle]=$(eachtr[j]).html()
          }
          else if(j===5)//for emiklg
          {
            objparam[objecttitle]=MaptheEmiKLG($(eachtr[j]).text())
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
      console.log(tr);
    }
  function getContent2(){
    const cheerio = require('cheerio');
    const $ = cheerio.load(test);
    const lists=$('.mp-list-item');
    const try2=$('span').attr("data-slate-string",true);
    const try4=$('span span span').prop("data-slate-string",true);
    try4.each(function(){
      console.log($(this))
      console.log("datatext",$(this)[0].children[0].data)
      setData(prvedata=>[...prvedata,$(this)[0].children[0].data]);
      console.log("data",data);
    })
    // setData([5]);
    const try3=$('span [data-slate-string=true]')
    console.log("try2",try2);
    console.log('try3',try3);
    console.log('try4',try4);
    console.log("data",data);
//     lists.each((item)=>{
// while(item.children&&item.children[0])
//     })
    console.log(lists)
  }

  function gettext(element){//对于单个的单元格内的数据，获取具体的数值
     while(element&&element.children){
      element=element.children[0];
      // console.log("elementfindtext",element)
     }
    console.log("data",element.data)
     return element.data

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
  return (
    <div className='parent'>
      {/* <button onClick={handleClick}>爬取页面</button> */}
      <div> <button className='children' onClick={getContent2}>获取本地知识库html的列表</button></div>
     <div> <button className='children' onClick={gettable}>获取table的tr,模拟params传递参数</button></div>
     
      {/* <div className='children'><p>pppp</p></div> */}
      {/* <iframe src="https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/pKzJfZczuc/WTP3bCqlR-/qzUGU-Ukrip3V-"></iframe> */}
    </div>
  );
}

export default Spider;