"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const _404_controller_1 = require("../controller/404.controller");
const router = express_1.Router();
router.use(_404_controller_1.NotFound.Main);
exports.default = router;
