globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-10-22T08:05:45.318Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/routes-BNbh6iUQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c8da-pP3ervTDcd9tTf0jDpBlLZcL+14\"",
		"mtime": "2026-10-22T08:26:03.664Z",
		"size": 51418,
		"path": "../public/assets/routes-BNbh6iUQ.js"
	},
	"/assets/styles-Lag__ScW.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1354c-ae2IM297o8yDdkWKtH3aBIjaPco\"",
		"mtime": "2026-10-22T08:26:03.665Z",
		"size": 79180,
		"path": "../public/assets/styles-Lag__ScW.css"
	},
	"/icons/Ableton-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"5b4-500oE4bmNBZ6DoPwFcxvpicarX8\"",
		"mtime": "2026-10-19T07:51:14.925Z",
		"size": 1460,
		"path": "../public/icons/Ableton-Light.svg"
	},
	"/icons/ActivityPub-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"286-bHV57gjB7xTtPsTwUGNykuRElfU\"",
		"mtime": "2026-10-19T07:51:15.231Z",
		"size": 646,
		"path": "../public/icons/ActivityPub-Dark.svg"
	},
	"/icons/Ableton-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"5b2-F3fZNaTrt+3LUxk/4CtwkKQnhSE\"",
		"mtime": "2026-10-19T07:51:14.658Z",
		"size": 1458,
		"path": "../public/icons/Ableton-Dark.svg"
	},
	"/assets/index-DLKEIu5q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a4f4-W95ChMPUxjZq4tzRXd7fIgdaCX0\"",
		"mtime": "2026-10-22T08:26:03.663Z",
		"size": 369908,
		"path": "../public/assets/index-DLKEIu5q.js"
	},
	"/icons/Actix-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"17b4-SYRuoMJbevHpKR9TikwCUeCtJRQ\"",
		"mtime": "2026-10-19T07:51:15.741Z",
		"size": 6068,
		"path": "../public/icons/Actix-Dark.svg"
	},
	"/icons/ActivityPub-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"286-6Y53VRH8qz8A0oR+XbYuUmeyNLk\"",
		"mtime": "2026-10-19T07:51:15.471Z",
		"size": 646,
		"path": "../public/icons/ActivityPub-Light.svg"
	},
	"/icons/Actix-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"17b6-rR5sPUcDPKT5fRjwmLBB2OKyPGo\"",
		"mtime": "2026-10-19T07:51:16.009Z",
		"size": 6070,
		"path": "../public/icons/Actix-Light.svg"
	},
	"/icons/Adonis.svg": {
		"type": "image/svg+xml",
		"etag": "\"34f-8y/k8xy4jARds6o/Y+4MzOo5kHo\"",
		"mtime": "2026-10-19T07:51:16.269Z",
		"size": 847,
		"path": "../public/icons/Adonis.svg"
	},
	"/icons/AfterEffects.svg": {
		"type": "image/svg+xml",
		"etag": "\"ab1-KfeF9xC9Zqc0q20eZKdPaSzXSf0\"",
		"mtime": "2026-10-19T07:51:16.541Z",
		"size": 2737,
		"path": "../public/icons/AfterEffects.svg"
	},
	"/icons/AiScript-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1d1f-MtqR+MR6O+hxiOMM8y3wwXXHn44\"",
		"mtime": "2026-10-19T07:51:17.065Z",
		"size": 7455,
		"path": "../public/icons/AiScript-Light.svg"
	},
	"/icons/AlpineJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1a8-IRe44ZynFzt7xO2wodQhdeyc6S0\"",
		"mtime": "2026-10-19T07:51:17.378Z",
		"size": 424,
		"path": "../public/icons/AlpineJS-Dark.svg"
	},
	"/icons/Anaconda-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"136f-U5WHybdzjFALJqEGa3n8f2D53iU\"",
		"mtime": "2026-10-19T07:51:18.185Z",
		"size": 4975,
		"path": "../public/icons/Anaconda-Light.svg"
	},
	"/icons/AlpineJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1a8-8sno9ngkOIRsVXzY2MxUFfeEvb4\"",
		"mtime": "2026-10-19T07:51:17.626Z",
		"size": 424,
		"path": "../public/icons/AlpineJS-Light.svg"
	},
	"/icons/AndroidStudio-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"ec1-8QUhR/qGuybj1+fOSlsnqCCxw+w\"",
		"mtime": "2026-10-19T07:51:18.434Z",
		"size": 3777,
		"path": "../public/icons/AndroidStudio-Dark.svg"
	},
	"/icons/AiScript-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1d59-16/UD2KlLJP1ksL7p+OxC3ySbB0\"",
		"mtime": "2026-10-19T07:51:16.832Z",
		"size": 7513,
		"path": "../public/icons/AiScript-Dark.svg"
	},
	"/icons/Anaconda-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"136f-MSPYKDvg4RfHUrLDutUXivH8r5k\"",
		"mtime": "2026-10-19T07:51:17.905Z",
		"size": 4975,
		"path": "../public/icons/Anaconda-Dark.svg"
	},
	"/icons/AndroidStudio-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"ec1-43UzNdcGts+0oi62f1HF5eKZMuY\"",
		"mtime": "2026-10-19T07:51:18.686Z",
		"size": 3777,
		"path": "../public/icons/AndroidStudio-Light.svg"
	},
	"/icons/Ansible.svg": {
		"type": "image/svg+xml",
		"etag": "\"817-vC1YQSq1fXLtbUJ6n+Hlxst+o2c\"",
		"mtime": "2026-10-19T07:51:19.456Z",
		"size": 2071,
		"path": "../public/icons/Ansible.svg"
	},
	"/icons/Angular-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"242-gPPLEo1wRFINhAh8slpQChro9Bc\"",
		"mtime": "2026-10-19T07:51:18.948Z",
		"size": 578,
		"path": "../public/icons/Angular-Dark.svg"
	},
	"/icons/Angular-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"23b-pwC5t3pMchYQN5+sNNIhytHy3VM\"",
		"mtime": "2026-10-19T07:51:19.193Z",
		"size": 571,
		"path": "../public/icons/Angular-Light.svg"
	},
	"/icons/Apollo.svg": {
		"type": "image/svg+xml",
		"etag": "\"729-aQKbCNm2on901tExtoSihbC2v9Q\"",
		"mtime": "2026-10-19T07:51:19.720Z",
		"size": 1833,
		"path": "../public/icons/Apollo.svg"
	},
	"/icons/Apple-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"b3b-fKJwMD0Nr4W5iLD+btuOTE4Ocnw\"",
		"mtime": "2026-10-19T07:51:19.979Z",
		"size": 2875,
		"path": "../public/icons/Apple-Dark.svg"
	},
	"/icons/Apple-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"b39-HTOiJb2ImhRXZEMIgtyXkmQpu6A\"",
		"mtime": "2026-10-19T07:51:20.271Z",
		"size": 2873,
		"path": "../public/icons/Apple-Light.svg"
	},
	"/icons/Arch-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"b90-SbHVn4BVaDyaY5umah4HP+OnqP0\"",
		"mtime": "2026-10-19T07:51:20.741Z",
		"size": 2960,
		"path": "../public/icons/Arch-Dark.svg"
	},
	"/icons/Arch-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"b90-ROdrl5RlNtWKIN1zEkiaRZO2GOI\"",
		"mtime": "2026-10-19T07:51:21.017Z",
		"size": 2960,
		"path": "../public/icons/Arch-Light.svg"
	},
	"/icons/Arduino.svg": {
		"type": "image/svg+xml",
		"etag": "\"ef2-uybWXLKW+4F3Gv2JIHXZw13PQLo\"",
		"mtime": "2026-10-19T07:51:21.242Z",
		"size": 3826,
		"path": "../public/icons/Arduino.svg"
	},
	"/icons/Atom.svg": {
		"type": "image/svg+xml",
		"etag": "\"1033-yhjYsOoUrBg7EVKcyavC1AD/DDg\"",
		"mtime": "2026-10-19T07:51:21.749Z",
		"size": 4147,
		"path": "../public/icons/Atom.svg"
	},
	"/icons/Astro.svg": {
		"type": "image/svg+xml",
		"etag": "\"a73-Efi6kWxxP16KSYdJbVUmMAtt0bc\"",
		"mtime": "2026-10-19T07:51:21.477Z",
		"size": 2675,
		"path": "../public/icons/Astro.svg"
	},
	"/icons/AutoCAD-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"567-nlV5q87bq1B4/1oqxbQgY21O3xY\"",
		"mtime": "2026-10-19T07:51:22.211Z",
		"size": 1383,
		"path": "../public/icons/AutoCAD-Dark.svg"
	},
	"/icons/Audition.svg": {
		"type": "image/svg+xml",
		"etag": "\"85a-kr+VRzn9dqXETIXUsCZJvZIoT54\"",
		"mtime": "2026-10-19T07:51:21.978Z",
		"size": 2138,
		"path": "../public/icons/Audition.svg"
	},
	"/icons/AutoCAD-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"567-T+iN15C2LCgLi1JHLmwzYHY70po\"",
		"mtime": "2026-10-19T07:51:22.458Z",
		"size": 1383,
		"path": "../public/icons/AutoCAD-Light.svg"
	},
	"/icons/Appwrite.svg": {
		"type": "image/svg+xml",
		"etag": "\"a17-YbvkbYRR55rZiv5nDvPOWfW4hjg\"",
		"mtime": "2026-10-19T07:51:20.504Z",
		"size": 2583,
		"path": "../public/icons/Appwrite.svg"
	},
	"/icons/AWS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"16c1-XXXprrgjYAV/ie5BY0UnVvNEZmE\"",
		"mtime": "2026-10-19T07:51:14.125Z",
		"size": 5825,
		"path": "../public/icons/AWS-Dark.svg"
	},
	"/icons/Azul.svg": {
		"type": "image/svg+xml",
		"etag": "\"cd9-VNCFoXAtfPT2LdewfIUsmIhfH6Y\"",
		"mtime": "2026-10-19T07:51:22.704Z",
		"size": 3289,
		"path": "../public/icons/Azul.svg"
	},
	"/icons/AWS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"16c4-PySiJRxLPRzNwE1lmHVuePofkSM\"",
		"mtime": "2026-10-19T07:51:14.376Z",
		"size": 5828,
		"path": "../public/icons/AWS-Light.svg"
	},
	"/icons/Azure-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"bcb-FHJt7ikGuJRS8zA953Gogk0J+38\"",
		"mtime": "2026-10-19T07:51:23.231Z",
		"size": 3019,
		"path": "../public/icons/Azure-Light.svg"
	},
	"/icons/Azure-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"bcb-ysGl7UdsJYZQ6sQeam6pfzy4Kic\"",
		"mtime": "2026-10-19T07:51:22.976Z",
		"size": 3019,
		"path": "../public/icons/Azure-Dark.svg"
	},
	"/icons/Bash-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"d49-hBz0+oenig8M7elp2Wt7bycg4TI\"",
		"mtime": "2026-10-19T07:51:24.191Z",
		"size": 3401,
		"path": "../public/icons/Bash-Dark.svg"
	},
	"/icons/Bevy-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1193-pBawCSC4nWzWZdFyeZSsGHqGT6c\"",
		"mtime": "2026-10-19T07:51:24.706Z",
		"size": 4499,
		"path": "../public/icons/Bevy-Dark.svg"
	},
	"/icons/Bash-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"d4c-vxRcU5QYxIzzgS9obSML5SPXNd4\"",
		"mtime": "2026-10-19T07:51:24.435Z",
		"size": 3404,
		"path": "../public/icons/Bash-Light.svg"
	},
	"/icons/Babel.svg": {
		"type": "image/svg+xml",
		"etag": "\"10711-VGe1tZFAt71RVOri701xbmNUUKE\"",
		"mtime": "2026-10-19T07:51:23.972Z",
		"size": 67345,
		"path": "../public/icons/Babel.svg"
	},
	"/icons/BitBucket-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"677-NpbeTJrXItvJ+xD/Na2Scg1KTO4\"",
		"mtime": "2026-10-19T07:51:25.176Z",
		"size": 1655,
		"path": "../public/icons/BitBucket-Dark.svg"
	},
	"/icons/Bevy-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"6f86-prM3AAvfe6Pyc53hLBVuzyMO3co\"",
		"mtime": "2026-10-19T07:51:24.933Z",
		"size": 28550,
		"path": "../public/icons/Bevy-Light.svg"
	},
	"/icons/BitBucket-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"677-iF06QHr2Wu/ZEBw9OiqlwUOq6VU\"",
		"mtime": "2026-10-19T07:51:25.440Z",
		"size": 1655,
		"path": "../public/icons/BitBucket-Light.svg"
	},
	"/icons/Blender-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"ac1-D6OpzbuQLP+/C8agBxneRBF94zw\"",
		"mtime": "2026-10-19T07:51:25.660Z",
		"size": 2753,
		"path": "../public/icons/Blender-Dark.svg"
	},
	"/icons/Blender-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"ac1-ofHHMUm627DXZaTMhSW+yMnJt7k\"",
		"mtime": "2026-10-19T07:51:25.899Z",
		"size": 2753,
		"path": "../public/icons/Blender-Light.svg"
	},
	"/icons/Bootstrap.svg": {
		"type": "image/svg+xml",
		"etag": "\"934-UOiZSszFd8zQZD5QXVvoC820MDo\"",
		"mtime": "2026-10-19T07:51:26.161Z",
		"size": 2356,
		"path": "../public/icons/Bootstrap.svg"
	},
	"/icons/BSD-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"2b7c-Wgsmm307BHNjWVUXm2xt2ApQbBk\"",
		"mtime": "2026-10-19T07:51:23.457Z",
		"size": 11132,
		"path": "../public/icons/BSD-Dark.svg"
	},
	"/icons/BSD-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"2b7c-KaNV5fdTnxsDeArMMG3mvDRXwxI\"",
		"mtime": "2026-10-19T07:51:23.712Z",
		"size": 11132,
		"path": "../public/icons/BSD-Light.svg"
	},
	"/icons/Bun-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"23ad-SPk9JgPBY94woSWqrU1cTTDEXN4\"",
		"mtime": "2026-10-19T07:51:26.410Z",
		"size": 9133,
		"path": "../public/icons/Bun-Dark.svg"
	},
	"/icons/Bun-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"23ad-JoHEN/MfNcrvZ2+3NHKftNGKgVw\"",
		"mtime": "2026-10-19T07:51:26.641Z",
		"size": 9133,
		"path": "../public/icons/Bun-Light.svg"
	},
	"/icons/C.svg": {
		"type": "image/svg+xml",
		"etag": "\"2de-jf8SE5oMFAqzp6NCxZoM76L1lkE\"",
		"mtime": "2026-10-19T07:51:26.895Z",
		"size": 734,
		"path": "../public/icons/C.svg"
	},
	"/icons/Cassandra-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"54ad-vNpHYskAW/GSBtWBjGxfOA5pm04\"",
		"mtime": "2026-10-19T07:51:28.791Z",
		"size": 21677,
		"path": "../public/icons/Cassandra-Dark.svg"
	},
	"/icons/Cassandra-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"54cd-w5+4mxFVEA6PUaunG3Djde49dWg\"",
		"mtime": "2026-10-19T07:51:29.058Z",
		"size": 21709,
		"path": "../public/icons/Cassandra-Light.svg"
	},
	"/icons/CLion-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"c7e-8dGaHx/ywlV0CkzVaMZkKL12Yvs\"",
		"mtime": "2026-10-19T07:51:27.130Z",
		"size": 3198,
		"path": "../public/icons/CLion-Dark.svg"
	},
	"/icons/Clojure-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"b6a-DLuGKGLzT8FZiHMgJHJ3khHuGNg\"",
		"mtime": "2026-10-19T07:51:29.519Z",
		"size": 2922,
		"path": "../public/icons/Clojure-Light.svg"
	},
	"/icons/Clojure-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"b6d-roiO3DKyvcDrNrFPGLI/TBiTZS8\"",
		"mtime": "2026-10-19T07:51:29.285Z",
		"size": 2925,
		"path": "../public/icons/Clojure-Dark.svg"
	},
	"/icons/Cloudflare-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"840-YIoiXlSfHkF++plcnuLpPgBVZGI\"",
		"mtime": "2026-10-19T07:51:29.762Z",
		"size": 2112,
		"path": "../public/icons/Cloudflare-Dark.svg"
	},
	"/icons/Cloudflare-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"840-p9qmeyx7PHkXQLzXi3lqLZCj5OM\"",
		"mtime": "2026-10-19T07:51:29.990Z",
		"size": 2112,
		"path": "../public/icons/Cloudflare-Light.svg"
	},
	"/icons/CLion-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"c7e-5Ggbl0ePh5KqiLvkplqnvDzIMys\"",
		"mtime": "2026-10-19T07:51:27.363Z",
		"size": 3198,
		"path": "../public/icons/CLion-Light.svg"
	},
	"/icons/CMake-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"600-xw4Dfiq7f4CMQAMkNZkjzH0EVUQ\"",
		"mtime": "2026-10-19T07:51:27.850Z",
		"size": 1536,
		"path": "../public/icons/CMake-Light.svg"
	},
	"/icons/CMake-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"600-uoNZHk7URI2rMv/EzcPWavMUxm0\"",
		"mtime": "2026-10-19T07:51:27.614Z",
		"size": 1536,
		"path": "../public/icons/CMake-Dark.svg"
	},
	"/icons/CodePen-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"40a-OsQMT05Do0y11goJx7XiDRmL3WU\"",
		"mtime": "2026-10-19T07:51:30.237Z",
		"size": 1034,
		"path": "../public/icons/CodePen-Dark.svg"
	},
	"/icons/CoffeeScript-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"a8b-JGZKTY+qnW5YNEI4PE3opdVTA20\"",
		"mtime": "2026-10-19T07:51:30.693Z",
		"size": 2699,
		"path": "../public/icons/CoffeeScript-Dark.svg"
	},
	"/icons/CodePen-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"40a-pOv92vdMh0C5hN4dC7HWLrioFNI\"",
		"mtime": "2026-10-19T07:51:30.474Z",
		"size": 1034,
		"path": "../public/icons/CodePen-Light.svg"
	},
	"/icons/CoffeeScript-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"a8e-ZTFuPsinB+upS9aFemNU7zeQLSc\"",
		"mtime": "2026-10-19T07:51:30.907Z",
		"size": 2702,
		"path": "../public/icons/CoffeeScript-Light.svg"
	},
	"/icons/CPP.svg": {
		"type": "image/svg+xml",
		"etag": "\"353-VMulKVRc8sCthMhNJQqey9HJPFU\"",
		"mtime": "2026-10-19T07:51:28.076Z",
		"size": 851,
		"path": "../public/icons/CPP.svg"
	},
	"/icons/Crystal-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"2db-B8+WUpaI30nKxJ0YIYyV+B3Ry90\"",
		"mtime": "2026-10-19T07:51:31.174Z",
		"size": 731,
		"path": "../public/icons/Crystal-Dark.svg"
	},
	"/icons/Crystal-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"322-ESBBLNhmJVprMNIKmPEWsHKBz0E\"",
		"mtime": "2026-10-19T07:51:31.386Z",
		"size": 802,
		"path": "../public/icons/Crystal-Light.svg"
	},
	"/icons/CS.svg": {
		"type": "image/svg+xml",
		"etag": "\"40c-87PdT9+zA4Kk9NEB8oNE6Jues4U\"",
		"mtime": "2026-10-19T07:51:28.319Z",
		"size": 1036,
		"path": "../public/icons/CS.svg"
	},
	"/icons/Cypress-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"d47-vCKwqdA+txPyxjvYR1QIEHWAAo0\"",
		"mtime": "2026-10-19T07:51:31.610Z",
		"size": 3399,
		"path": "../public/icons/Cypress-Dark.svg"
	},
	"/icons/CSS.svg": {
		"type": "image/svg+xml",
		"etag": "\"2c2-AH4jsAdgbBLyCdkuERSm2rniVNY\"",
		"mtime": "2026-10-19T07:51:28.560Z",
		"size": 706,
		"path": "../public/icons/CSS.svg"
	},
	"/icons/Cypress-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"d47-Oy+LF+wcuefjifu6TwdiaB1EqNk\"",
		"mtime": "2026-10-19T07:51:31.855Z",
		"size": 3399,
		"path": "../public/icons/Cypress-Light.svg"
	},
	"/icons/D3-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3d3-/07eTv+P1mwxAUaSbeAhE2L2x2A\"",
		"mtime": "2026-10-19T07:51:32.074Z",
		"size": 979,
		"path": "../public/icons/D3-Dark.svg"
	},
	"/icons/D3-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"3d3-U8fziqzpkX6NkZYzIjkQo9xBrfU\"",
		"mtime": "2026-10-19T07:51:32.299Z",
		"size": 979,
		"path": "../public/icons/D3-Light.svg"
	},
	"/icons/Dart-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"653-u37Pv13gf81DFC5Y7NdQ13jHIHw\"",
		"mtime": "2026-10-19T07:51:33.017Z",
		"size": 1619,
		"path": "../public/icons/Dart-Dark.svg"
	},
	"/icons/Dart-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"654-Jw1I0bwXTDmPRYgMVdmv73Q8r+k\"",
		"mtime": "2026-10-19T07:51:33.258Z",
		"size": 1620,
		"path": "../public/icons/Dart-Light.svg"
	},
	"/icons/Debian-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"129b-nss6Ik6mi8BmLIs9CW8mNKzJPJE\"",
		"mtime": "2026-10-19T07:51:33.476Z",
		"size": 4763,
		"path": "../public/icons/Debian-Dark.svg"
	},
	"/icons/DENO-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"2c72-L3DbCCNISXo+n3n4MyXkbhNCj1c\"",
		"mtime": "2026-10-19T07:51:32.551Z",
		"size": 11378,
		"path": "../public/icons/DENO-Dark.svg"
	},
	"/icons/Debian-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"129b-nmpqHO2KF73GdObPUJqxCVpuYAw\"",
		"mtime": "2026-10-19T07:51:33.711Z",
		"size": 4763,
		"path": "../public/icons/Debian-Light.svg"
	},
	"/icons/DENO-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"2c72-hZ+LEln6aedPrUmEItphslSNTP0\"",
		"mtime": "2026-10-19T07:51:32.780Z",
		"size": 11378,
		"path": "../public/icons/DENO-Light.svg"
	},
	"/icons/DevTo-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3ee-V9xDKot0sU+FP6f6GBYl8glycds\"",
		"mtime": "2026-10-19T07:51:33.955Z",
		"size": 1006,
		"path": "../public/icons/DevTo-Dark.svg"
	},
	"/icons/DevTo-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"3ee-cWnrZcPj/+xB6FqEHaWeBAkJRSQ\"",
		"mtime": "2026-10-19T07:51:34.178Z",
		"size": 1006,
		"path": "../public/icons/DevTo-Light.svg"
	},
	"/icons/Discord.svg": {
		"type": "image/svg+xml",
		"etag": "\"8a1-DHmtuT3qOsV36CePIAFzcpw9zTo\"",
		"mtime": "2026-10-19T07:51:34.405Z",
		"size": 2209,
		"path": "../public/icons/Discord.svg"
	},
	"/icons/DiscordBots.svg": {
		"type": "image/svg+xml",
		"etag": "\"b4e-xfDjH2PtP+xWdCNV7a42TCXtzAQ\"",
		"mtime": "2026-10-19T07:51:34.634Z",
		"size": 2894,
		"path": "../public/icons/DiscordBots.svg"
	},
	"/icons/DiscordJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"13c1-fM50/rqmr9XAmE7VGrJ6CBuFM6s\"",
		"mtime": "2026-10-19T07:51:35.093Z",
		"size": 5057,
		"path": "../public/icons/DiscordJS-Light.svg"
	},
	"/icons/DiscordJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"13c1-RyUlY83gAGUz8qfqeP3d/LnzkBI\"",
		"mtime": "2026-10-19T07:51:34.856Z",
		"size": 5057,
		"path": "../public/icons/DiscordJS-Dark.svg"
	},
	"/icons/Django.svg": {
		"type": "image/svg+xml",
		"etag": "\"39e-RlDeVX6tlXzrZKeCbts1njid6Ro\"",
		"mtime": "2026-10-19T07:51:35.316Z",
		"size": 926,
		"path": "../public/icons/Django.svg"
	},
	"/icons/DotNet.svg": {
		"type": "image/svg+xml",
		"etag": "\"466-vMfGlBdQw5DfXsyFlfHmgjIuXwc\"",
		"mtime": "2026-10-19T07:51:35.761Z",
		"size": 1126,
		"path": "../public/icons/DotNet.svg"
	},
	"/icons/Docker.svg": {
		"type": "image/svg+xml",
		"etag": "\"3c3-k7aFcG9WCdr2Cu9s66vgpl5nRDc\"",
		"mtime": "2026-10-19T07:51:35.538Z",
		"size": 963,
		"path": "../public/icons/Docker.svg"
	},
	"/icons/DynamoDB-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"753-1scQxVOvZaXG9prdpG0i8ncD48k\"",
		"mtime": "2026-10-19T07:51:36.199Z",
		"size": 1875,
		"path": "../public/icons/DynamoDB-Light.svg"
	},
	"/icons/Eclipse-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"cdd-YDY86/Aof7+UBPbVPCbTAQ42R/E\"",
		"mtime": "2026-10-19T07:51:36.414Z",
		"size": 3293,
		"path": "../public/icons/Eclipse-Dark.svg"
	},
	"/icons/DynamoDB-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"753-2L/PLpiK9jSYM6Rb1iJt7dsjG2s\"",
		"mtime": "2026-10-19T07:51:35.999Z",
		"size": 1875,
		"path": "../public/icons/DynamoDB-Dark.svg"
	},
	"/icons/Elasticsearch-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"703-9ShW0pgdNJkp+rksOU/ObKOdyjw\"",
		"mtime": "2026-10-19T07:51:36.837Z",
		"size": 1795,
		"path": "../public/icons/Elasticsearch-Dark.svg"
	},
	"/icons/Eclipse-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"cdd-tWkFTWAawLsLZ6yZPt59xjOf8hI\"",
		"mtime": "2026-10-19T07:51:36.640Z",
		"size": 3293,
		"path": "../public/icons/Eclipse-Light.svg"
	},
	"/icons/Elasticsearch-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"703-P5ZzNsSxBtRtEExs1721XMeePYE\"",
		"mtime": "2026-10-19T07:51:37.033Z",
		"size": 1795,
		"path": "../public/icons/Elasticsearch-Light.svg"
	},
	"/icons/Electron.svg": {
		"type": "image/svg+xml",
		"etag": "\"1ddf-jty4VoXamkDkHcO2DWRi2bllFv8\"",
		"mtime": "2026-10-19T07:51:37.250Z",
		"size": 7647,
		"path": "../public/icons/Electron.svg"
	},
	"/icons/Elixir-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"181b-8iZmagCLq0hRg895py0dY+NbzhA\"",
		"mtime": "2026-10-19T07:51:37.681Z",
		"size": 6171,
		"path": "../public/icons/Elixir-Light.svg"
	},
	"/icons/Elysia-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"9144-55gYDzgyFH8T4gDg1lfaoQ6SrQw\"",
		"mtime": "2026-10-19T07:51:38.129Z",
		"size": 37188,
		"path": "../public/icons/Elysia-Light.svg"
	},
	"/icons/Elixir-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1818-/NHp6vLAbZlvbmxCylhjKNOPdj8\"",
		"mtime": "2026-10-19T07:51:37.477Z",
		"size": 6168,
		"path": "../public/icons/Elixir-Dark.svg"
	},
	"/icons/Elysia-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"9144-JeYAv5P36m0BDQIs6PyCnflZ2tg\"",
		"mtime": "2026-10-19T07:51:37.911Z",
		"size": 37188,
		"path": "../public/icons/Elysia-Dark.svg"
	},
	"/icons/Emacs.svg": {
		"type": "image/svg+xml",
		"etag": "\"78c-gvDLnsUuv/ByWcx78lHLfOTGYQ0\"",
		"mtime": "2026-10-19T07:51:38.333Z",
		"size": 1932,
		"path": "../public/icons/Emacs.svg"
	},
	"/icons/Ember.svg": {
		"type": "image/svg+xml",
		"etag": "\"13419-PytgIVFHRcARIfiqORNoYOPOrEg\"",
		"mtime": "2026-10-19T07:51:38.552Z",
		"size": 78873,
		"path": "../public/icons/Ember.svg"
	},
	"/icons/ExpressJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"798-FBgPrxEjjDsP5FYANxJInj9W0tk\"",
		"mtime": "2026-10-19T07:51:39.171Z",
		"size": 1944,
		"path": "../public/icons/ExpressJS-Dark.svg"
	},
	"/icons/Emotion-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"317bb-Wnb5rHlJGVM37QJaPlkUXMBM2lE\"",
		"mtime": "2026-10-19T07:51:38.767Z",
		"size": 202683,
		"path": "../public/icons/Emotion-Dark.svg"
	},
	"/icons/FastAPI.svg": {
		"type": "image/svg+xml",
		"etag": "\"196-lwUY1tXUMIlUvtdOi9zZn6P0hCY\"",
		"mtime": "2026-10-19T07:51:39.580Z",
		"size": 406,
		"path": "../public/icons/FastAPI.svg"
	},
	"/icons/ExpressJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"79e-JBKYLW7PxKP+50YjsdUxJzCzqmE\"",
		"mtime": "2026-10-19T07:51:39.393Z",
		"size": 1950,
		"path": "../public/icons/ExpressJS-Light.svg"
	},
	"/icons/Fediverse-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"f86-08BpUui2JvvIeewAfDZdtSmssgg\"",
		"mtime": "2026-10-19T07:51:39.774Z",
		"size": 3974,
		"path": "../public/icons/Fediverse-Dark.svg"
	},
	"/icons/Figma-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"496-z0bYgR+aFLjKLFuYNoIjZkdhPho\"",
		"mtime": "2026-10-19T07:51:40.219Z",
		"size": 1174,
		"path": "../public/icons/Figma-Dark.svg"
	},
	"/icons/Fediverse-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"f86-yvg+NduYcuIBxG1w7HzxcO7upgo\"",
		"mtime": "2026-10-19T07:51:39.991Z",
		"size": 3974,
		"path": "../public/icons/Fediverse-Light.svg"
	},
	"/icons/Figma-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"496-q4rVR7JixZvDJ2co+RW6HKIvT20\"",
		"mtime": "2026-10-19T07:51:40.430Z",
		"size": 1174,
		"path": "../public/icons/Figma-Light.svg"
	},
	"/icons/Firebase-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"488c-9bNBrtTRcOqVHh3joBjOREgVrHY\"",
		"mtime": "2026-10-19T07:51:40.638Z",
		"size": 18572,
		"path": "../public/icons/Firebase-Dark.svg"
	},
	"/icons/Firebase-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"488c-LCwKmMipFguhgdDX1U8QLPVkCws\"",
		"mtime": "2026-10-19T07:51:40.858Z",
		"size": 18572,
		"path": "../public/icons/Firebase-Light.svg"
	},
	"/icons/Flask-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"442b-yJay3vxLh+HmHhBBCAY4Muz+oy0\"",
		"mtime": "2026-10-19T07:51:41.271Z",
		"size": 17451,
		"path": "../public/icons/Flask-Light.svg"
	},
	"/icons/Emotion-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"317bf-26NRRAduTslZdPyHEFK70PnddTI\"",
		"mtime": "2026-10-19T07:51:38.972Z",
		"size": 202687,
		"path": "../public/icons/Emotion-Light.svg"
	},
	"/icons/Flutter-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"2d5-7WtNTQS3hR8HMSLxSSW+ziv+MUA\"",
		"mtime": "2026-10-19T07:51:41.481Z",
		"size": 725,
		"path": "../public/icons/Flutter-Dark.svg"
	},
	"/icons/Flask-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"442b-wnEuKHvRy7DAkr18DQOUeVuHgEQ\"",
		"mtime": "2026-10-19T07:51:41.066Z",
		"size": 17451,
		"path": "../public/icons/Flask-Dark.svg"
	},
	"/icons/Flutter-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"2d5-DhnvYODSEOLdRzw+Zg8ixfr2o/M\"",
		"mtime": "2026-10-19T07:51:41.687Z",
		"size": 725,
		"path": "../public/icons/Flutter-Light.svg"
	},
	"/icons/Forth.svg": {
		"type": "image/svg+xml",
		"etag": "\"4c1-4ZUmB3X8Ur9/EYszxaeIdav0O/Q\"",
		"mtime": "2026-10-19T07:51:41.888Z",
		"size": 1217,
		"path": "../public/icons/Forth.svg"
	},
	"/icons/Fortran.svg": {
		"type": "image/svg+xml",
		"etag": "\"335-7rrzoDi2WbXlmEFwfBuBRDbjnZM\"",
		"mtime": "2026-10-19T07:51:42.106Z",
		"size": 821,
		"path": "../public/icons/Fortran.svg"
	},
	"/icons/GameMakerStudio.svg": {
		"type": "image/svg+xml",
		"etag": "\"159-kLc9UFt+DfqQNpf4kOBY23LvO64\"",
		"mtime": "2026-10-19T07:51:43.129Z",
		"size": 345,
		"path": "../public/icons/GameMakerStudio.svg"
	},
	"/icons/Gatsby.svg": {
		"type": "image/svg+xml",
		"etag": "\"270-tqJN2KdlBb8fdD+AugAcwAGXmtQ\"",
		"mtime": "2026-10-19T07:51:43.327Z",
		"size": 624,
		"path": "../public/icons/Gatsby.svg"
	},
	"/icons/GCP-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"588-lz2JQWY9/CrHbAofAquoGe3DfGo\"",
		"mtime": "2026-10-19T07:51:42.319Z",
		"size": 1416,
		"path": "../public/icons/GCP-Dark.svg"
	},
	"/icons/Gherkin-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1461-75oX+54GY3Ub+DqSSrWFHoIv8OY\"",
		"mtime": "2026-10-19T07:51:43.532Z",
		"size": 5217,
		"path": "../public/icons/Gherkin-Dark.svg"
	},
	"/icons/GCP-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"588-A5vNjxAo0OUUeie28e83YoaQ8r8\"",
		"mtime": "2026-10-19T07:51:42.520Z",
		"size": 1416,
		"path": "../public/icons/GCP-Light.svg"
	},
	"/icons/Github-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"aeb-7Wty1CbgG9F9JqXKrq03ZgjwySo\"",
		"mtime": "2026-10-19T07:51:44.690Z",
		"size": 2795,
		"path": "../public/icons/Github-Light.svg"
	},
	"/icons/Gherkin-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1461-qqaine3R0bhnUCKN7LQriBhREhk\"",
		"mtime": "2026-10-19T07:51:43.716Z",
		"size": 5217,
		"path": "../public/icons/Gherkin-Light.svg"
	},
	"/icons/Git.svg": {
		"type": "image/svg+xml",
		"etag": "\"a8c-ZoCjtpQ5+tcRdaLAWPFlKntaUq8\"",
		"mtime": "2026-10-19T07:51:43.923Z",
		"size": 2700,
		"path": "../public/icons/Git.svg"
	},
	"/icons/Github-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"ae9-1+P7LhIno5kbvhDd2Ah+Z3Tjp/o\"",
		"mtime": "2026-10-19T07:51:44.491Z",
		"size": 2793,
		"path": "../public/icons/Github-Dark.svg"
	},
	"/icons/GithubActions-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"e3b-gUqTjWQ7okiSIGbwQ8lJWl6pbKc\"",
		"mtime": "2026-10-19T07:51:44.898Z",
		"size": 3643,
		"path": "../public/icons/GithubActions-Dark.svg"
	},
	"/icons/GithubActions-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"e3b-WR/h+Xxqb1JCK6nFa1R0uC3Kj3c\"",
		"mtime": "2026-10-19T07:51:45.090Z",
		"size": 3643,
		"path": "../public/icons/GithubActions-Light.svg"
	},
	"/icons/GitLab-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3f3-fJRFe0RgFl/x/ApypuXY+dQqEFI\"",
		"mtime": "2026-10-19T07:51:44.128Z",
		"size": 1011,
		"path": "../public/icons/GitLab-Dark.svg"
	},
	"/icons/Gmail-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"2e5-ovfBTqzcq5ieQQCgiYIm7vydxOQ\"",
		"mtime": "2026-10-19T07:51:45.488Z",
		"size": 741,
		"path": "../public/icons/Gmail-Light.svg"
	},
	"/icons/GitLab-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"3f3-gDmlxT5yjwZ16nvJAGnXZN0MQBs\"",
		"mtime": "2026-10-19T07:51:44.310Z",
		"size": 1011,
		"path": "../public/icons/GitLab-Light.svg"
	},
	"/icons/Gmail-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"2e7-t2RYEvGgpPMa9vBNf08uLyhc9Cs\"",
		"mtime": "2026-10-19T07:51:45.295Z",
		"size": 743,
		"path": "../public/icons/Gmail-Dark.svg"
	},
	"/icons/Godot-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"110b-wigWK1/OTx7F/XprUw4RIWW692Y\"",
		"mtime": "2026-10-19T07:51:46.075Z",
		"size": 4363,
		"path": "../public/icons/Godot-Light.svg"
	},
	"/icons/Godot-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"10fc-aHoWWJ+cOzyUUkZPxggldRbKYpQ\"",
		"mtime": "2026-10-19T07:51:45.852Z",
		"size": 4348,
		"path": "../public/icons/Godot-Dark.svg"
	},
	"/icons/GoLang.svg": {
		"type": "image/svg+xml",
		"etag": "\"9e1-GCAfrEoyP9c15VpWbW3SGL5S3SY\"",
		"mtime": "2026-10-19T07:51:45.674Z",
		"size": 2529,
		"path": "../public/icons/GoLang.svg"
	},
	"/icons/Gradle-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"c9c-6Eh9YM+0iVINBc4WweSJpRhO+Kw\"",
		"mtime": "2026-10-19T07:51:46.295Z",
		"size": 3228,
		"path": "../public/icons/Gradle-Dark.svg"
	},
	"/icons/Gradle-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"c9e-8MW1ikaiNVGXxxdHmEyTbAZ8ZL4\"",
		"mtime": "2026-10-19T07:51:46.480Z",
		"size": 3230,
		"path": "../public/icons/Gradle-Light.svg"
	},
	"/icons/Grafana-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"2329-Q2PcT7SbJU+Rnrco9zMsQyL1ix8\"",
		"mtime": "2026-10-19T07:51:46.679Z",
		"size": 9001,
		"path": "../public/icons/Grafana-Dark.svg"
	},
	"/icons/Grafana-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"2329-5l2DKzxq0xhFutBlMy17zQjPFeo\"",
		"mtime": "2026-10-19T07:51:46.875Z",
		"size": 9001,
		"path": "../public/icons/Grafana-Light.svg"
	},
	"/icons/GraphQL-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"952-CGekilxwI8CTMZmyjH3qvRBJIl4\"",
		"mtime": "2026-10-19T07:51:47.062Z",
		"size": 2386,
		"path": "../public/icons/GraphQL-Dark.svg"
	},
	"/icons/GraphQL-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"953-7ETmQUeEvrKGzsDtsLyOkdPo3Ak\"",
		"mtime": "2026-10-19T07:51:47.259Z",
		"size": 2387,
		"path": "../public/icons/GraphQL-Light.svg"
	},
	"/icons/GTK-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"2d8-qMW7DbcvvFztOJZsXmaz2Agwx/0\"",
		"mtime": "2026-10-19T07:51:42.756Z",
		"size": 728,
		"path": "../public/icons/GTK-Dark.svg"
	},
	"/icons/GTK-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"2d8-oSNsgmBWSTurURziw8kXSseswOo\"",
		"mtime": "2026-10-19T07:51:42.934Z",
		"size": 728,
		"path": "../public/icons/GTK-Light.svg"
	},
	"/icons/Gulp.svg": {
		"type": "image/svg+xml",
		"etag": "\"dcc-a37Xinsesuw881iA99IR4dAPDVE\"",
		"mtime": "2026-10-19T07:51:47.485Z",
		"size": 3532,
		"path": "../public/icons/Gulp.svg"
	},
	"/icons/Haskell-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"25a-9rT49lQT1SjH/3TltQxb1oXK6Yc\"",
		"mtime": "2026-10-19T07:51:47.851Z",
		"size": 602,
		"path": "../public/icons/Haskell-Dark.svg"
	},
	"/icons/Haskell-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"25a-iFToFGf+vTfE0dzLH6zma4djVzM\"",
		"mtime": "2026-10-19T07:51:48.031Z",
		"size": 602,
		"path": "../public/icons/Haskell-Light.svg"
	},
	"/icons/Haxe-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"51b-QfMepV2Pdg9x6Cl+8IlOBHeGJag\"",
		"mtime": "2026-10-19T07:51:48.222Z",
		"size": 1307,
		"path": "../public/icons/Haxe-Dark.svg"
	},
	"/icons/Haxe-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"51b-FglpNGkp+Pjg+nJL/oEz9/nhyDw\"",
		"mtime": "2026-10-19T07:51:48.404Z",
		"size": 1307,
		"path": "../public/icons/Haxe-Light.svg"
	},
	"/icons/HaxeFlixel-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"283-/xGvetDDuZ+v++3VcEKBxFdktYQ\"",
		"mtime": "2026-10-19T07:51:48.774Z",
		"size": 643,
		"path": "../public/icons/HaxeFlixel-Light.svg"
	},
	"/icons/HaxeFlixel-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"26c-0MpE7ccvw0DEySuMaRM1gsezYMk\"",
		"mtime": "2026-10-19T07:51:48.577Z",
		"size": 620,
		"path": "../public/icons/HaxeFlixel-Dark.svg"
	},
	"/icons/Heroku.svg": {
		"type": "image/svg+xml",
		"etag": "\"26e-w+gfvEugGYYP5HB4MDSXNcze2+0\"",
		"mtime": "2026-10-19T07:51:48.963Z",
		"size": 622,
		"path": "../public/icons/Heroku.svg"
	},
	"/icons/Hibernate-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"220-xTdGD1H95Y7H8dn8R+o3OSRZwTQ\"",
		"mtime": "2026-10-19T07:51:49.343Z",
		"size": 544,
		"path": "../public/icons/Hibernate-Light.svg"
	},
	"/icons/Hibernate-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"220-ibF20yLPSFT/OEINklzbxSSFByg\"",
		"mtime": "2026-10-19T07:51:49.153Z",
		"size": 544,
		"path": "../public/icons/Hibernate-Dark.svg"
	},
	"/icons/HTML.svg": {
		"type": "image/svg+xml",
		"etag": "\"27f-tckPTRcPFF5/lxPv7L7KqUesmXk\"",
		"mtime": "2026-10-19T07:51:47.671Z",
		"size": 639,
		"path": "../public/icons/HTML.svg"
	},
	"/icons/Htmx-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"c1e-9eA3anRBzeIP6gs7SD0a0/697tg\"",
		"mtime": "2026-10-19T07:51:49.540Z",
		"size": 3102,
		"path": "../public/icons/Htmx-Dark.svg"
	},
	"/icons/Idea-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"d4a-zKpn5jIfkkVpYAifEIMO1UTIqMs\"",
		"mtime": "2026-10-19T07:51:50.438Z",
		"size": 3402,
		"path": "../public/icons/Idea-Light.svg"
	},
	"/icons/Htmx-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"c1e-ePKU+LZH8AnwTi6weIP9hyjahks\"",
		"mtime": "2026-10-19T07:51:49.717Z",
		"size": 3102,
		"path": "../public/icons/Htmx-Light.svg"
	},
	"/icons/Idea-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"d4a-99zrQJsdNgscKi36PmgG2/pxnII\"",
		"mtime": "2026-10-19T07:51:50.261Z",
		"size": 3402,
		"path": "../public/icons/Idea-Dark.svg"
	},
	"/icons/Illustrator.svg": {
		"type": "image/svg+xml",
		"etag": "\"6c3-0lgN1Lo/XhX2sM45yXcOIxnf+dI\"",
		"mtime": "2026-10-19T07:51:50.614Z",
		"size": 1731,
		"path": "../public/icons/Illustrator.svg"
	},
	"/icons/Instagram.svg": {
		"type": "image/svg+xml",
		"etag": "\"f5a-9lob1Aw28Z571AaJK8hwtKP5Nqg\"",
		"mtime": "2026-10-19T07:51:50.806Z",
		"size": 3930,
		"path": "../public/icons/Instagram.svg"
	},
	"/icons/IPFS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"10b3-nRmcTgzLi6qv11Me4Upgq4a0yoI\"",
		"mtime": "2026-10-19T07:51:49.901Z",
		"size": 4275,
		"path": "../public/icons/IPFS-Dark.svg"
	},
	"/icons/IPFS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"10b1-ERJ6MIkSQIe6KDUzAtvUVkqf1GQ\"",
		"mtime": "2026-10-19T07:51:50.082Z",
		"size": 4273,
		"path": "../public/icons/IPFS-Light.svg"
	},
	"/icons/Java-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"868-VGkrptzHcwX51kFSSUfT0vgqumU\"",
		"mtime": "2026-10-19T07:51:51.141Z",
		"size": 2152,
		"path": "../public/icons/Java-Dark.svg"
	},
	"/icons/JavaScript.svg": {
		"type": "image/svg+xml",
		"etag": "\"454-GowxpB4T1s7LujAPjf8sH00vEio\"",
		"mtime": "2026-10-19T07:51:51.508Z",
		"size": 1108,
		"path": "../public/icons/JavaScript.svg"
	},
	"/icons/Java-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"86b-ebNK/x4/N01Br+QVo/Lh/T/Vw3k\"",
		"mtime": "2026-10-19T07:51:51.345Z",
		"size": 2155,
		"path": "../public/icons/Java-Light.svg"
	},
	"/icons/Jenkins-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"6313-c9NEuhdugH3DVPqHA2ei+qI3OPs\"",
		"mtime": "2026-10-19T07:51:51.678Z",
		"size": 25363,
		"path": "../public/icons/Jenkins-Dark.svg"
	},
	"/icons/Jenkins-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"6313-DSj44n5YkBGVx2JqnCkHrpc2VZY\"",
		"mtime": "2026-10-19T07:51:51.845Z",
		"size": 25363,
		"path": "../public/icons/Jenkins-Light.svg"
	},
	"/icons/Jest.svg": {
		"type": "image/svg+xml",
		"etag": "\"1363-CMj72b4YEDXwIVPpHmbLPGtrrJY\"",
		"mtime": "2026-10-19T07:51:52.024Z",
		"size": 4963,
		"path": "../public/icons/Jest.svg"
	},
	"/icons/Julia-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"346-X5+LVvlWF4cNj4v9FxMPOeRYKdw\"",
		"mtime": "2026-10-19T07:51:52.206Z",
		"size": 838,
		"path": "../public/icons/Julia-Dark.svg"
	},
	"/icons/JQuery.svg": {
		"type": "image/svg+xml",
		"etag": "\"3385-9N0qoNjgMr4qcbXp++pC7mOYbks\"",
		"mtime": "2026-10-19T07:51:50.966Z",
		"size": 13189,
		"path": "../public/icons/JQuery.svg"
	},
	"/icons/Julia-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"346-zjd+iA6sojwJ+JIR0lUVHR1QZf8\"",
		"mtime": "2026-10-19T07:51:52.368Z",
		"size": 838,
		"path": "../public/icons/Julia-Light.svg"
	},
	"/icons/Kafka.svg": {
		"type": "image/svg+xml",
		"etag": "\"a25-zr69EfcZAqIxZycDKfOJT3V/Nrw\"",
		"mtime": "2026-10-19T07:51:52.539Z",
		"size": 2597,
		"path": "../public/icons/Kafka.svg"
	},
	"/icons/Kali-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3267-orRAvfrycoB8lYaTTX0ETEyKTYw\"",
		"mtime": "2026-10-19T07:51:52.738Z",
		"size": 12903,
		"path": "../public/icons/Kali-Dark.svg"
	},
	"/icons/Kotlin-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"206-AJ/QcScRxqhKoWm+K17a3ZxBEVQ\"",
		"mtime": "2026-10-19T07:51:53.070Z",
		"size": 518,
		"path": "../public/icons/Kotlin-Dark.svg"
	},
	"/icons/Kali-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"3285-nDLU2+RmF2zZsPYdQaXcn3zEH+8\"",
		"mtime": "2026-10-19T07:51:52.905Z",
		"size": 12933,
		"path": "../public/icons/Kali-Light.svg"
	},
	"/icons/Kotlin-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"206-2AO3ntATNKPH2IwPMNvjBfz9uu8\"",
		"mtime": "2026-10-19T07:51:53.268Z",
		"size": 518,
		"path": "../public/icons/Kotlin-Light.svg"
	},
	"/icons/Kubernetes.svg": {
		"type": "image/svg+xml",
		"etag": "\"1a8f-dURc5eJyoASV42Gwo12aeBNY3F0\"",
		"mtime": "2026-10-19T07:51:53.756Z",
		"size": 6799,
		"path": "../public/icons/Kubernetes.svg"
	},
	"/icons/Ktor-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1b0-EqhTF57IkRmfVs6AyCM12Vrq0DI\"",
		"mtime": "2026-10-19T07:51:53.586Z",
		"size": 432,
		"path": "../public/icons/Ktor-Light.svg"
	},
	"/icons/Ktor-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1b0-EAHVvod5RQiuW6Jtz88BlJTRDtk\"",
		"mtime": "2026-10-19T07:51:53.428Z",
		"size": 432,
		"path": "../public/icons/Ktor-Dark.svg"
	},
	"/icons/Laravel-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"e17-Sj9nXJbOW/Yn1N/IgSVGO01+8cs\"",
		"mtime": "2026-10-19T07:51:54.280Z",
		"size": 3607,
		"path": "../public/icons/Laravel-Dark.svg"
	},
	"/icons/Laravel-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"e17-vBpR7Ea4/dt1RFOyHJCx/++KNY4\"",
		"mtime": "2026-10-19T07:51:54.469Z",
		"size": 3607,
		"path": "../public/icons/Laravel-Light.svg"
	},
	"/icons/LaTeX-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"39d6-M2AnwFk6VARKw/bg2bWsj+MVhMg\"",
		"mtime": "2026-10-19T07:51:54.120Z",
		"size": 14806,
		"path": "../public/icons/LaTeX-Light.svg"
	},
	"/icons/LaTeX-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"39d6-z+oI7ZVHNivbIYbtPu1cwVyVYQc\"",
		"mtime": "2026-10-19T07:51:53.930Z",
		"size": 14806,
		"path": "../public/icons/LaTeX-Dark.svg"
	},
	"/icons/Less-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"130f-dWK34aDX6Enh0TqReY73puV1pZA\"",
		"mtime": "2026-10-19T07:51:54.645Z",
		"size": 4879,
		"path": "../public/icons/Less-Dark.svg"
	},
	"/icons/Less-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"130f-HcV0Hx+HyB95Gmdhz2tEfU9Q8Oo\"",
		"mtime": "2026-10-19T07:51:54.802Z",
		"size": 4879,
		"path": "../public/icons/Less-Light.svg"
	},
	"/icons/LinkedIn.svg": {
		"type": "image/svg+xml",
		"etag": "\"50b-fnNu7nwmEebj7YPYgNChFEIirP4\"",
		"mtime": "2026-10-19T07:51:54.978Z",
		"size": 1291,
		"path": "../public/icons/LinkedIn.svg"
	},
	"/icons/Linux-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1c62-suDJSftQ5QRuk5YRg9Ae1s7N5oU\"",
		"mtime": "2026-10-19T07:51:55.165Z",
		"size": 7266,
		"path": "../public/icons/Linux-Dark.svg"
	},
	"/icons/Linux-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1c5f-gxne8z9XKLUcSJq79eilIGLFD1M\"",
		"mtime": "2026-10-19T07:51:55.357Z",
		"size": 7263,
		"path": "../public/icons/Linux-Light.svg"
	},
	"/icons/Lit-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1c6-J9iJHKYmaE8OzAypX0/n9kHoTlg\"",
		"mtime": "2026-10-19T07:51:55.511Z",
		"size": 454,
		"path": "../public/icons/Lit-Dark.svg"
	},
	"/icons/Lit-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1c6-om3moTjX6vfq/gTk9C9b3YfGxKQ\"",
		"mtime": "2026-10-19T07:51:55.679Z",
		"size": 454,
		"path": "../public/icons/Lit-Light.svg"
	},
	"/icons/Lua-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"a9c-FoZfo+JET1RbqIatVDeipdxRkg0\"",
		"mtime": "2026-10-19T07:51:55.852Z",
		"size": 2716,
		"path": "../public/icons/Lua-Dark.svg"
	},
	"/icons/Lua-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"a9c-oAFwOm0G2DwFHzee9ibA+8Dg8Q4\"",
		"mtime": "2026-10-19T07:51:56.028Z",
		"size": 2716,
		"path": "../public/icons/Lua-Light.svg"
	},
	"/icons/Markdown-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1df-sfALC+6dIsr+w8qO5coHOBQ3gzI\"",
		"mtime": "2026-10-19T07:51:56.186Z",
		"size": 479,
		"path": "../public/icons/Markdown-Dark.svg"
	},
	"/icons/Mastodon-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"611-q5nCxUAcP+Erioc6a+yxbx5vTms\"",
		"mtime": "2026-10-19T07:51:56.733Z",
		"size": 1553,
		"path": "../public/icons/Mastodon-Light.svg"
	},
	"/icons/Markdown-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1df-Xq3mRHOC5R+qBrwRu0oKqewg+I8\"",
		"mtime": "2026-10-19T07:51:56.359Z",
		"size": 479,
		"path": "../public/icons/Markdown-Light.svg"
	},
	"/icons/Mastodon-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"611-g/SBRzvQK2sy6Gehne4VUTSaV08\"",
		"mtime": "2026-10-19T07:51:56.544Z",
		"size": 1553,
		"path": "../public/icons/Mastodon-Dark.svg"
	},
	"/icons/MaterialUI-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"e81-O1i8XPZN70phDVZ9TGu1xP2qrkI\"",
		"mtime": "2026-10-19T07:51:56.912Z",
		"size": 3713,
		"path": "../public/icons/MaterialUI-Dark.svg"
	},
	"/icons/MaterialUI-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"e81-9Y8tj0haVmiwcz5DQXlWYyivxzw\"",
		"mtime": "2026-10-19T07:51:57.089Z",
		"size": 3713,
		"path": "../public/icons/MaterialUI-Light.svg"
	},
	"/icons/Matlab-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"8e6-ZrRdWTs48qtl4EFVMmozzq4WJJs\"",
		"mtime": "2026-10-19T07:51:57.258Z",
		"size": 2278,
		"path": "../public/icons/Matlab-Dark.svg"
	},
	"/icons/Maven-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"51b8-IQuZ+jt5TSG3MBGoMNDtdnXvecI\"",
		"mtime": "2026-10-19T07:51:57.780Z",
		"size": 20920,
		"path": "../public/icons/Maven-Light.svg"
	},
	"/icons/Matlab-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"8e6-9u0WcQMfJ/8jQoyAjYC5rsfIqqg\"",
		"mtime": "2026-10-19T07:51:57.414Z",
		"size": 2278,
		"path": "../public/icons/Matlab-Light.svg"
	},
	"/icons/Maven-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"51b8-TdD2vuJMsYJ5YMmKuRavm8uDedY\"",
		"mtime": "2026-10-19T07:51:57.609Z",
		"size": 20920,
		"path": "../public/icons/Maven-Dark.svg"
	},
	"/icons/Mint-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"6de-4LrIEpvNbmS6UrVX1eOs+/sKsYA\"",
		"mtime": "2026-10-19T07:51:58.119Z",
		"size": 1758,
		"path": "../public/icons/Mint-Light.svg"
	},
	"/icons/Mint-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"6de-6QOtTqsM+vR5hMTdbdPMaZ1+F/M\"",
		"mtime": "2026-10-19T07:51:57.952Z",
		"size": 1758,
		"path": "../public/icons/Mint-Dark.svg"
	},
	"/icons/Misskey-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"81b-PSml0vRuRZ8GsyMdO63Ta8POk4Y\"",
		"mtime": "2026-10-19T07:51:58.279Z",
		"size": 2075,
		"path": "../public/icons/Misskey-Dark.svg"
	},
	"/icons/Misskey-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"81b-F5izFKv8j4E1bB3L5GoFjP17u9E\"",
		"mtime": "2026-10-19T07:51:58.442Z",
		"size": 2075,
		"path": "../public/icons/Misskey-Light.svg"
	},
	"/icons/MySQL-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"fad-ocY2c0D3td0QwAHBdnMFYSduXXs\"",
		"mtime": "2026-10-19T07:51:58.784Z",
		"size": 4013,
		"path": "../public/icons/MySQL-Dark.svg"
	},
	"/icons/MongoDB.svg": {
		"type": "image/svg+xml",
		"etag": "\"44b-+9re04efuA2c0sJgD3xYryPC8Nk\"",
		"mtime": "2026-10-19T07:51:58.621Z",
		"size": 1099,
		"path": "../public/icons/MongoDB.svg"
	},
	"/icons/MySQL-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"fb0-bP7V6hFKE5W9v7546cAxfk6D1Aw\"",
		"mtime": "2026-10-19T07:51:58.952Z",
		"size": 4016,
		"path": "../public/icons/MySQL-Light.svg"
	},
	"/icons/NeoVim-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"5f1-VdjudHnL+SRGYdZX7wULGqmdO5U\"",
		"mtime": "2026-10-19T07:51:59.111Z",
		"size": 1521,
		"path": "../public/icons/NeoVim-Dark.svg"
	},
	"/icons/NeoVim-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"5f1-X/u6biTtZmtSIhyXCJsWJvVwCpE\"",
		"mtime": "2026-10-19T07:51:59.255Z",
		"size": 1521,
		"path": "../public/icons/NeoVim-Light.svg"
	},
	"/icons/Netlify-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1cc8-JfrpU1b3XXn3k/Tw8PPhNt/3JiI\"",
		"mtime": "2026-10-19T07:51:59.709Z",
		"size": 7368,
		"path": "../public/icons/Netlify-Dark.svg"
	},
	"/icons/NestJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"324a-/IxNiqGGXxdSzy9MKqR+oFI5Uyc\"",
		"mtime": "2026-10-19T07:51:59.551Z",
		"size": 12874,
		"path": "../public/icons/NestJS-Light.svg"
	},
	"/icons/NestJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"324a-jeU2y/mpR8NmQcsuXJHi9lPzf9Y\"",
		"mtime": "2026-10-19T07:51:59.403Z",
		"size": 12874,
		"path": "../public/icons/NestJS-Dark.svg"
	},
	"/icons/NextJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"807-k/GeIHDOeAyCaZA3LskQhTt3gwA\"",
		"mtime": "2026-10-19T07:52:00.041Z",
		"size": 2055,
		"path": "../public/icons/NextJS-Dark.svg"
	},
	"/icons/Netlify-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1cc8-U/qNjjnVG++7dX80NmcVC7xwu50\"",
		"mtime": "2026-10-19T07:51:59.873Z",
		"size": 7368,
		"path": "../public/icons/Netlify-Light.svg"
	},
	"/icons/NextJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"807-SfKHvL8nVcyCLlRG+cG9qJ6ygMc\"",
		"mtime": "2026-10-19T07:52:00.201Z",
		"size": 2055,
		"path": "../public/icons/NextJS-Light.svg"
	},
	"/icons/Nim-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"524-G+PVyTnNyjMC97GcyThVhYqvn18\"",
		"mtime": "2026-10-19T07:52:00.485Z",
		"size": 1316,
		"path": "../public/icons/Nim-Dark.svg"
	},
	"/icons/Nim-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"529-+hXglPD5eOakNCs5usEAZ/g/EM4\"",
		"mtime": "2026-10-19T07:52:00.645Z",
		"size": 1321,
		"path": "../public/icons/Nim-Light.svg"
	},
	"/icons/Nginx.svg": {
		"type": "image/svg+xml",
		"etag": "\"279-rNjoaOFSdF/2sp7/QCvPde9RMD0\"",
		"mtime": "2026-10-19T07:52:00.348Z",
		"size": 633,
		"path": "../public/icons/Nginx.svg"
	},
	"/icons/Nix-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"e89-vLCGnk0RpsLnKriLxqwbUVs8PAM\"",
		"mtime": "2026-10-19T07:52:00.796Z",
		"size": 3721,
		"path": "../public/icons/Nix-Dark.svg"
	},
	"/icons/NodeJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"d3d-KNcDPRsgmIfXpKs1myNtqlk3Kl0\"",
		"mtime": "2026-10-19T07:52:01.118Z",
		"size": 3389,
		"path": "../public/icons/NodeJS-Dark.svg"
	},
	"/icons/NodeJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"d3f-7fAqBax5QucREdaW0HgcFemCjbY\"",
		"mtime": "2026-10-19T07:52:01.270Z",
		"size": 3391,
		"path": "../public/icons/NodeJS-Light.svg"
	},
	"/icons/Nix-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"e89-eur6V0ZRx6AdOPcBUNwCi0sMgsg\"",
		"mtime": "2026-10-19T07:52:00.958Z",
		"size": 3721,
		"path": "../public/icons/Nix-Light.svg"
	},
	"/icons/Notion-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"995-+zi3ncnId/UVaEEZ2fdj7cEyH98\"",
		"mtime": "2026-10-19T07:52:01.419Z",
		"size": 2453,
		"path": "../public/icons/Notion-Dark.svg"
	},
	"/icons/Npm-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"508-TIdTqiSJgvSd+Z3if9xR2ZYzRB4\"",
		"mtime": "2026-10-19T07:52:01.863Z",
		"size": 1288,
		"path": "../public/icons/Npm-Light.svg"
	},
	"/icons/Npm-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"508-ICmExXJtBvYUsDz2xt3P1klwPO8\"",
		"mtime": "2026-10-19T07:52:01.723Z",
		"size": 1288,
		"path": "../public/icons/Npm-Dark.svg"
	},
	"/icons/NuxtJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"4ef-whPXZNr07HE5E07vNSaxfd2wd40\"",
		"mtime": "2026-10-19T07:52:02.024Z",
		"size": 1263,
		"path": "../public/icons/NuxtJS-Dark.svg"
	},
	"/icons/Notion-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"995-Oa+YqCfVPhdlUCRhYxPDe8Ps/HE\"",
		"mtime": "2026-10-19T07:52:01.582Z",
		"size": 2453,
		"path": "../public/icons/Notion-Light.svg"
	},
	"/icons/Obsidian-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1e93-J26yrdJ+iGoXBo76uNPS6LH1NTI\"",
		"mtime": "2026-10-19T07:52:02.451Z",
		"size": 7827,
		"path": "../public/icons/Obsidian-Dark.svg"
	},
	"/icons/Obsidian-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1e93-r2ATIzfgqPGyhF6Ud4lyyZLR2Mw\"",
		"mtime": "2026-10-19T07:52:02.591Z",
		"size": 7827,
		"path": "../public/icons/Obsidian-Light.svg"
	},
	"/icons/OCaml.svg": {
		"type": "image/svg+xml",
		"etag": "\"106a-hzooBgg8DI/OA3RV0iWXbjf6UOs\"",
		"mtime": "2026-10-19T07:52:02.307Z",
		"size": 4202,
		"path": "../public/icons/OCaml.svg"
	},
	"/icons/NuxtJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"4ef-i5GHc0KVAutXzPlpG0qeAxTfnuk\"",
		"mtime": "2026-10-19T07:52:02.168Z",
		"size": 1263,
		"path": "../public/icons/NuxtJS-Light.svg"
	},
	"/icons/Octave-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"721-JsQh70Iey5harrZ7w3nezBasOc8\"",
		"mtime": "2026-10-19T07:52:02.903Z",
		"size": 1825,
		"path": "../public/icons/Octave-Light.svg"
	},
	"/icons/Octave-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"721-ayYmeOeLwYRN+fXZpssUN9cQtM0\"",
		"mtime": "2026-10-19T07:52:02.738Z",
		"size": 1825,
		"path": "../public/icons/Octave-Dark.svg"
	},
	"/icons/OpenCV-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"a49-cMBUYJSA6vuyZawHgX4GY0cY4gk\"",
		"mtime": "2026-10-19T07:52:03.049Z",
		"size": 2633,
		"path": "../public/icons/OpenCV-Dark.svg"
	},
	"/icons/OpenCV-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"a49-bpOudLbBb+6wqrfBoTY50TbAF70\"",
		"mtime": "2026-10-19T07:52:03.205Z",
		"size": 2633,
		"path": "../public/icons/OpenCV-Light.svg"
	},
	"/icons/OpenStack-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"417-tKENoSbxCLT8JVJaZDmRlVHFreM\"",
		"mtime": "2026-10-19T07:52:03.493Z",
		"size": 1047,
		"path": "../public/icons/OpenStack-Dark.svg"
	},
	"/icons/OpenShift.svg": {
		"type": "image/svg+xml",
		"etag": "\"1137-wQsYTMdvHpRhZkr5CzKzPV7DbC4\"",
		"mtime": "2026-10-19T07:52:03.360Z",
		"size": 4407,
		"path": "../public/icons/OpenShift.svg"
	},
	"/icons/OpenStack-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"417-Qeqer36z+fHrgzPORppJlq9wr6k\"",
		"mtime": "2026-10-19T07:52:03.629Z",
		"size": 1047,
		"path": "../public/icons/OpenStack-Light.svg"
	},
	"/icons/p5js.svg": {
		"type": "image/svg+xml",
		"etag": "\"d06-jEdApSg9lwH+pVdo3TENrOW5Jq0\"",
		"mtime": "2026-10-19T07:52:21.004Z",
		"size": 3334,
		"path": "../public/icons/p5js.svg"
	},
	"/icons/Photoshop.svg": {
		"type": "image/svg+xml",
		"etag": "\"c83-oJLBRsQGxW4dAUJ3sWoVF8di7vs\"",
		"mtime": "2026-10-19T07:52:04.237Z",
		"size": 3203,
		"path": "../public/icons/Photoshop.svg"
	},
	"/icons/Perl.svg": {
		"type": "image/svg+xml",
		"etag": "\"3128-sxtdiikgyvT39iL7EeDRgxCeLKQ\"",
		"mtime": "2026-10-19T07:52:04.097Z",
		"size": 12584,
		"path": "../public/icons/Perl.svg"
	},
	"/icons/PHP-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"7fe-EbzfoAf2qk8sGj1YIXXUcpi3nos\"",
		"mtime": "2026-10-19T07:52:03.776Z",
		"size": 2046,
		"path": "../public/icons/PHP-Dark.svg"
	},
	"/icons/PHP-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"7fe-Zok4FvFJCxjDOA2wqfyXfCJyjQA\"",
		"mtime": "2026-10-19T07:52:03.945Z",
		"size": 2046,
		"path": "../public/icons/PHP-Light.svg"
	},
	"/icons/PhpStorm-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"c60-t52oXKV+8eX5m2krMnfpFy4PjZ8\"",
		"mtime": "2026-10-19T07:52:04.512Z",
		"size": 3168,
		"path": "../public/icons/PhpStorm-Light.svg"
	},
	"/icons/PhpStorm-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"c60-+i369rEXMuqvutDAeItggrxyODI\"",
		"mtime": "2026-10-19T07:52:04.373Z",
		"size": 3168,
		"path": "../public/icons/PhpStorm-Dark.svg"
	},
	"/icons/Pinia-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"186d-8SlJsz1ypBoAOGJmRZkLZ7+DCro\"",
		"mtime": "2026-10-19T07:52:04.657Z",
		"size": 6253,
		"path": "../public/icons/Pinia-Dark.svg"
	},
	"/icons/Pinia-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"186d-A7VQMRZtMcRNOPwv+aTvac04IP8\"",
		"mtime": "2026-10-19T07:52:04.789Z",
		"size": 6253,
		"path": "../public/icons/Pinia-Light.svg"
	},
	"/icons/Pkl-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"ef7-m62CsfyRR/483JbLOIlwVgkUKss\"",
		"mtime": "2026-10-19T07:52:05.067Z",
		"size": 3831,
		"path": "../public/icons/Pkl-Light.svg"
	},
	"/icons/Pkl-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"ef7-WI53khPbldD5Pc7jhHB4oemtwF8\"",
		"mtime": "2026-10-19T07:52:04.917Z",
		"size": 3831,
		"path": "../public/icons/Pkl-Dark.svg"
	},
	"/icons/PlanetScale-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"203-xnEAVCp+CYI43s3FDe2NQxff36Y\"",
		"mtime": "2026-10-19T07:52:05.526Z",
		"size": 515,
		"path": "../public/icons/PlanetScale-Dark.svg"
	},
	"/icons/PlanetScale-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"201-5WUWLK3KxdGij5zesdPCbvPmywY\"",
		"mtime": "2026-10-19T07:52:05.668Z",
		"size": 513,
		"path": "../public/icons/PlanetScale-Light.svg"
	},
	"/icons/Pnpm-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3c4-kaG7Csu1BENFA7HCLYS+xqjxww8\"",
		"mtime": "2026-10-19T07:52:05.803Z",
		"size": 964,
		"path": "../public/icons/Pnpm-Dark.svg"
	},
	"/icons/Plan9-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"5033e-6Y9VsQok+kLGg+OYkL1VpBZ8N0c\"",
		"mtime": "2026-10-19T07:52:05.237Z",
		"size": 328510,
		"path": "../public/icons/Plan9-Dark.svg"
	},
	"/icons/Plan9-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"5033e-DcUstBxW7bUT0AVYSw90esP7GGs\"",
		"mtime": "2026-10-19T07:52:05.389Z",
		"size": 328510,
		"path": "../public/icons/Plan9-Light.svg"
	},
	"/icons/Pnpm-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"3c4-eemuQDnXje7370xsi2kEI3bO3y8\"",
		"mtime": "2026-10-19T07:52:05.935Z",
		"size": 964,
		"path": "../public/icons/Pnpm-Light.svg"
	},
	"/icons/PostgreSQL-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"eb9-sVNMOkslyeUFrhyAHcUK6hS7nPg\"",
		"mtime": "2026-10-19T07:52:06.068Z",
		"size": 3769,
		"path": "../public/icons/PostgreSQL-Dark.svg"
	},
	"/icons/PostgreSQL-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"17a7-g+Y4LMZXT7Jp9/55K4Mz+700Qrc\"",
		"mtime": "2026-10-19T07:52:06.203Z",
		"size": 6055,
		"path": "../public/icons/PostgreSQL-Light.svg"
	},
	"/icons/Postman.svg": {
		"type": "image/svg+xml",
		"etag": "\"2062-/1DB0dowxXr6ZvvqLy5RkIvf3cM\"",
		"mtime": "2026-10-19T07:52:06.336Z",
		"size": 8290,
		"path": "../public/icons/Postman.svg"
	},
	"/icons/Powershell-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"112a-8nr8Rlavoe7rD2mZBwykExlBqFM\"",
		"mtime": "2026-10-19T07:52:06.464Z",
		"size": 4394,
		"path": "../public/icons/Powershell-Dark.svg"
	},
	"/icons/Powershell-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"112a-ykn6tLvoMk4F+2lhwW+PNQ7hoOc\"",
		"mtime": "2026-10-19T07:52:06.589Z",
		"size": 4394,
		"path": "../public/icons/Powershell-Light.svg"
	},
	"/icons/Prisma.svg": {
		"type": "image/svg+xml",
		"etag": "\"2bf-RPdcBezMSzcdmB+/PSBjTmChRY8\"",
		"mtime": "2026-10-19T07:52:06.889Z",
		"size": 703,
		"path": "../public/icons/Prisma.svg"
	},
	"/icons/Premiere.svg": {
		"type": "image/svg+xml",
		"etag": "\"8dc-MVZ/G7E1YYZ2KHXT8nSGQcX2KtE\"",
		"mtime": "2026-10-19T07:52:06.719Z",
		"size": 2268,
		"path": "../public/icons/Premiere.svg"
	},
	"/icons/Processing-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1ae-QemQU7JSqX28M/slkbV24R4jeP0\"",
		"mtime": "2026-10-19T07:52:07.173Z",
		"size": 430,
		"path": "../public/icons/Processing-Light.svg"
	},
	"/icons/Processing-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1ae-iA6XzWbNpIadmkC736MB+Rc/asM\"",
		"mtime": "2026-10-19T07:52:07.044Z",
		"size": 430,
		"path": "../public/icons/Processing-Dark.svg"
	},
	"/icons/Pug-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"313b-z+BDJNtwD2a0dCv9dWCkc+TDdJg\"",
		"mtime": "2026-10-19T07:52:07.449Z",
		"size": 12603,
		"path": "../public/icons/Pug-Dark.svg"
	},
	"/icons/Prometheus.svg": {
		"type": "image/svg+xml",
		"etag": "\"49d-Yg+U2O/gPWOujFLl4hdKHueQNxg\"",
		"mtime": "2026-10-19T07:52:07.304Z",
		"size": 1181,
		"path": "../public/icons/Prometheus.svg"
	},
	"/icons/PyCharm-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"df4-WLlsBC5ioiAs+FNKGOvq++7tmFE\"",
		"mtime": "2026-10-19T07:52:07.720Z",
		"size": 3572,
		"path": "../public/icons/PyCharm-Dark.svg"
	},
	"/icons/Pug-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"3140-vj61NA2SwCrvZK+EIUm+lIbXlhE\"",
		"mtime": "2026-10-19T07:52:07.594Z",
		"size": 12608,
		"path": "../public/icons/Pug-Light.svg"
	},
	"/icons/Python-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"6f0-rx9+wZMW2BvVybynUFNU2ZB6t5A\"",
		"mtime": "2026-10-19T07:52:08.296Z",
		"size": 1776,
		"path": "../public/icons/Python-Dark.svg"
	},
	"/icons/Python-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"6f0-Tu4RBlG5ehuz9XYIBn4zA6X+GWc\"",
		"mtime": "2026-10-19T07:52:08.437Z",
		"size": 1776,
		"path": "../public/icons/Python-Light.svg"
	},
	"/icons/PyCharm-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"df4-zhRxUsq2IFLLuCmLHk8M+gDjyko\"",
		"mtime": "2026-10-19T07:52:07.867Z",
		"size": 3572,
		"path": "../public/icons/PyCharm-Light.svg"
	},
	"/icons/PyTorch-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"311-8B346hcLy3Xd5lTREQhUQQiFBK4\"",
		"mtime": "2026-10-19T07:52:08.011Z",
		"size": 785,
		"path": "../public/icons/PyTorch-Dark.svg"
	},
	"/icons/QT-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"695-FUxinbI1RDgvIb4tM78NIBGqIq4\"",
		"mtime": "2026-10-19T07:52:08.583Z",
		"size": 1685,
		"path": "../public/icons/QT-Dark.svg"
	},
	"/icons/PyTorch-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"317-Gz4tUNw9iONyTvUT6j1mQ9WNKiE\"",
		"mtime": "2026-10-19T07:52:08.163Z",
		"size": 791,
		"path": "../public/icons/PyTorch-Light.svg"
	},
	"/icons/R-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"7c3-1PDZkY18d2jxJxY5mQ+nvE7meD0\"",
		"mtime": "2026-10-19T07:52:08.837Z",
		"size": 1987,
		"path": "../public/icons/R-Dark.svg"
	},
	"/icons/QT-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"695-MiiQdzX2sOE8lE7K/Hs449su/YI\"",
		"mtime": "2026-10-19T07:52:08.715Z",
		"size": 1685,
		"path": "../public/icons/QT-Light.svg"
	},
	"/icons/R-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"7c3-Fm8SHJgCCTC3dsXO4NEi+ewCiBk\"",
		"mtime": "2026-10-19T07:52:08.951Z",
		"size": 1987,
		"path": "../public/icons/R-Light.svg"
	},
	"/icons/RabbitMQ-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3ed-blPlg0OVHgqr4FoxLK4YatCudDA\"",
		"mtime": "2026-10-19T07:52:09.341Z",
		"size": 1005,
		"path": "../public/icons/RabbitMQ-Dark.svg"
	},
	"/icons/RabbitMQ-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"3ed-1DKVEBBZBxlV/lFzJibWa7TxD2w\"",
		"mtime": "2026-10-19T07:52:09.459Z",
		"size": 1005,
		"path": "../public/icons/RabbitMQ-Light.svg"
	},
	"/icons/React-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"740-lz3B6y+sRtoTGAdZ9GLALAjTM00\"",
		"mtime": "2026-10-19T07:52:09.983Z",
		"size": 1856,
		"path": "../public/icons/React-Dark.svg"
	},
	"/icons/Rails.svg": {
		"type": "image/svg+xml",
		"etag": "\"84e-E+TItFMiXXAEbptnxknSfr3Qj+c\"",
		"mtime": "2026-10-19T07:52:09.578Z",
		"size": 2126,
		"path": "../public/icons/Rails.svg"
	},
	"/icons/RaspberryPi-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"1c54-jJHbX+IVZeexUq+VQFXGyT8IiTM\"",
		"mtime": "2026-10-19T07:52:09.713Z",
		"size": 7252,
		"path": "../public/icons/RaspberryPi-Dark.svg"
	},
	"/icons/RaspberryPi-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"1c54-cxUpxhUj10WCu/KLfvNcYxYdRiY\"",
		"mtime": "2026-10-19T07:52:09.849Z",
		"size": 7252,
		"path": "../public/icons/RaspberryPi-Light.svg"
	},
	"/icons/ReactiveX-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"eaf-kyRhH4cv1hdTwgxYXg5QwARKpno\"",
		"mtime": "2026-10-19T07:52:10.369Z",
		"size": 3759,
		"path": "../public/icons/ReactiveX-Light.svg"
	},
	"/icons/React-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"740-6SICRGYrMu6DgI5D1DM/XeMef+c\"",
		"mtime": "2026-10-19T07:52:10.101Z",
		"size": 1856,
		"path": "../public/icons/React-Light.svg"
	},
	"/icons/RedHat-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"798-Pl93FuJJxcOu6PHVZqOs5ocrbKw\"",
		"mtime": "2026-10-19T07:52:10.496Z",
		"size": 1944,
		"path": "../public/icons/RedHat-Dark.svg"
	},
	"/icons/ReactiveX-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"eaf-IGTU7zi6BC116QUWUMrIQ5jMx78\"",
		"mtime": "2026-10-19T07:52:10.241Z",
		"size": 3759,
		"path": "../public/icons/ReactiveX-Dark.svg"
	},
	"/icons/RedHat-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"798-EAzUby9igJGYwxFdudZ+5zTRKHw\"",
		"mtime": "2026-10-19T07:52:10.615Z",
		"size": 1944,
		"path": "../public/icons/RedHat-Light.svg"
	},
	"/icons/Redis-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"e0b-2ozDDfwgdDmKSHYoUm6mXI01Oxs\"",
		"mtime": "2026-10-19T07:52:10.739Z",
		"size": 3595,
		"path": "../public/icons/Redis-Dark.svg"
	},
	"/icons/Redis-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"e0b-vhH6coDF2ylehQtiOVt0Ua17WfU\"",
		"mtime": "2026-10-19T07:52:10.863Z",
		"size": 3595,
		"path": "../public/icons/Redis-Light.svg"
	},
	"/icons/Redux.svg": {
		"type": "image/svg+xml",
		"etag": "\"8f9-QUYHataeM49w8H4Qc13a2N8hjxI\"",
		"mtime": "2026-10-19T07:52:10.982Z",
		"size": 2297,
		"path": "../public/icons/Redux.svg"
	},
	"/icons/Regex-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"de3-85t1G5KGaee23VJnEJgiHotvedM\"",
		"mtime": "2026-10-19T07:52:11.211Z",
		"size": 3555,
		"path": "../public/icons/Regex-Light.svg"
	},
	"/icons/Regex-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"de3-nbmxVViDi1q9X79oQGZLZfj7W3E\"",
		"mtime": "2026-10-19T07:52:11.098Z",
		"size": 3555,
		"path": "../public/icons/Regex-Dark.svg"
	},
	"/icons/Remix-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"68f-4HsLePGEIA+CSP5zidEIWjrCDzY\"",
		"mtime": "2026-10-19T07:52:11.428Z",
		"size": 1679,
		"path": "../public/icons/Remix-Light.svg"
	},
	"/icons/Remix-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"682-K9Y7WOLksH4Uq+2gsMpCCq5YVnI\"",
		"mtime": "2026-10-19T07:52:11.323Z",
		"size": 1666,
		"path": "../public/icons/Remix-Dark.svg"
	},
	"/icons/Replit-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"292-fZpY2MLp/efGNIe4hJ6y9RCsP04\"",
		"mtime": "2026-10-19T07:52:11.544Z",
		"size": 658,
		"path": "../public/icons/Replit-Dark.svg"
	},
	"/icons/Replit-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"292-rwj5dOX1Umvsn8UKIo4J0dKCOoo\"",
		"mtime": "2026-10-19T07:52:11.653Z",
		"size": 658,
		"path": "../public/icons/Replit-Light.svg"
	},
	"/icons/Rider-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"afe-mQiZcXN7DVEvxA4mjDvuPRxHqVI\"",
		"mtime": "2026-10-19T07:52:11.766Z",
		"size": 2814,
		"path": "../public/icons/Rider-Dark.svg"
	},
	"/icons/Rider-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"afe-RqCHW7a8RyjNlj6THJo/vMWavrU\"",
		"mtime": "2026-10-19T07:52:11.882Z",
		"size": 2814,
		"path": "../public/icons/Rider-Light.svg"
	},
	"/icons/RobloxStudio.svg": {
		"type": "image/svg+xml",
		"etag": "\"1bd-4IJX+51omqzSEo87UJ/xEds9amQ\"",
		"mtime": "2026-10-19T07:52:12.013Z",
		"size": 445,
		"path": "../public/icons/RobloxStudio.svg"
	},
	"/icons/Rocket.svg": {
		"type": "image/svg+xml",
		"etag": "\"f55-G6vtdhfXco8trel3LMyp/Fb1waQ\"",
		"mtime": "2026-10-19T07:52:12.147Z",
		"size": 3925,
		"path": "../public/icons/Rocket.svg"
	},
	"/icons/RollupJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"ff0-Fxb5PACvlz97stCxxJkDWaSdCCc\"",
		"mtime": "2026-10-19T07:52:12.261Z",
		"size": 4080,
		"path": "../public/icons/RollupJS-Dark.svg"
	},
	"/icons/ROS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"860-WxEH9fQdg6+WjPXYBsn1sxsaNIE\"",
		"mtime": "2026-10-19T07:52:09.073Z",
		"size": 2144,
		"path": "../public/icons/ROS-Dark.svg"
	},
	"/icons/ROS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"872-y56+D79rETP8bZCEMLn7sx6Uhsc\"",
		"mtime": "2026-10-19T07:52:09.201Z",
		"size": 2162,
		"path": "../public/icons/ROS-Light.svg"
	},
	"/icons/RollupJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"ff0-A4pSsMA3GfW0W1oy4u0V5fz3pb4\"",
		"mtime": "2026-10-19T07:52:12.378Z",
		"size": 4080,
		"path": "../public/icons/RollupJS-Light.svg"
	},
	"/icons/Ruby.svg": {
		"type": "image/svg+xml",
		"etag": "\"206c-4+BrLTuYtFFsIW/RXx+CCSEb6Es\"",
		"mtime": "2026-10-19T07:52:12.502Z",
		"size": 8300,
		"path": "../public/icons/Ruby.svg"
	},
	"/icons/Rust.svg": {
		"type": "image/svg+xml",
		"etag": "\"2193-rLQElD2i4gsffbYJYF17nBViomk\"",
		"mtime": "2026-10-19T07:52:12.626Z",
		"size": 8595,
		"path": "../public/icons/Rust.svg"
	},
	"/icons/Scala-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"8b5-d0ldE02ZnN5HdvwgxhI9aYk1GWk\"",
		"mtime": "2026-10-19T07:52:13.213Z",
		"size": 2229,
		"path": "../public/icons/Scala-Dark.svg"
	},
	"/icons/Sass.svg": {
		"type": "image/svg+xml",
		"etag": "\"1724-CvScBFZkQFffMdCONp/zEk1KPVg\"",
		"mtime": "2026-10-19T07:52:13.096Z",
		"size": 5924,
		"path": "../public/icons/Sass.svg"
	},
	"/icons/Scala-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"8a9-53LFY4MECBYCyjzcWos3FZ/mSaw\"",
		"mtime": "2026-10-19T07:52:13.319Z",
		"size": 2217,
		"path": "../public/icons/Scala-Light.svg"
	},
	"/icons/SciKitLearn-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"238d-+IWVjpUK8v8dO7vSfUsI6Ux7LBU\"",
		"mtime": "2026-10-19T07:52:13.427Z",
		"size": 9101,
		"path": "../public/icons/SciKitLearn-Light.svg"
	},
	"/icons/ScikitLearn-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"238e-pAoCPaSVDyea0Dmdru6dmZyKTmk\"",
		"mtime": "2026-10-19T07:52:13.531Z",
		"size": 9102,
		"path": "../public/icons/ScikitLearn-Dark.svg"
	},
	"/icons/Sentry.svg": {
		"type": "image/svg+xml",
		"etag": "\"898-pHsK0OrrHr1zXSzCLxqr8mz3rpc\"",
		"mtime": "2026-10-19T07:52:13.764Z",
		"size": 2200,
		"path": "../public/icons/Sentry.svg"
	},
	"/icons/Selenium.svg": {
		"type": "image/svg+xml",
		"etag": "\"1356-+DCNy0Urbd8yyLWKF9t6sgbPHhM\"",
		"mtime": "2026-10-19T07:52:13.648Z",
		"size": 4950,
		"path": "../public/icons/Selenium.svg"
	},
	"/icons/Sequelize-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"cfd-HnMoyCsQy1bQSAPE8rJWe7MyqGc\"",
		"mtime": "2026-10-19T07:52:13.876Z",
		"size": 3325,
		"path": "../public/icons/Sequelize-Dark.svg"
	},
	"/icons/Sequelize-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"cfd-S7RrtGzAGdw4l3Viv0oUQJLdMa0\"",
		"mtime": "2026-10-19T07:52:13.977Z",
		"size": 3325,
		"path": "../public/icons/Sequelize-Light.svg"
	},
	"/icons/Sketchup-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"255-k6be8TzF5xJTqcCxRKwAMNy7YfU\"",
		"mtime": "2026-10-19T07:52:14.085Z",
		"size": 597,
		"path": "../public/icons/Sketchup-Dark.svg"
	},
	"/icons/Sketchup-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"255-d+m/tTmfBJGf7RM92txCntkA/gY\"",
		"mtime": "2026-10-19T07:52:14.189Z",
		"size": 597,
		"path": "../public/icons/Sketchup-Light.svg"
	},
	"/icons/SolidJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"ae4-dHyaRbI5Deoeg++McbZDUkFlskg\"",
		"mtime": "2026-10-19T07:52:14.300Z",
		"size": 2788,
		"path": "../public/icons/SolidJS-Dark.svg"
	},
	"/icons/Solidity.svg": {
		"type": "image/svg+xml",
		"etag": "\"2fe-JwMvIRnJKwBqDLl73Pa/VRaCw4k\"",
		"mtime": "2026-10-19T07:52:14.497Z",
		"size": 766,
		"path": "../public/icons/Solidity.svg"
	},
	"/icons/SolidJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"ae4-92S2hEbDLfh30OoFKkQl6IWF6uo\"",
		"mtime": "2026-10-19T07:52:14.400Z",
		"size": 2788,
		"path": "../public/icons/SolidJS-Light.svg"
	},
	"/icons/Spotify-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"662-RgzJJQ23SvQibOdnNYMtOn0ndD0\"",
		"mtime": "2026-10-19T07:52:14.695Z",
		"size": 1634,
		"path": "../public/icons/Spotify-Light.svg"
	},
	"/icons/Spring-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"53d-49h4SD7teL4P6iX0vGiFCWSJrXA\"",
		"mtime": "2026-10-19T07:52:14.813Z",
		"size": 1341,
		"path": "../public/icons/Spring-Dark.svg"
	},
	"/icons/Spotify-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"662-vyZ15Mnto8eaeFAzNhalH5Otaec\"",
		"mtime": "2026-10-19T07:52:14.594Z",
		"size": 1634,
		"path": "../public/icons/Spotify-Dark.svg"
	},
	"/icons/Spring-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"541-48wA2V2hLPE0cIlUoTuG/Sxqhlo\"",
		"mtime": "2026-10-19T07:52:14.924Z",
		"size": 1345,
		"path": "../public/icons/Spring-Light.svg"
	},
	"/icons/SQLite.svg": {
		"type": "image/svg+xml",
		"etag": "\"2659-e7URcWPaf0bNra/ib6rI2gzCIJI\"",
		"mtime": "2026-10-19T07:52:12.736Z",
		"size": 9817,
		"path": "../public/icons/SQLite.svg"
	},
	"/icons/StackOverflow-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"289-pw6ZtF+D5VIbTiZiNACXFvhMF3w\"",
		"mtime": "2026-10-19T07:52:15.115Z",
		"size": 649,
		"path": "../public/icons/StackOverflow-Light.svg"
	},
	"/icons/StackOverflow-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"289-iWPaKWm5LzlAOnI+/7bOj9pdTtM\"",
		"mtime": "2026-10-19T07:52:15.017Z",
		"size": 649,
		"path": "../public/icons/StackOverflow-Dark.svg"
	},
	"/icons/Sublime-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"687-cO17vvtM+SWse98sXyMopK9rDQo\"",
		"mtime": "2026-10-19T07:52:15.319Z",
		"size": 1671,
		"path": "../public/icons/Sublime-Dark.svg"
	},
	"/icons/StyledComponents.svg": {
		"type": "image/svg+xml",
		"etag": "\"17e4-idhlWOcl9qgPpp+k7SdC5a0QMAc\"",
		"mtime": "2026-10-19T07:52:15.225Z",
		"size": 6116,
		"path": "../public/icons/StyledComponents.svg"
	},
	"/icons/Sublime-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"687-yqBh/Hr5N66Gs+TbRoKhxm6qWY0\"",
		"mtime": "2026-10-19T07:52:15.420Z",
		"size": 1671,
		"path": "../public/icons/Sublime-Light.svg"
	},
	"/icons/Supabase-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"522-x/x0pn6edbnB9n8CI+50YUqbrAw\"",
		"mtime": "2026-10-19T07:52:15.515Z",
		"size": 1314,
		"path": "../public/icons/Supabase-Dark.svg"
	},
	"/icons/Supabase-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"522-0oUOEYQZnjJP3DYDwYtZmgQrNiA\"",
		"mtime": "2026-10-19T07:52:15.609Z",
		"size": 1314,
		"path": "../public/icons/Supabase-Light.svg"
	},
	"/icons/Svelte.svg": {
		"type": "image/svg+xml",
		"etag": "\"a44-urVRgtkU/K/gC55NMzMy66zCMyw\"",
		"mtime": "2026-10-19T07:52:15.702Z",
		"size": 2628,
		"path": "../public/icons/Svelte.svg"
	},
	"/icons/SVG-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"132a-9wxEc7KbAl4hocTjbOHVSLPsuf0\"",
		"mtime": "2026-10-19T07:52:12.858Z",
		"size": 4906,
		"path": "../public/icons/SVG-Dark.svg"
	},
	"/icons/Swift.svg": {
		"type": "image/svg+xml",
		"etag": "\"41c-fGU0btsGdL7z/lqDjWWpN1VJvZo\"",
		"mtime": "2026-10-19T07:52:15.810Z",
		"size": 1052,
		"path": "../public/icons/Swift.svg"
	},
	"/icons/SVG-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"132a-WoP/rU233mRq0oEGuqUHMtorZ1w\"",
		"mtime": "2026-10-19T07:52:12.975Z",
		"size": 4906,
		"path": "../public/icons/SVG-Light.svg"
	},
	"/icons/Symfony-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"9b8-VILyURwzAwS/oU0z4nKkfJKTsGk\"",
		"mtime": "2026-10-19T07:52:15.995Z",
		"size": 2488,
		"path": "../public/icons/Symfony-Light.svg"
	},
	"/icons/Symfony-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"9b6-K9qs2YpbtP8J659Q7RL/z36Fxvc\"",
		"mtime": "2026-10-19T07:52:15.902Z",
		"size": 2486,
		"path": "../public/icons/Symfony-Dark.svg"
	},
	"/icons/TailwindCSS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"361-6VoyafKZbSRNGXwjf+pG38LjdyY\"",
		"mtime": "2026-10-19T07:52:16.091Z",
		"size": 865,
		"path": "../public/icons/TailwindCSS-Dark.svg"
	},
	"/icons/TailwindCSS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"361-/opbB6lWQljtSsBm1NzEUAgm5Cs\"",
		"mtime": "2026-10-19T07:52:16.207Z",
		"size": 865,
		"path": "../public/icons/TailwindCSS-Light.svg"
	},
	"/icons/Tauri-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"ba7-obi2LUSxXx5X9uX1S7O0u8zuAcQ\"",
		"mtime": "2026-10-19T07:52:16.296Z",
		"size": 2983,
		"path": "../public/icons/Tauri-Dark.svg"
	},
	"/icons/Tauri-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"ba7-adZ1o1S7zL3thlyiUKZ+ElIz68s\"",
		"mtime": "2026-10-19T07:52:16.390Z",
		"size": 2983,
		"path": "../public/icons/Tauri-Light.svg"
	},
	"/icons/TensorFlow-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"18b-XpqpqUG9vqD0m/w41klUJ0VnrxE\"",
		"mtime": "2026-10-19T07:52:16.579Z",
		"size": 395,
		"path": "../public/icons/TensorFlow-Light.svg"
	},
	"/icons/Terraform-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"260-2F7iPW7AVFv0r6mnOUJi6ZzfYxk\"",
		"mtime": "2026-10-19T07:52:16.672Z",
		"size": 608,
		"path": "../public/icons/Terraform-Dark.svg"
	},
	"/icons/TensorFlow-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"18b-2CtnsuROM5JiVfAVJdY04NDl1f4\"",
		"mtime": "2026-10-19T07:52:16.485Z",
		"size": 395,
		"path": "../public/icons/TensorFlow-Dark.svg"
	},
	"/icons/Terraform-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"260-ZtE9n6cB/ZeoaTNF2G2siyDeWaQ\"",
		"mtime": "2026-10-19T07:52:16.759Z",
		"size": 608,
		"path": "../public/icons/Terraform-Light.svg"
	},
	"/icons/ThreeJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"52c-GAzp+oX/TA/33t3JHWYAIanE5Ts\"",
		"mtime": "2026-10-19T07:52:16.854Z",
		"size": 1324,
		"path": "../public/icons/ThreeJS-Dark.svg"
	},
	"/icons/ThreeJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"52a-zEb/MMu8tIVTETLM+vk67VLChc0\"",
		"mtime": "2026-10-19T07:52:16.954Z",
		"size": 1322,
		"path": "../public/icons/ThreeJS-Light.svg"
	},
	"/icons/TypeScript.svg": {
		"type": "image/svg+xml",
		"etag": "\"6d7-n3CrwnHCmY/e7dY1d3F804p5Syc\"",
		"mtime": "2026-10-19T07:52:17.146Z",
		"size": 1751,
		"path": "../public/icons/TypeScript.svg"
	},
	"/icons/Twitter.svg": {
		"type": "image/svg+xml",
		"etag": "\"45d-t5ujhjRU7JCNIXsVyh1HngJWRhc\"",
		"mtime": "2026-10-19T07:52:17.051Z",
		"size": 1117,
		"path": "../public/icons/Twitter.svg"
	},
	"/icons/Ubuntu-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"a82-Q6svbSY8lwBxyxXBI+kaDaQoOLE\"",
		"mtime": "2026-10-19T07:52:17.241Z",
		"size": 2690,
		"path": "../public/icons/Ubuntu-Dark.svg"
	},
	"/icons/Unity-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"763-nyWihmDLCf1DX+iOh34AwaXKQ9A\"",
		"mtime": "2026-10-19T07:52:17.424Z",
		"size": 1891,
		"path": "../public/icons/Unity-Dark.svg"
	},
	"/icons/Ubuntu-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"a89-eDr1KukF+6xZVPL30KWAbyatI4w\"",
		"mtime": "2026-10-19T07:52:17.328Z",
		"size": 2697,
		"path": "../public/icons/Ubuntu-Light.svg"
	},
	"/icons/Unity-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"76c-lH6VoxDefFlQ2I8H5iOO4i+fEes\"",
		"mtime": "2026-10-19T07:52:17.535Z",
		"size": 1900,
		"path": "../public/icons/Unity-Light.svg"
	},
	"/icons/UnrealEngine.svg": {
		"type": "image/svg+xml",
		"etag": "\"9fc-TzTb7v7NNJvdt19kdJ5wtCjbPBk\"",
		"mtime": "2026-10-19T07:52:17.618Z",
		"size": 2556,
		"path": "../public/icons/UnrealEngine.svg"
	},
	"/icons/V-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"507-Z6uNuFLPROymNesQAc2b/1oddxg\"",
		"mtime": "2026-10-19T07:52:17.721Z",
		"size": 1287,
		"path": "../public/icons/V-Dark.svg"
	},
	"/icons/V-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"508-aK37agu4yy1Hc2rsnKQy/fVM82s\"",
		"mtime": "2026-10-19T07:52:17.814Z",
		"size": 1288,
		"path": "../public/icons/V-Light.svg"
	},
	"/icons/Vala.svg": {
		"type": "image/svg+xml",
		"etag": "\"1106-SalkEtWVfQJnXVzTOLvQctcoZdM\"",
		"mtime": "2026-10-19T07:52:18.402Z",
		"size": 4358,
		"path": "../public/icons/Vala.svg"
	},
	"/icons/Vercel-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"db-srlL3UMtOn0wNfMfCaHqo+SxaKQ\"",
		"mtime": "2026-10-19T07:52:18.488Z",
		"size": 219,
		"path": "../public/icons/Vercel-Dark.svg"
	},
	"/icons/Vercel-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"db-JrVWo2avgtIZxuCNQ5w9iRBdICc\"",
		"mtime": "2026-10-19T07:52:18.572Z",
		"size": 219,
		"path": "../public/icons/Vercel-Light.svg"
	},
	"/icons/Verilog.svg": {
		"type": "image/svg+xml",
		"etag": "\"2ff5-BlINBfINE8bVr+IlHKp9uV7sY4M\"",
		"mtime": "2026-10-19T07:52:18.654Z",
		"size": 12277,
		"path": "../public/icons/Verilog.svg"
	},
	"/icons/VIM-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"349-EiUB0U/eva+7BdqhgLnlblqtckA\"",
		"mtime": "2026-10-19T07:52:17.904Z",
		"size": 841,
		"path": "../public/icons/VIM-Dark.svg"
	},
	"/icons/VIM-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"387-qMah36tt+Jcy+l7cbS+4+Pk/rH0\"",
		"mtime": "2026-10-19T07:52:17.992Z",
		"size": 903,
		"path": "../public/icons/VIM-Light.svg"
	},
	"/icons/VisualStudio-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"22bc-IYrFdBDPuYQEIHDFdv4AB6CzEuc\"",
		"mtime": "2026-10-19T07:52:18.838Z",
		"size": 8892,
		"path": "../public/icons/VisualStudio-Light.svg"
	},
	"/icons/VisualStudio-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"22b9-HBX4DPpC4HyqN3c5U2hE1EgL1Io\"",
		"mtime": "2026-10-19T07:52:18.746Z",
		"size": 8889,
		"path": "../public/icons/VisualStudio-Dark.svg"
	},
	"/icons/Vite-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"652-1nDfCZJ88vtxtkr0f+BFEyrYmEk\"",
		"mtime": "2026-10-19T07:52:18.927Z",
		"size": 1618,
		"path": "../public/icons/Vite-Dark.svg"
	},
	"/icons/Vitest-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"96c-v0ZEvL4RlhvpTeIUaYZlgUuq54A\"",
		"mtime": "2026-10-19T07:52:19.088Z",
		"size": 2412,
		"path": "../public/icons/Vitest-Dark.svg"
	},
	"/icons/Vite-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"652-rm+OQo+AGCww6e1CQpPc8HW5ooc\"",
		"mtime": "2026-10-19T07:52:19.011Z",
		"size": 1618,
		"path": "../public/icons/Vite-Light.svg"
	},
	"/icons/VSCode-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"49c-EokKCLFreZaHlbWpp0mSmCDMBh0\"",
		"mtime": "2026-10-19T07:52:18.078Z",
		"size": 1180,
		"path": "../public/icons/VSCode-Dark.svg"
	},
	"/icons/Vitest-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"96c-WlRg7+8nzt4U95oEd+FZH7kVyp4\"",
		"mtime": "2026-10-19T07:52:19.168Z",
		"size": 2412,
		"path": "../public/icons/Vitest-Light.svg"
	},
	"/icons/VSCode-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"49c-GIU/pUARZjzfuHc6U2zZRGEoDDI\"",
		"mtime": "2026-10-19T07:52:18.156Z",
		"size": 1180,
		"path": "../public/icons/VSCode-Light.svg"
	},
	"/icons/VSCodium-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"b5f-HyzVWm2SQbvs5N658RxTakApNGI\"",
		"mtime": "2026-10-19T07:52:18.238Z",
		"size": 2911,
		"path": "../public/icons/VSCodium-Dark.svg"
	},
	"/icons/VSCodium-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"b5f-SoXGzZXfYOW0JGeGr82hXlHqvIY\"",
		"mtime": "2026-10-19T07:52:18.318Z",
		"size": 2911,
		"path": "../public/icons/VSCodium-Light.svg"
	},
	"/icons/Vuetify-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3eb-bnBwQcN9GPCzHdbp+cqPjYCbLrY\"",
		"mtime": "2026-10-19T07:52:19.398Z",
		"size": 1003,
		"path": "../public/icons/Vuetify-Dark.svg"
	},
	"/icons/WebAssembly.svg": {
		"type": "image/svg+xml",
		"etag": "\"383-WFj6WX2VJifCzo4478nR1hv4+O0\"",
		"mtime": "2026-10-19T07:52:19.554Z",
		"size": 899,
		"path": "../public/icons/WebAssembly.svg"
	},
	"/icons/VueJS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"19b-+9stz1CEu1qpPcVk/4reTt6qclI\"",
		"mtime": "2026-10-19T07:52:19.328Z",
		"size": 411,
		"path": "../public/icons/VueJS-Light.svg"
	},
	"/icons/Webpack-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"3da-r4H3s9txJr+bxP8UnsB0XWYnkE4\"",
		"mtime": "2026-10-19T07:52:19.869Z",
		"size": 986,
		"path": "../public/icons/Webpack-Dark.svg"
	},
	"/icons/VueJS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"198-Ps+5dJoaf05KirsmxAItS4PsbhE\"",
		"mtime": "2026-10-19T07:52:19.248Z",
		"size": 408,
		"path": "../public/icons/VueJS-Dark.svg"
	},
	"/icons/Vuetify-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"3eb-wjsmCFsGg0dqp+vuV9Fpu8sFDuA\"",
		"mtime": "2026-10-19T07:52:19.476Z",
		"size": 1003,
		"path": "../public/icons/Vuetify-Light.svg"
	},
	"/icons/Webflow.svg": {
		"type": "image/svg+xml",
		"etag": "\"2cc-glxx3fyifNOG74mG89Cph4JVcsw\"",
		"mtime": "2026-10-19T07:52:19.791Z",
		"size": 716,
		"path": "../public/icons/Webflow.svg"
	},
	"/icons/Webpack-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"384-DfcfqiawBDq/Ywa92yUrOGIqISQ\"",
		"mtime": "2026-10-19T07:52:19.946Z",
		"size": 900,
		"path": "../public/icons/Webpack-Light.svg"
	},
	"/icons/WebStorm-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"987-/pe4qSoqnRE8tdRjBHG7wkvcpFw\"",
		"mtime": "2026-10-19T07:52:19.705Z",
		"size": 2439,
		"path": "../public/icons/WebStorm-Light.svg"
	},
	"/icons/WebStorm-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"987-/DaBISqxCrq83qfaxy60RGNLT88\"",
		"mtime": "2026-10-19T07:52:19.626Z",
		"size": 2439,
		"path": "../public/icons/WebStorm-Dark.svg"
	},
	"/icons/WindiCSS-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"b34-zzip5j+LiZmFu4H8mPJtU5Ux/r4\"",
		"mtime": "2026-10-19T07:52:20.016Z",
		"size": 2868,
		"path": "../public/icons/WindiCSS-Dark.svg"
	},
	"/icons/WindiCSS-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"b34-oGc639rj5qO3/zDkOvg1vCwB9ds\"",
		"mtime": "2026-10-19T07:52:20.090Z",
		"size": 2868,
		"path": "../public/icons/WindiCSS-Light.svg"
	},
	"/icons/Windows-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"2d5-P14btCRmjx1xdM7O4EmxN1/839Q\"",
		"mtime": "2026-10-19T07:52:20.161Z",
		"size": 725,
		"path": "../public/icons/Windows-Dark.svg"
	},
	"/icons/Wordpress.svg": {
		"type": "image/svg+xml",
		"etag": "\"830-PBTdj1s4eoHHlT7KGdpbnxkeH+4\"",
		"mtime": "2026-10-19T07:52:20.311Z",
		"size": 2096,
		"path": "../public/icons/Wordpress.svg"
	},
	"/icons/Windows-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"2d5-uff3igNDlmiym+nTflHSRYOrC3Q\"",
		"mtime": "2026-10-19T07:52:20.241Z",
		"size": 725,
		"path": "../public/icons/Windows-Light.svg"
	},
	"/icons/Workers-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"13bb-CoLAzAOrc+lWivPx/dtIkYuPhoo\"",
		"mtime": "2026-10-19T07:52:20.379Z",
		"size": 5051,
		"path": "../public/icons/Workers-Dark.svg"
	},
	"/icons/Workers-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"13bb-jRO14Wppb+ZR8WPycHRDwFbgmcY\"",
		"mtime": "2026-10-19T07:52:20.444Z",
		"size": 5051,
		"path": "../public/icons/Workers-Light.svg"
	},
	"/icons/XD.svg": {
		"type": "image/svg+xml",
		"etag": "\"b8e-fYVnZdklaIjKM/bKcPV9G4E5bd0\"",
		"mtime": "2026-10-19T07:52:20.511Z",
		"size": 2958,
		"path": "../public/icons/XD.svg"
	},
	"/icons/Yew-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"49b-Q4bKNbKFP+KdGKVcGVky5l4vdUk\"",
		"mtime": "2026-10-19T07:52:20.721Z",
		"size": 1179,
		"path": "../public/icons/Yew-Dark.svg"
	},
	"/icons/Yarn-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"19c6-ZzUPnU7Oxks5DJ9TACTWAqUz9eY\"",
		"mtime": "2026-10-19T07:52:20.654Z",
		"size": 6598,
		"path": "../public/icons/Yarn-Light.svg"
	},
	"/icons/Yarn-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"19ca-eDlsP9iLqizzbwD9GfvPmuuctKc\"",
		"mtime": "2026-10-19T07:52:20.581Z",
		"size": 6602,
		"path": "../public/icons/Yarn-Dark.svg"
	},
	"/icons/Yew-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"49b-g67gNmHH6foOD+2FN+fIiwvCnKw\"",
		"mtime": "2026-10-19T07:52:20.788Z",
		"size": 1179,
		"path": "../public/icons/Yew-Light.svg"
	},
	"/icons/Zig-Dark.svg": {
		"type": "image/svg+xml",
		"etag": "\"50c-6qINNIztYs9R7A8+2miEr8+juXc\"",
		"mtime": "2026-10-19T07:52:20.861Z",
		"size": 1292,
		"path": "../public/icons/Zig-Dark.svg"
	},
	"/icons/Zig-Light.svg": {
		"type": "image/svg+xml",
		"etag": "\"50c-ydjdeIZFxGXroK7NJcGgN8+ZoxI\"",
		"mtime": "2026-10-19T07:52:20.940Z",
		"size": 1292,
		"path": "../public/icons/Zig-Light.svg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_SZyOlC = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_SZyOlC
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
