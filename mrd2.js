const arr=[
    {fname:"vetri",lname:"vel",age:22},
    {fname:"virat",lname:"kohli",age:38},
    {fname:"jack",lname:"kallis",age:45},
    {fname:"rohit",lname:"sharma",age:38}


]
const using_filter=arr.filter((x)=> x.age>40).map((x)=>x.fname)


console.log(using_filter)

const using_map=arr.map((x)=>
{
    return x.fname
})
console.log(using_map)