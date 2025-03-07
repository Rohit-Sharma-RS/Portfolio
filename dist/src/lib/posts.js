var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
import fs from "fs";
import matter from "gray-matter";
import path from "path";
export function getPostBySlug(rootDirectory, slug) {
    return __awaiter(this, void 0, void 0, function () {
        var filePath, fileContents, _a, data, content, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    filePath = path.join(rootDirectory, "".concat(slug, ".mdx"));
                    return [4 /*yield*/, fs.readFileSync(filePath, { encoding: "utf-8" })];
                case 1:
                    fileContents = _b.sent();
                    _a = matter(fileContents), data = _a.data, content = _a.content;
                    return [2 /*return*/, { metadata: __assign(__assign({}, data), { slug: slug }), content: content }];
                case 2:
                    error_1 = _b.sent();
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
export function getPosts(rootDirectory, limit) {
    return __awaiter(this, void 0, void 0, function () {
        var files, posts;
        return __generator(this, function (_a) {
            files = fs.readdirSync(rootDirectory);
            posts = files
                .filter(function (file) { return file.endsWith(".mdx"); }) // might have .DS_Store?
                .map(function (file) { return getPostMetaData(rootDirectory, file); })
                .sort(function (a, b) {
                var _a, _b;
                return (new Date((_a = b.publishedAt) !== null && _a !== void 0 ? _a : "").getTime() || 0) -
                    (new Date((_b = a.publishedAt) !== null && _b !== void 0 ? _b : "").getTime() || 0);
            });
            if (limit) {
                return [2 /*return*/, posts.slice(0, limit)];
            }
            return [2 /*return*/, posts];
        });
    });
}
export function getPostMetaData(rootDirectory, filePath) {
    var slug = filePath.replace(/\.mdx$/, "");
    var fullFilePath = path.join(rootDirectory, filePath);
    var fileContent = fs.readFileSync(fullFilePath, { encoding: "utf8" });
    var data = matter(fileContent).data;
    return __assign(__assign({}, data), { slug: slug });
}
