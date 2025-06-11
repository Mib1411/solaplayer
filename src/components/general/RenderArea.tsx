'use client';

import React from 'react';
import { CONFIG, FeatureComponent } from './config/playerConfig'; // KORRIGIERTER PFAD!
import { ComponentLoader } from './ComponentLoader'; // NICHT ButtonFactory!

interface RenderAreaProps {
  playerMode: 'base' | 'extended';
  area: 'controls' | 'sidebar' | 'overlay' | 'popup';
  subArea: 'left' | 'right' | 'progress' | 'top' | 'bottom' | 'center';
  playerState: any;
  playerControls: any;
  availableContent?: any;
  onFullPlayerClick?: () => void;
}

export const RenderArea: React.FC<RenderAreaProps> = ({
  playerMode,
  area,
  subArea,
  playerState,
  playerControls,
  availableContent,
  onFullPlayerClick
}) => {
  // NEUE CONFIG STRUKTUR: features direkt aus CONFIG
  const features = CONFIG.features;
  
  // Sammle alle Components für diesen Bereich
  const componentsToRender: Array<{
    componentName: string;
    featureName: string;
    config: FeatureComponent;
  }> = [];

  // Durchsuche alle Features für den aktuellen playerMode
  Object.entries(features).forEach(([featureName, feature]) => {
    // NEUE STRUKTUR: feature[playerMode] (base/extended)
    const modeConfig = feature[playerMode];
    
    if (modeConfig.enabled && modeConfig.components) {
      Object.entries(modeConfig.components).forEach(([componentName, componentConfig]) => {
        // Prüfe ob Component in diesen Bereich gehört
        if (componentConfig.area === area && componentConfig.subArea === subArea) {
          componentsToRender.push({
            componentName,
            featureName,
            config: componentConfig
          });
        }
      });
    }
  });

  // Sortiere nach position
  componentsToRender.sort((a, b) => a.config.position - b.config.position);



  return (
    <>
      {componentsToRender.map((comp, index) => {
        // Basis Props
        const props: any = {
          playerState,
          playerControls,
          onFullPlayerClick
        };

        // SpecialProps hinzufügen falls vorhanden
        if (comp.config.specialProps && availableContent) {
          Object.entries(comp.config.specialProps).forEach(([propName, contentKey]) => {
            props[propName] = availableContent[contentKey];
          });
        }
        
        // Feature-spezifische Props
        addFeatureSpecificProps(comp.featureName, props, availableContent);

        // Render logic
        return (comp.componentName) ? (
          <ComponentLoader
            key={`${comp.componentName}-${comp.config.position}-${index}`}
            componentName={comp.componentName}
            availableContent={availableContent}
            {...props}
          />
        ) : null;
      })}
    </>
  );
};

// Helper: Feature-spezifische Props hinzufügen
function addFeatureSpecificProps(featureName: string, props: any, availableContent: any) {
  switch (featureName) {
    case 'captions':
      props.hasCC = !!availableContent?.captionsUrl;
      break;
    case 'transcript':
      // TRANSCRIPT = CAPTIONS + DESCRIPTIONS KOMBINIERT!
      props.hasTranscript = !!(availableContent?.captionsUrl || availableContent?.descriptionsUrl);
      break;
    case 'chapters':
      props.hasChapters = !!availableContent?.chaptersUrl;
      break;
    case 'audioDescription':
      props.hasAudioDesc = !!availableContent?.descriptionsUrl;
      break;
    case 'quality':
      props.availableQualities = availableContent?.qualities || [];
      break;
  }
}