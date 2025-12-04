function getUseDetials(id ,getUserSubjets){
    console.log("gettting the details of user id",id);
    getUserSubjets( {userroll:"678"})
}
function getUserSubjets(userRoll , getUserMarks ){
    console.log("gettting the subject of user rollno",userRoll);
    getUserMarks({subid : "en-1"})
}
function getUserMarks(userSubid){
    console.log("gettting tefgrwwghe details of user Subid",userSubid);
}
getUseDetials("123" ,function(userRoll) {
    getUserSubjets(userRoll, function(userSubid){
        getUserMarks(userSubid)
    })
});