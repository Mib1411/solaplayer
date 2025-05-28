(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/usePlayerState.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePlayerState": (()=>usePlayerState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const usePlayerState = ({ autoplay, muted })=>{
    _s();
    // Basic player state mit korrekten Defaults
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!autoplay); // Standard: Pause
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(muted); // Standard: Ton aus
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); // Standard: 100%
    const [playbackRate, setPlaybackRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1); // Standard: 1x
    const [controlsVisible, setControlsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPiPSupported, setIsPiPSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // UI state mit korrekten Defaults
    const [showTranscript, setShowTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCC, setShowCC] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChapters, setShowChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Standard: off
    const [isSpooling, setIsSpooling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Modal states
    const [audioDescSettingsOpen, setAudioDescSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [infoOpen, setInfoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Audio description state
    const [audioDescActive, setAudioDescActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ttsBusy, setTtsBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pitch, setPitch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [autoStop, setAutoStop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [autoStart, setAutoStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [audioDescMode, setAudioDescMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('tts');
    const [ttsAvailable, setTtsAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [ttsError, setTtsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [hasAudioTrack, setHasAudioTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasSignTrack, setHasSignTrack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Content indexes
    const [currentCueIdx, setCurrentCueIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [currentChapterIdx, setCurrentChapterIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    // Video sources and quality
    const [videoSources, setVideoSources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [selectedQuality, setSelectedQuality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('auto');
    const [videoSrc, setVideoSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [availableQualities, setAvailableQualities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Player type state
    const [playerType, setPlayerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('video');
    return {
        // Basic state
        isPlaying,
        setIsPlaying,
        isMuted,
        setIsMuted,
        currentTime,
        setCurrentTime,
        duration,
        setDuration,
        volume,
        setVolume,
        playbackRate,
        setPlaybackRate,
        controlsVisible,
        setControlsVisible,
        isPiPSupported,
        setIsPiPSupported,
        isLoading,
        setIsLoading,
        // UI state
        showTranscript,
        setShowTranscript,
        showCC,
        setShowCC,
        showChapters,
        setShowChapters,
        isSpooling,
        setIsSpooling,
        // Modals
        audioDescSettingsOpen,
        setAudioDescSettingsOpen,
        settingsOpen,
        setSettingsOpen,
        infoOpen,
        setInfoOpen,
        // Audio description
        audioDescActive,
        setAudioDescActive,
        ttsBusy,
        setTtsBusy,
        pitch,
        setPitch,
        autoStop,
        setAutoStop,
        autoStart,
        setAutoStart,
        audioDescMode,
        setAudioDescMode,
        ttsAvailable,
        setTtsAvailable,
        ttsError,
        setTtsError,
        hasAudioTrack,
        setHasAudioTrack,
        hasSignTrack,
        setHasSignTrack,
        // Content
        currentCueIdx,
        setCurrentCueIdx,
        currentChapterIdx,
        setCurrentChapterIdx,
        // Video sources
        videoSources,
        setVideoSources,
        selectedQuality,
        setSelectedQuality,
        videoSrc,
        setVideoSrc,
        availableQualities,
        setAvailableQualities,
        playerType,
        setPlayerType
    };
};
_s(usePlayerState, "3xVD8Y8r3eGUnGJb9rApvVHKiY4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/videoUtils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useVideoData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useChaptersData": (()=>useChaptersData),
    "useTranscriptData": (()=>useTranscriptData),
    "useVoicesData": (()=>useVoicesData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const useTranscriptData = (captions, description)=>{
    _s();
    const [cues, setCues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranscriptData.useEffect": ()=>{
            let cap = [];
            let desc = [];
            ({
                "useTranscriptData.useEffect": async ()=>{
                    if (captions) {
                        const txt = await fetch(captions).then({
                            "useTranscriptData.useEffect": (r)=>r.text()
                        }["useTranscriptData.useEffect"]);
                        cap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseVtt"])(txt, 'caption');
                    }
                    if (description) {
                        const txt = await fetch(description).then({
                            "useTranscriptData.useEffect": (r)=>r.text()
                        }["useTranscriptData.useEffect"]);
                        desc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseVtt"])(txt, 'description');
                    }
                    setCues([
                        ...cap,
                        ...desc
                    ].sort({
                        "useTranscriptData.useEffect": (a, b)=>a.start - b.start
                    }["useTranscriptData.useEffect"]));
                }
            })["useTranscriptData.useEffect"]();
        }
    }["useTranscriptData.useEffect"], [
        captions,
        description
    ]);
    return cues;
};
_s(useTranscriptData, "pDlUmnMr/VmtW7Zv+msn34HEvoM=");
const useChaptersData = (chapters)=>{
    _s1();
    const [parsedChapters, setParsedChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChaptersData.useEffect": ()=>{
            if (!chapters) return;
            fetch(chapters).then({
                "useChaptersData.useEffect": (r)=>r.text()
            }["useChaptersData.useEffect"]).then({
                "useChaptersData.useEffect": (txt)=>setParsedChapters((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChaptersVtt"])(txt))
            }["useChaptersData.useEffect"]);
        }
    }["useChaptersData.useEffect"], [
        chapters
    ]);
    return parsedChapters;
};
_s1(useChaptersData, "40GMY8MaP8gU5YFyLEU9QlL7FG0=");
const useVoicesData = ()=>{
    _s2();
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useVoicesData.useEffect": ()=>{
            const updateVoices = {
                "useVoicesData.useEffect.updateVoices": ()=>{
                    const vs = window.speechSynthesis.getVoices();
                    setVoices(vs);
                    if (!selectedVoice && vs.length > 0) setSelectedVoice(vs[0].voiceURI);
                }
            }["useVoicesData.useEffect.updateVoices"];
            updateVoices();
            window.speechSynthesis.onvoiceschanged = updateVoices;
        }
    }["useVoicesData.useEffect"], [
        selectedVoice
    ]);
    return {
        voices,
        selectedVoice,
        setSelectedVoice
    };
};
_s2(useVoicesData, "ItijQAAku9sjVz0zvz8uUFBIVM8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/internal/font/google/geist_e531dabc.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "geist_e531dabc-module__QGiZLq__className",
  "variable": "geist_e531dabc-module__QGiZLq__variable",
});
}}),
"[next]/internal/font/google/geist_e531dabc.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist', 'Geist Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[next]/internal/font/google/geist_mono_68a01160.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "geist_mono_68a01160-module__YLcDdW__className",
  "variable": "geist_mono_68a01160-module__YLcDdW__variable",
});
}}),
"[next]/internal/font/google/geist_mono_68a01160.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LOCAL": (()=>LOCAL),
    "default": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_e531dabc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/geist_mono_68a01160.js [app-client] (ecmascript)");
;
;
;
;
const LOCAL = "de";
const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: LOCAL,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_e531dabc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$geist_mono_68a01160$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].variable}`,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PlayerContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerContainer": (()=>PlayerContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-client] (ecmascript)");
;
;
const PlayerContainer = ({ videoRef, youtubeContainerRef, vimeoContainerRef, playerState, mp4, webm, captions, description, chapters })=>{
    if (playerState.isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: '100%',
                height: 400,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(145deg, #f0f0f0, #e0e0e0)',
                borderRadius: 12,
                boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.1)'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: '#666'
                },
                children: "Video wird geladen..."
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/PlayerContainer.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (playerState.playerType === 'video' || playerState.playerType === 'btag') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                width: "100%",
                height: "400",
                "aria-label": "Video mit Untertiteln und Beschreibung",
                muted: playerState.isMuted,
                tabIndex: 0,
                onPlay: ()=>playerState.setIsPlaying(true),
                onPause: ()=>playerState.setIsPlaying(false),
                playsInline: true,
                crossOrigin: "anonymous",
                style: {
                    borderRadius: 12,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                },
                children: [
                    playerState.videoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: playerState.videoSrc,
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 64,
                        columnNumber: 36
                    }, this),
                    webm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: Array.isArray(webm) ? webm[0] : webm,
                        type: "video/webm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 65,
                        columnNumber: 20
                    }, this),
                    captions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "subtitles",
                        src: captions,
                        srcLang: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL"],
                        label: "Untertitel",
                        default: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 66,
                        columnNumber: 24
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "descriptions",
                        src: description,
                        srcLang: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL"],
                        label: "Audiodeskription"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 67,
                        columnNumber: 27
                    }, this),
                    chapters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "chapters",
                        src: chapters,
                        srcLang: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL"],
                        label: "Kapitel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 68,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            playerState.playerType === 'youtube' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: youtubeContainerRef,
                style: {
                    width: '100%',
                    height: '400px',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                },
                "aria-label": "YouTube Video Player"
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            playerState.playerType === 'vimeo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: vimeoContainerRef,
                style: {
                    width: '100%',
                    height: '400px',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                },
                "aria-label": "Vimeo Video Player"
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 89,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_c = PlayerContainer;
var _c;
__turbopack_context__.k.register(_c, "PlayerContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/icons.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AudioDescIcon": (()=>AudioDescIcon),
    "CCIcon": (()=>CCIcon),
    "ChaptersIcon": (()=>ChaptersIcon),
    "FullscreenIcon": (()=>FullscreenIcon),
    "InfoIcon": (()=>InfoIcon),
    "MuteIcon": (()=>MuteIcon),
    "PauseIcon": (()=>PauseIcon),
    "PiPIcon": (()=>PiPIcon),
    "PlayIcon": (()=>PlayIcon),
    "QualityIcon": (()=>QualityIcon),
    "SettingsIcon": (()=>SettingsIcon),
    "SpeedIcon": (()=>SpeedIcon),
    "TranscriptIcon": (()=>TranscriptIcon),
    "UnmuteIcon": (()=>UnmuteIcon),
    "VolumeIcon": (()=>VolumeIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const PlayIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
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
_c = PlayIcon;
const PauseIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "4",
                width: "4",
                height: "16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 11,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
_c1 = PauseIcon;
const MuteIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "6,8 10,8 14,4 14,20 10,16 6,16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
_c2 = MuteIcon;
const UnmuteIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "6,8 10,8 14,4 14,20 10,16 6,16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 26,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c3 = UnmuteIcon;
const TranscriptIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "none",
        "stroke-width": "0",
        viewBox: "0 0 24 24",
        height: "200px",
        width: "200px",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 16C5 15.4477 5.44772 15 6 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 141
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H10C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H18Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 298
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H17C16.4477 17 16 16.5523 16 16Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 458
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 621
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44771 20.5523 5 20 5Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 773
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 32,
        columnNumber: 1
    }, this);
_c4 = TranscriptIcon;
const SpeedIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 6v6l4 2",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this);
_c5 = SpeedIcon;
const CCIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        "stroke-width": "0",
        viewBox: "0 0 512 512",
        height: "200px",
        width: "200px",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM218.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2.1 48 51.1 70.5 92.3 32.6zm190.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.5 56.9-172.7 32.1-172.7-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 222.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 43,
            columnNumber: 151
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 43,
        columnNumber: 1
    }, this);
_c6 = CCIcon;
const FullscreenIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 4h6v2H6v4H4V4zm10 0h6v6h-2V6h-4V4zm6 10v6h-6v-2h4v-4h2zm-10 6H4v-6h2v4h4v2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 48,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this);
_c7 = FullscreenIcon;
const PiPIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 54,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "13",
                y: "13",
                width: "7",
                height: "5",
                rx: "1",
                fill: "#fff"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 55,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 53,
        columnNumber: 3
    }, this);
_c8 = PiPIcon;
const VolumeIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "6,8 10,8 14,4 14,20 10,16 6,16"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 61,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 8a4 4 0 0 1 0 8",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
_c9 = VolumeIcon;
const AudioDescIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        "stroke-width": "0",
        viewBox: "0 0 512 512",
        height: "200px",
        width: "200px",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zm166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776 0-32.239-17.49-49.005-46.175-49.005zM512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zM245.459 336.139l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 67,
            columnNumber: 151
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 67,
        columnNumber: 1
    }, this);
_c10 = AudioDescIcon;
const ChaptersIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        fill: "currentColor",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                lineNumber: 72,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "9",
                x2: "16",
                y2: "9",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 73,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "13",
                x2: "16",
                y2: "13",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 74,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "8",
                y1: "17",
                x2: "12",
                y2: "17",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this);
_c11 = ChaptersIcon;
const SettingsIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this);
_c12 = SettingsIcon;
const InfoIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 87,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 86,
        columnNumber: 3
    }, this);
_c13 = InfoIcon;
const QualityIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 93,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this);
_c14 = QualityIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "PlayIcon");
__turbopack_context__.k.register(_c1, "PauseIcon");
__turbopack_context__.k.register(_c2, "MuteIcon");
__turbopack_context__.k.register(_c3, "UnmuteIcon");
__turbopack_context__.k.register(_c4, "TranscriptIcon");
__turbopack_context__.k.register(_c5, "SpeedIcon");
__turbopack_context__.k.register(_c6, "CCIcon");
__turbopack_context__.k.register(_c7, "FullscreenIcon");
__turbopack_context__.k.register(_c8, "PiPIcon");
__turbopack_context__.k.register(_c9, "VolumeIcon");
__turbopack_context__.k.register(_c10, "AudioDescIcon");
__turbopack_context__.k.register(_c11, "ChaptersIcon");
__turbopack_context__.k.register(_c12, "SettingsIcon");
__turbopack_context__.k.register(_c13, "InfoIcon");
__turbopack_context__.k.register(_c14, "QualityIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PlayerControls.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerControls": (()=>PlayerControls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
;
// Button Style Generator für On/Off States
const getButtonStyle = (isActive, isToggleable = true)=>({
        padding: 8,
        background: isToggleable && isActive ? 'linear-gradient(145deg, #005ea3, #007acc)' : isToggleable ? 'linear-gradient(145deg, #555, #333)' : 'linear-gradient(145deg, #666, #444)',
        border: 'none',
        color: isToggleable && isActive ? '#fff' : '#ccc',
        cursor: 'pointer',
        borderRadius: 6,
        boxShadow: isToggleable && isActive ? 'inset -2px -2px 4px rgba(0,0,0,0.3), inset 2px 2px 4px rgba(255,255,255,0.1)' : 'inset 2px 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(255,255,255,0.1)',
        transition: 'all 0.2s ease',
        opacity: isToggleable && !isActive ? 0.6 : 1,
        transform: isActive ? 'translateY(-1px)' : 'translateY(1px)'
    });
const PlayerControls = ({ playerState, playerControls, hasCC, hasTranscript, hasAudioDesc, hasChapters })=>{
    if (!playerState.controlsVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Player-Steuerung",
        style: {
            marginTop: 12,
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            alignItems: 'center',
            background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
            borderRadius: 12,
            padding: 16,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerControls.handleSeek(0),
                "aria-label": "Zum Start",
                title: "Zum Start",
                style: getButtonStyle(false, false),
                children: "|◀"
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: playerState.isPlaying ? playerControls.handlePause : playerControls.handlePlay,
                "aria-label": playerState.isPlaying ? 'Pause' : 'Abspielen',
                title: playerState.isPlaying ? 'Pause' : 'Abspielen',
                style: getButtonStyle(playerState.isPlaying, false),
                children: playerState.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 78,
                    columnNumber: 34
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 78,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerControls.handleSeek(Math.max(0, playerState.currentTime - 10)),
                "aria-label": "10 Sekunden zurück",
                title: "10 Sekunden zurück",
                style: getButtonStyle(false, false),
                children: "◀10s"
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerControls.handleSeek(Math.min(playerState.duration, playerState.currentTime + 10)),
                "aria-label": "10 Sekunden vor",
                title: "10 Sekunden vor",
                style: getButtonStyle(false, false),
                children: "10s▶"
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 2,
                    height: 24,
                    background: '#444',
                    margin: '0 8px',
                    borderRadius: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: playerControls.handleMuteToggle,
                "aria-label": playerState.isMuted ? 'Ton an' : 'Ton aus',
                title: playerState.isMuted ? 'Ton an' : 'Ton aus',
                style: getButtonStyle(!playerState.isMuted),
                children: playerState.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnmuteIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 108,
                    columnNumber: 32
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MuteIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 108,
                    columnNumber: 49
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#ccc'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: 0,
                        max: 1,
                        step: 0.01,
                        value: playerState.volume,
                        onChange: (e)=>playerControls.handleVolumeChange(Number(e.target.value)),
                        "aria-label": "Lautstärke",
                        style: {
                            width: 80,
                            accentColor: '#007acc'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            minWidth: 32,
                            fontSize: 12
                        },
                        children: [
                            Math.round(playerState.volume * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 2,
                    height: 24,
                    background: '#444',
                    margin: '0 8px',
                    borderRadius: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#ccc'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpeedIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: 0.5,
                        max: 2,
                        step: 0.05,
                        value: playerState.playbackRate,
                        onChange: (e)=>playerControls.handlePlaybackRateChange(Number(e.target.value)),
                        "aria-label": "Geschwindigkeit",
                        style: {
                            width: 80,
                            accentColor: '#007acc'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            minWidth: 40,
                            textAlign: 'center',
                            fontSize: 12
                        },
                        children: [
                            playerState.playbackRate.toFixed(2),
                            "x"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 2,
                    height: 24,
                    background: '#444',
                    margin: '0 8px',
                    borderRadius: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            hasCC && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerState.setShowCC((v)=>!v),
                "aria-pressed": playerState.showCC,
                "aria-label": "Untertitel ein-/ausblenden",
                title: "Untertitel ein-/ausblenden",
                style: getButtonStyle(playerState.showCC),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CCIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this),
            hasChapters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerState.setShowChapters((v)=>!v),
                "aria-pressed": playerState.showChapters,
                "aria-label": "Kapitel anzeigen/verbergen",
                title: "Kapitel anzeigen/verbergen",
                style: getButtonStyle(playerState.showChapters),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChaptersIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            hasTranscript && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerState.setShowTranscript((v)=>!v),
                "aria-pressed": playerState.showTranscript,
                "aria-label": "Transkript anzeigen/verbergen",
                title: "Transkript anzeigen/verbergen",
                style: getButtonStyle(playerState.showTranscript),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranscriptIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this),
            hasAudioDesc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerState.setAudioDescSettingsOpen(true),
                "aria-pressed": playerState.audioDescActive,
                "aria-label": "Audiodeskription Einstellungen",
                title: "Audiodeskription Einstellungen",
                style: getButtonStyle(playerState.audioDescActive),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioDescIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this),
            playerState.availableQualities.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: '#ccc'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QualityIcon"], {}, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: playerState.selectedQuality,
                        onChange: (e)=>playerControls.handleQualityChange(e.target.value),
                        style: {
                            padding: 4,
                            borderRadius: 4,
                            border: 'none',
                            background: '#333',
                            color: '#ccc',
                            fontSize: 12
                        },
                        children: playerState.availableQualities.map((quality)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: quality.value,
                                children: quality.label
                            }, `${quality.format}-${quality.value}`, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 218,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 205,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 203,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 2,
                    height: 24,
                    background: '#444',
                    margin: '0 8px',
                    borderRadius: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: playerControls.handleFullscreen,
                "aria-label": "Vollbild",
                title: "Vollbild",
                style: getButtonStyle(false, false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FullscreenIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            playerState.isPiPSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: playerControls.handlePiP,
                "aria-label": "Bild-in-Bild",
                title: "Bild-in-Bild",
                style: getButtonStyle(false, false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerState.setSettingsOpen(true),
                "aria-label": "Einstellungen",
                title: "Einstellungen",
                style: getButtonStyle(false, false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>playerState.setInfoOpen(true),
                "aria-label": "Informationen und Tastaturnavigation",
                title: "Informationen und Tastaturnavigation",
                style: getButtonStyle(false, false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerControls.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
};
_c = PlayerControls;
var _c;
__turbopack_context__.k.register(_c, "PlayerControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/FullPlayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerState.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../hooks/usePlayerEffects'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../hooks/usePlayerControls'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVideoData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerContainer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerControls.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './PlayerModals'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './PlayerSidebar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const FullPlayer = ({ mp4, webm, youtube, vimeo, btag, captions, description, chapters, autoplay = false, muted = true })=>{
    _s();
    // Refs
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const controlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const youtubeContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vimeoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Custom hooks for state management
    const playerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerState"])({
        autoplay,
        muted
    });
    const playerControls = usePlayerControls({
        videoRef,
        youtubeContainerRef,
        vimeoContainerRef,
        playerState
    });
    // Data hooks
    const cues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscriptData"])(captions, description);
    const parsedChapters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChaptersData"])(chapters);
    // Effects
    usePlayerEffects({
        mp4,
        webm,
        youtube,
        vimeo,
        btag,
        captions,
        description,
        chapters,
        playerState,
        playerControls,
        cues,
        parsedChapters,
        videoRef,
        youtubeContainerRef,
        vimeoContainerRef
    });
    // Feature availability based on LOCAL
    const hasCC = !!captions && captions.includes(`_${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL"]}.vtt`);
    const hasTranscript = !!description && description.includes(`_${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCAL"]}.vtt`);
    const hasAudioDesc = !!description || playerState.hasAudioTrack;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "Barrierefreier Video Player",
        style: {
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: 16
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerContainer"], {
                        videoRef: videoRef,
                        youtubeContainerRef: youtubeContainerRef,
                        vimeoContainerRef: vimeoContainerRef,
                        playerState: playerState,
                        mp4: mp4,
                        webm: webm,
                        captions: captions,
                        description: description,
                        chapters: chapters
                    }, void 0, false, {
                        fileName: "[project]/src/components/FullPlayer.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            marginTop: 8,
                            width: '100%'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    minWidth: 48,
                                    textAlign: 'right',
                                    fontVariantNumeric: 'tabular-nums',
                                    fontSize: 14
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(playerState.currentTime)
                            }, void 0, false, {
                                fileName: "[project]/src/components/FullPlayer.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 0,
                                max: playerState.duration || 1,
                                step: 0.01,
                                value: playerState.currentTime,
                                onChange: (e)=>playerControls.handleSeek(Number(e.target.value)),
                                "aria-label": "Fortschritt",
                                style: {
                                    flex: 1,
                                    height: 6,
                                    borderRadius: 3,
                                    background: `linear-gradient(to right, #007acc 0%, #007acc ${playerState.currentTime / playerState.duration * 100}%, #ddd ${playerState.currentTime / playerState.duration * 100}%, #ddd 100%)`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/FullPlayer.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    minWidth: 48,
                                    textAlign: 'left',
                                    fontVariantNumeric: 'tabular-nums',
                                    fontSize: 14
                                },
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(playerState.duration)
                            }, void 0, false, {
                                fileName: "[project]/src/components/FullPlayer.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FullPlayer.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerControls"], {
                        playerState: playerState,
                        playerControls: playerControls,
                        hasCC: hasCC,
                        hasTranscript: hasTranscript,
                        hasAudioDesc: hasAudioDesc,
                        hasChapters: !!chapters
                    }, void 0, false, {
                        fileName: "[project]/src/components/FullPlayer.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerSidebar, {
                        playerState: playerState,
                        cues: cues,
                        parsedChapters: parsedChapters,
                        onChapterClick: playerControls.handleChapterClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/FullPlayer.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FullPlayer.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerModals, {
                playerState: playerState,
                hasCC: hasCC,
                hasTranscript: hasTranscript
            }, void 0, false, {
                fileName: "[project]/src/components/FullPlayer.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FullPlayer.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
_s(FullPlayer, "EhMDzLmmYOO1IcR77FJQty8Gu5c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerState"],
        usePlayerControls,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscriptData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChaptersData"],
        usePlayerEffects
    ];
});
_c = FullPlayer;
const __TURBOPACK__default__export__ = FullPlayer;
var _c;
__turbopack_context__.k.register(_c, "FullPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f058f866._.js.map