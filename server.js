let a=require(`http`),b=`localhost`,c=3001,d=a.createServer((q,r)=>r.end(`Hello, Galvanize!`)).listen(c,b,()=>console.log(`Server is running on ${b}:${c}`))
