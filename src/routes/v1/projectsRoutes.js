import { Router } from "express";
import projectsController from "../../controllers/projectsController.js";

const router = new Router

router
.get("/", projectsController.getProjects)

export default router;