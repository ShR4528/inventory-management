"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenseConstroller_1 = require("../controllers/expenseConstroller");
const router = (0, express_1.Router)();
router.get('/', expenseConstroller_1.getExpensesByCategory);
exports.default = router;
