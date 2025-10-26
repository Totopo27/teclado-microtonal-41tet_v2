// js/scales.js
// Definición de escalas adaptadas al temperamento 41-TET

// En 41-TET:
// - Semitono = ~3.4 pasos (usaremos 3)
// - Tono = ~6.8 pasos (usaremos 7)
// - Tercera Mayor = ~13.6 pasos (usaremos 14)
// - Quinta Justa = ~24 pasos

// Mapeo de escalas musicales en 41-TET
const scales = {
  // ========== MODOS GRIEGOS ==========
  // Patrón Mayor: T-T-s-T-T-T-s (7-7-3-7-7-7-3)
  ionian: [0, 7, 14, 17, 24, 31, 38], // Do Mayor
  
  // Dórico: T-s-T-T-T-s-T (7-3-7-7-7-3-7)
  dorian: [0, 7, 10, 17, 24, 31, 34],
  
  // Frigio: s-T-T-T-s-T-T (3-7-7-7-3-7-7)
  phrygian: [0, 3, 10, 17, 24, 27, 34],
  
  // Lidio: T-T-T-s-T-T-s (7-7-7-3-7-7-3)
  lydian: [0, 7, 14, 21, 24, 31, 38],
  
  // Mixolidio: T-T-s-T-T-s-T (7-7-3-7-7-3-7)
  mixolydian: [0, 7, 14, 17, 24, 31, 34],
  
  // Eólico (Menor Natural): T-s-T-T-s-T-T (7-3-7-7-3-7-7)
  aeolian: [0, 7, 10, 17, 24, 27, 34],
  
  // Locrio: s-T-T-s-T-T-T (3-7-7-3-7-7-7)
  locrian: [0, 3, 10, 17, 20, 27, 34],

  // ========== ESCALAS ESPECIALES ==========
  // Cromática: todas las 41 notas
  chromatic: [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40
  ],
  
  // Tonos Enteros: 6 notas separadas por ~7 pasos
  wholeTone: [0, 7, 14, 21, 28, 35],
  
  // Pentatónica Mayor: Do-Re-Mi-Sol-La (pasos aproximados en 41-TET)
  // Intervalos: T+T-T+T-m3-T+T-m3
  pentatonicMajor: [0, 7, 14, 24, 31],
  
  // Pentatónica Menor: La-Do-Re-Mi-Sol
  // Intervalos relativos: m3-T-T-m3-T
  pentatonicMinor: [0, 10, 17, 24, 34],
  
  // Blues: Pentatónica menor + tritono (#4/b5)
  blues: [0, 10, 17, 20, 24, 34],
  
  // Armónica Menor: T-s-T-T-s-T+s-s (7-3-7-7-3-11-3)
  // Do-Re-Mib-Fa-Sol-Lab-Si-Do
  harmonicMinor: [0, 7, 10, 17, 24, 27, 38]
};

// Nombres legibles de las escalas
const scaleNames = {
  none: 'Ninguna',
  ionian: 'Jónico (Mayor)',
  dorian: 'Dórico',
  phrygian: 'Frigio',
  lydian: 'Lidio',
  mixolydian: 'Mixolidio',
  aeolian: 'Eólico (Menor)',
  locrian: 'Locrio',
  chromatic: 'Cromática (41 notas)',
  wholeTone: 'Tonos Enteros',
  pentatonicMajor: 'Pentatónica Mayor',
  pentatonicMinor: 'Pentatónica Menor',
  blues: 'Blues',
  harmonicMinor: 'Armónica Menor'
};