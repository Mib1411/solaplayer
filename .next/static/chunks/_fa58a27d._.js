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
    // Basic player state
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(autoplay);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(muted);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [playbackRate, setPlaybackRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [controlsVisible, setControlsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isPiPSupported, setIsPiPSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // UI state
    const [showTranscript, setShowTranscript] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCC, setShowCC] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showChapters, setShowChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    // Player type and instances
    const [playerType, setPlayerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('video');
    const [youtubePlayer, setYoutubePlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [vimeoPlayer, setVimeoPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Voice data for TTS
    const [voices, setVoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedVoice, setSelectedVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
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
        // Setters - ALLE MÜSSEN HIER STEHEN!
        setIsPlaying: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setIsPlaying(value)
        }["usePlayerState.useCallback"], []),
        setIsMuted: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setIsMuted(value)
        }["usePlayerState.useCallback"], []),
        setCurrentTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setCurrentTime(value)
        }["usePlayerState.useCallback"], []),
        setDuration: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setDuration(value)
        }["usePlayerState.useCallback"], []),
        setVolume: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setVolume(value)
        }["usePlayerState.useCallback"], []),
        setPlaybackRate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setPlaybackRate(value)
        }["usePlayerState.useCallback"], []),
        setControlsVisible: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setControlsVisible(value)
        }["usePlayerState.useCallback"], []),
        setIsPiPSupported: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setIsPiPSupported(value)
        }["usePlayerState.useCallback"], []),
        setIsLoading: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setIsLoading(value)
        }["usePlayerState.useCallback"], []),
        setShowTranscript: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setShowTranscript(value)
        }["usePlayerState.useCallback"], []),
        setShowCC: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setShowCC(value)
        }["usePlayerState.useCallback"], []),
        setShowChapters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setShowChapters(value)
        }["usePlayerState.useCallback"], []),
        setIsSpooling: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setIsSpooling(value)
        }["usePlayerState.useCallback"], []),
        setAudioDescSettingsOpen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setAudioDescSettingsOpen(value)
        }["usePlayerState.useCallback"], []),
        setSettingsOpen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setSettingsOpen(value)
        }["usePlayerState.useCallback"], []),
        setInfoOpen: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setInfoOpen(value)
        }["usePlayerState.useCallback"], []),
        setAudioDescActive: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setAudioDescActive(value)
        }["usePlayerState.useCallback"], []),
        setTtsBusy: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setTtsBusy(value)
        }["usePlayerState.useCallback"], []),
        setPitch: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setPitch(value)
        }["usePlayerState.useCallback"], []),
        setAutoStop: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setAutoStop(value)
        }["usePlayerState.useCallback"], []),
        setAutoStart: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setAutoStart(value)
        }["usePlayerState.useCallback"], []),
        setAudioDescMode: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setAudioDescMode(value)
        }["usePlayerState.useCallback"], []),
        setTtsAvailable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setTtsAvailable(value)
        }["usePlayerState.useCallback"], []),
        setTtsError: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setTtsError(value)
        }["usePlayerState.useCallback"], []),
        setHasAudioTrack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setHasAudioTrack(value)
        }["usePlayerState.useCallback"], []),
        setHasSignTrack: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setHasSignTrack(value)
        }["usePlayerState.useCallback"], []),
        setCurrentCueIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setCurrentCueIdx(value)
        }["usePlayerState.useCallback"], []),
        setCurrentChapterIdx: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setCurrentChapterIdx(value)
        }["usePlayerState.useCallback"], []),
        setVideoSources: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setVideoSources(value)
        }["usePlayerState.useCallback"], []),
        setSelectedQuality: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setSelectedQuality(value)
        }["usePlayerState.useCallback"], []),
        setVideoSrc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setVideoSrc(value)
        }["usePlayerState.useCallback"], []),
        setAvailableQualities: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setAvailableQualities(value)
        }["usePlayerState.useCallback"], []),
        setPlayerType: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setPlayerType(value)
        }["usePlayerState.useCallback"], []),
        setYoutubePlayer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setYoutubePlayer(value)
        }["usePlayerState.useCallback"], []),
        setVimeoPlayer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setVimeoPlayer(value)
        }["usePlayerState.useCallback"], []),
        setVoices: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setVoices(value)
        }["usePlayerState.useCallback"], []),
        setSelectedVoice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setSelectedVoice(value)
        }["usePlayerState.useCallback"], [])
    };
};
_s(usePlayerState, "kgRF1s6wiBSxV5O3MVlUoQosJ4U=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/videoExtractors.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/youtubePlayer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/vimeoPlayer.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
"[project]/src/hooks/usePlayerEffects.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePlayerEffects": (()=>usePlayerEffects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoExtractors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoExtractors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/youtubePlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$vimeoPlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/vimeoPlayer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/videoUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const usePlayerEffects = ({ mp4, webm, youtube, vimeo, btag, captions, description, chapters, playerState, cues, parsedChapters, videoRef, youtubeContainerRef, vimeoContainerRef })=>{
    _s();
    // useRef für autoHideTimeout
    const autoHideTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Video source resolution - REMOVED playerState from dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            const resolveVideoSource = {
                "usePlayerEffects.useEffect.resolveVideoSource": async ()=>{
                    playerState.setIsLoading(true);
                    try {
                        if (mp4 || webm) {
                            playerState.setPlayerType('video');
                            const sources = {};
                            if (mp4) {
                                if (Array.isArray(mp4)) {
                                    sources.mp4 = mp4.map({
                                        "usePlayerEffects.useEffect.resolveVideoSource": (url, index)=>({
                                                url,
                                                quality: `Quality ${index + 1}`,
                                                width: 1920,
                                                height: 1080
                                            })
                                    }["usePlayerEffects.useEffect.resolveVideoSource"]);
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
                                    sources.webm = webm.map({
                                        "usePlayerEffects.useEffect.resolveVideoSource": (url, index)=>({
                                                url,
                                                quality: `Quality ${index + 1}`,
                                                width: 1920,
                                                height: 1080
                                            })
                                    }["usePlayerEffects.useEffect.resolveVideoSource"]);
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
                                sources.mp4.forEach({
                                    "usePlayerEffects.useEffect.resolveVideoSource": (source)=>{
                                        qualities.push({
                                            label: `${source.quality} (MP4) - ${source.width}x${source.height}`,
                                            value: source.quality,
                                            format: 'mp4',
                                            url: source.url
                                        });
                                    }
                                }["usePlayerEffects.useEffect.resolveVideoSource"]);
                            }
                            if (sources.webm) {
                                sources.webm.forEach({
                                    "usePlayerEffects.useEffect.resolveVideoSource": (source)=>{
                                        qualities.push({
                                            label: `${source.quality} (WebM) - ${source.width}x${source.height}`,
                                            value: source.quality,
                                            format: 'webm',
                                            url: source.url
                                        });
                                    }
                                }["usePlayerEffects.useEffect.resolveVideoSource"]);
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
                            const sources = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoExtractors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractBundestagVideo"])(btag);
                            playerState.setVideoSources(sources);
                            const qualities = [];
                            if (sources.mp4) {
                                sources.mp4.forEach({
                                    "usePlayerEffects.useEffect.resolveVideoSource": (source)=>{
                                        qualities.push({
                                            label: `${source.quality} (${source.width}x${source.height})`,
                                            value: source.quality,
                                            format: 'mp4',
                                            url: source.url
                                        });
                                    }
                                }["usePlayerEffects.useEffect.resolveVideoSource"]);
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
                }
            }["usePlayerEffects.useEffect.resolveVideoSource"];
            resolveVideoSource();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], [
        mp4,
        webm,
        youtube,
        vimeo,
        btag
    ]); // ONLY the actual prop dependencies
    // YouTube player initialization - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            if (playerState.playerType === 'youtube' && youtube) {
                const initYouTubePlayer = {
                    "usePlayerEffects.useEffect.initYouTubePlayer": async ()=>{
                        const videoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractYouTubeId"])(youtube);
                        if (!videoId) return;
                        if (youtubeContainerRef.current) {
                            const playerId = `youtube-player-${Math.random().toString(36).substr(2, 9)}`;
                            youtubeContainerRef.current.innerHTML = `<div id="${playerId}"></div>`;
                            try {
                                const ytPlayer = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$youtubePlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YouTubePlayerWrapper"](playerId, videoId);
                                await ytPlayer.init();
                                playerState.setYoutubePlayer(ytPlayer);
                                ytPlayer.on('ready', {
                                    "usePlayerEffects.useEffect.initYouTubePlayer": ()=>{
                                        playerState.setDuration(ytPlayer.getDuration());
                                        if (playerState.isMuted) ytPlayer.mute();
                                        playerState.setVolume(ytPlayer.getVolume());
                                    }
                                }["usePlayerEffects.useEffect.initYouTubePlayer"]);
                                ytPlayer.on('play', {
                                    "usePlayerEffects.useEffect.initYouTubePlayer": ()=>playerState.setIsPlaying(true)
                                }["usePlayerEffects.useEffect.initYouTubePlayer"]);
                                ytPlayer.on('pause', {
                                    "usePlayerEffects.useEffect.initYouTubePlayer": ()=>playerState.setIsPlaying(false)
                                }["usePlayerEffects.useEffect.initYouTubePlayer"]);
                                ytPlayer.on('ended', {
                                    "usePlayerEffects.useEffect.initYouTubePlayer": ()=>playerState.setIsPlaying(false)
                                }["usePlayerEffects.useEffect.initYouTubePlayer"]);
                            } catch (error) {
                                console.error('Failed to initialize YouTube player:', error);
                            }
                        }
                    }
                }["usePlayerEffects.useEffect.initYouTubePlayer"];
                initYouTubePlayer();
            }
            return ({
                "usePlayerEffects.useEffect": ()=>{
                    if (playerState.youtubePlayer) {
                        playerState.youtubePlayer.destroy();
                        playerState.setYoutubePlayer(null);
                    }
                }
            })["usePlayerEffects.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], [
        playerState.playerType,
        youtube
    ]); // REMOVED playerState from deps
    // Vimeo player initialization - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            if (playerState.playerType === 'vimeo' && vimeo) {
                const initVimeoPlayer = {
                    "usePlayerEffects.useEffect.initVimeoPlayer": async ()=>{
                        const videoId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$vimeoPlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractVimeoId"])(vimeo);
                        if (!videoId) return;
                        if (vimeoContainerRef.current) {
                            const playerId = `vimeo-player-${Math.random().toString(36).substr(2, 9)}`;
                            vimeoContainerRef.current.innerHTML = `<div id="${playerId}"></div>`;
                            try {
                                const vimeoPlayer = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$vimeoPlayer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VimeoPlayerWrapper"](playerId, videoId);
                                await vimeoPlayer.init();
                                playerState.setVimeoPlayer(vimeoPlayer);
                                vimeoPlayer.on('ready', {
                                    "usePlayerEffects.useEffect.initVimeoPlayer": async ()=>{
                                        const duration = await vimeoPlayer.getDuration();
                                        playerState.setDuration(duration);
                                        if (playerState.isMuted) await vimeoPlayer.mute();
                                        const volume = await vimeoPlayer.getVolume();
                                        playerState.setVolume(volume);
                                    }
                                }["usePlayerEffects.useEffect.initVimeoPlayer"]);
                                vimeoPlayer.on('play', {
                                    "usePlayerEffects.useEffect.initVimeoPlayer": ()=>playerState.setIsPlaying(true)
                                }["usePlayerEffects.useEffect.initVimeoPlayer"]);
                                vimeoPlayer.on('pause', {
                                    "usePlayerEffects.useEffect.initVimeoPlayer": ()=>playerState.setIsPlaying(false)
                                }["usePlayerEffects.useEffect.initVimeoPlayer"]);
                                vimeoPlayer.on('ended', {
                                    "usePlayerEffects.useEffect.initVimeoPlayer": ()=>playerState.setIsPlaying(false)
                                }["usePlayerEffects.useEffect.initVimeoPlayer"]);
                                vimeoPlayer.on('timeupdate', {
                                    "usePlayerEffects.useEffect.initVimeoPlayer": (data)=>{
                                        playerState.setCurrentTime(data.seconds);
                                    }
                                }["usePlayerEffects.useEffect.initVimeoPlayer"]);
                            } catch (error) {
                                console.error('Failed to initialize Vimeo player:', error);
                            }
                        }
                    }
                }["usePlayerEffects.useEffect.initVimeoPlayer"];
                initVimeoPlayer();
            }
            return ({
                "usePlayerEffects.useEffect": ()=>{
                    if (playerState.vimeoPlayer) {
                        playerState.vimeoPlayer.destroy();
                        playerState.setVimeoPlayer(null);
                    }
                }
            })["usePlayerEffects.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], [
        playerState.playerType,
        vimeo
    ]); // REMOVED playerState from deps
    // Native video event listeners - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            const video = videoRef.current;
            if (!video || playerState.playerType !== 'video' && playerState.playerType !== 'btag') return;
            const onTimeUpdate = {
                "usePlayerEffects.useEffect.onTimeUpdate": ()=>playerState.setCurrentTime(video.currentTime)
            }["usePlayerEffects.useEffect.onTimeUpdate"];
            const onLoaded = {
                "usePlayerEffects.useEffect.onLoaded": ()=>playerState.setDuration(video.duration)
            }["usePlayerEffects.useEffect.onLoaded"];
            video.addEventListener('timeupdate', onTimeUpdate);
            video.addEventListener('loadedmetadata', onLoaded);
            return ({
                "usePlayerEffects.useEffect": ()=>{
                    video.removeEventListener('timeupdate', onTimeUpdate);
                    video.removeEventListener('loadedmetadata', onLoaded);
                }
            })["usePlayerEffects.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], [
        playerState.playerType
    ]); // REMOVED playerState from deps
    // Chapter highlighting - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            if (parsedChapters.length === 0) return;
            const idx = parsedChapters.findIndex({
                "usePlayerEffects.useEffect.idx": (ch)=>playerState.currentTime >= ch.start && playerState.currentTime < ch.end
            }["usePlayerEffects.useEffect.idx"]);
            playerState.setCurrentChapterIdx(idx);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], [
        playerState.currentTime,
        parsedChapters
    ]); // REMOVED playerState from deps
    // Auto-hide controls - KORRIGIERT: Nur verstecken wenn Video läuft
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            if (!playerState.controlsVisible || !playerState.isPlaying) return;
            if (autoHideTimeoutRef.current) {
                clearTimeout(autoHideTimeoutRef.current);
            }
            autoHideTimeoutRef.current = setTimeout({
                "usePlayerEffects.useEffect": ()=>{
                    if (playerState.isPlaying) {
                        playerState.setControlsVisible(false);
                    }
                }
            }["usePlayerEffects.useEffect"], 3000);
            return ({
                "usePlayerEffects.useEffect": ()=>{
                    if (autoHideTimeoutRef.current) {
                        clearTimeout(autoHideTimeoutRef.current);
                        autoHideTimeoutRef.current = null;
                    }
                }
            })["usePlayerEffects.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], [
        playerState.controlsVisible,
        playerState.isPlaying
    ]);
    // Show controls on interaction - KORRIGIERT: Entfernt autoHideTimeout
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            const show = {
                "usePlayerEffects.useEffect.show": ()=>{
                    playerState.setControlsVisible(true);
                }
            }["usePlayerEffects.useEffect.show"];
            window.addEventListener('mousemove', show);
            window.addEventListener('keydown', show);
            return ({
                "usePlayerEffects.useEffect": ()=>{
                    window.removeEventListener('mousemove', show);
                    window.removeEventListener('keydown', show);
                }
            })["usePlayerEffects.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], []);
    // PiP support check - FIXED to run only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            playerState.setIsPiPSupported(!!document.pictureInPictureEnabled);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], []); // EMPTY dependency array - run only once
    // CC toggle effect - FIXED dependencies
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            if (videoRef.current && (playerState.playerType === 'video' || playerState.playerType === 'btag')) {
                const tracks = videoRef.current.textTracks;
                for(let i = 0; i < tracks.length; i++){
                    if (tracks[i].kind === 'subtitles') {
                        tracks[i].mode = playerState.showCC ? 'showing' : 'hidden';
                    }
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePlayerEffects.useEffect"], [
        playerState.showCC,
        captions,
        playerState.playerType
    ]); // REMOVED playerState and videoRef from deps
    // Add styles - FIXED to run only once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayerEffects.useEffect": ()=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addPlayerStyles"])();
        }
    }["usePlayerEffects.useEffect"], []); // EMPTY dependency array - run only once
};
_s(usePlayerEffects, "FCIPqTGLqIPH3NhWdpeYXcn+Azw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/usePlayerControls.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "usePlayerControls": (()=>usePlayerControls)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const usePlayerControls = ({ videoRef, youtubeContainerRef, vimeoContainerRef, playerState })=>{
    _s();
    const handlePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handlePlay]": async ()=>{
            if (playerState.playerType === 'youtube' && playerState.youtubePlayer) {
                playerState.youtubePlayer.play();
            } else if (playerState.playerType === 'vimeo' && playerState.vimeoPlayer) {
                await playerState.vimeoPlayer.play();
            } else if (videoRef.current) {
                await videoRef.current.play();
            }
        }
    }["usePlayerControls.useCallback[handlePlay]"], [
        playerState,
        videoRef
    ]);
    const handlePause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handlePause]": async ()=>{
            if (playerState.playerType === 'youtube' && playerState.youtubePlayer) {
                playerState.youtubePlayer.pause();
            } else if (playerState.playerType === 'vimeo' && playerState.vimeoPlayer) {
                await playerState.vimeoPlayer.pause();
            } else if (videoRef.current) {
                videoRef.current.pause();
            }
        }
    }["usePlayerControls.useCallback[handlePause]"], [
        playerState,
        videoRef
    ]);
    const handleSeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleSeek]": async (time)=>{
            if (playerState.playerType === 'youtube' && playerState.youtubePlayer) {
                playerState.youtubePlayer.seekTo(time);
            } else if (playerState.playerType === 'vimeo' && playerState.vimeoPlayer) {
                await playerState.vimeoPlayer.seekTo(time);
            } else if (videoRef.current) {
                videoRef.current.currentTime = time;
            }
        }
    }["usePlayerControls.useCallback[handleSeek]"], [
        playerState,
        videoRef
    ]);
    const handleVolumeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleVolumeChange]": async (newVolume)=>{
            playerState.setVolume(newVolume);
            if (playerState.playerType === 'youtube' && playerState.youtubePlayer) {
                playerState.youtubePlayer.setVolume(newVolume);
            } else if (playerState.playerType === 'vimeo' && playerState.vimeoPlayer) {
                await playerState.vimeoPlayer.setVolume(newVolume);
            } else if (videoRef.current) {
                videoRef.current.volume = newVolume;
            }
        }
    }["usePlayerControls.useCallback[handleVolumeChange]"], [
        playerState,
        videoRef
    ]);
    const handleMuteToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleMuteToggle]": async ()=>{
            const newMuted = !playerState.isMuted;
            playerState.setIsMuted(newMuted);
            if (playerState.playerType === 'youtube' && playerState.youtubePlayer) {
                if (newMuted) {
                    playerState.youtubePlayer.mute();
                } else {
                    playerState.youtubePlayer.unmute();
                }
            } else if (playerState.playerType === 'vimeo' && playerState.vimeoPlayer) {
                if (newMuted) {
                    await playerState.vimeoPlayer.mute();
                } else {
                    await playerState.vimeoPlayer.unmute();
                }
            } else if (videoRef.current) {
                videoRef.current.muted = newMuted;
            }
        }
    }["usePlayerControls.useCallback[handleMuteToggle]"], [
        playerState,
        videoRef
    ]);
    const handlePlaybackRateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handlePlaybackRateChange]": async (rate)=>{
            playerState.setPlaybackRate(rate);
            if (playerState.playerType === 'youtube' && playerState.youtubePlayer) {
                playerState.youtubePlayer.setPlaybackRate(rate);
            } else if (playerState.playerType === 'vimeo' && playerState.vimeoPlayer) {
                await playerState.vimeoPlayer.setPlaybackRate(rate);
            } else if (videoRef.current) {
                videoRef.current.playbackRate = rate;
            }
        }
    }["usePlayerControls.useCallback[handlePlaybackRateChange]"], [
        playerState,
        videoRef
    ]);
    const handleQualityChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleQualityChange]": (quality)=>{
            const selectedOption = playerState.availableQualities.find({
                "usePlayerControls.useCallback[handleQualityChange].selectedOption": (q)=>q.value === quality
            }["usePlayerControls.useCallback[handleQualityChange].selectedOption"]);
            if (selectedOption && (playerState.playerType === 'video' || playerState.playerType === 'btag')) {
                const currentTime = videoRef.current?.currentTime || 0;
                const wasPlaying = playerState.isPlaying;
                playerState.setVideoSrc(selectedOption.url);
                playerState.setSelectedQuality(quality);
                // Restore time and playing state after source change
                setTimeout({
                    "usePlayerControls.useCallback[handleQualityChange]": ()=>{
                        if (videoRef.current) {
                            videoRef.current.currentTime = currentTime;
                            if (wasPlaying) {
                                videoRef.current.play();
                            }
                        }
                    }
                }["usePlayerControls.useCallback[handleQualityChange]"], 100);
            }
        }
    }["usePlayerControls.useCallback[handleQualityChange]"], [
        playerState,
        videoRef
    ]);
    const handleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleFullscreen]": ()=>{
            const element = playerState.playerType === 'youtube' ? youtubeContainerRef.current : playerState.playerType === 'vimeo' ? vimeoContainerRef.current : videoRef.current;
            if (element) {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                } else {
                    element.requestFullscreen();
                }
            }
        }
    }["usePlayerControls.useCallback[handleFullscreen]"], [
        playerState.playerType,
        youtubeContainerRef,
        vimeoContainerRef,
        videoRef
    ]);
    const handlePiP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handlePiP]": ()=>{
            if (videoRef.current && videoRef.current.requestPictureInPicture && (playerState.playerType === 'video' || playerState.playerType === 'btag')) {
                videoRef.current.requestPictureInPicture();
            }
        }
    }["usePlayerControls.useCallback[handlePiP]"], [
        videoRef,
        playerState.playerType
    ]);
    const handleChapterClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleChapterClick]": (startTime)=>{
            handleSeek(startTime);
        }
    }["usePlayerControls.useCallback[handleChapterClick]"], [
        handleSeek
    ]);
    return {
        handlePlay,
        handlePause,
        handleSeek,
        handleVolumeChange,
        handleMuteToggle,
        handlePlaybackRateChange,
        handleQualityChange,
        handleFullscreen,
        handlePiP,
        handleChapterClick
    };
};
_s(usePlayerControls, "7Y1uAFjZhK644mfmG3t/EYqJ/bA=");
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
const useTranscriptData = (description)=>{
    _s();
    const [cues, setCues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranscriptData.useEffect": ()=>{
            if (!description) {
                setCues([]);
                return;
            }
            ({
                "useTranscriptData.useEffect": async ()=>{
                    try {
                        const txt = await fetch(description).then({
                            "useTranscriptData.useEffect": (r)=>r.text()
                        }["useTranscriptData.useEffect"]);
                        const parsedCues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseVtt"])(txt, 'description');
                        setCues(parsedCues);
                    } catch (error) {
                        console.error('Error loading transcript:', error);
                        setCues([]);
                    }
                }
            })["useTranscriptData.useEffect"]();
        }
    }["useTranscriptData.useEffect"], [
        description
    ]);
    return {
        cues
    }; // KORRIGIERT: Objekt mit cues property
};
_s(useTranscriptData, "pDlUmnMr/VmtW7Zv+msn34HEvoM=");
const useChaptersData = (chapters)=>{
    _s1();
    const [parsedChapters, setParsedChapters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useChaptersData.useEffect": ()=>{
            if (!chapters) {
                setParsedChapters([]);
                return;
            }
            ({
                "useChaptersData.useEffect": async ()=>{
                    try {
                        const txt = await fetch(chapters).then({
                            "useChaptersData.useEffect": (r)=>r.text()
                        }["useChaptersData.useEffect"]);
                        const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$videoUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseChaptersVtt"])(txt);
                        setParsedChapters(parsed);
                    } catch (error) {
                        console.error('Error loading chapters:', error);
                        setParsedChapters([]);
                    }
                }
            })["useChaptersData.useEffect"]();
        }
    }["useChaptersData.useEffect"], [
        chapters
    ]);
    return {
        parsedChapters
    }; // KORRIGIERT: Objekt mit parsedChapters property
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
"[project]/src/components/PlayerContainer.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "container": "PlayerContainer-module__IInhMG__container",
  "containerClickable": "PlayerContainer-module__IInhMG__containerClickable",
  "containerDefault": "PlayerContainer-module__IInhMG__containerDefault",
  "controlBar": "PlayerContainer-module__IInhMG__controlBar",
  "controlButton": "PlayerContainer-module__IInhMG__controlButton",
  "controls": "PlayerContainer-module__IInhMG__controls",
  "fullscreenButton": "PlayerContainer-module__IInhMG__fullscreenButton",
  "loadingOverlay": "PlayerContainer-module__IInhMG__loadingOverlay",
  "playButton": "PlayerContainer-module__IInhMG__playButton",
  "playPauseButton": "PlayerContainer-module__IInhMG__playPauseButton",
  "posterOverlay": "PlayerContainer-module__IInhMG__posterOverlay",
  "spacer": "PlayerContainer-module__IInhMG__spacer",
  "timeDisplay": "PlayerContainer-module__IInhMG__timeDisplay",
  "videoElement": "PlayerContainer-module__IInhMG__videoElement",
  "videoTypeIcon": "PlayerContainer-module__IInhMG__videoTypeIcon",
  "vimeoContainer": "PlayerContainer-module__IInhMG__vimeoContainer",
  "volumeButton": "PlayerContainer-module__IInhMG__volumeButton",
  "youtubeContainer": "PlayerContainer-module__IInhMG__youtubeContainer",
});
}}),
"[project]/src/components/PlayerContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerContainer": (()=>PlayerContainer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/PlayerContainer.module.css [app-client] (css module)");
"use client";
;
;
const PlayerContainer = ({ videoRef, youtubeContainerRef, vimeoContainerRef, playerState, playerControls, mp4, webm, captions, description, chapters, controlsType = 'minimal', onFullPlayerClick })=>{
    const handleContainerClick = ()=>{
        if (!playerState.isPlaying) {
            playerControls.handlePlay();
            playerState.setControlsVisible(true);
        }
    };
    const handleMouseMove = ()=>{
        playerState.setControlsVisible(true);
    };
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container} ${!playerState.isPlaying ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].containerClickable : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].containerDefault}`,
        onClick: handleContainerClick,
        onMouseMove: handleMouseMove,
        children: [
            playerState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingOverlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Lädt..."
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerContainer.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            !playerState.isPlaying && !playerState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posterOverlay,
                children: [
                    playerState.poster && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: playerState.poster,
                        alt: " ",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posterImage
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 60,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playButton,
                        children: "▶️"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            (playerState.playerType === 'video' || playerState.playerType === 'btag') && playerState.videoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: playerState.videoSrc,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].videoElement,
                controls: false,
                playsInline: true,
                autoPlay: false,
                muted: playerState.isMuted,
                children: [
                    controlsType === 'full' && captions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "subtitles",
                        src: captions,
                        srcLang: "de",
                        label: "Deutsche Untertitel",
                        default: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this),
                    controlsType === 'full' && description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "descriptions",
                        src: description,
                        srcLang: "de",
                        label: "Audiodeskription"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 84,
                        columnNumber: 13
                    }, this),
                    controlsType === 'full' && chapters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "chapters",
                        src: chapters,
                        srcLang: "de",
                        label: "Kapitel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 87,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            playerState.playerType === 'youtube' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: youtubeContainerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].youtubeContainer
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            playerState.playerType === 'vimeo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: vimeoContainerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vimeoContainer
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            (playerState.controlsVisible || !playerState.isPlaying) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlBar,
                "aria-label": "Player-Steuerung",
                children: [
                    controlsType === 'full' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeDisplay,
                                        children: formatTime(playerState.currentTime)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerContainer.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: 0,
                                        max: playerState.duration || 1,
                                        step: 0.01,
                                        value: playerState.currentTime,
                                        onChange: (e)=>playerControls.handleSeek(Number(e.target.value)),
                                        "aria-label": "Fortschritt",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressSlider
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerContainer.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeDisplay,
                                        children: formatTime(playerState.duration)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerContainer.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                lineNumber: 110,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlsRow,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftControls,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
                                                },
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playPauseButton}`,
                                                "aria-label": playerState.isPlaying ? 'Pausieren' : 'Abspielen',
                                                children: playerState.isPlaying ? '⏸️' : '▶️'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                                lineNumber: 132,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    playerControls.handleMuteToggle();
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                                "aria-label": playerState.isMuted ? 'Ton an' : 'Stumm',
                                                children: playerState.isMuted ? '🔇' : '🔊'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    playerControls.handleSeek(playerState.currentTime - 10);
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                                "aria-label": "10 Sekunden zurück",
                                                children: "⏪"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    playerControls.handleSeek(playerState.currentTime + 10);
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                                "aria-label": "10 Sekunden vor",
                                                children: "⏩"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                                lineNumber: 165,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PlayerContainer.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightControls,
                                        children: [
                                            playerState.isPiPSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    playerControls.handlePiP();
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                                "aria-label": "Bild-in-Bild",
                                                children: "📺"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                                lineNumber: 179,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    playerControls.handleFullscreen();
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                                "aria-label": "Vollbild",
                                                children: "⛶"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/PlayerContainer.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlsRow,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftControls,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                            "aria-label": "Qualität",
                                            children: "🎥"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PlayerContainer.tsx",
                                            lineNumber: 207,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                            "aria-label": "Einstellungen",
                                            children: "⚙️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PlayerContainer.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        captions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                playerState.setShowCC(!playerState.showCC);
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                            "aria-label": "Untertitel",
                                            children: "CC"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PlayerContainer.tsx",
                                            lineNumber: 216,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PlayerContainer.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    controlsType === 'minimal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playPauseButton}`,
                                "aria-label": playerState.isPlaying ? 'Pausieren' : 'Abspielen',
                                children: playerState.isPlaying ? '⏸️' : '▶️'
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                lineNumber: 235,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleMuteToggle();
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                "aria-label": playerState.isMuted ? 'Ton an' : 'Stumm',
                                children: playerState.isMuted ? '🔇' : '🔊'
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                lineNumber: 246,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spacer
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                lineNumber: 257,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onFullPlayerClick?.();
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton,
                                "aria-label": "Vollständiger Player",
                                children: "🔗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerContainer.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 234,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerContainer.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
_c = PlayerContainer;
var _c;
__turbopack_context__.k.register(_c, "PlayerContainer");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerEffects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerEffects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerControls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlayerControls.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useVideoData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerContainer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    const youtubeContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const vimeoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Hooks
    const playerState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerState"])({
        autoplay,
        muted
    });
    const { cues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscriptData"])(description);
    const { parsedChapters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChaptersData"])(chapters);
    const playerControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerControls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerControls"])({
        videoRef,
        youtubeContainerRef,
        vimeoContainerRef,
        playerState
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerEffects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerEffects"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerContainer"], {
        videoRef: videoRef,
        youtubeContainerRef: youtubeContainerRef,
        vimeoContainerRef: vimeoContainerRef,
        playerState: playerState,
        playerControls: playerControls,
        mp4: mp4,
        webm: webm,
        captions: captions,
        description: description,
        chapters: chapters,
        controlsType: "full"
    }, void 0, false, {
        fileName: "[project]/src/components/FullPlayer.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(FullPlayer, "1x2fEf39JceculsJz+tNFPdH1JA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranscriptData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useVideoData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChaptersData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerControls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerControls"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerEffects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerEffects"]
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
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    };
    _react.default.startTransition(navigate);
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    /**
   * The possible states for prefetch are:
   * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
   * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
   * - false: we will not prefetch if in the viewport at all
   * - 'unstable_dynamicOnHover': this starts in "auto" mode, but switches to "full" when the link is hovered
   */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, appPrefetchKind, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        appPrefetchKind,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            "TURBOPACK unreachable";
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
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

//# sourceMappingURL=_fa58a27d._.js.map