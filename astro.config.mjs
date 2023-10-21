import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Light Services Bot",
			social: {
				discord: "https://discord.gg/NszFDcW3",
			},
			favicon: "/favicon.png",
			customCss: ["./src/styles/custom.css"],
			sidebar: [
				{
					label: "Get Started",
					items: [
						{
							label: "Getting Started",
							link: "/guides/getting-started",
						},
						{
							label: "Installation",
							link: "/guides/installation",
						},
						{
							label: "Webhook configuration",
							link: "/guides/webhooks",
						},
					],
				},
				{
					label: "Invoicing",
					items: [
						{
							label: "PayPal configuration",
							link: "/guides/paypal",
						},
					],
				},
				{
					label: "API Reference",
					items: [
						{
							label: "Introduction",
							link: "/api/introduction",
						},
						{
							label: "Authenticating",
							link: "/api/authenticating",
						},
						{
							label: "Pagination",
							link: "/api/paginating",
						},
						{
							label: "Route: /tickets",
							link: "/api/routes/tickets",
						},
						{
							label: "Route: /transcripts",
							link: "/api/routes/transcripts",
						},
						{
							label: "Route: /bank",
							link: "/api/routes/bank",
						},
						{
							label: "Route: /ipn",
							link: "/api/routes/ipn",
						},
					],
				},
				{
					label: "Other",
					items: [
						{
							label: "Changelog",
							link: "https://www.notion.so/nortexdev/Changelogs-a413a1845d924a59a631adfb7fb5bb2e?pvs=4",
							badge: "🡥 notion.so",
						},
					],
				},
			],
		}),
		tailwind(),
	],
});
