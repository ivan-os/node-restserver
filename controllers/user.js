const { response, request } = require("express");

const userGet = (req, res = response) => {
  const query = req.query;

  res.json({
    msg: "get API - controlador",
    query,
  });
};

const userPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: "put API - controlador",
  });
};

const userPost = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: "post API - controlador",
    body,
  });
};

const userDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

const userPatch = (req, res) => {
  res.json({
    msg: "patch API - controlador",
  });
};

module.exports = {
  userGet,
  userPut,
  userPost,
  userDelete,
  userPatch,
};
