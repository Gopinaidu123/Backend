
function getUserDetails(id){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({userroll: "678"}) //API CALL
      }, 2000);
    })
};
const myfun = async() => {
  console.log("123")
  const result = await getUserDetails("123");
  console.log(result.userroll);
  console.log("456")
  console.log("testing")
};
myfun();


console.log("gopi_lifts")