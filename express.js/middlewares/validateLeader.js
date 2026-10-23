const validateLeader = (request, response, next) => {
  const LeaderObj = request.body;

  if (!LeaderObj.name) {
    return response.status(400).json({
      message: "Name is a required field",
    });
  }

  if (!LeaderObj.email) {
    return response.status(400).json({
      message: "Email is a required field",
    });
  }
  
  if (!LeaderObj.post) {
    return response.status(400).json({
      message: "Post is a required field",
    });
  }

  next();
};

module.exports = validateLeader;