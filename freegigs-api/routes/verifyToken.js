const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "freegigsJWT", (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyChatRoom = (req, res, next) => {
  verifyToken(req, res, () => {
    if (
      req.user.id === req.params.firstID ||
      req.user.id === req.params.secondID
    ) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndProvider = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isProvider && req.user.id === req.params.id) {
      next();
    } else {
      res.status(403).json("You are not a provider!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyChatRoom,
  verifyTokenAndAuthorization,
  verifyTokenAndProvider,
};
