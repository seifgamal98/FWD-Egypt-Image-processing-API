"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var checker_1 = __importDefault(require("./utilities/checker"));
var imageproc_1 = __importDefault(require("./utilities/imageproc"));
// const sharp = require('sharp')
var morgan_1 = __importDefault(require("morgan"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
var fs = require('fs');
app.use((0, morgan_1.default)('short'));
app.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var height1, width1, filename, widthchecker, heightchecker, path1, path2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, req.query.height];
            case 1:
                height1 = (_a.sent());
                return [4 /*yield*/, req.query.width];
            case 2:
                width1 = (_a.sent());
                return [4 /*yield*/, req.query.filename];
            case 3:
                filename = (_a.sent());
                return [4 /*yield*/, checker_1.default.numberchecker(width1)];
            case 4:
                widthchecker = (_a.sent());
                return [4 /*yield*/, checker_1.default.numberchecker(height1)];
            case 5:
                heightchecker = (_a.sent());
                path1 = "./Images/".concat(filename, ".jpg");
                path2 = "./Images/thumbnails/".concat(filename, "_").concat(width1, "_").concat(height1, ".jpg");
                if (!(widthchecker === 0 || heightchecker === 0)) return [3 /*break*/, 6];
                res.send("parameters are not correct either the the values are below zero or equal to zero or the string is invalid");
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, fs.readFile(path1, function (err) {
                    if (err) {
                        res.send('This file is not available in the images folder please insert a filename for an exsisting one');
                    }
                    else {
                        fs.readFile(path2, function (err) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!err) return [3 /*break*/, 3];
                                        return [4 /*yield*/, imageproc_1.default.imageproc(width1, height1, filename)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, res.sendFile("/".concat(filename, "_").concat(width1, "_").concat(height1, ".jpg"), {
                                                root: "Images/thumbnails/"
                                            })];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        res.sendFile("/".concat(filename, "_").concat(width1, "_").concat(height1, ".jpg"), { root: "Images/thumbnails/" });
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                })];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); });
// start express server Images\image1.jpg
app.listen(PORT, function () {
    // console.log(`Server is starting at prot:${PORT}`)
});
exports.default = app;
