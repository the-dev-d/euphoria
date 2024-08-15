const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Equinox Bold.otf","Equinox Regular.otf","FugazOne-Regular.ttf","Ubuntu-Regular.ttf","Valorant Font.ttf","Vonique 64 Bold.ttf","Vonique64.ttf","favicon.png","favicon.png~","images/agents/clove/bg.png","images/agents/clove/clove.png","images/agents/clove/type.png","images/agents/omen/bg.png","images/agents/omen/omen.png","images/agents/omen/type.png","images/agents/sage/bg.png","images/agents/sage/sage.png","images/agents/sage/type.png","images/agents/sova/bg.png","images/agents/sova/sova.png","images/agents/sova/type.png","images/agents/viper/bg.png","images/agents/viper/type.png","images/agents/viper/viper.png","images/breach.png","images/covers/coding.gif","images/covers/gaming.gif","images/covers/th.gif","images/covers/web.gif","images/forms/Typeface.png","images/forms/fbgarcade.jpg","images/forms/logoeuph.png","images/github.svg","images/logos/Euphoria_Typeface-min.png","images/logos/RcssLogo.png","images/logos/RcssLogo.png~","images/logos/cstar.png","images/logos/epold.png","images/logos/euphoria.png","images/logos/euphoria.png~","images/main/CODING.png","images/main/WEB.png","images/main/about-bg.png","images/main/about.png","images/main/agents-2.png","images/main/agents-2.png~","images/main/agents-3.png","images/main/agents-3.png~","images/main/agents.png","images/main/agents.png~","images/main/back-glow.png","images/main/breach.png","images/main/circle.png","images/main/content-glitch.png","images/main/content-glitch.png~","images/main/euforia.png","images/main/eventbanner.png","images/main/eventbanner.png~","images/main/favicon.png","images/main/favicon.png~","images/main/floor.png","images/main/floor.png~","images/main/front-glow.png","images/main/glitch.png","images/main/logo.png","images/main/logo.png~","images/main/rectange.png","images/main/treasure.png","images/main/triangle.png","images/main/v-transparent.png","images/main/val-eventBanner.png","images/payment.png","images/svelte-logo.svg","images/svelte-welcome.png","images/svelte-welcome.webp","images/treasure.png","particlesjs-config.json","robots.txt","screenshots/1-7eb2898d-8511-4a42-ad3a-a46dca495623.png","screenshots/2-862ce713-db84-4453-8e59-962810d551b8.png","screenshots/2-d9bba6b6-322c-4f7e-b395-8633f3743a5d.png","screenshots/3-36a35b87-bd42-4228-8578-e3703c2dbfd8.png"]),
	mimeTypes: {".otf":"font/otf",".ttf":"font/ttf",".png":"image/png",".gif":"image/gif",".jpg":"image/jpeg",".svg":"image/svg+xml",".webp":"image/webp",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.zIHDZku1.js","app":"_app/immutable/entry/app.DzlNwWH6.js","imports":["_app/immutable/entry/start.zIHDZku1.js","_app/immutable/chunks/entry.BAKMHLdN.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.DbGQmkCI.js","_app/immutable/entry/app.DzlNwWH6.js","_app/immutable/chunks/scheduler.dz8I3iaA.js","_app/immutable/chunks/index.BP1vhqCy.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CdGgVw0p.js')),
			__memo(() => import('./chunks/1-D7wMwZVy.js')),
			__memo(() => import('./chunks/2-Dk5TwT-L.js')),
			__memo(() => import('./chunks/3-DLGk-eaO.js')),
			__memo(() => import('./chunks/4-D23gLZwp.js')),
			__memo(() => import('./chunks/5-2rCvT3Rz.js')),
			__memo(() => import('./chunks/6-DqZz0Xw3.js')),
			__memo(() => import('./chunks/7-DtFfeZBF.js')),
			__memo(() => import('./chunks/8-D8wp2Fj-.js')),
			__memo(() => import('./chunks/9-CjYYUF4e.js')),
			__memo(() => import('./chunks/10-C7FQvEq-.js')),
			__memo(() => import('./chunks/11-Dj4sZzt6.js')),
			__memo(() => import('./chunks/12-Dq6IJTZz.js')),
			__memo(() => import('./chunks/13-DzJbi6Bg.js')),
			__memo(() => import('./chunks/14-DJXWrpal.js')),
			__memo(() => import('./chunks/15-DTOjlSy9.js')),
			__memo(() => import('./chunks/16-BSLO5ZuE.js')),
			__memo(() => import('./chunks/17-B_HGHSHQ.js')),
			__memo(() => import('./chunks/18-D4lwDyOw.js')),
			__memo(() => import('./chunks/19-DddlrjeE.js'))
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
				id: "/(admin)/beprofessional/login",
				pattern: /^\/beprofessional\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/coding/pg",
				pattern: /^\/coding\/pg\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/coding/ug",
				pattern: /^\/coding\/ug\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(protected)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(protected)/events/solo",
				pattern: /^\/events\/solo\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(protected)/events/team/respawn",
				pattern: /^\/events\/team\/respawn\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(protected)/events/team/treasurehunt",
				pattern: /^\/events\/team\/treasurehunt\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(protected)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/respawn",
				pattern: /^\/respawn\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/treasure-hunt",
				pattern: /^\/treasure-hunt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/web-designing",
				pattern: /^\/web-designing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
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
