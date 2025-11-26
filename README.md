# Teclado Microtonal 41-TET

Teclado hexagonal para el sistema de temperamento igual de 41 notas por octava (41-TET / 41-EDO).

## Características

- **Disposición hexagonal** de teclas para fácil visualización de intervalos
- **Sistema 41-TET completo**: 58 teclas totales distribuidas en 3 octavas
  - Octava baja: 10 notas de octava anterior (31-40) + 17 notas (0-16)
  - Octava media: 24 notas (17-40)
  - Octava alta: 18 notas (0-17)
- **Visualización de escalas** con resaltado de notas
- **Modo de combinación de escalas** para explorar superposiciones armónicas
- **Controles de transposición** de octava (+8va, -8va, Reset)
- **Monitor de polifonía en tiempo real**: 
  - Visualización de todas las notas activas simultáneamente
  - Contador de voces activas
  - Información de frecuencia y octava por cada nota
  - Chips de colores según la octava
  - Orden cronológico de notas pulsadas
- **Información monofónica**: Muestra la última nota tocada
- **Integración con Max/MSP** mediante `window.max.outlet()`
- **Soporte completo de teclado QWERTY** (41 teclas + controles)

## Uso

### Online
Simplemente abre `index.html` en tu navegador web.

### Con Max/MSP
1. Abre el proyecto en Max/MSP
2. Carga el archivo HTML en un objeto `jweb`
3. El teclado enviará mensajes mediante `window.max.outlet(noteValue, noteName, velocity)`

## Escalas incluidas

### Modos Griegos (adaptados a 41-TET)
- **Jónico (Mayor)**: Do-Re-Mi-Fa-Sol-La-Si
- **Dórico**: Do-Re-Mib-Fa-Sol-La-Sib
- **Frigio**: Do-Reb-Mib-Fa-Sol-Lab-Sib
- **Lidio**: Do-Re-Mi-Fa#-Sol-La-Si
- **Mixolidio**: Do-Re-Mi-Fa-Sol-La-Sib
- **Eólico (Menor)**: Do-Re-Mib-Fa-Sol-Lab-Sib
- **Locrio**: Do-Reb-Mib-Fa-Solb-Lab-Sib

### Escalas Especiales
- **Cromática**: Las 41 notas del sistema
- **Tonos Enteros**: 6 notas separadas por tonos enteros
- **Pentatónica Mayor**: 5 notas en modo mayor
- **Pentatónica Menor**: 5 notas en modo menor
- **Blues**: Escala blues de 6 notas
- **Armónica Menor**: Escala armónica menor de 7 notas

## Controles

### Ratón
- **Clic en tecla**: Reproducir nota
- **Mantener presionado**: Nota sostenida
- **Hover**: Vista previa del color de activación
- **Clic en chip de nota**: Detener nota específica en modo polifonía

### Teclado QWERTY - Octava Completa (41 notas)

#### Notas musicales:
```
┌──────────────────────────────────────────────┐
│ Fila 1-0:  1 2 3 4 5 6 7 8 9 0              │
│           Do Do+ Do#- Do# Reb Reb+ Re- Re Re+ Re#-│
│           (0)(1)(2)(3)(4)(5)(6)(7)(8)(9)    │
├──────────────────────────────────────────────┤
│ Fila Q-P:  Q W E R T Y U I O P              │
│           Re# Mib Mib+ Mi- Mi Mi+ Fa- Fa Fa+ Fa#-│
│           (10)(11)(12)(13)(14)(15)(16)(17)(18)(19)│
├──────────────────────────────────────────────┤
│ Fila A-Ñ:  A S D F G H J K L Ñ              │
│           Fa# Solb Solb+ Sol- Sol Sol+ Sol#- Sol# Lab Lab+│
│           (20)(21)(22)(23)(24)(25)(26)(27)(28)(29)│
├──────────────────────────────────────────────┤
│ Fila Z-N:  Z X C V B N                      │
│           La- La La+ La#- La# Sib            │
│           (30)(31)(32)(33)(34)(35)          │
├──────────────────────────────────────────────┤
│ Fila M-/:  M , . / -                        │
│           Sib+ Si- Si Si+ Do-                │
│           (36)(37)(38)(39)(40)              │
└──────────────────────────────────────────────┘
```

#### Controles de octava:
- **↑ Flecha Arriba**: +8va (subir octava)
- **↓ Flecha Abajo**: -8va (bajar octava)  
- **Barra Espaciadora**: Reset octava a 0

### Controles de interfaz
- **+8va / -8va**: Transponer octavas (también con flechas ↑↓)
- **Reset Octava**: Volver a octava base (también con Espacio)
- **Selector de escala**: Elegir escala o modo
- **Combinar escalas**: Activar modo de superposición de escalas
- **Limpiar escalas**: Resetear visualización de escalas

### Atajos útiles
- Mantén presionadas múltiples teclas para tocar acordes
- Usa las flechas mientras tocas para cambiar de octava en tiempo real
- El espacio te permite volver rápidamente a la octava central

## Disposición del teclado

- **Octava baja (b)**: valores 123-149 (27 notas: 31-40 de octava anterior + 0-16)
- **Octava media (m)**: valores 150-173 (24 notas: 17-40)
- **Octava alta (a)**: valores 174-191 (18 notas: 0-17)

**Total**: 58 teclas hexagonales (69 notas)

## Compositores y usos del 41-TET

- **Easley Blackwood Jr.** - "Microtonal Compositions"
- **Kyle Gann** - Utiliza 41-TET en varias composiciones
- **Guitarras microtonales**: Algunos luthiers construyen guitarras de 41 trastes por octava
- **Música experimental**: Utilizado para explorar armonías no disponibles en 12-TET





