import { v4 as uuidv4 } from 'uuid';

let userss =[];


export const getUsers=(req,res)=>{
    console.log(userss); 
    res.send(userss)
}

export const createUser= (req, res) =>{
    const user = req.body;
    userss.push({...user, id:uuidv4()});
    res.send(`user with the name ${user.firstName} added to the database`);
}

export const getUser=(req, res)=>{

    const {id}= req.params;
    console.log(id);

    const foundUser=userss.find((user)=> user.id ===id);

    console.log(foundUser);
    res.send(foundUser);

}

export const deleteUser=(req, res)=>{
    const {id}=req.params;

    userss = userss.filter((user)=> user.id!==id);

    res.send(`user with the is ${id} deleted from the database.`)
}

export const updateUser=(req, res)=>{

    const {id}= req.params;
    const {firstName, lastName, age}= req.body;
    const foundUser=userss.find((user)=> user.id ===id);

    if(firstName){
        foundUser.firstName= firstName;
    } 

    if(lastName){
        foundUser.lastName= lastName;
    }
    if(age){
        foundUser.age= age;
    }

    res.send(`user with the id ${id} has been updated`);

}
