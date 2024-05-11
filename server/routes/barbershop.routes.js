import {Router} from 'express';
import { createApp, deleteApp, getAllApps, getOneApp, updateApp } from '../controllers/barbershop.controller.js';

const router = Router();

router.route("/appointments")
    .get(getAllApps)
    .post(createApp)

router.route("/appointments/:id")
    .get(getOneApp)
    .patch(updateApp)
    .delete(deleteApp)

export default router;