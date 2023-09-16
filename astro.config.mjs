import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
					label: "Guides",
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
							label: "Configure PayPal",
							link: "/guides/paypal",
						},
						{
							label: "Webhook configuration",
							link: "/guides/webhooks",
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
							label: "Routes",
							link: "/api/routes-index",
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
	],
});
