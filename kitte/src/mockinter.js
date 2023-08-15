function splitarray(args){
    let result=[];
for(let i=0;i<args.length;i+=3)
{
    result.push(args.slice(i,3))
}
console.log(result)
    return result

}

splitarray(["1","2","3","4","3","4"])


// eventbus 

