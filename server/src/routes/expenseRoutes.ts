import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expenseConstroller";


const router = Router();

router.get('/', getExpensesByCategory);

export default router;