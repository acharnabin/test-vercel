if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),d={module:{uri:n},exports:r,require:t};s[n]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-zj2YBwqnxH_7hIwTHMLed.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/1664-5178a426216181f4.js",revision:"5178a426216181f4"},{url:"/_next/static/chunks/2285-43873c5dfd4af457.js",revision:"43873c5dfd4af457"},{url:"/_next/static/chunks/2699.6ea73a84e3e665e5.js",revision:"6ea73a84e3e665e5"},{url:"/_next/static/chunks/2700-2cf660d22aac0f90.js",revision:"2cf660d22aac0f90"},{url:"/_next/static/chunks/2962-bd912206b0dcce2b.js",revision:"bd912206b0dcce2b"},{url:"/_next/static/chunks/3325.a6a9552ff265e466.js",revision:"a6a9552ff265e466"},{url:"/_next/static/chunks/3688-97026c59865a661c.js",revision:"97026c59865a661c"},{url:"/_next/static/chunks/4224-a3783682be92658f.js",revision:"a3783682be92658f"},{url:"/_next/static/chunks/423-e21e48944494490d.js",revision:"e21e48944494490d"},{url:"/_next/static/chunks/4717-86f1e2e32cc26c69.js",revision:"86f1e2e32cc26c69"},{url:"/_next/static/chunks/5500-fda6a53bcb3a9fb4.js",revision:"fda6a53bcb3a9fb4"},{url:"/_next/static/chunks/5556.98b25b5d2bcc6591.js",revision:"98b25b5d2bcc6591"},{url:"/_next/static/chunks/5740-74b0b0008b665563.js",revision:"74b0b0008b665563"},{url:"/_next/static/chunks/5855.83f7ab7fc0227bf4.js",revision:"83f7ab7fc0227bf4"},{url:"/_next/static/chunks/6154-11eb7e5d72eccee8.js",revision:"11eb7e5d72eccee8"},{url:"/_next/static/chunks/6170.6aa7a7e5700ae2cd.js",revision:"6aa7a7e5700ae2cd"},{url:"/_next/static/chunks/6469-0dc203e0100d6379.js",revision:"0dc203e0100d6379"},{url:"/_next/static/chunks/6627-f59b4beffd423acc.js",revision:"f59b4beffd423acc"},{url:"/_next/static/chunks/6667-bc5150bdfba95b9d.js",revision:"bc5150bdfba95b9d"},{url:"/_next/static/chunks/754-8dbe6b8a474f9a0e.js",revision:"8dbe6b8a474f9a0e"},{url:"/_next/static/chunks/75fc9c18-2cc04cd5a8e46304.js",revision:"2cc04cd5a8e46304"},{url:"/_next/static/chunks/771-acabb09088dae122.js",revision:"acabb09088dae122"},{url:"/_next/static/chunks/7718.b28e1ece20bb6179.js",revision:"b28e1ece20bb6179"},{url:"/_next/static/chunks/7893-8b3fb5f3abe20f11.js",revision:"8b3fb5f3abe20f11"},{url:"/_next/static/chunks/7922.2fbd6e1433151af6.js",revision:"2fbd6e1433151af6"},{url:"/_next/static/chunks/8150-52b7c8340ba1496b.js",revision:"52b7c8340ba1496b"},{url:"/_next/static/chunks/8208-80bdf9807d920188.js",revision:"80bdf9807d920188"},{url:"/_next/static/chunks/8431-3ce704ae9462254c.js",revision:"3ce704ae9462254c"},{url:"/_next/static/chunks/8445.436e9b8aee1311cf.js",revision:"436e9b8aee1311cf"},{url:"/_next/static/chunks/8702-5d338d73ca49ca8b.js",revision:"5d338d73ca49ca8b"},{url:"/_next/static/chunks/8813-96a9ce286e19b7ac.js",revision:"96a9ce286e19b7ac"},{url:"/_next/static/chunks/9072-5b170e81dcc438af.js",revision:"5b170e81dcc438af"},{url:"/_next/static/chunks/9260.7732f1f6e199d0c6.js",revision:"7732f1f6e199d0c6"},{url:"/_next/static/chunks/9291.251914055b2665ac.js",revision:"251914055b2665ac"},{url:"/_next/static/chunks/9440-20a3df1e98682780.js",revision:"20a3df1e98682780"},{url:"/_next/static/chunks/9960.efaed8502ffb95fd.js",revision:"efaed8502ffb95fd"},{url:"/_next/static/chunks/c2e4a7a6.70b864e938c195ca.js",revision:"70b864e938c195ca"},{url:"/_next/static/chunks/ea88be26.4799eb154c681c8a.js",revision:"4799eb154c681c8a"},{url:"/_next/static/chunks/framework-2fe4cb6473b20297.js",revision:"2fe4cb6473b20297"},{url:"/_next/static/chunks/main-e481270a11fc0bb9.js",revision:"e481270a11fc0bb9"},{url:"/_next/static/chunks/pages/404-5944d85f5f47c3ef.js",revision:"5944d85f5f47c3ef"},{url:"/_next/static/chunks/pages/500-51fb83c0307402f5.js",revision:"51fb83c0307402f5"},{url:"/_next/static/chunks/pages/_app-79a08a8f9520ef93.js",revision:"79a08a8f9520ef93"},{url:"/_next/static/chunks/pages/_error-02cc11fd74b4e5ff.js",revision:"02cc11fd74b4e5ff"},{url:"/_next/static/chunks/pages/_offline-f8484289cc357af9.js",revision:"f8484289cc357af9"},{url:"/_next/static/chunks/pages/ainews-cf160dc3161ad098.js",revision:"cf160dc3161ad098"},{url:"/_next/static/chunks/pages/categories-a0adb0ca9329817f.js",revision:"a0adb0ca9329817f"},{url:"/_next/static/chunks/pages/categories/%5Bslug%5D-2127d3254acb163b.js",revision:"2127d3254acb163b"},{url:"/_next/static/chunks/pages/dashboard/profile-eb151f4e4def9479.js",revision:"eb151f4e4def9479"},{url:"/_next/static/chunks/pages/discover/%5Bslug%5D-b70f3caadb101c6e.js",revision:"b70f3caadb101c6e"},{url:"/_next/static/chunks/pages/favourites-fb61b324b7a2cbc1.js",revision:"fb61b324b7a2cbc1"},{url:"/_next/static/chunks/pages/index-0dc1dcbf5b91e68f.js",revision:"0dc1dcbf5b91e68f"},{url:"/_next/static/chunks/pages/login-219ffaac205d9a59.js",revision:"219ffaac205d9a59"},{url:"/_next/static/chunks/pages/newsletter-1e7f748776b59bd4.js",revision:"1e7f748776b59bd4"},{url:"/_next/static/chunks/pages/signup-8f8f2fce15e4cdeb.js",revision:"8f8f2fce15e4cdeb"},{url:"/_next/static/chunks/pages/submit-news-b285787e5430af12.js",revision:"b285787e5430af12"},{url:"/_next/static/chunks/pages/submit-tool-887b790745663bfa.js",revision:"887b790745663bfa"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9308f5006cc90c05.js",revision:"9308f5006cc90c05"},{url:"/_next/static/css/1953c45921be9d3d.css",revision:"1953c45921be9d3d"},{url:"/_next/static/css/1ca380b70611a284.css",revision:"1ca380b70611a284"},{url:"/_next/static/css/388121161205d419.css",revision:"388121161205d419"},{url:"/_next/static/css/4553907453f47b8f.css",revision:"4553907453f47b8f"},{url:"/_next/static/css/4850c9f94d8bd9dd.css",revision:"4850c9f94d8bd9dd"},{url:"/_next/static/css/6c0bf09fb06a9416.css",revision:"6c0bf09fb06a9416"},{url:"/_next/static/css/8a0398573561e18f.css",revision:"8a0398573561e18f"},{url:"/_next/static/css/8fdc9d47989f65ab.css",revision:"8fdc9d47989f65ab"},{url:"/_next/static/css/9e7dd4c066debe97.css",revision:"9e7dd4c066debe97"},{url:"/_next/static/css/a62eae9f1572e1eb.css",revision:"a62eae9f1572e1eb"},{url:"/_next/static/css/b7e73c7d3fd80798.css",revision:"b7e73c7d3fd80798"},{url:"/_next/static/css/bc45f410a8b07b9a.css",revision:"bc45f410a8b07b9a"},{url:"/_next/static/css/bf3997c3680127c8.css",revision:"bf3997c3680127c8"},{url:"/_next/static/css/d038e1000b764ba6.css",revision:"d038e1000b764ba6"},{url:"/_next/static/css/ea6aff11e595ed82.css",revision:"ea6aff11e595ed82"},{url:"/_next/static/css/ec823ef0c6e107e6.css",revision:"ec823ef0c6e107e6"},{url:"/_next/static/css/ef309f41d284944b.css",revision:"ef309f41d284944b"},{url:"/_next/static/css/f3bd06ad6f3eccc8.css",revision:"f3bd06ad6f3eccc8"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/_next/static/zj2YBwqnxH_7hIwTHMLed/_buildManifest.js",revision:"6a00d2668b0a78081f4de18f406e3d62"},{url:"/_next/static/zj2YBwqnxH_7hIwTHMLed/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"zj2YBwqnxH_7hIwTHMLed"},{url:"/assets/icons/2082.png",revision:"65ada0ff471d1e8183b3b10deb5ec9d1"},{url:"/assets/icons/icon-192x192.png",revision:"ae6f521329304d4806aa5e23db04c71a"},{url:"/assets/icons/icon-256x256.png",revision:"cf43e20b526340564d41f8c16ea74595"},{url:"/assets/icons/icon-384x384.png",revision:"a389bbec381b2590af7cd0cd2b0eb487"},{url:"/assets/icons/icon-512x512.png",revision:"0bfd110606f188a25f48d83f4ea136ea"},{url:"/assets/images/404.svg",revision:"228e4ee9247e1cceb504ad2281f14458"},{url:"/assets/images/Facebook.svg",revision:"e63887ef1ae0b71cd1ce5470149fd955"},{url:"/assets/images/Twitter.svg",revision:"17b8e2c701e84d85cff4262dee02c5e2"},{url:"/assets/images/Youtube.svg",revision:"1b4e296772e0f4827e5efa72fc4c5fc4"},{url:"/assets/images/audio.svg",revision:"6e7387780a8b7f78025d0e981df9d3c5"},{url:"/assets/images/auricular-phone_318-1028.webp",revision:"38de9c97883e314b7462e50fbcbd4559"},{url:"/assets/images/avatar.svg",revision:"c27bf27f5f0868cb538333aa37999730"},{url:"/assets/images/banner_back.svg",revision:"8719ba5cc875891be1eed81a684c78bf"},{url:"/assets/images/bannerbg.png",revision:"6409f27873185149c5e8f85fa8a72cfa"},{url:"/assets/images/batch.svg",revision:"5dd3a0b656b3e61b90ad66b16b53f134"},{url:"/assets/images/big_elp.svg",revision:"d7a8080da9e5f1e395503083bf003463"},{url:"/assets/images/bulb.svg",revision:"236fdbc3847ea306ac0d208f0f4f69b4"},{url:"/assets/images/cardImg1.png",revision:"901917363ebf88fed00ec018786f7783"},{url:"/assets/images/cardImg2.png",revision:"9f5cf81738d3393fda21348cf93bd8a2"},{url:"/assets/images/cardImg3.png",revision:"86aacc492f9f18b847d456aceb4d9b34"},{url:"/assets/images/cardImg4.png",revision:"2ac83968853d52c0cb6e1a244faf55dd"},{url:"/assets/images/cardImg5.png",revision:"ba1a1522a94dbe88566553f035f90a0f"},{url:"/assets/images/cardImg6.png",revision:"713aefadca3e15c818986e32dc5ef07f"},{url:"/assets/images/cardImg7.png",revision:"a998464c7629a652c5b0c26d72a11bfc"},{url:"/assets/images/cardImg8.png",revision:"d0682b8792f79de4f00c78f6f5621cb5"},{url:"/assets/images/catbanarrow.svg",revision:"bc627cf122bfdad649dd59f706314d6b"},{url:"/assets/images/code.svg",revision:"c23721a20fbf8973af9fa58e85e15892"},{url:"/assets/images/copy.svg",revision:"8229e42ed826370c94077ce87e6c6bce"},{url:"/assets/images/darkBanner.png",revision:"6df8a36a5b1d8b398d7175e2b63d51de"},{url:"/assets/images/darkSign.svg",revision:"575e914946ed4c9ca481084ab55895cb"},{url:"/assets/images/deep_blue_tick.svg",revision:"33b51c8a085f72cb96158c196d8381dc"},{url:"/assets/images/dollar_icon.svg",revision:"c95aabe001929c0e4d8292ddbd1757f5"},{url:"/assets/images/fashion.svg",revision:"a55d832c52b0d1cd8573ed26d2dbf7ee"},{url:"/assets/images/filter.svg",revision:"49a6c850e7f64847262e70c2be9804ca"},{url:"/assets/images/google_icon.svg",revision:"e16adba9787c1693a69f15c797252b31"},{url:"/assets/images/groupuser.svg",revision:"2bed97e192be9f247f698be830d43f4b"},{url:"/assets/images/icon-add.svg",revision:"51ea034fba5d18a2ba49111caca5d7ac"},{url:"/assets/images/icon-api.svg",revision:"36c9bf9170fa970eb3552a4f43a99120"},{url:"/assets/images/icon-app.svg",revision:"3304e951135bf3f2461f0ca436851a12"},{url:"/assets/images/icon-book.svg",revision:"2701e9fec94a9d4ca7d43d38ac5b1421"},{url:"/assets/images/icon-bookmark-filled.svg",revision:"5c948bd408d7640e56ed9e536cec497d"},{url:"/assets/images/icon-bookmark.svg",revision:"497ded7a1feeae0fd515bb313697b985"},{url:"/assets/images/icon-bulb.svg",revision:"08a94daa68c90a061c25a39bf46d9324"},{url:"/assets/images/icon-bullet.svg",revision:"bc627cf122bfdad649dd59f706314d6b"},{url:"/assets/images/icon-check.svg",revision:"f9a1a4adc66cc177bc4aac83769c2c1e"},{url:"/assets/images/icon-clock.svg",revision:"52da2599105c869d7d8002f50009ed89"},{url:"/assets/images/icon-discord.svg",revision:"e4dbf432b2a43d6ba26cd85e40604ee2"},{url:"/assets/images/icon-dollar.svg",revision:"1747327a4f39309df03796a15b42fbcb"},{url:"/assets/images/icon-extenstion.svg",revision:"9de4d8b7b0aac8fbb93c034511bc3721"},{url:"/assets/images/icon-facebook.png",revision:"29b0b45542bee459c0022c1dacbbcbe2"},{url:"/assets/images/icon-link.svg",revision:"8ec73528a7944e448ee68b74b4249bf7"},{url:"/assets/images/icon-linkdin.png",revision:"d1e5aba2088cff573dd2eb52834e33a8"},{url:"/assets/images/icon-logo.svg",revision:"c7137aa1e87dc92bc03e1165b6c0f775"},{url:"/assets/images/icon-msg.svg",revision:"58aaac16a077e2f4a87236ee8b401974"},{url:"/assets/images/icon-openlock.svg",revision:"d49920f5d1a4106af4cd4a1355612d4c"},{url:"/assets/images/icon-require.svg",revision:"935f7d1cbecd8d266ada10b36ca587be"},{url:"/assets/images/icon-source.svg",revision:"3472f19c482addf4cff1966ae303d2b7"},{url:"/assets/images/icon-tag.svg",revision:"a7d72a48c6860752c01dd54531cb4c14"},{url:"/assets/images/icon-thumb-down.svg",revision:"17da5ac3d0f6e478755649f896e1cdee"},{url:"/assets/images/icon-thumb-up.svg",revision:"2aace220e877d724b8de9d5016549e87"},{url:"/assets/images/icon-twitter.png",revision:"9b42e9eb910fda10d0e4e2ce8d35c82b"},{url:"/assets/images/lightmood.svg",revision:"0624a0421dbfe43b494e5aef671307eb"},{url:"/assets/images/lock.svg",revision:"363d59ea693999e6bd0a48d76dc3eea2"},{url:"/assets/images/lock_icon.svg",revision:"d426566e1d11086f5346fbc6261aa59e"},{url:"/assets/images/logo.svg",revision:"2dde5182cef4d350faf741ec6e51120d"},{url:"/assets/images/logo2.svg",revision:"26b49ffe2abe8c866ef930a5d63c46b0"},{url:"/assets/images/love_sign.svg",revision:"75c1afbfe11eb837fddd54024d335ddf"},{url:"/assets/images/mail_icon.svg",revision:"085fff5e5c6f642a9ba921ab3ca30b74"},{url:"/assets/images/new_card_bg.png",revision:"06a6305869e94c2276074cb59a6fe204"},{url:"/assets/images/new_card_bg.svg",revision:"044dc71d81d4eedaeb9281da42fd4e8d"},{url:"/assets/images/next_arrw.svg",revision:"d241b22a4d8f9647717ced7e03b113e3"},{url:"/assets/images/noimg.svg",revision:"c0b828f3c48430a553427416474fe92c"},{url:"/assets/images/palate.svg",revision:"565aaa901500d0662e1d56ba99dc75c4"},{url:"/assets/images/pro01.jpg",revision:"9d0edf1495e6b474d13ed6a7603548bb"},{url:"/assets/images/save_icon.svg",revision:"74b495061cb23cf84f894fc301653f05"},{url:"/assets/images/searchicon.svg",revision:"968e0101372a71d3255a8add0b74a970"},{url:"/assets/images/send_icon.svg",revision:"e126a98e85211ce79e2981906036bfe6"},{url:"/assets/images/settingIcon.svg",revision:"a4291d14e35a90d76e648b74f5b29abd"},{url:"/assets/images/sliderNext.svg",revision:"a45aed45b6bc4c020ef892cefa359093"},{url:"/assets/images/small_elp.svg",revision:"904582397414735caef88cf9d50c9147"},{url:"/assets/images/small_star.svg",revision:"a0c6e6e94d8cd0c4eb3e409de7a716e7"},{url:"/assets/images/smallcard1.png",revision:"e7dc2cf82dd532cef2096c3deed1eba3"},{url:"/assets/images/smallcard2.png",revision:"508b5932516e070c6035c7a65df17341"},{url:"/assets/images/smallcard3.png",revision:"d430ad12c7163eeea91fd643d929a931"},{url:"/assets/images/smallcard4.png",revision:"1866a655057bf741ed5c064e557809ef"},{url:"/assets/images/smallcard5.png",revision:"53ee7a4dbc7b9c0528d0e1d74104d676"},{url:"/assets/images/smallcard6.png",revision:"a2356531212b71ffdf919654590b9184"},{url:"/assets/images/smallcard7.png",revision:"5a76dd80cfe918affe68682809f0bcdc"},{url:"/assets/images/text-icon.svg",revision:"053a26a5edc80823a798ec47cbaaa465"},{url:"/assets/images/tool-icon.svg",revision:"b5cf4013e53d2bd7b1058d607475aea5"},{url:"/assets/images/twinkle.svg",revision:"77daac0d9f532d849cdfd60ba46cf6d7"},{url:"/assets/images/verified.svg",revision:"e403751092b82f5e9dfd6df075ebc792"},{url:"/assets/images/visit_icon.svg",revision:"ab61158aa82ec0d64634a1ab0f63f9cc"},{url:"/assets/images/warning_icon.svg",revision:"69b2c5e137bfe986580ddb91f8868dd0"},{url:"/favicon.ico",revision:"a018584f930e24f0bd229957e1251c85"},{url:"/manifest.json",revision:"37e9309189ad052ba86f4095b53b0dd5"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
