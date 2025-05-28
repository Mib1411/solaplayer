module.exports = {

"[project]/.next-internal/server/app/api/youtube-extract/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/utils/youtubeApi.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// filepath: src/utils/youtubeApi.ts
__turbopack_context__.s({
    "extractYouTubeId": (()=>extractYouTubeId),
    "getYouTubeVideoInfo": (()=>getYouTubeVideoInfo)
});
async function getYouTubeVideoInfo(videoId) {
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
        throw new Error('YouTube API key not configured');
    }
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${apiKey}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`YouTube API error: ${response.status}`);
        }
        const data = await response.json();
        if (!data.items || data.items.length === 0) {
            throw new Error('Video not found');
        }
        const video = data.items[0];
        return {
            id: video.id,
            title: video.snippet.title,
            duration: video.contentDetails.duration,
            thumbnails: video.snippet.thumbnails
        };
    } catch (error) {
        console.error('YouTube API request failed:', error);
        throw error;
    }
}
function extractYouTubeId(url) {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
        /youtube\.com\/v\/([^&\n?#]+)/
    ];
    for (const pattern of patterns){
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}
}}),
"[project]/src/app/api/youtube-extract/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubeApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/youtubeApi.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const url = searchParams.get('url');
    const id = searchParams.get('id');
    try {
        let videoId = null;
        if (id) {
            videoId = id;
        } else if (url) {
            videoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubeApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractYouTubeId"])(url);
        }
        if (!videoId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid YouTube URL or missing video ID'
            }, {
                status: 400
            });
        }
        const videoInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubeApi$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getYouTubeVideoInfo"])(videoId);
        // Return embed URL for iframe player
        const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&origin=${request.nextUrl.origin}`;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            videoInfo,
            sources: {
                mp4: [
                    {
                        url: embedUrl,
                        quality: 'embed',
                        width: 1280,
                        height: 720
                    }
                ]
            }
        });
    } catch (error) {
        console.error('YouTube extraction error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to extract YouTube video'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__005f2730._.js.map