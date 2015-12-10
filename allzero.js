module.exports=function(){
s=''
for(a of arguments)
s+=a+'|'
s+='0'
return eval(s)==0?true:false
}
