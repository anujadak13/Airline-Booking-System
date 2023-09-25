const express= require ('express');
const{ ServerConfig, Logger }= require('./config');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const apiroutes=require('./routes');
app.use('/api', apiroutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server", {});
});