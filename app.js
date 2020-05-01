const express=require('express')
const app=express()
const path=require('path')

app.use(express.static(__dirname))


app.get('/',(req,res) => {
	var url=path.join(__dirname,'view','flower.html')
	// console.log(url)
	res.sendFile(url)
})


app.get('/:name',(req,res) => {
	let name=req.params.name
	var url=path.join(__dirname,'view',name+'.html')
	// console.log(url)
	
	res.sendFile(url)
})


app.listen(8088,()=>{
	console.log('one request')
})