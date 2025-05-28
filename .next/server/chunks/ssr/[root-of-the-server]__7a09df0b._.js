module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/hooks/usePlayerState.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePlayerState": (()=>usePlayerState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const usePlayerState = ({ autoplay, muted })=>{
    // Basic player state
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(autoplay);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(muted);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [playbackRate, setPlaybackRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [controlsVisible, setControlsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPiPSupported, setIsPiPSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // UI state
    const [showTranscript, setShowTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCC, setShowCC] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChapters, setShowChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpooling, setIsSpooling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal states
    const [audioDescSettingsOpen, setAudioDescSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [infoOpen, setInfoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Audio description state
    const [audioDescActive, setAudioDescActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ttsBusy, setTtsBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pitch, setPitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [autoStop, setAutoStop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [autoStart, setAutoStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [audioDescMode, setAudioDescMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('tts');
    const [ttsAvailable, setTtsAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ttsError, setTtsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [hasAudioTrack, setHasAudioTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSignTrack, setHasSignTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Content indexes
    const [currentCueIdx, setCurrentCueIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [currentChapterIdx, setCurrentChapterIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    // Video sources and quality
    const [videoSources, setVideoSources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedQuality, setSelectedQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('auto');
    const [videoSrc, setVideoSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [availableQualities, setAvailableQualities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Player type and instances
    const [playerType, setPlayerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('video');
    const [youtubePlayer, setYoutubePlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [vimeoPlayer, setVimeoPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Voice data for TTS
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // NEU: State, um zu verfolgen, ob das Video einmal gestartet wurde
    const [hasStartedOnce, setHasStartedOnce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(autoplay);
    // WICHTIG: Alle States + Setters zurückgeben
    return {
        // States
        isPlaying,
        isMuted,
        currentTime,
        duration,
        volume,
        playbackRate,
        controlsVisible,
        isPiPSupported,
        isLoading,
        showTranscript,
        showCC,
        showChapters,
        isSpooling,
        audioDescSettingsOpen,
        settingsOpen,
        infoOpen,
        audioDescActive,
        ttsBusy,
        pitch,
        autoStop,
        autoStart,
        audioDescMode,
        ttsAvailable,
        ttsError,
        hasAudioTrack,
        hasSignTrack,
        currentCueIdx,
        currentChapterIdx,
        videoSources,
        selectedQuality,
        videoSrc,
        availableQualities,
        playerType,
        youtubePlayer,
        vimeoPlayer,
        voices,
        selectedVoice,
        hasStartedOnce,
        // Setters - ALLE MÜSSEN HIER STEHEN!
        setIsPlaying: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setIsPlaying(value), []),
        setIsMuted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setIsMuted(value), []),
        setCurrentTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setCurrentTime(value), []),
        setDuration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setDuration(value), []),
        setVolume: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setVolume(value), []),
        setPlaybackRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setPlaybackRate(value), []),
        setControlsVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setControlsVisible(value), []),
        setIsPiPSupported: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setIsPiPSupported(value), []),
        setIsLoading: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setIsLoading(value), []),
        setShowTranscript: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setShowTranscript(value), []),
        setShowCC: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setShowCC(value), []),
        setShowChapters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setShowChapters(value), []),
        setIsSpooling: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setIsSpooling(value), []),
        setAudioDescSettingsOpen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setAudioDescSettingsOpen(value), []),
        setSettingsOpen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setSettingsOpen(value), []),
        setInfoOpen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setInfoOpen(value), []),
        setAudioDescActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setAudioDescActive(value), []),
        setTtsBusy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setTtsBusy(value), []),
        setPitch: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setPitch(value), []),
        setAutoStop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setAutoStop(value), []),
        setAutoStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setAutoStart(value), []),
        setAudioDescMode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setAudioDescMode(value), []),
        setTtsAvailable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setTtsAvailable(value), []),
        setTtsError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setTtsError(value), []),
        setHasAudioTrack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setHasAudioTrack(value), []),
        setHasSignTrack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setHasSignTrack(value), []),
        setCurrentCueIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setCurrentCueIdx(value), []),
        setCurrentChapterIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setCurrentChapterIdx(value), []),
        setVideoSources: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setVideoSources(value), []),
        setSelectedQuality: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setSelectedQuality(value), []),
        setVideoSrc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setVideoSrc(value), []),
        setAvailableQualities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setAvailableQualities(value), []),
        setPlayerType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setPlayerType(value), []),
        setYoutubePlayer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setYoutubePlayer(value), []),
        setVimeoPlayer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setVimeoPlayer(value), []),
        setVoices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setVoices(value), []),
        setSelectedVoice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setSelectedVoice(value), []),
        setHasStartedOnce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>setHasStartedOnce(value), [])
    };
};
}}),
"[project]/src/utils/videoExtractors.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "extractBundestagId": (()=>extractBundestagId),
    "extractBundestagVideo": (()=>extractBundestagVideo),
    "extractVimeoId": (()=>extractVimeoId),
    "extractVimeoVideo": (()=>extractVimeoVideo),
    "extractYouTubeId": (()=>extractYouTubeId),
    "extractYouTubeVideo": (()=>extractYouTubeVideo)
});
async function extractYouTubeVideo(url) {
    const videoId = extractYouTubeId(url);
    if (!videoId) throw new Error('Invalid YouTube URL');
    // Für YouTube verwenden wir die IFrame API, nicht direkte URLs
    // Diese Funktion ist nur für Kompatibilität - eigentliche Logik ist in YouTubePlayerWrapper
    return {
        mp4: [
            {
                url: `https://www.youtube.com/embed/${videoId}?enablejsapi=1`,
                quality: 'iframe',
                width: 1280,
                height: 720
            }
        ]
    };
}
async function extractVimeoVideo(url) {
    const videoId = extractVimeoId(url);
    if (!videoId) throw new Error('Invalid Vimeo URL');
    // Für Vimeo verwenden wir die Player API, nicht direkte URLs
    // Diese Funktion ist nur für Kompatibilität - eigentliche Logik ist in VimeoPlayerWrapper
    return {
        mp4: [
            {
                url: `https://player.vimeo.com/video/${videoId}`,
                quality: 'player',
                width: 1280,
                height: 720
            }
        ]
    };
}
async function extractBundestagVideo(url) {
    const videoId = extractBundestagId(url);
    if (!videoId) throw new Error('Invalid Bundestag URL');
    const baseUrl = 'https://cldf-od.r53.cdn.tv1.eu/1000153copo/ondemand/app144277506/145293313';
    const qualities = [
        {
            url: `${baseUrl}/${videoId}/${videoId}_h264_1920_1080_8000kb_baseline_de_8000.mp4`,
            quality: '1080p',
            width: 1920,
            height: 1080,
            bitrate: 8000
        },
        {
            url: `${baseUrl}/${videoId}/${videoId}_h264_1280_720_3000kb_baseline_de_3000.mp4`,
            quality: '720p',
            width: 1280,
            height: 720,
            bitrate: 3000
        },
        {
            url: `${baseUrl}/${videoId}/${videoId}_h264_640_360_1000kb_baseline_de_1000.mp4`,
            quality: '360p',
            width: 640,
            height: 360,
            bitrate: 1000
        },
        {
            url: `${baseUrl}/${videoId}/${videoId}_h264_512_288_514kb_baseline_de_514.mp4`,
            quality: '288p',
            width: 512,
            height: 288,
            bitrate: 514
        }
    ];
    return {
        mp4: qualities
    };
}
function extractYouTubeId(url) {
    // Wie AblePlayer: die letzten 11 Zeichen bei YouTube URLs
    if (url.indexOf('youtu') !== -1) {
        url = url.trim();
        const idStartPos = url.length - 11;
        const id = url.substring(idStartPos);
        return id;
    }
    return null;
}
function extractVimeoId(url) {
    const regex = /vimeo\.com\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
function extractBundestagId(url) {
    const regex = /dbtg\.tv\/cvid\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
}}),
"[project]/src/utils/youtubePlayer.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "YouTubePlayerWrapper": (()=>YouTubePlayerWrapper),
    "extractYouTubeId": (()=>extractYouTubeId)
});
class YouTubePlayerWrapper {
    player = null;
    containerId;
    videoId;
    isReady = false;
    eventListeners = {};
    constructor(containerId, videoId){
        this.containerId = containerId;
        this.videoId = videoId;
    }
    async init() {
        await this.loadYouTubeAPI();
        return this.createPlayer();
    }
    async loadYouTubeAPI() {
        return new Promise((resolve)=>{
            if (window.YT && window.YT.Player) {
                resolve();
                return;
            }
            window.onYouTubeIframeAPIReady = ()=>{
                resolve();
            };
            if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
                const script = document.createElement('script');
                script.src = 'https://www.youtube.com/iframe_api';
                script.async = true;
                document.head.appendChild(script);
            }
        });
    }
    createPlayer() {
        return new Promise((resolve, reject)=>{
            this.player = new window.YT.Player(this.containerId, {
                videoId: this.videoId,
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    disablekb: 1,
                    enablejsapi: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    cc_load_policy: 1,
                    playsinline: 1
                },
                events: {
                    onReady: ()=>{
                        this.isReady = true;
                        this.emit('ready');
                        resolve();
                    },
                    onStateChange: (event)=>{
                        this.handleStateChange(event.data);
                    },
                    onError: (event)=>{
                        this.emit('error', event);
                        reject(new Error(`YouTube Player Error: ${event.data}`));
                    }
                }
            });
        });
    }
    handleStateChange(state) {
        switch(state){
            case window.YT.PlayerState.PLAYING:
                this.emit('play');
                break;
            case window.YT.PlayerState.PAUSED:
                this.emit('pause');
                break;
            case window.YT.PlayerState.ENDED:
                this.emit('ended');
                break;
            case window.YT.PlayerState.BUFFERING:
                this.emit('waiting');
                break;
        }
        this.emit('statechange', state);
    }
    // Event System
    on(event, listener) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(listener);
    }
    off(event, listener) {
        if (this.eventListeners[event]) {
            const index = this.eventListeners[event].indexOf(listener);
            if (index > -1) {
                this.eventListeners[event].splice(index, 1);
            }
        }
    }
    emit(event, data) {
        if (this.eventListeners[event]) {
            this.eventListeners[event].forEach((listener)=>listener(data));
        }
    }
    // Player Control Methods
    play() {
        if (this.player && this.isReady) {
            this.player.playVideo();
        }
    }
    pause() {
        if (this.player && this.isReady) {
            this.player.pauseVideo();
        }
    }
    seekTo(seconds) {
        if (this.player && this.isReady) {
            this.player.seekTo(seconds);
        }
    }
    getCurrentTime() {
        if (this.player && this.isReady) {
            return this.player.getCurrentTime();
        }
        return 0;
    }
    getDuration() {
        if (this.player && this.isReady) {
            return this.player.getDuration();
        }
        return 0;
    }
    setVolume(volume) {
        if (this.player && this.isReady) {
            this.player.setVolume(volume * 100); // YouTube erwartet 0-100
        }
    }
    getVolume() {
        if (this.player && this.isReady) {
            return this.player.getVolume() / 100; // Normalisieren auf 0-1
        }
        return 1;
    }
    mute() {
        if (this.player && this.isReady) {
            this.player.mute();
        }
    }
    unmute() {
        if (this.player && this.isReady) {
            this.player.unMute();
        }
    }
    isMuted() {
        if (this.player && this.isReady) {
            return this.player.isMuted();
        }
        return false;
    }
    setPlaybackRate(rate) {
        if (this.player && this.isReady) {
            this.player.setPlaybackRate(rate);
        }
    }
    getPlaybackRate() {
        if (this.player && this.isReady) {
            return this.player.getPlaybackRate();
        }
        return 1;
    }
    setSize(width, height) {
        if (this.player && this.isReady) {
            this.player.setSize(width, height);
        }
    }
    destroy() {
        if (this.player) {
            this.player.destroy();
            this.player = null;
            this.isReady = false;
        }
    }
}
function extractYouTubeId(url) {
    if (url.indexOf('youtu') !== -1) {
        // AblePlayer Logik: die letzten 11 Zeichen
        url = url.trim();
        const idStartPos = url.length - 11;
        const id = url.substring(idStartPos);
        return id;
    }
    return null;
}
}}),
"[project]/src/utils/vimeoPlayer.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "VimeoPlayerWrapper": (()=>VimeoPlayerWrapper),
    "extractVimeoId": (()=>extractVimeoId)
});
class VimeoPlayerWrapper {
    player = null;
    containerId;
    videoId;
    isReady = false;
    eventListeners = {};
    constructor(containerId, videoId){
        this.containerId = containerId;
        this.videoId = videoId;
    }
    async init() {
        await this.loadVimeoAPI();
        return this.createPlayer();
    }
    async loadVimeoAPI() {
        return new Promise((resolve)=>{
            if (window.Vimeo && window.Vimeo.Player) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://player.vimeo.com/api/player.js';
            script.async = true;
            script.onload = ()=>resolve();
            document.head.appendChild(script);
        });
    }
    createPlayer() {
        return new Promise((resolve, reject)=>{
            const container = document.getElementById(this.containerId);
            if (!container) {
                reject(new Error('Container element not found'));
                return;
            }
            this.player = new window.Vimeo.Player(container, {
                id: this.videoId,
                width: 800,
                height: 450,
                controls: false,
                autoplay: false,
                muted: false,
                responsive: true
            });
            // Event Listeners
            this.player.on('loaded', ()=>{
                this.isReady = true;
                this.emit('ready');
                resolve();
            });
            this.player.on('play', ()=>{
                this.emit('play');
            });
            this.player.on('pause', ()=>{
                this.emit('pause');
            });
            this.player.on('ended', ()=>{
                this.emit('ended');
            });
            this.player.on('timeupdate', (data)=>{
                this.emit('timeupdate', data);
            });
            this.player.on('error', (error)=>{
                this.emit('error', error);
                reject(error);
            });
        });
    }
    // Event System
    on(event, listener) {
        if (!this.eventListeners[event]) {
            this.eventListeners[event] = [];
        }
        this.eventListeners[event].push(listener);
    }
    off(event, listener) {
        if (this.eventListeners[event]) {
            const index = this.eventListeners[event].indexOf(listener);
            if (index > -1) {
                this.eventListeners[event].splice(index, 1);
            }
        }
    }
    emit(event, data) {
        if (this.eventListeners[event]) {
            this.eventListeners[event].forEach((listener)=>listener(data));
        }
    }
    // Player Control Methods
    async play() {
        if (this.player && this.isReady) {
            try {
                await this.player.play();
            } catch (error) {
                console.error('Vimeo play error:', error);
            }
        }
    }
    async pause() {
        if (this.player && this.isReady) {
            try {
                await this.player.pause();
            } catch (error) {
                console.error('Vimeo pause error:', error);
            }
        }
    }
    async seekTo(seconds) {
        if (this.player && this.isReady) {
            try {
                await this.player.setCurrentTime(seconds);
            } catch (error) {
                console.error('Vimeo seek error:', error);
            }
        }
    }
    async getCurrentTime() {
        if (this.player && this.isReady) {
            try {
                return await this.player.getCurrentTime();
            } catch (error) {
                console.error('Vimeo getCurrentTime error:', error);
            }
        }
        return 0;
    }
    async getDuration() {
        if (this.player && this.isReady) {
            try {
                return await this.player.getDuration();
            } catch (error) {
                console.error('Vimeo getDuration error:', error);
            }
        }
        return 0;
    }
    async setVolume(volume) {
        if (this.player && this.isReady) {
            try {
                await this.player.setVolume(volume); // Vimeo erwartet 0-1
            } catch (error) {
                console.error('Vimeo setVolume error:', error);
            }
        }
    }
    async getVolume() {
        if (this.player && this.isReady) {
            try {
                return await this.player.getVolume();
            } catch (error) {
                console.error('Vimeo getVolume error:', error);
            }
        }
        return 1;
    }
    async mute() {
        if (this.player && this.isReady) {
            try {
                await this.player.setMuted(true);
            } catch (error) {
                console.error('Vimeo mute error:', error);
            }
        }
    }
    async unmute() {
        if (this.player && this.isReady) {
            try {
                await this.player.setMuted(false);
            } catch (error) {
                console.error('Vimeo unmute error:', error);
            }
        }
    }
    async isMuted() {
        if (this.player && this.isReady) {
            try {
                return await this.player.getMuted();
            } catch (error) {
                console.error('Vimeo getMuted error:', error);
            }
        }
        return false;
    }
    async setPlaybackRate(rate) {
        if (this.player && this.isReady) {
            try {
                await this.player.setPlaybackRate(rate);
            } catch (error) {
                console.error('Vimeo setPlaybackRate error:', error);
            }
        }
    }
    async getPlaybackRate() {
        if (this.player && this.isReady) {
            try {
                return await this.player.getPlaybackRate();
            } catch (error) {
                console.error('Vimeo getPlaybackRate error:', error);
            }
        }
        return 1;
    }
    async destroy() {
        if (this.player) {
            try {
                await this.player.destroy();
                this.player = null;
                this.isReady = false;
            } catch (error) {
                console.error('Vimeo destroy error:', error);
            }
        }
    }
}
function extractVimeoId(url) {
    const regex = /vimeo\.com\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
}}),
"[project]/src/utils/videoUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addPlayerStyles": (()=>addPlayerStyles),
    "formatTime": (()=>formatTime),
    "parseChaptersVtt": (()=>parseChaptersVtt),
    "parseVtt": (()=>parseVtt),
    "toSeconds": (()=>toSeconds)
});
const parseVtt = (vtt, type)=>{
    const cues = [];
    const lines = vtt.replace(/^WEBVTT.*\n/, '').split(/\r?\n/).filter((l)=>l.trim() !== '');
    let i = 0;
    while(i < lines.length){
        if (/^\d+$/.test(lines[i])) i++;
        if (/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i])) {
            const [start, end] = lines[i].split(' --> ').map(toSeconds);
            i++;
            let text = '';
            while(i < lines.length && !/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i]) && !/^\d+$/.test(lines[i])){
                text += (text ? ' ' : '') + lines[i];
                i++;
            }
            cues.push({
                start,
                end,
                text,
                type
            });
        } else {
            i++;
        }
    }
    return cues;
};
const toSeconds = (s)=>{
    const [h, m, rest] = s.split(':');
    const [sec, ms] = rest.split(',');
    return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(sec) + (ms ? parseInt(ms) / 1000 : 0);
};
const parseChaptersVtt = (vtt)=>{
    const chapters = [];
    const lines = vtt.replace(/^WEBVTT.*\n/, '').split(/\r?\n/).filter((l)=>l.trim() !== '');
    let i = 0;
    while(i < lines.length){
        if (/^\d+$/.test(lines[i])) i++;
        if (/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i])) {
            const [start, end] = lines[i].split(' --> ').map(toSeconds);
            i++;
            let title = '';
            while(i < lines.length && !/^\d{2}:\d{2}:\d{2}\.\d{3} -->/.test(lines[i]) && !/^\d+$/.test(lines[i])){
                title += (title ? ' ' : '') + lines[i];
                i++;
            }
            chapters.push({
                start,
                end,
                title
            });
        } else {
            i++;
        }
    }
    return chapters;
};
const formatTime = (sec)=>{
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
};
const addPlayerStyles = ()=>{
    const style = document.createElement('style');
    style.innerHTML = `
    .player-btn:focus {
      outline: 3px solid #1976d2;
      outline-offset: 2px;
      z-index: 2;
    }
  `;
    document.head.appendChild(style);
    return ()=>{
        document.head.removeChild(style);
    };
};
}}),
"[project]/src/hooks/usePlayerEffects.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePlayerEffects": (()=>usePlayerEffects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoExtractors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoExtractors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubePlayer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/youtubePlayer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$vimeoPlayer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/vimeoPlayer.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoUtils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const usePlayerEffects = ({ mp4, webm, youtube, vimeo, btag, captions, description, chapters, playerState, cues, parsedChapters, videoRef, youtubeContainerRef, vimeoContainerRef })=>{
    // useRef für autoHideTimeout
    const autoHideTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Video source resolution - REMOVED playerState from dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const resolveVideoSource = async ()=>{
            playerState.setIsLoading(true);
            try {
                if (mp4 || webm) {
                    playerState.setPlayerType('video');
                    const sources = {};
                    if (mp4) {
                        if (Array.isArray(mp4)) {
                            sources.mp4 = mp4.map((url, index)=>({
                                    url,
                                    quality: `Quality ${index + 1}`,
                                    width: 1920,
                                    height: 1080
                                }));
                        } else {
                            sources.mp4 = [
                                {
                                    url: mp4,
                                    quality: 'Original',
                                    width: 1920,
                                    height: 1080
                                }
                            ];
                        }
                    }
                    if (webm) {
                        if (Array.isArray(webm)) {
                            sources.webm = webm.map((url, index)=>({
                                    url,
                                    quality: `Quality ${index + 1}`,
                                    width: 1920,
                                    height: 1080
                                }));
                        } else {
                            sources.webm = [
                                {
                                    url: webm,
                                    quality: 'Original',
                                    width: 1920,
                                    height: 1080
                                }
                            ];
                        }
                    }
                    playerState.setVideoSources(sources);
                    // Set available qualities
                    const qualities = [];
                    if (sources.mp4) {
                        sources.mp4.forEach((source)=>{
                            qualities.push({
                                label: `${source.quality} (MP4) - ${source.width}x${source.height}`,
                                value: source.quality,
                                format: 'mp4',
                                url: source.url
                            });
                        });
                    }
                    if (sources.webm) {
                        sources.webm.forEach((source)=>{
                            qualities.push({
                                label: `${source.quality} (WebM) - ${source.width}x${source.height}`,
                                value: source.quality,
                                format: 'webm',
                                url: source.url
                            });
                        });
                    }
                    playerState.setAvailableQualities(qualities);
                    // Set first available source
                    if (sources.mp4?.[0]) {
                        playerState.setVideoSrc(sources.mp4[0].url);
                        playerState.setSelectedQuality(sources.mp4[0].quality);
                    } else if (sources.webm?.[0]) {
                        playerState.setVideoSrc(sources.webm[0].url);
                        playerState.setSelectedQuality(sources.webm[0].quality);
                    }
                } else if (youtube) {
                    playerState.setPlayerType('youtube');
                } else if (vimeo) {
                    playerState.setPlayerType('vimeo');
                } else if (btag) {
                    playerState.setPlayerType('btag');
                    const sources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoExtractors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractBundestagVideo"])(btag);
                    playerState.setVideoSources(sources);
                    const qualities = [];
                    if (sources.mp4) {
                        sources.mp4.forEach((source)=>{
                            qualities.push({
                                label: `${source.quality} (${source.width}x${source.height})`,
                                value: source.quality,
                                format: 'mp4',
                                url: source.url
                            });
                        });
                    }
                    playerState.setAvailableQualities(qualities);
                    if (sources.mp4?.[0]) {
                        playerState.setVideoSrc(sources.mp4[0].url);
                        playerState.setSelectedQuality(sources.mp4[0].quality);
                    }
                }
            } catch (error) {
                console.error('Video source resolution failed:', error);
            } finally{
                playerState.setIsLoading(false);
            }
        };
        resolveVideoSource();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        mp4,
        webm,
        youtube,
        vimeo,
        btag
    ]); // ONLY the actual prop dependencies
    // YouTube player initialization - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (playerState.playerType === 'youtube' && youtube) {
            const initYouTubePlayer = async ()=>{
                const videoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubePlayer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractYouTubeId"])(youtube);
                if (!videoId) return;
                if (youtubeContainerRef.current) {
                    const playerId = `youtube-player-${Math.random().toString(36).substr(2, 9)}`;
                    youtubeContainerRef.current.innerHTML = `<div id="${playerId}"></div>`;
                    try {
                        const ytPlayer = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubePlayer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YouTubePlayerWrapper"](playerId, videoId);
                        await ytPlayer.init();
                        playerState.setYoutubePlayer(ytPlayer);
                        ytPlayer.on('ready', ()=>{
                            playerState.setDuration(ytPlayer.getDuration());
                            if (playerState.isMuted) ytPlayer.mute();
                            playerState.setVolume(ytPlayer.getVolume());
                        });
                        ytPlayer.on('play', ()=>playerState.setIsPlaying(true));
                        ytPlayer.on('pause', ()=>playerState.setIsPlaying(false));
                        ytPlayer.on('ended', ()=>playerState.setIsPlaying(false));
                    } catch (error) {
                        console.error('Failed to initialize YouTube player:', error);
                    }
                }
            };
            initYouTubePlayer();
        }
        return ()=>{
            if (playerState.youtubePlayer) {
                playerState.youtubePlayer.destroy();
                playerState.setYoutubePlayer(null);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        playerState.playerType,
        youtube
    ]); // REMOVED playerState from deps
    // Vimeo player initialization - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (playerState.playerType === 'vimeo' && vimeo) {
            const initVimeoPlayer = async ()=>{
                const videoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$vimeoPlayer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractVimeoId"])(vimeo);
                if (!videoId) return;
                if (vimeoContainerRef.current) {
                    const playerId = `vimeo-player-${Math.random().toString(36).substr(2, 9)}`;
                    vimeoContainerRef.current.innerHTML = `<div id="${playerId}"></div>`;
                    try {
                        const vimeoPlayer = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$vimeoPlayer$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VimeoPlayerWrapper"](playerId, videoId);
                        await vimeoPlayer.init();
                        playerState.setVimeoPlayer(vimeoPlayer);
                        vimeoPlayer.on('ready', async ()=>{
                            const duration = await vimeoPlayer.getDuration();
                            playerState.setDuration(duration);
                            if (playerState.isMuted) await vimeoPlayer.mute();
                            const volume = await vimeoPlayer.getVolume();
                            playerState.setVolume(volume);
                        });
                        vimeoPlayer.on('play', ()=>playerState.setIsPlaying(true));
                        vimeoPlayer.on('pause', ()=>playerState.setIsPlaying(false));
                        vimeoPlayer.on('ended', ()=>playerState.setIsPlaying(false));
                        vimeoPlayer.on('timeupdate', (data)=>{
                            playerState.setCurrentTime(data.seconds);
                        });
                    } catch (error) {
                        console.error('Failed to initialize Vimeo player:', error);
                    }
                }
            };
            initVimeoPlayer();
        }
        return ()=>{
            if (playerState.vimeoPlayer) {
                playerState.vimeoPlayer.destroy();
                playerState.setVimeoPlayer(null);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        playerState.playerType,
        vimeo
    ]); // REMOVED playerState from deps
    // Native video event listeners - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video || playerState.playerType !== 'video' && playerState.playerType !== 'btag') return;
        const onTimeUpdate = ()=>playerState.setCurrentTime(video.currentTime);
        const onLoaded = ()=>playerState.setDuration(video.duration);
        video.addEventListener('timeupdate', onTimeUpdate);
        video.addEventListener('loadedmetadata', onLoaded);
        return ()=>{
            video.removeEventListener('timeupdate', onTimeUpdate);
            video.removeEventListener('loadedmetadata', onLoaded);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        playerState.playerType
    ]); // REMOVED playerState from deps
    // Chapter highlighting - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (parsedChapters.length === 0) return;
        const idx = parsedChapters.findIndex((ch)=>playerState.currentTime >= ch.start && playerState.currentTime < ch.end);
        playerState.setCurrentChapterIdx(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        playerState.currentTime,
        parsedChapters
    ]); // REMOVED playerState from deps
    // Auto-hide controls - KORRIGIERT: Nur verstecken wenn Video läuft
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!playerState.controlsVisible || !playerState.isPlaying) return;
        if (autoHideTimeoutRef.current) {
            clearTimeout(autoHideTimeoutRef.current);
        }
        autoHideTimeoutRef.current = setTimeout(()=>{
            if (playerState.isPlaying) {
                playerState.setControlsVisible(false);
            }
        }, 3000);
        return ()=>{
            if (autoHideTimeoutRef.current) {
                clearTimeout(autoHideTimeoutRef.current);
                autoHideTimeoutRef.current = null;
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        playerState.controlsVisible,
        playerState.isPlaying
    ]);
    // Show controls on interaction - KORRIGIERT: Entfernt autoHideTimeout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const show = ()=>{
            playerState.setControlsVisible(true);
        };
        window.addEventListener('mousemove', show);
        window.addEventListener('keydown', show);
        return ()=>{
            window.removeEventListener('mousemove', show);
            window.removeEventListener('keydown', show);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // PiP support check - FIXED to run only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        playerState.setIsPiPSupported(!!document.pictureInPictureEnabled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // EMPTY dependency array - run only once
    // CC toggle effect - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (videoRef.current && (playerState.playerType === 'video' || playerState.playerType === 'btag')) {
            const tracks = videoRef.current.textTracks;
            for(let i = 0; i < tracks.length; i++){
                if (tracks[i].kind === 'subtitles') {
                    tracks[i].mode = playerState.showCC ? 'showing' : 'hidden';
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        playerState.showCC,
        captions,
        playerState.playerType
    ]); // REMOVED playerState and videoRef from deps
    // Add styles - FIXED to run only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addPlayerStyles"])();
    }, []); // EMPTY dependency array - run only once
};
}}),
"[project]/src/hooks/usePlayerControls.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePlayerControls": (()=>usePlayerControls)
});
const usePlayerControls = ({ videoRef, youtubeContainerRef, vimeoContainerRef, playerState })=>{
    const handlePlay = ()=>{
        if (videoRef.current) {
            videoRef.current.play();
            playerState.setIsPlaying(true);
            playerState.setHasStartedOnce(true);
        }
    };
    const handlePause = ()=>{
        if (videoRef.current) {
            videoRef.current.pause();
            playerState.setIsPlaying(false);
        }
    };
    const handleSeek = (time)=>{
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            playerState.setCurrentTime(time);
        }
    };
    const handleMuteToggle = ()=>{
        if (videoRef.current) {
            const newMuted = !playerState.isMuted;
            videoRef.current.muted = newMuted;
            playerState.setIsMuted(newMuted);
        }
    };
    const handleVolumeChange = (volume)=>{
        if (videoRef.current) {
            videoRef.current.volume = volume;
            playerState.setVolume(volume);
            playerState.setIsMuted(volume === 0);
            if (volume > 0) {
                videoRef.current.muted = false;
            }
        }
    };
    const handleSpeedChange = (speed)=>{
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
            playerState.setPlaybackRate(speed);
        }
    };
    const handleQualityChange = (quality)=>{
        playerState.setSelectedQuality(quality);
    // TODO: Implement quality switching logic
    };
    const handleFullscreen = ()=>{
        if (videoRef.current?.requestFullscreen) {
            videoRef.current.requestFullscreen();
        }
    };
    const handlePiP = ()=>{
        if (videoRef.current && videoRef.current.requestPictureInPicture) {
            videoRef.current.requestPictureInPicture();
        }
    };
    const handleChapterClick = (time)=>{
        handleSeek(time);
    };
    return {
        handlePlay,
        handlePause,
        handleSeek,
        handleMuteToggle,
        handleVolumeChange,
        handleSpeedChange,
        handleQualityChange,
        handleFullscreen,
        handlePiP,
        handleChapterClick
    };
};
}}),
"[project]/src/hooks/useVideoData.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useChaptersData": (()=>useChaptersData),
    "useTranscriptData": (()=>useTranscriptData),
    "useVoicesData": (()=>useVoicesData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoUtils.ts [app-ssr] (ecmascript)");
;
;
const useTranscriptData = (description)=>{
    const [cues, setCues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!description) {
            setCues([]);
            return;
        }
        (async ()=>{
            try {
                const txt = await fetch(description).then((r)=>r.text());
                const parsedCues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseVtt"])(txt, 'description');
                setCues(parsedCues);
            } catch (error) {
                console.error('Error loading transcript:', error);
                setCues([]);
            }
        })();
    }, [
        description
    ]);
    return {
        cues
    }; // KORRIGIERT: Objekt mit cues property
};
const useChaptersData = (chapters)=>{
    const [parsedChapters, setParsedChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!chapters) {
            setParsedChapters([]);
            return;
        }
        (async ()=>{
            try {
                const txt = await fetch(chapters).then((r)=>r.text());
                const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseChaptersVtt"])(txt);
                setParsedChapters(parsed);
            } catch (error) {
                console.error('Error loading chapters:', error);
                setParsedChapters([]);
            }
        })();
    }, [
        chapters
    ]);
    return {
        parsedChapters
    }; // KORRIGIERT: Objekt mit parsedChapters property
};
const useVoicesData = ()=>{
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateVoices = ()=>{
            const vs = window.speechSynthesis.getVoices();
            setVoices(vs);
            if (!selectedVoice && vs.length > 0) setSelectedVoice(vs[0].voiceURI);
        };
        updateVoices();
        window.speechSynthesis.onvoiceschanged = updateVoices;
    }, [
        selectedVoice
    ]);
    return {
        voices,
        selectedVoice,
        setSelectedVoice
    };
};
}}),
"[project]/src/components/icons.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AudioDescIcon": (()=>AudioDescIcon),
    "CCIcon": (()=>CCIcon),
    "ChaptersIcon": (()=>ChaptersIcon),
    "FullscreenIcon": (()=>FullscreenIcon),
    "InfoIcon": (()=>InfoIcon),
    "LinkIcon": (()=>LinkIcon),
    "MuteIcon": (()=>MuteIcon),
    "PauseIcon": (()=>PauseIcon),
    "PiPIcon": (()=>PiPIcon),
    "PlayIcon": (()=>PlayIcon),
    "QualityIcon": (()=>QualityIcon),
    "ReturnIcon": (()=>ReturnIcon),
    "SettingsIcon": (()=>SettingsIcon),
    "SkipBackIcon": (()=>SkipBackIcon),
    "SkipForwardIcon": (()=>SkipForwardIcon),
    "SpeedIcon": (()=>SpeedIcon),
    "TranscriptIcon": (()=>TranscriptIcon),
    "UnmuteIcon": (()=>UnmuteIcon),
    "VolumeIcon": (()=>VolumeIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const PlayIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "6,4 20,12 6,20"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 5,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, this);
const PauseIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "4",
                width: "4",
                height: "16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "14",
                y: "4",
                width: "4",
                height: "16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 12,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 10,
        columnNumber: 3
    }, this);
const MuteIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "6,8 10,8 14,4 14,20 10,16 6,16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "8",
                x2: "22",
                y2: "16",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "22",
                y1: "8",
                x2: "18",
                y2: "16",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 17,
        columnNumber: 3
    }, this);
const UnmuteIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "6,8 10,8 14,4 14,20 10,16 6,16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M17 9a4 4 0 0 1 0 6",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 27,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 25,
        columnNumber: 3
    }, this);
const TranscriptIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "none",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 16C5 15.4477 5.44772 15 6 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 136
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H10C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H18Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 293
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H17C16.4477 17 16 16.5523 16 16Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 453
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 616
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44771 20.5523 5 20 5Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 768
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 32,
        columnNumber: 3
    }, this);
const ReturnIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "1,4 1,10 7,10"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.51,15a9,9 0 1,0,2.13-9.36L1,10"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 51,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, this);
const SkipBackIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "11,19 2,12 11,5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "22,19 13,12 22,5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 70,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 57,
        columnNumber: 3
    }, this);
const SkipForwardIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "13,19 22,12 13,5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 87,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "2,19 11,12 2,5"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 88,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, this);
const SpeedIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 5l8 3-8 3V5z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 106,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 5l8 3-8 3V5z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 107,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, this);
const CCIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM218.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2.1 48 51.1 70.5 92.3 32.6zm190.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.5 56.9-172.7 32.1-172.7-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 222.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 113,
            columnNumber: 85
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 112,
        columnNumber: 3
    }, this);
const FullscreenIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zm6 10v6h-6v-2h4v-4h2zm-10 6H4v-6h2v4h4v2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 118,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this);
const PiPIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 124,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "13",
                width: "7",
                height: "5",
                rx: "1",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 125,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 123,
        columnNumber: 3
    }, this);
const VolumeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "6,8 10,8 14,4 14,20 10,16 6,16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 131,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 8a4 4 0 0 1 0 8",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 132,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 130,
        columnNumber: 3
    }, this);
const AudioDescIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "24",
        width: "24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zm166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776 0-32.239-17.49-49.005-46.175-49.005zM512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zM245.459 336.139l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 139,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 137,
        columnNumber: 3
    }, this);
const ChaptersIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "4",
                y: "5",
                width: "16",
                height: "14",
                rx: "2",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 145,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "9",
                x2: "16",
                y2: "9",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 146,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "13",
                x2: "16",
                y2: "13",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 147,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "17",
                x2: "12",
                y2: "17",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 148,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 144,
        columnNumber: 3
    }, this);
const SettingsIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 154,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 155,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 153,
        columnNumber: 3
    }, this);
const InfoIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 161,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 160,
        columnNumber: 3
    }, this);
const QualityIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 167,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 166,
        columnNumber: 3
    }, this);
const LinkIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 500 500",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3l0 50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6l0-50.1c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 175,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 172,
        columnNumber: 3
    }, this);
}}),
"[project]/src/components/PlayerControls.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "PlayerControls-module__55r3oa__active",
  "controlButton": "PlayerControls-module__55r3oa__controlButton",
  "controlsRow": "PlayerControls-module__55r3oa__controlsRow",
  "dropdown": "PlayerControls-module__55r3oa__dropdown",
  "dropdownContainer": "PlayerControls-module__55r3oa__dropdownContainer",
  "dropdownItem": "PlayerControls-module__55r3oa__dropdownItem",
  "fullControlsContainer": "PlayerControls-module__55r3oa__fullControlsContainer",
  "leftControls": "PlayerControls-module__55r3oa__leftControls",
  "minimalControlsContainer": "PlayerControls-module__55r3oa__minimalControlsContainer",
  "playPauseButton": "PlayerControls-module__55r3oa__playPauseButton",
  "progressBar": "PlayerControls-module__55r3oa__progressBar",
  "progressSlider": "PlayerControls-module__55r3oa__progressSlider",
  "qualitySelect": "PlayerControls-module__55r3oa__qualitySelect",
  "rightControls": "PlayerControls-module__55r3oa__rightControls",
  "speedSelect": "PlayerControls-module__55r3oa__speedSelect",
  "timeDisplay": "PlayerControls-module__55r3oa__timeDisplay",
  "volumeSlider": "PlayerControls-module__55r3oa__volumeSlider",
});
}}),
"[project]/src/components/PlayerControls.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerControls": (()=>PlayerControls),
    "PlayerControlsFull": (()=>PlayerControlsFull),
    "PlayerControlsMinimal": (()=>PlayerControlsMinimal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/PlayerControls.module.css [app-ssr] (css module)");
;
;
;
;
const PlayerControlsFull = ({ playerState, playerControls, hasCC, hasTranscript, hasAudioDesc, hasChapters })=>{
    const [showSpeedDropdown, setShowSpeedDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQualityDropdown, setShowQualityDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatTime = (seconds)=>{
        if (!seconds || isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].fullControlsContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeDisplay,
                        children: formatTime(playerState.currentTime)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: 0,
                        max: playerState.duration || 1,
                        step: 0.1,
                        value: playerState.currentTime || 0,
                        onChange: (e)=>playerControls.handleSeek(Number(e.target.value)),
                        "aria-label": "Fortschritt",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressSlider
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeDisplay,
                        children: formatTime(playerState.duration)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlsRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftControls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playPauseButton}`,
                                "aria-label": playerState.isPlaying ? 'Pausieren' : 'Abspielen',
                                children: playerState.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PauseIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 80,
                                    columnNumber: 38
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayIcon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 80,
                                    columnNumber: 64
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleMuteToggle();
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                                "aria-label": playerState.isMuted ? 'Ton an' : 'Stumm',
                                children: playerState.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnmuteIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 92,
                                    columnNumber: 36
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MuteIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 92,
                                    columnNumber: 63
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 0,
                                max: 1,
                                step: 0.01,
                                value: playerState.isMuted ? 0 : playerState.volume || 1,
                                onChange: (e)=>playerControls.handleVolumeChange(Number(e.target.value)),
                                "aria-label": "Lautstärke",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].volumeSlider
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleSeek(0);
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                                "aria-label": "Zum Anfang",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReturnIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleSeek(Math.max(0, (playerState.currentTime || 0) - 10));
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                                "aria-label": "10 Sekunden zurück",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkipBackIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleSeek((playerState.currentTime || 0) + 10);
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                                "aria-label": "10 Sekunden vor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SkipForwardIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownContainer,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setShowSpeedDropdown(!showSpeedDropdown);
                                            setShowQualityDropdown(false);
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                                        "aria-label": "Geschwindigkeit",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpeedIcon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PlayerControls.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this),
                                    showSpeedDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdown,
                                        children: [
                                            0.25,
                                            0.5,
                                            0.75,
                                            1,
                                            1.25,
                                            1.5,
                                            2
                                        ].map((speed)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    playerControls.handleSpeedChange(speed);
                                                    setShowSpeedDropdown(false);
                                                },
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem} ${(playerState.playbackRate || 1) === speed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                                children: [
                                                    speed,
                                                    "x"
                                                ]
                                            }, speed, true, {
                                                fileName: "[project]/src/components/PlayerControls.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightControls,
                        children: [
                            playerState.isPiPSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handlePiP();
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                                "aria-label": "Bild-in-Bild",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PiPIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 188,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleFullscreen();
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                                "aria-label": "Vollbild",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FullscreenIcon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlsRow,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftControls,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownContainer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: (e)=>{
                                        e.stopPropagation();
                                        setShowQualityDropdown(!showQualityDropdown);
                                        setShowSpeedDropdown(false);
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                                    "aria-label": "Qualität",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QualityIcon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                showQualityDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdown,
                                    children: [
                                        'auto',
                                        '1080p',
                                        '720p',
                                        '480p'
                                    ].map((quality)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                playerControls.handleQualityChange(quality);
                                                setShowQualityDropdown(false);
                                            },
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dropdownItem} ${(playerState.selectedQuality || 'auto') === quality ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                                            children: quality
                                        }, quality, false, {
                                            fileName: "[project]/src/components/PlayerControls.tsx",
                                            lineNumber: 224,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 222,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                playerState.setSettingsOpen(!playerState.settingsOpen);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.settingsOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                            "aria-label": "Einstellungen",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 253,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        hasCC && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                e.preventDefault();
                                playerState.setShowCC(!playerState.showCC);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.showCC ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                            "aria-label": "Untertitel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CCIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this),
                        hasTranscript && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                playerState.setShowTranscript(!playerState.showTranscript);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.showTranscript ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                            "aria-label": "Transkript",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TranscriptIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this),
                        hasAudioDesc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                playerState.setAudioDescActive(!playerState.audioDescActive);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.audioDescActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                            "aria-label": "Audiodeskription",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AudioDescIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 301,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this),
                        hasChapters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                playerState.setShowChapters(!playerState.showChapters);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.showChapters ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ''}`,
                            "aria-label": "Kapitel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChaptersIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 317,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 307,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerControls.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
const PlayerControlsMinimal = ({ playerState, playerControls, onFullPlayerClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].minimalControlsContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
                },
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playPauseButton}`,
                "aria-label": playerState.isPlaying ? 'Pausieren' : 'Abspielen',
                children: playerState.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PauseIcon"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 342,
                    columnNumber: 34
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayIcon"], {
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 342,
                    columnNumber: 60
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    playerControls.handleMuteToggle();
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                "aria-label": playerState.isMuted ? 'Ton an' : 'Stumm',
                children: playerState.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnmuteIcon"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 353,
                    columnNumber: 32
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MuteIcon"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 353,
                    columnNumber: 59
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].spacer
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onFullPlayerClick?.();
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlButton,
                "aria-label": "Vollständiger Player",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinkIcon"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 366,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerControls.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
};
const PlayerControls = PlayerControlsFull;
}}),
"[project]/src/components/SettingsModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SettingsModal": (()=>SettingsModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const SettingsModal = ({ open, onClose, playerState, showCC, showTranscript, hasCC, hasTranscript })=>{
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: 'white',
                borderRadius: 12,
                padding: 24,
                maxWidth: 500,
                width: '90%',
                maxHeight: '80vh',
                overflow: 'auto'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Einstellungen"
                }, void 0, false, {
                    fileName: "[project]/src/components/SettingsModal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Audiodeskription"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: "Modus:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: playerState.audioDescMode,
                            onChange: (e)=>playerState.setAudioDescMode(e.target.value),
                            style: {
                                width: '100%',
                                marginBottom: 12,
                                padding: 8,
                                borderRadius: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "tts",
                                    children: "Transkript vorlesen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "audio",
                                    disabled: !playerState.hasAudioTrack,
                                    children: [
                                        "Zur Audiospur wechseln ",
                                        playerState.hasAudioTrack ? '' : '(nicht verfügbar)'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "sign",
                                    disabled: !playerState.hasSignTrack,
                                    children: [
                                        "Gebärdensprache-Overlay ",
                                        playerState.hasSignTrack ? '' : '(nicht verfügbar)'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        playerState.audioDescMode === 'tts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Stimme:"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: playerState.selectedVoice,
                                    onChange: (e)=>playerState.setSelectedVoice(e.target.value),
                                    style: {
                                        width: '100%',
                                        marginBottom: 12,
                                        padding: 8,
                                        borderRadius: 4
                                    },
                                    children: playerState.voices.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: v.voiceURI,
                                            children: [
                                                v.name,
                                                " (",
                                                v.lang,
                                                ")"
                                            ]
                                        }, v.voiceURI, true, {
                                            fileName: "[project]/src/components/SettingsModal.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: [
                                        "Pitch: ",
                                        playerState.pitch.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "range",
                                    min: 0.5,
                                    max: 2,
                                    step: 0.01,
                                    value: playerState.pitch,
                                    onChange: (e)=>playerState.setPitch(Number(e.target.value)),
                                    style: {
                                        width: '100%',
                                        marginBottom: 12
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        margin: '12px 0'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: playerState.autoStop,
                                                    onChange: (e)=>playerState.setAutoStop(e.target.checked),
                                                    style: {
                                                        marginRight: 8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                "Video automatisch stoppen"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsModal.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            style: {
                                                display: 'block',
                                                marginBottom: 8
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: playerState.autoStart,
                                                    onChange: (e)=>playerState.setAutoStart(e.target.checked),
                                                    style: {
                                                        marginRight: 8
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                "Video nach Vorlesen automatisch starten"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SettingsModal.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                !playerState.ttsAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: 'red',
                                        marginBottom: 12
                                    },
                                    children: playerState.ttsError || 'Text-to-Speech nicht verfügbar!'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsModal.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 16
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Untertitel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SettingsModal.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SettingsModal.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Schriftgröße"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            style: {
                                width: '100%',
                                padding: 8,
                                borderRadius: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Klein"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Mittel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Groß"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Extra Groß"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsModal.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Schriftfarbe"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            style: {
                                width: '100%',
                                padding: 8,
                                borderRadius: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Weiß"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Gelb"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Grün"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Cyan"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsModal.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Hintergrundfarbe"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            style: {
                                width: '100%',
                                padding: 8,
                                borderRadius: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Schwarz"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Dunkelgrau"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SettingsModal.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SettingsModal.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SettingsModal.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        background: '#007acc',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: 6,
                        cursor: 'pointer',
                        width: '100%'
                    },
                    children: "Schließen"
                }, void 0, false, {
                    fileName: "[project]/src/components/SettingsModal.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SettingsModal.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SettingsModal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/InfoModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "InfoModal": (()=>InfoModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const InfoModal = ({ open, onClose })=>{
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                background: 'white',
                borderRadius: 12,
                padding: 24,
                maxWidth: 600,
                width: '90%',
                maxHeight: '80vh',
                overflow: 'auto'
            },
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Informationen & Tastaturnavigation"
                }, void 0, false, {
                    fileName: "[project]/src/components/InfoModal.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Tastatursteuerung"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InfoModal.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            style: {
                                width: '100%',
                                borderCollapse: 'collapse'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #eee'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8,
                                                    fontWeight: 'bold'
                                                },
                                                children: "Leertaste"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8
                                                },
                                                children: "Wiedergabe/Pause"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 47,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InfoModal.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #eee'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8,
                                                    fontWeight: 'bold'
                                                },
                                                children: "← →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8
                                                },
                                                children: "5 Sekunden vor/zurück"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 51,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InfoModal.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #eee'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8,
                                                    fontWeight: 'bold'
                                                },
                                                children: "↑ ↓"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 54,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8
                                                },
                                                children: "Lautstärke erhöhen/verringern"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InfoModal.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #eee'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8,
                                                    fontWeight: 'bold'
                                                },
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8
                                                },
                                                children: "Zum Anfang springen"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InfoModal.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #eee'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8,
                                                    fontWeight: 'bold'
                                                },
                                                children: "M"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8
                                                },
                                                children: "Stumm schalten"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InfoModal.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #eee'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8,
                                                    fontWeight: 'bold'
                                                },
                                                children: "F"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8
                                                },
                                                children: "Vollbild"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InfoModal.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #eee'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8,
                                                    fontWeight: 'bold'
                                                },
                                                children: "C"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8
                                                },
                                                children: "Untertitel ein/aus"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InfoModal.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        style: {
                                            borderBottom: '1px solid #eee'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8,
                                                    fontWeight: 'bold'
                                                },
                                                children: "T"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                style: {
                                                    padding: 8
                                                },
                                                children: "Transkript ein/aus"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/InfoModal.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/InfoModal.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InfoModal.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InfoModal.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InfoModal.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Barrierefreiheit"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InfoModal.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Vollständige Tastaturnavigation"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Screen Reader kompatibel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Untertitel verfügbar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Audiodeskription verfügbar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Transkript verfügbar"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Anpassbare Schriftgrößen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InfoModal.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InfoModal.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 16
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Technische Informationen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InfoModal.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Dieser Player unterstützt:"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InfoModal.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "MP4, WebM Video-Formate"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "YouTube und Vimeo Einbettungen"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "VTT Untertitel und Kapitel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Verschiedene Videoqualitäten"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "Picture-in-Picture Modus"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InfoModal.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/InfoModal.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InfoModal.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    style: {
                        background: '#007acc',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: 6,
                        cursor: 'pointer',
                        width: '100%'
                    },
                    children: "Schließen"
                }, void 0, false, {
                    fileName: "[project]/src/components/InfoModal.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/InfoModal.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/InfoModal.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/PlayerModals.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerModals": (()=>PlayerModals)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SettingsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InfoModal.tsx [app-ssr] (ecmascript)");
;
;
;
const PlayerModals = ({ playerState, hasCC, hasTranscript })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SettingsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SettingsModal"], {
                open: playerState.settingsOpen,
                onClose: ()=>playerState.setSettingsOpen(false),
                playerState: playerState,
                showCC: playerState.showCC,
                showTranscript: playerState.showTranscript,
                hasCC: hasCC,
                hasTranscript: hasTranscript
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerModals.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InfoModal"], {
                open: playerState.infoOpen,
                onClose: ()=>playerState.setInfoOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerModals.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
}}),
"[project]/src/components/Transcript.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Transcript": (()=>Transcript)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Transcript = ({ cues, currentCueIdx, visible })=>{
    if (!visible || cues.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            marginTop: 16,
            background: '#f5f5f5',
            padding: 8,
            borderRadius: 4,
            minHeight: 40
        },
        "aria-live": "polite",
        role: "region",
        "aria-label": "Synchronisiertes Transkript",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            style: {
                listStyle: 'none',
                padding: 0,
                margin: 0
            },
            children: cues.map((cue, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    "aria-current": idx === currentCueIdx ? 'true' : undefined,
                    tabIndex: idx === currentCueIdx ? 0 : -1,
                    style: {
                        background: idx === currentCueIdx ? cue.type === 'caption' ? '#ffe082' : '#b3e5fc' : 'transparent',
                        fontWeight: idx === currentCueIdx ? 'bold' : 'normal',
                        color: cue.type === 'caption' ? '#333' : '#0277bd',
                        padding: '0 2px',
                        borderRadius: 2,
                        marginRight: 2,
                        outline: idx === currentCueIdx ? '2px solid #1976d2' : 'none',
                        display: 'inline-block',
                        marginBottom: 2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-label": cue.type === 'caption' ? 'Untertitel' : 'Beschreibung',
                        children: cue.text + ' '
                    }, void 0, false, {
                        fileName: "[project]/src/components/Transcript.tsx",
                        lineNumber: 44,
                        columnNumber: 13
                    }, this)
                }, idx, false, {
                    fileName: "[project]/src/components/Transcript.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/Transcript.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Transcript.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/ChaptersSidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChaptersSidebar": (()=>ChaptersSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoUtils.ts [app-ssr] (ecmascript)");
;
;
const ChaptersSidebar = ({ chapters, currentChapterIdx, onChapterClick, visible })=>{
    if (!visible || chapters.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        style: {
            width: 220,
            marginLeft: 16,
            background: '#f0f4f8',
            borderRadius: 4,
            padding: 12,
            height: '100%',
            maxHeight: 480,
            overflowY: 'auto'
        },
        "aria-label": "Kapitel-Liste",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    fontSize: 18,
                    margin: '0 0 8px 0'
                },
                children: "Kapitel"
            }, void 0, false, {
                fileName: "[project]/src/components/ChaptersSidebar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                style: {
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                },
                children: chapters.map((ch, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        style: {
                            marginBottom: 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "player-btn",
                            style: {
                                width: '100%',
                                textAlign: 'left',
                                background: idx === currentChapterIdx ? '#ffe082' : '#fff',
                                border: '1px solid #bbb',
                                borderRadius: 3,
                                padding: 6,
                                cursor: 'pointer',
                                fontWeight: idx === currentChapterIdx ? 'bold' : 'normal'
                            },
                            onClick: ()=>onChapterClick(ch.start),
                            "aria-label": `Springe zu ${ch.title}`,
                            children: [
                                ch.title,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        float: 'right',
                                        color: '#888',
                                        fontSize: 12
                                    },
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatTime"])(ch.start)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ChaptersSidebar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ChaptersSidebar.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/src/components/ChaptersSidebar.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ChaptersSidebar.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ChaptersSidebar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/PlayerSidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerSidebar": (()=>PlayerSidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Transcript$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Transcript.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChaptersSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ChaptersSidebar.tsx [app-ssr] (ecmascript)");
;
;
;
const PlayerSidebar = ({ playerState, cues, parsedChapters, onChapterClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            cues && playerState.showTranscript && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Transcript$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Transcript"], {
                cues: cues.filter((cue)=>cue.type === 'description'),
                currentCueIdx: playerState.currentCueIdx,
                visible: playerState.showTranscript
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerSidebar.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this),
            parsedChapters && playerState.showChapters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ChaptersSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChaptersSidebar"], {
                chapters: parsedChapters,
                currentChapterIdx: playerState.currentChapterIdx,
                onChapterClick: onChapterClick,
                visible: playerState.showChapters
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerSidebar.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
}}),
"[project]/src/components/PlayerContainer.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "captionsOverlay": "PlayerContainer-module__IInhMG__captionsOverlay",
  "captionsText": "PlayerContainer-module__IInhMG__captionsText",
  "container": "PlayerContainer-module__IInhMG__container",
  "containerClickable": "PlayerContainer-module__IInhMG__containerClickable",
  "containerDefault": "PlayerContainer-module__IInhMG__containerDefault",
  "controlBar": "PlayerContainer-module__IInhMG__controlBar",
  "loadingOverlay": "PlayerContainer-module__IInhMG__loadingOverlay",
  "playButton": "PlayerContainer-module__IInhMG__playButton",
  "posterOverlay": "PlayerContainer-module__IInhMG__posterOverlay",
  "videoElement": "PlayerContainer-module__IInhMG__videoElement",
  "vimeoContainer": "PlayerContainer-module__IInhMG__vimeoContainer",
  "youtubeContainer": "PlayerContainer-module__IInhMG__youtubeContainer",
});
}}),
"[project]/src/components/PlayerContainer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerContainer": (()=>PlayerContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerModals.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/PlayerContainer.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const PlayerContainer = ({ videoRef, youtubeContainerRef, vimeoContainerRef, playerState, playerControls, mp4, webm, poster, captions, description, chapters, controlsType = 'minimal', onFullPlayerClick, cues = [], parsedChapters = [] })=>{
    const handleContainerClick = ()=>{
        if (!playerState.isPlaying && !playerState.hasStartedOnce) {
            playerControls.handlePlay();
            playerState.setControlsVisible(true);
        }
    };
    const handleMouseMove = ()=>{
        if (playerState.hasStartedOnce) {
            playerState.setControlsVisible(true);
        }
    };
    // Keyboard Shortcuts
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        const handleKeyPress = (event)=>{
            if (event.key === 'i' || event.key === 'I') {
                playerState.setInfoOpen(!playerState.infoOpen);
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return ()=>{
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [
        playerState
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container} ${!playerState.isPlaying && !playerState.hasStartedOnce ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].containerClickable : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].containerDefault}`,
        onClick: handleContainerClick,
        onMouseMove: handleMouseMove,
        children: [
            playerState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].loadingOverlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Lädt..."
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerContainer.tsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this),
            videoRef && (playerState.playerType === 'video' || playerState.playerType === 'btag') && playerState.videoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: playerState.videoSrc,
                poster: poster,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].videoElement,
                controls: false,
                playsInline: true,
                autoPlay: false,
                muted: playerState.isMuted,
                onPlay: ()=>{
                    playerState.setIsPlaying(true);
                    playerState.setHasStartedOnce(true);
                },
                onPause: ()=>playerState.setIsPlaying(false),
                onTimeUpdate: ()=>{
                    if (videoRef.current) {
                        playerState.setCurrentTime(videoRef.current.currentTime);
                    }
                },
                onLoadedMetadata: ()=>{
                    if (videoRef.current) {
                        playerState.setDuration(videoRef.current.duration);
                    }
                },
                onVolumeChange: ()=>{
                    if (videoRef.current) {
                        playerState.setVolume(videoRef.current.volume);
                        playerState.setIsMuted(videoRef.current.muted);
                    }
                },
                children: [
                    controlsType === 'full' && captions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "subtitles",
                        src: captions,
                        srcLang: "de",
                        label: "Deutsche Untertitel",
                        default: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this),
                    controlsType === 'full' && description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "descriptions",
                        src: description,
                        srcLang: "de",
                        label: "Audiodeskription"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 109,
                        columnNumber: 13
                    }, this),
                    controlsType === 'full' && chapters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "chapters",
                        src: chapters,
                        srcLang: "de",
                        label: "Kapitel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            playerState.playerType === 'youtube' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: youtubeContainerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].youtubeContainer
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this),
            playerState.playerType === 'vimeo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: vimeoContainerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vimeoContainer
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            !playerState.hasStartedOnce && !playerState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].posterOverlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playButton,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayIcon"], {
                        width: 48,
                        height: 48
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerContainer.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this),
            controlsType === 'full' && playerState.showCC && playerState.isPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].captionsOverlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].captionsText
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerContainer.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            (controlsType === 'minimal' || controlsType === 'full' && playerState.hasStartedOnce) && (playerState.controlsVisible || !playerState.isPlaying && playerState.hasStartedOnce) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controlBar,
                "aria-label": "Player-Steuerung",
                children: [
                    controlsType === 'full' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerControlsFull"], {
                        playerState: playerState,
                        playerControls: playerControls,
                        hasCC: !!captions,
                        hasTranscript: !!description,
                        hasAudioDesc: !!description,
                        hasChapters: !!chapters
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this),
                    controlsType === 'minimal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerControlsMinimal"], {
                        playerState: playerState,
                        playerControls: playerControls,
                        onFullPlayerClick: onFullPlayerClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this),
            controlsType === 'full' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerModals$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerModals"], {
                        playerState: playerState,
                        hasCC: !!captions,
                        hasTranscript: !!description
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerSidebar"], {
                        playerState: playerState,
                        cues: cues,
                        parsedChapters: parsedChapters,
                        onChapterClick: playerControls.handleChapterClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerContainer.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/components/FullPlayer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerEffects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerEffects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerControls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerControls.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVideoData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerContainer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const FullPlayer = ({ mp4, webm, youtube, vimeo, btag, poster, captions, description, chapters, autoplay = false, muted = true })=>{
    // Refs
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const youtubeContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vimeoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const playerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerState"])({
        autoplay,
        muted
    });
    const { cues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTranscriptData"])(description);
    const { parsedChapters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChaptersData"])(chapters);
    const playerControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerControls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerControls"])({
        videoRef,
        youtubeContainerRef,
        vimeoContainerRef,
        playerState
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerEffects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerEffects"])({
        mp4,
        webm,
        youtube,
        vimeo,
        btag,
        captions,
        description,
        chapters,
        playerState,
        cues,
        parsedChapters,
        videoRef,
        youtubeContainerRef,
        vimeoContainerRef
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerContainer"], {
        videoRef: videoRef,
        youtubeContainerRef: youtubeContainerRef,
        vimeoContainerRef: vimeoContainerRef,
        playerState: playerState,
        playerControls: playerControls,
        mp4: mp4,
        webm: webm,
        poster: poster,
        captions: captions,
        description: description,
        chapters: chapters,
        controlsType: "full",
        cues: cues,
        parsedChapters: parsedChapters
    }, void 0, false, {
        fileName: "[project]/src/components/FullPlayer.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FullPlayer;
}}),
"[project]/src/components/MinimalPlayer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerState.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerEffects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerEffects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerControls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerControls.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerContainer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const MinimalPlayer = ({ mp4, webm, youtube, vimeo, btag, poster, link, autoplay = false, muted = true })=>{
    // Refs
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const youtubeContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vimeoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const playerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerState"])({
        autoplay,
        muted
    });
    const playerControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerControls$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerControls"])({
        videoRef,
        youtubeContainerRef,
        vimeoContainerRef,
        playerState
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerEffects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlayerEffects"])({
        mp4,
        webm,
        youtube,
        vimeo,
        btag,
        captions: undefined,
        description: undefined,
        chapters: undefined,
        playerState,
        cues: [],
        parsedChapters: [],
        videoRef,
        youtubeContainerRef,
        vimeoContainerRef
    });
    const handleFullPlayerClick = ()=>{
        if (link) {
            window.open(link, '_blank');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlayerContainer"], {
        videoRef: videoRef,
        youtubeContainerRef: youtubeContainerRef,
        vimeoContainerRef: vimeoContainerRef,
        playerState: playerState,
        playerControls: playerControls,
        mp4: mp4,
        webm: webm,
        poster: poster,
        controlsType: "minimal",
        onFullPlayerClick: handleFullPlayerClick
    }, void 0, false, {
        fileName: "[project]/src/components/MinimalPlayer.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = MinimalPlayer;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__7a09df0b._.js.map