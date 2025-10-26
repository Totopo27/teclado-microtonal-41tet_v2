// js/app.js
// Inicialización y gestión de eventos para 41-TET

document.addEventListener('DOMContentLoaded', function() {
  // Generar teclado al cargar
  generateKeyboard();
  
  // Controles de octava
  document.getElementById('octave-up').addEventListener('click', () => {
    currentOctave = Math.min(currentOctave + 1, 2);
    document.getElementById('current-octave').textContent = currentOctave;
  });

  document.getElementById('octave-down').addEventListener('click', () => {
    currentOctave = Math.max(currentOctave - 1, -2);
    document.getElementById('current-octave').textContent = currentOctave;
  });

  document.getElementById('reset-octave').addEventListener('click', () => {
    currentOctave = 0;
    document.getElementById('current-octave').textContent = 0;
  });

  // Selector de escala
  document.getElementById('scale-selector').addEventListener('change', (e) => {
    const selectedScale = e.target.value;
    
    if (combineMode) {
      if (selectedScale !== 'none') {
        combinedScales.add(selectedScale);
        updateCombinedScalesList();
        e.target.value = 'none';
      }
    } else {
      currentScale = selectedScale;
      combinedScales.clear();
      updateCombinedScalesList();
    }
    
    updateScaleDisplay();
  });

  // Checkbox de combinación de escalas
  document.getElementById('combine-scales').addEventListener('change', (e) => {
    combineMode = e.target.checked;
    const combinationPanel = document.getElementById('scale-combination');
    
    if (combineMode) {
      combinationPanel.style.display = 'block';
      if (currentScale !== 'none') {
        combinedScales.add(currentScale);
      }
    } else {
      combinationPanel.style.display = 'none';
      if (combinedScales.size > 0) {
        currentScale = Array.from(combinedScales).pop();
        document.getElementById('scale-selector').value = currentScale;
      }
      combinedScales.clear();
    }
    
    updateCombinedScalesList();
    updateScaleDisplay();
  });

  // Botón de limpiar escalas
  document.getElementById('clear-scales').addEventListener('click', () => {
    combinedScales.clear();
    currentScale = 'none';
    document.getElementById('scale-selector').value = 'none';
    updateCombinedScalesList();
    updateScaleDisplay();
  });

  // Mapeo QWERTY para 41 notas
  const keyMap = {
    '1': '0b', '2': '1b', '3': '2b', '4': '3b', '5': '4b',
    '6': '5b', '7': '6b', '8': '7b', '9': '8b', '0': '9b',
    'q': '10b', 'w': '11b', 'e': '12b', 'r': '13b', 't': '14b',
    'y': '15b', 'u': '16b', 'i': '17m', 'o': '18m', 'p': '19m',
    'a': '20m', 's': '21m', 'd': '22m', 'f': '23m', 'g': '24m',
    'h': '25m', 'j': '26m', 'k': '27m', 'l': '28m', 'ñ': '29m', ';': '29m',
    'z': '30m', 'x': '31m', 'c': '32m', 'v': '33m', 'b': '34m', 'n': '35m',
    'm': '36m', ',': '37m', '.': '38m', '/': '39m', '-': '40m'
  };

  const controlKeys = {
    'ArrowUp': 'octave-up',
    'ArrowDown': 'octave-down',
    ' ': 'reset-octave'
  };

  const pressedKeys = new Set();

  document.addEventListener('keydown', (e) => {
    if (controlKeys[e.key]) {
      e.preventDefault();
    }

    if (controlKeys[e.key] && !pressedKeys.has(e.key)) {
      pressedKeys.add(e.key);
      const buttonId = controlKeys[e.key];
      document.getElementById(buttonId).click();
      
      const button = document.getElementById(buttonId);
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = '';
      }, 100);
      return;
    }

    const key = e.key.toLowerCase();
    if (keyMap[key] && !pressedKeys.has(key)) {
      pressedKeys.add(key);
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) {
        playNote(config);
      }
    }
  });

  document.addEventListener('keyup', (e) => {
    const key = e.key.toLowerCase();
    
    if (controlKeys[e.key]) {
      pressedKeys.delete(e.key);
      return;
    }
    
    if (keyMap[key]) {
      pressedKeys.delete(key);
      const config = keyConfigurations.find(c => c.id === keyMap[key]);
      if (config) {
        stopNote(config);
      }
    }
  });

  showKeyboardHelp();
});

function showKeyboardHelp() {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║          CONTROLES DE TECLADO QWERTY - 41-TET            ║
╠══════════════════════════════════════════════════════════╣
║   OCTAVA COMPLETA (41 notas)                           ║
║  ↑ Flecha Arriba   → +8va                                ║
║  ↓ Flecha Abajo    → -8va                                ║
║  Espacio           → Reset octava                        ║
╚══════════════════════════════════════════════════════════╝
  `);
}
