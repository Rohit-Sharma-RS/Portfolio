"use server";
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
import { ContactFormSchema } from "./schemas";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
export function sendEmail(data) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _a, name_1, email, message, mailOptions, info, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    result = ContactFormSchema.safeParse(data);
                    if (result.error) {
                        return [2 /*return*/, { error: result.error.format() }];
                    }
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = result.data, name_1 = _a.name, email = _a.email, message = _a.message;
                    mailOptions = {
                        from: "rohit777in.com <".concat(process.env.EMAIL_USER, ">"),
                        to: "rohitrnc5458@gmail.com",
                        replyTo: email,
                        cc: email,
                        subject: "New message from ".concat(name_1, "!"),
                        text: "Name:\n".concat(name_1, "\n\nEmail:\n").concat(email, "\n\nMessage:\n").concat(message),
                    };
                    return [4 /*yield*/, transporter.sendMail(mailOptions)];
                case 2:
                    info = _b.sent();
                    if (!info.messageId) {
                        throw new Error("Failed to send email!");
                    }
                    return [2 /*return*/, { success: true }];
                case 3:
                    error_1 = _b.sent();
                    return [2 /*return*/, { error: error_1 instanceof Error ? error_1.message : String(error_1) }];
                case 4: return [2 /*return*/];
            }
        });
    });
}
