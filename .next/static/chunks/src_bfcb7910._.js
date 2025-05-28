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
    // NEU: State, um zu verfolgen, ob das Video einmal gestartet wurde
    const [hasStartedOnce, setHasStartedOnce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(autoplay);
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
        }["usePlayerState.useCallback"], []),
        setHasStartedOnce: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "usePlayerState.useCallback": (value)=>setHasStartedOnce(value)
        }["usePlayerState.useCallback"], []) // NEU
    };
};
_s(usePlayerState, "LRyGqYWkYeuPaHJw8iwuKH37VR4=");
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
        "usePlayerControls.useCallback[handlePlay]": ()=>{
            if (videoRef.current) {
                videoRef.current.play();
                playerState.setIsPlaying(true);
                playerState.setHasStartedOnce(true); // NEU
            }
        }
    }["usePlayerControls.useCallback[handlePlay]"], [
        playerState,
        videoRef
    ]);
    const handlePause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handlePause]": ()=>{
            if (videoRef.current) {
                videoRef.current.pause();
                playerState.setIsPlaying(false);
            }
        }
    }["usePlayerControls.useCallback[handlePause]"], [
        playerState,
        videoRef
    ]);
    const handleSeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleSeek]": (time)=>{
            if (videoRef.current) {
                videoRef.current.currentTime = time;
                playerState.setCurrentTime(time);
            }
        }
    }["usePlayerControls.useCallback[handleSeek]"], [
        playerState,
        videoRef
    ]);
    const handleMuteToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleMuteToggle]": ()=>{
            if (videoRef.current) {
                const newMuted = !playerState.isMuted;
                videoRef.current.muted = newMuted;
                playerState.setIsMuted(newMuted);
            }
        }
    }["usePlayerControls.useCallback[handleMuteToggle]"], [
        playerState,
        videoRef
    ]);
    const handleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleFullscreen]": ()=>{
            if (videoRef.current?.requestFullscreen) {
                videoRef.current.requestFullscreen();
            }
        }
    }["usePlayerControls.useCallback[handleFullscreen]"], [
        videoRef
    ]);
    const handlePiP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handlePiP]": ()=>{
            if (videoRef.current && videoRef.current.requestPictureInPicture) {
                videoRef.current.requestPictureInPicture();
            }
        }
    }["usePlayerControls.useCallback[handlePiP]"], [
        videoRef
    ]);
    const handleChapterClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleChapterClick]": (time)=>{
            handleSeek(time);
        }
    }["usePlayerControls.useCallback[handleChapterClick]"], [
        handleSeek
    ]);
    const handleVolumeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleVolumeChange]": (volume)=>{
            if (videoRef.current) {
                videoRef.current.volume = volume;
                playerState.setVolume(volume);
                playerState.setIsMuted(volume === 0);
            }
        }
    }["usePlayerControls.useCallback[handleVolumeChange]"], [
        playerState,
        videoRef
    ]);
    const handleSpeedChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleSpeedChange]": (speed)=>{
            if (videoRef.current) {
                videoRef.current.playbackRate = speed;
                playerState.setPlaybackRate(speed);
            }
        }
    }["usePlayerControls.useCallback[handleSpeedChange]"], [
        playerState,
        videoRef
    ]);
    const handleQualityChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerControls.useCallback[handleQualityChange]": (quality)=>{
            playerState.setSelectedQuality(quality);
        // TODO: Implement quality switching logic
        }
    }["usePlayerControls.useCallback[handleQualityChange]"], [
        playerState
    ]);
    return {
        handlePlay,
        handlePause,
        handleSeek,
        handleMuteToggle,
        handleFullscreen,
        handlePiP,
        handleChapterClick,
        handleVolumeChange,
        handleSpeedChange,
        handleQualityChange
    };
};
_s(usePlayerControls, "oFzCFbrufqQbW6loq3u6w7igHso=");
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
    "LinkIcon": (()=>LinkIcon),
    "MuteIcon": (()=>MuteIcon),
    "PauseIcon": (()=>PauseIcon),
    "PiPIcon": (()=>PiPIcon),
    "PlayIcon": (()=>PlayIcon),
    "QualityIcon": (()=>QualityIcon),
    "ReturnIcon": (()=>ReturnIcon),
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
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        width: 24,
        height: 24,
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 16C5 15.4477 5.44772 15 6 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H6C5.44772 17 5 16.5523 5 16Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 136
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H10C9.44772 13 9 12.5523 9 12C9 11.4477 9.44772 11 10 11H18Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 293
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H17C16.4477 17 16 16.5523 16 16Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 453
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 32,
                columnNumber: 616
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c4 = TranscriptIcon;
const ReturnIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "1,4 1,10 7,10"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 50,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c5 = ReturnIcon;
const SpeedIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 18L12 6l4 12"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 69,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9.5 12h5"
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
_c6 = SpeedIcon;
const CCIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM218.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2.1 48 51.1 70.5 92.3 32.6zm190.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.5 56.9-172.7 32.1-172.7-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 222.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 76,
            columnNumber: 85
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 75,
        columnNumber: 3
    }, this);
