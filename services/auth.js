const authMap = new Map();

const setAuthValues = (id, user)=>{
  authMap.set(id,user);

}

const getAuthValues = (id)=>{
  return authMap.get(id);
  
}

module.exports = {setAuthValues,getAuthValues}