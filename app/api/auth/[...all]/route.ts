import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/auth"; // Corrected import path

export const { POST, GET } = toNextJsHandler(auth); // Use auth directly