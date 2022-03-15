import express from "express";
import InfoReqController from "./api/controllers/infoRequest.js"; 
import CollectiveClassesController from "./api/controllers/collectiveClasses.js"

const router = express.Router();

router
  .route("/post-collective-class")
  .post(CollectiveClassesController.apiPostNewClass);

router
  .route("/send_info_request")
  .post(InfoReqController.emailSendInfoRequest);

router
  .route("/send_info_recap")
  .post(InfoReqController.emailSendInfoRecap);

export default router;