_c7 = CCIcon;
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
            lineNumber: 81,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this);
_c8 = FullscreenIcon;
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
                lineNumber: 87,
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
                lineNumber: 88,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 86,
        columnNumber: 3
    }, this);
_c9 = PiPIcon;
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
                lineNumber: 94,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 8a4 4 0 0 1 0 8",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, this);
_c10 = VolumeIcon;
const AudioDescIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 512 512",
        height: "24",
        width: "24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M162.925 238.709l8.822 30.655h-25.606l9.041-30.652c1.277-4.421 2.651-9.994 3.872-15.245 1.22 5.251 2.594 10.823 3.871 15.242zm166.474-32.099h-14.523v98.781h14.523c29.776 0 46.175-17.678 46.175-49.776 0-32.239-17.49-49.005-46.175-49.005zM512 112v288c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48zM245.459 336.139l-57.097-168A12.001 12.001 0 0 0 177 160h-35.894a12.001 12.001 0 0 0-11.362 8.139l-57.097 168C70.003 343.922 75.789 352 84.009 352h29.133a12 12 0 0 0 11.535-8.693l8.574-29.906h51.367l8.793 29.977A12 12 0 0 0 204.926 352h29.172c8.22 0 14.006-8.078 11.361-15.861zm184.701-80.525c0-58.977-37.919-95.614-98.96-95.614h-57.366c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12H331.2c61.041 0 98.96-36.933 98.96-96.386z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 101,
            columnNumber: 143
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this);
_c11 = AudioDescIcon;
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
                lineNumber: 106,
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
                lineNumber: 107,
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
                lineNumber: 108,
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
                lineNumber: 109,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this);
_c12 = ChaptersIcon;
const SettingsIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 115,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 116,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 114,
        columnNumber: 3
    }, this);
_c13 = SettingsIcon;
const InfoIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 122,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, this);
_c14 = InfoIcon;
const QualityIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 128,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 127,
        columnNumber: 3
    }, this);
_c15 = QualityIcon;
const LinkIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: 24,
        height: 24,
        viewBox: "0 0 500 500",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm161.5-86.1c-12.2-5.2-26.3 .4-31.5 12.6s.4 26.3 12.6 31.5l11.9 5.1c17.3 7.4 35.2 12.9 53.6 16.3l0 50.1c0 4.3-.7 8.6-2.1 12.6l-28.7 86.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l24.4-73.2c1.3-3.8 4.8-6.4 8.8-6.4s7.6 2.6 8.8 6.4l24.4 73.2c4.2 12.6 17.8 19.4 30.4 15.2s19.4-17.8 15.2-30.4l-28.7-86.1c-1.4-4.1-2.1-8.3-2.1-12.6l0-50.1c18.4-3.5 36.3-8.9 53.6-16.3l11.9-5.1c12.2-5.2 17.8-19.3 12.6-31.5s-19.3-17.8-31.5-12.6L338.7 175c-26.1 11.2-54.2 17-82.7 17s-56.5-5.8-82.7-17l-11.9-5.1zM256 160a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 140,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 133,
        columnNumber: 3
    }, this);
