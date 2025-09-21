import { Router } from "express";
import contactController from "../../controllers/contactController.js";

const router = new Router

router
.post("/", contactController.createContact)

export default router;



