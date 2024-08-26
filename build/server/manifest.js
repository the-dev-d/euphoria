const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Equinox Bold.otf","Equinox Regular.otf","FugazOne-Regular.ttf","Ubuntu-Regular.ttf","Valorant Font.ttf","Vonique 64 Bold.ttf","Vonique64.ttf","favicon.png","favicon.png~","images/agents/clove/bg.png","images/agents/clove/clove.png","images/agents/clove/type.png","images/agents/img.png","images/agents/img.webp","images/agents/omen/bg.png","images/agents/omen/omen.png","images/agents/omen/type.png","images/agents/sage/bg.png","images/agents/sage/sage.png","images/agents/sage/type.png","images/agents/sova/bg.png","images/agents/sova/sova.png","images/agents/sova/type.png","images/agents/viper/bg.png","images/agents/viper/type.png","images/agents/viper/viper.png","images/breach.png","images/covers/coding.gif","images/covers/gaming.gif","images/covers/th.gif","images/covers/web.gif","images/forms/Logoc.png","images/forms/Typeface.png","images/forms/fbgarcade.jpg","images/forms/fggaming.jpg","images/forms/logoeuph.png","images/github.svg","images/logos/Euphoria_Typeface-min.png","images/logos/RcssLogo.png","images/logos/RcssLogo.png~","images/logos/akef-logo.png","images/logos/cstar.png","images/logos/epold.png","images/logos/euphoria.png","images/logos/euphoria.png~","images/main/CODING.png","images/main/WEB.png","images/main/about-bg.png","images/main/about.png","images/main/agents-2.png","images/main/agents-2.png~","images/main/agents-3.png","images/main/agents-3.png~","images/main/agents.png","images/main/agents.png~","images/main/back-glow.png","images/main/breach.png","images/main/circle.png","images/main/content-glitch.png","images/main/content-glitch.png~","images/main/euforia.png","images/main/eventbanner.png","images/main/eventbanner.png~","images/main/favicon.png","images/main/favicon.png~","images/main/floor.png","images/main/floor.png~","images/main/front-glow.png","images/main/glitch.png","images/main/logo.png","images/main/logo.png~","images/main/rectange.png","images/main/treasure.png","images/main/triangle.png","images/main/v-transparent.png","images/main/val-eventBanner.png","images/payment.png","images/svelte-logo.svg","images/svelte-welcome.png","images/svelte-welcome.webp","images/treasure.png","particlesjs-config.json","robots.txt","screenshots/1-7eb2898d-8511-4a42-ad3a-a46dca495623.png","screenshots/1-e7b9d4e2-636f-44b7-a832-2d6199749d7e.png","screenshots/2-862ce713-db84-4453-8e59-962810d551b8.png","screenshots/2-af00068e-d442-463b-be06-61e81afad9dd.png","screenshots/2-d9bba6b6-322c-4f7e-b395-8633f3743a5d.png","screenshots/3-36a35b87-bd42-4228-8578-e3703c2dbfd8.png","screenshots/4-dd65c611-dfe2-46f8-8f62-5cc12aa1b889.png","screenshots/viewers/1-afdadacb-dc4c-485e-8015-9bd63d5e941d.png","screenshots/viewers/2-d510ca74-6c5c-4ca5-aaf7-bff17c10451d.png"]),
	mimeTypes: {".otf":"font/otf",".ttf":"font/ttf",".png":"image/png",".webp":"image/webp",".gif":"image/gif",".jpg":"image/jpeg",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.AxPNbdeu.js","app":"_app/immutable/entry/app.NAbwOMOR.js","imports":["_app/immutable/entry/start.AxPNbdeu.js","_app/immutable/chunks/entry.3ADNXllK.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BEPY084A.js","_app/immutable/chunks/paths.B5VCgVQX.js","_app/immutable/entry/app.NAbwOMOR.js","_app/immutable/chunks/scheduler._6DmXkuH.js","_app/immutable/chunks/index.BYXNZXlm.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-fhgW8LHk.js')),
			__memo(() => import('./chunks/1-YmS272En.js')),
			__memo(() => import('./chunks/2-DPp4--JM.js')),
			__memo(() => import('./chunks/3-DGV2Byzx.js')),
			__memo(() => import('./chunks/4-BywLxcQm.js')),
			__memo(() => import('./chunks/5-D7mlA9Ya.js')),
			__memo(() => import('./chunks/6-DTfUIdgx.js')),
			__memo(() => import('./chunks/7-D3EhWHJ8.js')),
			__memo(() => import('./chunks/8-Q5R7Lbud.js')),
			__memo(() => import('./chunks/9-ifvI0__Z.js')),
			__memo(() => import('./chunks/10-Dd8fE9t1.js')),
			__memo(() => import('./chunks/11-5BYy8NdR.js')),
			__memo(() => import('./chunks/12-fq3H7XqP.js')),
			__memo(() => import('./chunks/13-CIbVUTIv.js')),
			__memo(() => import('./chunks/14-CpuKd1yh.js')),
			__memo(() => import('./chunks/15-CfuMkAPz.js')),
			__memo(() => import('./chunks/16-Cjduuawn.js')),
			__memo(() => import('./chunks/17-D7gANzrM.js')),
			__memo(() => import('./chunks/18-BfWBcArL.js')),
			__memo(() => import('./chunks/19-DfyLwjR7.js')),
			__memo(() => import('./chunks/20-ByvtUyDT.js')),
			__memo(() => import('./chunks/21-rhTDBabd.js')),
			__memo(() => import('./chunks/22-Bvw53ws2.js')),
			__memo(() => import('./chunks/23-4rhHnsn-.js')),
			__memo(() => import('./chunks/24-DAzk5Sa4.js')),
			__memo(() => import('./chunks/25-CsSIV-bs.js')),
			__memo(() => import('./chunks/26-ByFe2c9m.js')),
			__memo(() => import('./chunks/27-1AZEIp0x.js')),
			__memo(() => import('./chunks/28-Cza8PFDF.js')),
			__memo(() => import('./chunks/29-CVGEn5Br.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/api/check",
				pattern: /^\/api\/check\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-B0lCgyK0.js'))
			},
			{
				id: "/(admin)/beprofessional/admin",
				pattern: /^\/beprofessional\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(admin)/beprofessional/admin/non-participants",
				pattern: /^\/beprofessional\/admin\/non-participants\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(admin)/beprofessional/admin/tickets-approved",
				pattern: /^\/beprofessional\/admin\/tickets-approved\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(admin)/beprofessional/admin/tickets",
				pattern: /^\/beprofessional\/admin\/tickets\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(admin)/beprofessional/admin/verified",
				pattern: /^\/beprofessional\/admin\/verified\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(admin)/beprofessional/admin/verify/viewer/[uuid]",
				pattern: /^\/beprofessional\/admin\/verify\/viewer\/([^/]+?)\/?$/,
				params: [{"name":"uuid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(admin)/beprofessional/admin/verify/[uuid]",
				pattern: /^\/beprofessional\/admin\/verify\/([^/]+?)\/?$/,
				params: [{"name":"uuid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(admin)/beprofessional/login",
				pattern: /^\/beprofessional\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/coding/pg",
				pattern: /^\/coding\/pg\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/coding/ug",
				pattern: /^\/coding\/ug\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(protected)/events/solo",
				pattern: /^\/events\/solo\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(protected)/events/team/respawn",
				pattern: /^\/events\/team\/respawn\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(protected)/events/team/treasurehunt",
				pattern: /^\/events\/team\/treasurehunt\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(protected)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/respawn",
				pattern: /^\/respawn\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/respawn/streamersbattle",
				pattern: /^\/respawn\/streamersbattle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/respawn/streamersbattle/dashboard",
				pattern: /^\/respawn\/streamersbattle\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/respawn/streamersbattle/login",
				pattern: /^\/respawn\/streamersbattle\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/respawn/streamersbattle/register",
				pattern: /^\/respawn\/streamersbattle\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/respawn/streamersbattle/ticket",
				pattern: /^\/respawn\/streamersbattle\/ticket\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/treasure-hunt",
				pattern: /^\/treasure-hunt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/web-designing",
				pattern: /^\/web-designing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
