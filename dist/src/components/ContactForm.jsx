"use client";
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
import { sendEmail } from "../lib/actions";
import { ContactFormSchema } from "../lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import Link from "next/link";
export default function ContactForm() {
    var _this = this;
    var _a, _b, _c;
    var _d = useForm({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    }), register = _d.register, handleSubmit = _d.handleSubmit, reset = _d.reset, _e = _d.formState, errors = _e.errors, isSubmitting = _e.isSubmitting;
    var processForm = function (data) { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sendEmail(data)];
                case 1:
                    result = _a.sent();
                    if (result.error) {
                        toast.error("An error occurred! Please try again later.");
                        return [2 /*return*/];
                    }
                    toast.success("Message sent successfully!");
                    reset();
                    return [2 /*return*/];
            }
        });
    }); };
    return (<form onSubmit={handleSubmit(processForm)}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {/* Name */}
        <div className="h-16">
          <Input id="name" type="text" placeholder="Name" autoComplete="given-name" {...register("name")}/>
          {((_a = errors.name) === null || _a === void 0 ? void 0 : _a.message) && (<p className="input-error">{errors.name.message}</p>)}
        </div>

        {/* Email */}
        <div className="h-16">
          <Input id="email" type="email" placeholder="Email" autoComplete="email" {...register("email")}/>

          {((_b = errors.email) === null || _b === void 0 ? void 0 : _b.message) && (<p className="input-error">{errors.email.message}</p>)}
        </div>

        {/* Message */}
        <div className="h-32 sm:col-span-2">
          <Textarea rows={4} placeholder="Leave feedback about the site, career opportunities or just to say hello..." autoComplete="Message" className="resize-none" {...register("message")}/>

          {((_c = errors.message) === null || _c === void 0 ? void 0 : _c.message) && (<p className="input-error">{errors.message.message}</p>)}
        </div>
      </div>
      <div className="mt-2">
        <Button type="submit" disabled={isSubmitting} className="w-full disabled:opacity-50">
          {isSubmitting ? (<div className="flex items-center">
              <span>Sending...</span>
              <ReloadIcon className="ml-2 animate-spin"/>
            </div>) : (<div className="flex items-center">
              <span>Send Message</span>
              <PaperPlaneIcon className="ml-2"/>
            </div>)}
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">
          By submitting this form, I agree to the{" "}
          <Link href="/privacy" className="link font-semibold">
            privacy&nbsp;policy.
          </Link>
        </p>
      </div>
    </form>);
}
