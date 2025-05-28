import React, { useState } from 'react';
import { 
  PlayIcon, PauseIcon, MuteIcon, UnmuteIcon, TranscriptIcon, 
  SpeedIcon, CCIcon, FullscreenIcon, PiPIcon, VolumeIcon, 
  AudioDescIcon, ChaptersIcon, SettingsIcon, InfoIcon, QualityIcon,
  LinkIcon, ReturnIcon, SkipBackIcon, SkipForwardIcon // HINZUFÜGEN
} from './icons';
import styles from './PlayerControls.module.css';


interface PlayerControlsBaseProps {
  playerState: any;
  playerControls: any;
}

interface PlayerControlsFullProps extends PlayerControlsBaseProps {
  hasCC: boolean;
  hasTranscript: boolean;
  hasAudioDesc: boolean;
  hasChapters: boolean;
}

interface PlayerControlsMinimalProps extends PlayerControlsBaseProps {
  onFullPlayerClick?: () => void;
}

// FULL PLAYER CONTROLS
export const PlayerControlsFull: React.FC<PlayerControlsFullProps> = ({
  playerState,
  playerControls,
  hasCC,
  hasTranscript,
  hasAudioDesc,
  hasChapters
}) => {
  const [showSpeedDropdown, setShowSpeedDropdown] = useState(false);
  const [showQualityDropdown, setShowQualityDropdown] = useState(false);

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.fullControlsContainer}>
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <span className={styles.timeDisplay}>
          {formatTime(playerState.currentTime)}
        </span>
        <input
          type="range"
          min={0}
          max={playerState.duration || 1}
          step={0.1}
          value={playerState.currentTime || 0}
          onChange={e => playerControls.handleSeek(Number(e.target.value))}
          aria-label="Fortschritt"
          className={styles.progressSlider}
        />
        <span className={styles.timeDisplay}>
          {formatTime(playerState.duration)}
        </span>
      </div>

      {/* First Row Controls */}
      <div className={styles.controlsRow}>
        <div className={styles.leftControls}>
          {/* Play/Pause - NORMALE BUTTONS */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
            }}
            className={`${styles.controlButton} ${styles.playPauseButton}`}
            aria-label={playerState.isPlaying ? 'Pausieren' : 'Abspielen'}
          >
            {playerState.isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
          </button>

          {/* Volume - NORMALE BUTTONS */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              playerControls.handleMuteToggle();
            }}
            className={styles.controlButton}
            aria-label={playerState.isMuted ? 'Ton an' : 'Stumm'}
          >
            {playerState.isMuted ? <UnmuteIcon size={14} /> : <MuteIcon size={14} />}
          </button>

          {/* Volume Slider - IMMER anzeigen */}
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={playerState.isMuted ? 0 : (playerState.volume || 1)}
            onChange={e => playerControls.handleVolumeChange(Number(e.target.value))}
            aria-label="Lautstärke"
            className={styles.volumeSlider}
          />

          {/* Return to Start */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              playerControls.handleSeek(0);
            }}
            className={styles.controlButton}
            aria-label="Zum Anfang"
          >
            <ReturnIcon size={14} />
          </button>

          {/* Skip Back */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              playerControls.handleSeek(Math.max(0, (playerState.currentTime || 0) - 10));
            }}
            className={styles.controlButton}
            aria-label="10 Sekunden zurück"
          >
            <SkipBackIcon size={14} />
          </button>

          {/* Skip Forward */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              playerControls.handleSeek((playerState.currentTime || 0) + 10);
            }}
            className={styles.controlButton}
            aria-label="10 Sekunden vor"
          >
            <SkipForwardIcon size={14} />
          </button>

          {/* Speed Dropdown - ALS BUTTON */}
          <div className={styles.dropdownContainer}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowSpeedDropdown(!showSpeedDropdown);
                setShowQualityDropdown(false);
              }}
              className={styles.controlButton}
              aria-label="Geschwindigkeit"
            >
              <SpeedIcon size={14} />
            </button>
            {showSpeedDropdown && (
              <div className={styles.dropdown}>
                {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 2].map(speed => (
                  <button
                    key={speed}
                    onClick={(e) => {
                      e.stopPropagation();
                      playerControls.handleSpeedChange(speed);
                      setShowSpeedDropdown(false);
                    }}
                    className={`${styles.dropdownItem} ${
                      (playerState.playbackRate || 1) === speed ? styles.active : ''
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.rightControls}>
          {playerState.isPiPSupported && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                playerControls.handlePiP();
              }}
              className={styles.controlButton}
              aria-label="Bild-in-Bild"
            >
              <PiPIcon size={14} />
            </button>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              playerControls.handleFullscreen();
            }}
            className={styles.controlButton}
            aria-label="Vollbild"
          >
            <FullscreenIcon size={14} />
          </button>
        </div>
      </div>

      {/* Second Row Controls */}
      <div className={styles.controlsRow}>
        <div className={styles.leftControls}>
          {/* Quality Dropdown - ALS BUTTON */}
          <div className={styles.dropdownContainer}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowQualityDropdown(!showQualityDropdown);
                setShowSpeedDropdown(false);
              }}
              className={styles.controlButton}
              aria-label="Qualität"
            >
              <QualityIcon size={14} />
            </button>
            {showQualityDropdown && (
              <div className={styles.dropdown}>
                {['auto', '1080p', '720p', '480p'].map(quality => (
                  <button
                    key={quality}
                    onClick={(e) => {
                      e.stopPropagation();
                      playerControls.handleQualityChange(quality);
                      setShowQualityDropdown(false);
                    }}
                    className={`${styles.dropdownItem} ${
                      (playerState.selectedQuality || 'auto') === quality ? styles.active : ''
                    }`}
                  >
                    {quality}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Settings */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              playerState.setSettingsOpen(!playerState.settingsOpen);
            }}
            className={`${styles.controlButton} ${
              playerState.settingsOpen ? styles.active : ''
            }`}
            aria-label="Einstellungen"
          >
            <SettingsIcon size={14} />
          </button>

          {/* CC */}
          {hasCC && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                playerState.setShowCC(!playerState.showCC);
              }}
              className={`${styles.controlButton} ${
                playerState.showCC ? styles.active : ''
              }`}
              aria-label="Untertitel"
            >
              <CCIcon size={14} />
            </button>
          )}

          {/* Transcript - DIREKT SIDEBAR öffnen */}
          {hasTranscript && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                playerState.setShowTranscript(!playerState.showTranscript);
              }}
              className={`${styles.controlButton} ${
                playerState.showTranscript ? styles.active : ''
              }`}
              aria-label="Transkript"
            >
              <TranscriptIcon size={14} />
            </button>
          )}

          {/* Audio Description - DIREKT AKTIVIEREN statt Modal */}
          {hasAudioDesc && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                playerState.setAudioDescActive(!playerState.audioDescActive);
              }}
              className={`${styles.controlButton} ${
                playerState.audioDescActive ? styles.active : ''
              }`}
              aria-label="Audiodeskription"
            >
              <AudioDescIcon size={14} />
            </button>
          )}

          {/* Chapters */}
          {hasChapters && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                playerState.setShowChapters(!playerState.showChapters);
              }}
              className={`${styles.controlButton} ${
                playerState.showChapters ? styles.active : ''
              }`}
              aria-label="Kapitel"
            >
              <ChaptersIcon size={14} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// MINIMAL PLAYER CONTROLS - Icons korrigieren
export const PlayerControlsMinimal: React.FC<PlayerControlsMinimalProps> = ({
  playerState,
  playerControls,
  onFullPlayerClick
}) => {
  return (
    <div className={styles.minimalControlsContainer}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          playerState.isPlaying ? playerControls.handlePause() : playerControls.handlePlay();
        }}
        className={`${styles.controlButton} ${styles.playPauseButton}`}
        aria-label={playerState.isPlaying ? 'Pausieren' : 'Abspielen'}
      >
        {playerState.isPlaying ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          playerControls.handleMuteToggle();
        }}
        className={styles.controlButton}
        aria-label={playerState.isMuted ? 'Ton an' : 'Stumm'}
      >
        {playerState.isMuted ? <UnmuteIcon size={14} /> : <MuteIcon size={14} />}
      </button>

      <div className={styles.spacer} />

      <button
        onClick={(e) => {
          e.stopPropagation();
          onFullPlayerClick?.();
        }}
        className={styles.controlButton}
        aria-label="Vollständiger Player"
      >
        <LinkIcon size={14} />
      </button>
    </div>
  );
};

export const PlayerControls: React.FC<PlayerControlsFullProps> = PlayerControlsFull;