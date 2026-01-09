/*
import { v4 as uuidv4 } from "uuid";
import { BAD_REQUEST } from "./constants/httpStatus.js";

export default (req, res, next) => {
  let { transactionid } = req.headers;
  if (!transactionid) {
    return res.status(BAD_REQUEST).json({
      status: BAD_REQUEST,
      message: "The transactionid header is required.",
    });
  }
  req.headers.serviceid = uuidv4();
  return next();
};

*/


import { v4 as uuidv4 } from "uuid";

export default (req, res, next) => {
  // headers no Node são sempre lowercase
  let { transactionid, serviceid } = req.headers;

  // se não vier, gera
  if (!transactionid) {
    transactionid = uuidv4();
    req.headers.transactionid = transactionid;
  }

  // se não vier, gera também
  if (!serviceid) {
    serviceid = "auth-api"; // ou uuidv4() se preferir
    req.headers.serviceid = serviceid;
  }

  return next();
};
