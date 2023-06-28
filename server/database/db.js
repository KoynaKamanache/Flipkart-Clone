import mongoose from 'mongoose';


export const Connection = async({username,password}) =>{
    const URL = `mongodb://${username}:${password}@ac-ulh3dif-shard-00-00.3mhxptq.mongodb.net:27017,ac-ulh3dif-shard-00-01.3mhxptq.mongodb.net:27017,ac-ulh3dif-shard-00-02.3mhxptq.mongodb.net:27017/PROJECT 0?ssl=true&replicaSet=atlas-rx1nyy-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser: true})
        console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting database',error.message);
    }
}


export default Connection;