import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import dotenv from "dotenv";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
dotenv.config();

const adapter = {
  "production": vercel(),
  "development": node({
    mode: "standalone"
  })
}[process.env["DEPLOYMENT"] || "development"]

export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter
});