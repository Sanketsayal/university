module.exports.home=(req,res)=>{
    return res.render('home')
}

module.exports.fav=(req,res)=>{
    let items=st
    return res.render('fav',{items})
}