_c16 = LinkIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "PlayIcon");
__turbopack_context__.k.register(_c1, "PauseIcon");
__turbopack_context__.k.register(_c2, "MuteIcon");
__turbopack_context__.k.register(_c3, "UnmuteIcon");
__turbopack_context__.k.register(_c4, "TranscriptIcon");
__turbopack_context__.k.register(_c5, "ReturnIcon");
__turbopack_context__.k.register(_c6, "SpeedIcon");
__turbopack_context__.k.register(_c7, "CCIcon");
__turbopack_context__.k.register(_c8, "FullscreenIcon");
__turbopack_context__.k.register(_c9, "PiPIcon");
__turbopack_context__.k.register(_c10, "VolumeIcon");
__turbopack_context__.k.register(_c11, "AudioDescIcon");
__turbopack_context__.k.register(_c12, "ChaptersIcon");
__turbopack_context__.k.register(_c13, "SettingsIcon");
__turbopack_context__.k.register(_c14, "InfoIcon");
__turbopack_context__.k.register(_c15, "QualityIcon");
__turbopack_context__.k.register(_c16, "LinkIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PlayerControls.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "active": "PlayerControls-module__55r3oa__active",
  "controlButton": "PlayerControls-module__55r3oa__controlButton",
  "controlsRow": "PlayerControls-module__55r3oa__controlsRow",
  "fullControlsContainer": "PlayerControls-module__55r3oa__fullControlsContainer",
  "inactive": "PlayerControls-module__55r3oa__inactive",
  "leftControls": "PlayerControls-module__55r3oa__leftControls",
  "minimalControlsContainer": "PlayerControls-module__55r3oa__minimalControlsContainer",
  "neutral": "PlayerControls-module__55r3oa__neutral",
  "playPauseButton": "PlayerControls-module__55r3oa__playPauseButton",
  "progressBar": "PlayerControls-module__55r3oa__progressBar",
  "progressSlider": "PlayerControls-module__55r3oa__progressSlider",
  "qualitySelect": "PlayerControls-module__55r3oa__qualitySelect",
  "rightControls": "PlayerControls-module__55r3oa__rightControls",
  "spacer": "PlayerControls-module__55r3oa__spacer",
  "speedSelect": "PlayerControls-module__55r3oa__speedSelect",
  "timeDisplay": "PlayerControls-module__55r3oa__timeDisplay",
  "volumeSlider": "PlayerControls-module__55r3oa__volumeSlider",
});
}}),
"[project]/src/components/PlayerControls.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "PlayerControls": (()=>PlayerControls),
    "PlayerControlsFull": (()=>PlayerControlsFull),
    "PlayerControlsMinimal": (()=>PlayerControlsMinimal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/PlayerControls.module.css [app-client] (css module)");
;
;
;
const PlayerControlsFull = ({ playerState, playerControls, hasCC, hasTranscript, hasAudioDesc, hasChapters })=>{
    const formatTime = (seconds)=>{
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fullControlsContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeDisplay,
                        children: formatTime(playerState.currentTime)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: 0,
                        max: playerState.duration || 1,
                        step: 0.01,
                        value: playerState.currentTime,
                        onChange: (e)=>playerControls.handleSeek(Number(e.target.value)),
                        "aria-label": "Fortschritt",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressSlider,
                        style: {
                            background: `linear-gradient(to right, #007acc 0%, #007acc ${playerState.currentTime / (playerState.duration || 1) * 100}%, rgba(255,255,255,0.3) ${playerState.currentTime / (playerState.duration || 1) * 100}%, rgba(255,255,255,0.3) 100%)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].timeDisplay,
                        children: formatTime(playerState.duration)
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlsRow,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftControls,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playPauseButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}`,
                                "aria-label": playerState.isPlaying ? 'Pausieren' : 'Abspielen',
                                children: playerState.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 79,
                                    columnNumber: 38
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 79,
                                    columnNumber: 54
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleMuteToggle();
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}`,
                                "aria-label": playerState.isMuted ? 'Ton an' : 'Stumm',
                                children: playerState.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnmuteIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 91,
                                    columnNumber: 36
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MuteIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 91,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "range",
                                min: 0,
                                max: 1,
                                step: 0.01,
                                value: playerState.isMuted ? 0 : playerState.volume || 1,
                                onChange: (e)=>playerControls.handleVolumeChange(Number(e.target.value)),
                                "aria-label": "Lautstärke",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].volumeSlider
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleSeek(0);
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                                "aria-label": "Zum Anfang",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReturnIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleSeek(playerState.currentTime - 10);
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                                "aria-label": "10 Sekunden zurück",
                                children: "⏪"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleSeek(playerState.currentTime + 10);
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                                "aria-label": "10 Sekunden vor",
                                children: "⏩"
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: playerState.playbackRate || 1,
                                onChange: (e)=>playerControls.handleSpeedChange(Number(e.target.value)),
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].speedSelect,
                                "aria-label": "Geschwindigkeit",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 0.25,
                                        children: "0.25x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 0.5,
                                        children: "0.5x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 0.75,
                                        children: "0.75x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 1,
                                        children: "1x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 1.25,
                                        children: "1.25x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 1.5,
                                        children: "1.5x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 154,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 2,
                                        children: "2x"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightControls,
                        children: [
                            playerState.isPiPSupported && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handlePiP();
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                                "aria-label": "Bild-in-Bild",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiPIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    playerControls.handleFullscreen();
                                },
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                                "aria-label": "Vollbild",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FullscreenIcon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlayerControls.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlsRow,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftControls,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: playerState.selectedQuality || 'auto',
                            onChange: (e)=>playerControls.handleQualityChange(e.target.value),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].qualitySelect,
                            "aria-label": "Qualität",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "auto",
                                    children: "Auto"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PlayerControls.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                playerState.availableQualities?.map((quality)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: quality.value,
                                        children: quality.label
                                    }, quality.value, false, {
                                        fileName: "[project]/src/components/PlayerControls.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                playerState.setSettingsOpen(!playerState.settingsOpen);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.settingsOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                            "aria-label": "Einstellungen",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SettingsIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        hasCC && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                e.preventDefault(); // Verhindert andere Events
                                playerState.setShowCC(!playerState.showCC);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.showCC ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                            "aria-label": "Untertitel",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CCIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 231,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 220,
                            columnNumber: 13
                        }, this),
                        hasTranscript && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                playerState.setShowTranscript(!playerState.showTranscript);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.showTranscript ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                            "aria-label": "Transkript anzeigen/verbergen",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TranscriptIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 247,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 237,
                            columnNumber: 13
                        }, this),
                        hasAudioDesc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                playerState.setAudioDescActive(!playerState.audioDescActive);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.audioDescActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                            "aria-label": "Audiodeskription",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioDescIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 263,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        hasChapters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: (e)=>{
                                e.stopPropagation();
                                playerState.setShowChapters(!playerState.showChapters);
                            },
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${playerState.showChapters ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                            "aria-label": "Kapitel anzeigen/verbergen",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChaptersIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/PlayerControls.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/PlayerControls.tsx",
                            lineNumber: 269,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerControls.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
_c = PlayerControlsFull;
const PlayerControlsMinimal = ({ playerState, playerControls, onFullPlayerClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].minimalControlsContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
                },
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playPauseButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}`,
                "aria-label": playerState.isPlaying ? 'Pausieren' : 'Abspielen',
                children: playerState.isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PauseIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 305,
                    columnNumber: 34
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 305,
                    columnNumber: 50
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    playerControls.handleMuteToggle();
                },
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active}`,
                "aria-label": playerState.isMuted ? 'Ton an' : 'Stumm',
                children: playerState.isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnmuteIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 317,
                    columnNumber: 32
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MuteIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 317,
                    columnNumber: 49
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spacer
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: (e)=>{
                    e.stopPropagation();
                    onFullPlayerClick?.();
                },
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral}`,
                "aria-label": "Vollständiger Player",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkIcon"], {}, void 0, false, {
                    fileName: "[project]/src/components/PlayerControls.tsx",
                    lineNumber: 330,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerControls.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerControls.tsx",
        lineNumber: 295,
        columnNumber: 5
    }, this);
};
_c1 = PlayerControlsMinimal;
const PlayerControls = PlayerControlsFull;
var _c, _c1;
__turbopack_context__.k.register(_c, "PlayerControlsFull");
__turbopack_context__.k.register(_c1, "PlayerControlsMinimal");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/PlayerContainer.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const PlayerContainer = ({ videoRef, youtubeContainerRef, vimeoContainerRef, playerState, playerControls, mp4, webm, poster, captions, description, chapters, controlsType = 'minimal', onFullPlayerClick })=>{
    const handleContainerClick = ()=>{
        if (!playerState.isPlaying) {
            playerControls.handlePlay();
            playerState.setControlsVisible(true);
        }
    };
    const handleMouseMove = ()=>{
        playerState.setControlsVisible(true);
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
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            !playerState.hasStartedOnce && !playerState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posterOverlay,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].playButton,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                        onClick: playerControls.handlePlay
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/PlayerContainer.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            (playerState.playerType === 'video' || playerState.playerType === 'btag') && playerState.videoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: playerState.videoSrc,
                poster: poster,
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
                        lineNumber: 72,
                        columnNumber: 13
                    }, this),
                    controlsType === 'full' && description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "descriptions",
                        src: description,
                        srcLang: "de",
                        label: "Audiodeskription"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, this),
                    controlsType === 'full' && chapters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("track", {
                        kind: "chapters",
                        src: chapters,
                        srcLang: "de",
                        label: "Kapitel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            playerState.playerType === 'youtube' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: youtubeContainerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].youtubeContainer
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            playerState.playerType === 'vimeo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: vimeoContainerRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].vimeoContainer
            }, void 0, false, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            (controlsType === 'minimal' || controlsType === 'full' && playerState.hasStartedOnce) && (playerState.controlsVisible || !playerState.isPlaying) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controlBar,
                "aria-label": "Player-Steuerung",
                children: [
                    controlsType === 'full' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerControlsFull"], {
                        playerState: playerState,
                        playerControls: playerControls,
                        hasCC: !!captions,
                        hasTranscript: !!description,
                        hasAudioDesc: !!description,
                        hasChapters: !!chapters
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this),
                    controlsType === 'minimal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerControlsMinimal"], {
                        playerState: playerState,
                        playerControls: playerControls,
                        onFullPlayerClick: onFullPlayerClick
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlayerContainer.tsx",
                        lineNumber: 113,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlayerContainer.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlayerContainer.tsx",
        lineNumber: 36,
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
"[project]/src/components/MinimalPlayer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlayerContainer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MinimalPlayer = ({ mp4, webm, youtube, vimeo, btag, poster, link, autoplay = false, muted = true })=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlayerContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayerContainer"], {
        videoRef: videoRef,
        youtubeContainerRef: youtubeContainerRef,
        vimeoContainerRef: vimeoContainerRef,
        playerState: playerState,
        playerControls: playerControls,
        mp4: mp4,
        webm: webm,
        controlsType: "minimal",
        onFullPlayerClick: handleFullPlayerClick
    }, void 0, false, {
        fileName: "[project]/src/components/MinimalPlayer.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
_s(MinimalPlayer, "gNXFXoy8UgYPVnPSJnb+/UX3BVU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerState$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerControls$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerControls"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlayerEffects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlayerEffects"]
    ];
});
_c = MinimalPlayer;
const __TURBOPACK__default__export__ = MinimalPlayer;
var _c;
__turbopack_context__.k.register(_c, "MinimalPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_bfcb7910._.js.map