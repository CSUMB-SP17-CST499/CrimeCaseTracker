module.exports = function(req, res){
  Cases.findAll({
    where: {
      assignedTo: req.body.username
    }
  }).then(function(cases){
    res.json({
      cases: cases
    });
  }).catch(function(err){
    console.log(err);
    return res.status(401);
  });
};
