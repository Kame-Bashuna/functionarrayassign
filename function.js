
//no1
const c=["yellow","brown","green","blue"]
function mySort(c){
  c.sort();
  return c;
}
console.log(mySort(c))

const d=["akirachix","stMary","lucy"]
function schoolReverse(){
  d.reverse()
  return d
}
console.log(schoolReverse(d))

//no2
var z=(90,-12,67,-21);
function value(z){
  let positive=z.filter((v) => v>0)
  let negative=z.filter((v) => v<0)
  let zero=z.filter((v) == 0)
  return{
    negative:negative,
    positive:positive,
    zero:zero
  }
}
console.log(value(z))

//no4
function multiply(values1){
  values1.forEach((values1) =>{
    console.log(values1*2)
  })
}
multiply([13,10,3])

//no5
function newArray(values){
  const firstFour=values.slice(0,4).map(item=>item*8)
  const lastTwo=values.slice()
}