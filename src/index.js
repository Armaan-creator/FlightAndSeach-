const express =require("express");
const {PORT} = require("./config/serverconfig");
const application=express();
const SetupAndStartServer=async()=>{
        
        application.listen(PORT,()=>{
            console.log(`Server start at ${PORT}.`);
            
           
        })
    }


SetupAndStartServer();