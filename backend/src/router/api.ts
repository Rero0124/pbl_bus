import express, { Router } from "express";

const router: Router = express.Router();

router.get('/bus/locate/:id', (req: CustomRequest<{}, {}>, res: ExpressResponse) => {

})

export default router;