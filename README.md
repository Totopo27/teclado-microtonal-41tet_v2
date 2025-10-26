# Teclado Microtonal 41-TET v2

Teclado hexagonal interactivo para el sistema de temperamento igual de 41 notas por octava (41-TET / 41-EDO) con disposición compacta de dos filas.

## Características

- **Disposición hexagonal compacta** de 84 teclas en dos filas paralelas
- **Sistema 41-TET completo**: 2 octavas completas (41 notas × 2)
  - **Fila superior**: Octava 0 (notas 0-40 + nota 0 adicional)
  - **Fila inferior**: Octava -1 (notas 0-40)
- **Visualización de escalas** con resaltado de notas en tiempo real
- **Modo de combinación de escalas** para explorar superposiciones armónicas  (trabajo en proceso)
- **Controles de transposición** de octava (+8va, -8va, Reset)
- **Monitor de polifonía en tiempo real**: 
  - Visualización de todas las notas activas simultáneamente
  - Contador de voces activas
  - Información de frecuencia y octava por cada nota
- **Información monofónica**: Muestra la última nota tocada
- **Integración con Max/MSP** mediante `window.max.outlet()`   (trabajo en proceso)
- **Soporte completo de teclado QWERTY** (41 teclas + controles)
- **Soporte multi-touch** para dispositivos móviles

## 🚀 Uso

### Online
Simplemente abre `index.html` en tu navegador web.


## 🎼 Escalas incluidas (trabajo en proceso)

### Modos Griegos (adaptados a 41-TET)
- **Jónico (Mayor)**: Do-Re-Mi-Fa-Sol-La-Si (intervalos: 7-7-3-7-7-7-3)
- **Dórico**: Do-Re-Mib-Fa-Sol-La-Sib (intervalos: 7-3-7-7-7-3-7)
- **Frigio**: Do-Reb-Mib-Fa-Sol-Lab-Sib (intervalos: 3-7-7-7-3-7-7)
- **Lidio**: Do-Re-Mi-Fa#-Sol-La-Si (intervalos: 7-7-7-3-7-7-3)
- **Mixolidio**: Do-Re-Mi-Fa-Sol-La-Sib (intervalos: 7-7-3-7-7-3-7)
- **Eólico (Menor)**: Do-Re-Mib-Fa-Sol-Lab-Sib (intervalos: 7-3-7-7-3-7-7)
- **Locrio**: Do-Reb-Mib-Fa-Solb-Lab-Sib (intervalos: 3-7-7-3-7-7-7)

### Escalas Especiales
- **Cromática**: Las 41 notas del sistema
- **Tonos Enteros**: 6 notas separadas por ~7 pasos (204.9 cents)
- **Pentatónica Mayor**: 5 notas en modo mayor
- **Pentatónica Menor**: 5 notas en modo menor
- **Blues**: Escala blues de 6 notas
- **Armónica Menor**: Escala armónica menor de 7 notas

## ⌨️ Controles

### Ratón / Touch
- **Clic/Tap en tecla**: Reproducir nota
- **Mantener presionado**: Nota sostenida
- **Hover**: Vista previa del color de activación

### Teclado QWERTY - Octava Completa (41 notas)

#### Notas musicales (Fila Superior - Octava 0):
```
┌───────────────────────────────────────────────────────────┐
│ Fila 1-0:  1  2  3  4  5  6  7  8  9  0                  │
│           C  C+ C#- C# Db Db+ D- D  D+ D#-                │
│           (0)(1)(2)(3)(4)(5)(6)(7)(8)(9)                  │
├───────────────────────────────────────────────────────────┤
│ Fila Q-P:  Q  W  E  R  T  Y  U  I  O  P                  │
│           D# Eb Eb+ E- E  E+ F- F  F+ F#-                 │
│           (10)(11)(12)(13)(14)(15)(16)(17)(18)(19)        │
├───────────────────────────────────────────────────────────┤
│ Fila A-Ñ:  A  S  D  F  G  H  J  K  L  Ñ/;                │
│           F# Gb Gb+ G- G  G+ G#- G# Ab Ab+                │
│           (20)(21)(22)(23)(24)(25)(26)(27)(28)(29)        │
├───────────────────────────────────────────────────────────┤
│ Fila Z-N:  Z  X  C  V  B  N                               │
│           A- A  A+ A#- A# Bb                              │
│           (30)(31)(32)(33)(34)(35)                        │
├───────────────────────────────────────────────────────────┤
│ Fila M-/:  M  ,  .  /  -                                 │
│           Bb+ B- B  B+ C-                                 │
│           (36)(37)(38)(39)(40)                            │
└───────────────────────────────────────────────────────────┘
```

#### Controles de octava:
- **↑ Flecha Arriba**: +8va (subir octava completa - 41 pasos)
- **↓ Flecha Abajo**: -8va (bajar octava completa - 41 pasos)  
- **Barra Espaciadora**: Reset octava a 0

### Controles de interfaz
- **+8va / -8va**: Transponer octavas (también con flechas ↑↓)
- **Reset Octava**: Volver a octava base (también con Espacio)
- **Selector de escala**: Elegir escala o modo
- **☑ Combinar escalas**: Activar modo de superposición de escalas múltiples
- **Limpiar escalas**: Resetear visualización de escalas

### Atajos útiles
- Mantén presionadas múltiples teclas para tocar acordes polifónicos
- Usa las flechas mientras tocas para cambiar de octava en tiempo real
- El espacio te permite volver rápidamente a la octava central
- Combina escalas para explorar intersecciones armónicas

## Disposición del teclado

- **Fila superior**: valores 174-215 (octava 0: notas 0-40 + nota 0 extra)
- **Fila inferior**: valores 133-173 (octava -1: notas 0-40)
**Total**: 84 teclas hexagonales organizadas en 2 filas paralelas

### Rango de transposición:
- **-2 octavas** hasta **+2 octavas**
- Rango total: 5 octavas completas (205 notas)

## 🎵 Teoría del 41-TET

### Intervalos en 41-TET:
- **1 paso** = 1200¢ / 41 ≈ **29.27 centavos**
- **Semitono** ≈ 3 pasos ≈ 87.8 cents
- **Tono** ≈ 7 pasos ≈ 204.9 cents
- **Tercera Mayor** ≈ 14 pasos ≈ 409.8 cents
- **Quinta Justa** ≈ 24 pasos ≈ 702.4 cents
- **Octava** = 41 pasos = 1200 cents (exacto)

## 🌐 GitHub Pages

Este proyecto está desplegado en GitHub Pages:
https://totopo27.github.io/teclado-microtonal-41tet_v2/



