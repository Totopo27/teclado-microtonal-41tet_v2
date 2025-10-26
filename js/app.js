// js/app.js
// Inicialización y gestión de eventos para 41-TET v2

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

  // Mapeo QWERTY para 41 notas - ACTUALIZADO PARA V2
  // Fila superior usa las teclas sin 'b', fila inferior usa las teclas con 'b'
  const keyMap = {
    // Fila superior (teclas sin sufijo)
    '1': '0', '2': '1', '3': '2', '4': '3', '5': '4',
    '6': '5', '7': '6', '8': '7', '9': '8', '0': '9',
    'q': '10', 'w': '11', 'e': '12', 'r': '13', 't': '14',
    'y': '15', 'u': '16', 'i': '17', 'o': '18', 'p': '19',
    'a': '20', 's': '21', 'd': '22', 'f': '23', 'g': '24',
    'h': '25', 'j': '26', 'k': '27', 'l': '28', 'ñ': '29', ';': '29',
    'z': '30', 'x': '31', 'c': '32', 'v': '33', 'b': '34', 'n': '35',
    'm': '36', ',': '37', '.': '38', '/': '39', '-': '40'
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
      // Buscar la configuración de tecla - por defecto usa fila superior
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
║          CONTROLES DE TECLADO QWERTY - 41-TET v2         ║
╠══════════════════════════════════════════════════════════╣
║   OCTAVA COMPLETA (41 notas)                             ║
║   Fila numérica: 1-0                                     ║
║   Fila superior: Q-P                                     ║
║   Fila media: A-Ñ/;                                      ║
║   Fila inferior: Z-N                                     ║
║   Fila final: M , . / -                                  ║
║                                                          ║
║   CONTROLES:                                             ║
║   ↑ Flecha Arriba   → +8va                               ║
║   ↓ Flecha Abajo    → -8va                               ║
║   Espacio           → Reset octava                       ║
╚══════════════════════════════════════════════════════════╝
  `);
}