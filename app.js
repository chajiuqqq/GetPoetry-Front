const express=require('express')
const app=express()
const path=require('path')

app.use(express.static(__dirname))

app.get('/:name',(req,res) => {
	var url=path.join(__dirname,'view',req.params.name+'.html')
	console.log(url)
	res.sendFile(url)
})


app.listen(8090,()=>{
	console.log('one request')
})