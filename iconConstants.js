const icons = {
  logoGroup: "M48.82,31.28c-.41-.78-.76-1.49-1.8-1.63v9.28h.09A5.93,5.93,0,0,0,48.82,31.28ZM61.29,62.76a3.07,3.07,0,0,0-3.37,3.1,2.79,2.79,0,0,0,2.6,3,1.61,1.61,0,0,0,1-.36l0,0-2.9,2.85H61.5l1.39-1.49a5.29,5.29,0,0,0,1.76-3.78A3.09,3.09,0,0,0,61.29,62.76Zm0,4.15a1,1,0,1,1,1.08-1A1,1,0,0,1,61.28,66.91Zm8.87-1.2a2,2,0,0,0-1.31.41l0,0L71.75,63H68.92l-1.41,1.71A5.27,5.27,0,0,0,66,68.26a3.1,3.1,0,0,0,3.42,3.29,3,3,0,0,0,3.29-3.08A2.57,2.57,0,0,0,70.15,65.72Zm-.77,3.85a1,1,0,1,1,1.08-1A1,1,0,0,1,69.38,69.56Zm9.55-1.51a3.46,3.46,0,0,0,1.57-2.74c0-1.58-1.16-2.55-3.11-2.55-2.35,0-3.22,1.39-3.22,3h2.3a.79.79,0,0,1,.85-.88.64.64,0,0,1,.73.68c0,.6-.51,1-1,1.48l-2.7,2.44v1.92h6.25V69.24H77.49ZM58.71,39.36h-.17l-1.2,4.3h2.32ZM15,55.43l60.15.09v-9L85,46.4,44.87,22,5.09,46.15,5,46.32h9.88Zm12.46-4.21c-1.9.36-1.3-2.11-.43-2.75h.52l.52.43A2,2,0,0,1,27.43,51.22Zm38.24-13,2.06,5.59,1.55-3.27a3.66,3.66,0,0,1,1.8,1c-.27,1.88-1.77,3.39-2.32,5.07l-.17,4.64H66.44c0-6.63-1.57-9.86-3.35-14.61ZM58.1,33.69c2.43,1.19,2,2.38,2.75,5.16l2.92,12.55-2.23-.09-1.37-5.41H56.64L55.1,51.22a5.14,5.14,0,0,1-2,.17L53,51.3Zm-13.23-8c3.45,1.72,8.12,4.07,6.87,9.88a7.32,7.32,0,0,1-2.15,4.3L52.18,51v.26H50.11c-.6-1.6-1.79-8.89-3-9.19l-.17,9.11-2.15.09ZM40,48.55a1.43,1.43,0,0,1,1,.69,1.53,1.53,0,0,1-.77,2,1.27,1.27,0,0,1-1-2C39.4,48.82,39.59,48.78,40,48.55Zm-7-5.24.26-.09c.64,2.62-.75,4.12,1.37,5.5,2.29-.18,1.89-2.41,1.89-4.81l.09-13.23,2.32-1.55.09,5.07c0,4,.68,13.06-1,15.38-1.49,2-5.3,2.12-6.36-.43l-.26-4.38ZM21.24,40l1.46,7.39v.17h.09l3.35-10.66L29,35.15c.19.28-.88,3.54-1.12,4.3L24.08,51.39l-2.58.09L19.26,41.25ZM53.67,65.13h.26v6.23h2.24V63h-2.5ZM17.21,71.36h2.37V62.64H17.21ZM37,64.78a3.15,3.15,0,0,1,1.91.66l1.24-2a5.57,5.57,0,0,0-3.22-1c-2.7,0-4.79,1.66-4.79,4.54s2.09,4.55,4.79,4.55a5.57,5.57,0,0,0,3.22-1l-1.24-2a3.15,3.15,0,0,1-1.91.66,2.22,2.22,0,1,1,0-4.43Zm-9.1,2.54h0l-4.11-4.68H21.94v8.72h2.37V66.67h0l4.11,4.68h1.84V62.64H27.92Zm16.35.57h2.8V65.84h-2.8v-1h3.19V62.64H41.9v8.72h5.74V69.19H44.27Zm-30.6-1.58-1.79-.92c-.36-.19-.46-.31-.46-.47s.16-.32.53-.32a4.14,4.14,0,0,1,2.13.7l1-2.1a6.56,6.56,0,0,0-3-.73c-2.19,0-3.27,1.08-3.27,2.64a2.64,2.64,0,0,0,1.54,2.47l1.91,1c.27.14.42.25.42.46s-.27.39-.74.39a4.71,4.71,0,0,1-2.73-1.07L8.18,70.56a7.4,7.4,0,0,0,3.69,1c2.23,0,3.42-1,3.42-2.76A2.53,2.53,0,0,0,13.67,66.31Z",

  logo: "M21.28,65.93,19.2,64.86c-.42-.22-.53-.36-.53-.55s.19-.38.62-.38a4.81,4.81,0,0,1,2.47.81L23,62.3a7.61,7.61,0,0,0-3.45-.85c-2.54,0-3.8,1.26-3.8,3.06a3.06,3.06,0,0,0,1.79,2.86l2.21,1.11c.32.16.49.29.49.53s-.32.45-.85.45a5.46,5.46,0,0,1-3.16-1.24L14.9,70.86A8.59,8.59,0,0,0,19.18,72c2.59,0,4-1.13,4-3.21A2.93,2.93,0,0,0,21.28,65.93ZM44.87,22,5.09,46.15,5,46.32h9.88L15,55.43l60.15.09v-9L85,46.4ZM27.43,51.22c-1.9.36-1.3-2.11-.43-2.75h.52l.52.43A2,2,0,0,1,27.43,51.22Zm.43-11.77L24.08,51.39l-2.58.09L19.26,41.25l2-1.29,1.46,7.39v.17h.09l3.35-10.66L29,35.15c.17.27-.91,3.54-1.14,4.29Zm3.7,9.71-.26-4.38,1.63-1.46.26-.09c.64,2.62-.75,4.12,1.37,5.5,2.29-.18,1.89-2.41,1.89-4.81l.09-13.23,2.32-1.55.09,5.07c0,4,.68,13.06-1,15.38-1.53,2-5.34,2.12-6.4-.44Zm8.68,2.06a1.27,1.27,0,0,1-1-2c.2-.42.39-.46.77-.69a1.43,1.43,0,0,1,1,.69,1.53,1.53,0,0,1-.78,2Zm11.94.09H50.11c-.6-1.6-1.79-8.89-3-9.19l-.17,9.11-2.15.09q0-12.8.09-25.61c3.45,1.72,8.12,4.07,6.87,9.88a7.32,7.32,0,0,1-2.15,4.3L52.18,51Zm9.37,0L60.18,45.9H56.64L55.1,51.22a5.15,5.15,0,0,1-2,.17L53,51.3l5.1-17.61c2.43,1.19,2,2.38,2.75,5.16L63.77,51.4Zm7.22-4.64-.17,4.64H66.44c0-6.63-1.57-9.86-3.35-14.61l2.58,1.55,2.06,5.59,1.55-3.27a3.67,3.67,0,0,1,1.8,1c-.27,1.9-1.77,3.43-2.32,5.09ZM42.92,65c0-1.75-1.14-3.32-3.82-3.32H34.78v10.1h2.75V68l2.6,3.76h3.43L40.75,68A3,3,0,0,0,42.92,65Zm-4.19,1.27h-1.2V64.09h1.2c.84,0,1.34.32,1.34,1.07s-.51,1.1-1.34,1.1ZM24.67,64.18H27.2v7.6H30v-7.6h2.53V61.67h-7.8ZM47,29.65v9.28h.09a5.93,5.93,0,0,0,1.72-7.65C48.41,30.5,48.06,29.79,47,29.65Zm21.25,32-3.9,10.13h3L68,69.89h3.45l.62,1.89h3L71.2,61.67Zm.43,6.05,1-3.16,1,3.16ZM58.53,39.36l-1.2,4.3h2.32l-1-4.3ZM49,61.67,45.07,71.78h3l.62-1.89h3.45l.62,1.89h3L51.92,61.67Zm.43,6.05,1-3.16,1,3.16Zm6.77-3.54h2.53v7.6h2.75v-7.6H64V61.67H56.2Z",

  emergency: "M72.26,35.38A15.43,15.43,0,0,0,56.8,20.29a15.84,15.84,0,0,0-3.75.46,19.33,19.33,0,0,0-35,14.49,8.82,8.82,0,0,0,3.32,17H33.46v-2.1h-12a6.8,6.8,0,0,1-6.82-6.76c0-5.65,5.95-6.77,5.95-6.77a21.6,21.6,0,0,1-.71-4.92A17.23,17.23,0,0,1,37.12,14.57a17.54,17.54,0,0,1,15,8.6,15.36,15.36,0,0,1,4.66-.8A13.32,13.32,0,0,1,70.16,35.61c0,.06,0,1.18,0,1.18S75.4,38,75.4,43.4a6.8,6.8,0,0,1-6.82,6.76H55.49v2.09h13.1a8.82,8.82,0,0,0,3.67-16.87ZM67,34.48a9.44,9.44,0,0,0-9.43-9.42v2.1a7.35,7.35,0,0,1,7.34,7.32ZM55.46,41.81H42L31,64.83h8.27L34.8,77.5,62.36,54.37H49.61ZM56.6,56.45,39.29,71l2.89-8.26H34.3L43.36,43.9h8.81L46.31,56.45Z",

  issue: "M71.83,23.32H59.45v-1a1,1,0,0,0-1-1V19.6l8.11,1.6a3.56,3.56,0,0,0,.63.06,3.93,3.93,0,0,0,3.65-4.13c0-2.52-2-4.51-4.28-4.07l-8.11,1.6V14a1,1,0,0,0-1-1H53.25a1,1,0,0,0-1,1v.63l-8.1-1.6c-2.27-.44-4.28,1.56-4.28,4.07a3.92,3.92,0,0,0,3.65,4.13,2.61,2.61,0,0,0,.63-.08l8.1-1.6v1.66a1,1,0,0,0-1,1v1H32.62A13.44,13.44,0,0,0,19.2,36.75V48.09h-1a1,1,0,0,0-1,1v4.13a1,1,0,0,0,1,1H34.68a1,1,0,0,0,1-1V49.12a1,1,0,0,0-1-1h-1V38.81a1,1,0,0,1,1-1h16.5v1a1,1,0,0,0,1,1h6.2a1,1,0,0,0,1-1v-1H71.83a1,1,0,0,0,1-1V24.35A1,1,0,0,0,71.83,23.32ZM58.42,16.77l8.5-1.68c1-.2,1.83.82,1.83,2s-.87,2.23-1.83,2l-8.5-1.68ZM33.65,52.23H19.2V50.17H33.65ZM51.19,35.71H34.68a3.1,3.1,0,0,0-3.1,3.1v9.27H21.26V36.75A11.36,11.36,0,0,1,32.62,25.4H51.19Zm1-18.21-8.49,1.67c-1,.19-1.83-.82-1.83-2a1.9,1.9,0,0,1,1.59-2.07h.24l8.49,1.67Zm2.07-2.43h2.07v6.19H54.29Zm3.1,22.7H53.25v-1s0,0,0-.06V24.36s0,0,0-.06v-1h4.13ZM70.8,35.71H59.45V25.4H70.8Zm-46.15,21c-.77.79-7.52,7.8-7.52,12.08a8.26,8.26,0,0,0,16.52,0c0-4.3-6.75-11.3-7.52-12.08A1.07,1.07,0,0,0,24.65,56.67Zm.73,18.27a6.21,6.21,0,0,1-6.2-6.2c0-2.6,4-7.43,6.2-9.85,2.23,2.42,6.2,7.26,6.2,9.85A6.21,6.21,0,0,1,25.38,74.93Z",

  service: "M49,35.77A24.81,24.81,0,0,0,25.22,60.52v1H74.77v-1A24.79,24.79,0,0,0,51,35.77V32.65h3.1V30.58H45.87v2.07H49ZM72.69,59.5H27.31a22.71,22.71,0,0,1,45.38,0ZM33.82,53.69a17.47,17.47,0,0,1,3.77-5.58,17.67,17.67,0,0,1,5.58-3.77l-.81-1.9a19.54,19.54,0,0,0-6.24,4.21,19.75,19.75,0,0,0-4.21,6.24Zm-1.25-19-4.12-4.64-1.54,1.37L31,36.08Zm45.29,35.1v-6.2H22.13v6.2H18v2.07H82V69.81Zm-2.05,0H24.2V65.68H75.81ZM36.18,28.24l-2.06-.12-.37,6.19,2.06.12Zm-5.7,9-6.19-.37-.11,2.05,6.17.37Z",

  lockin: "M48.95,37.51h2.12V35.4H48.95Zm-4.24,0h2.12V35.4H44.71Zm9.52,24.33H52.12V58.68a5.29,5.29,0,0,1,10.58,0v4.24h2.12V58.68a7.41,7.41,0,0,0-14.81,0v3.17H35.19V77.71h19ZM52.12,75.59H37.31V64H52.12Zm-6.35-7.41H43.65v4.24h2.12ZM74.33,80.88V48.09h7.91L50,17,37.31,29.24V20.59H28.85V37.4L17.75,48.09h7.91V80.88H17.21V83H82.79V80.88ZM31,22.7h4.24v8.57L31,35.36ZM23,46l27-26L77,46ZM72.22,80.88H27.78V48.09H72.22Zm-19-45.49v2.12h2.12V35.4Z",

  experience: "M67.76,53.19l-4.17,9L51,37.17v-5H70.52l-3.67-7.34,3.67-7.33H48.91V37.19L36.1,65.49,29.9,54.79,18,82.5H82ZM51,19.6H67.13l-2.62,5.25,2.62,5.25H51ZM50,39.85l4.3,8.56-1.5.42L50,46.53,47.29,48.8l-1.15-.4ZM21.15,80.39l9-20.95L35,67.84,29.36,80.39ZM45.28,50.33l2.44.87,2.33-1.92,2.29,1.89,2.93-.84,7.19,14.32L56.35,77.88l1.91.87,9.56-20.66L78.69,80.41h-47ZM24.79,40.57H35.29a5.25,5.25,0,0,0,5.25-5.25,5.16,5.16,0,0,0-2.2-4.25A5.24,5.24,0,0,0,29.94,26a6.14,6.14,0,0,0-.95-.08,6.26,6.26,0,0,0-6,4.53,5.24,5.24,0,0,0,1.83,10.15Zm-.72-8.3.67-.15.13-.68A4.19,4.19,0,0,1,29,28a3.75,3.75,0,0,1,1,.14l.58.14.42-.41a3.13,3.13,0,0,1,5.14,3.34l-.35.9.87.42a3.13,3.13,0,0,1-1.36,6H24.79a3.14,3.14,0,0,1-.72-6.21Z",

  contents: "M47.19,64.28H45.07v4.24h2.12ZM43.95,32.51h2.12V30.4H43.95ZM69.33,75.88V43.09h7.91L45,12,32.31,24.24V15.59H23.85V32.4L12.75,43.09h7.91V75.88H12.21V78H77.79V75.88ZM26,17.7h4.24v8.57L26,30.36ZM18,41l27-26L72,41ZM67.22,75.88H22.78V43.09H67.22ZM39.71,32.51h2.12V30.4H39.71ZM55.65,57.94H53.53V54.76a7.41,7.41,0,1,0-14.81,0v3.17h2.12V54.76a5.29,5.29,0,0,1,10.58,0v3.17H36.61V73.8h19ZM53.53,71.69H38.72V60H53.53ZM48.17,30.4v2.12h2.12V30.4Z",

  bylaw: "M60.7,30H41.32V31.9H60.7Zm0-8.7H41.32V23.2H60.7ZM25.81,69.65h1.94V67.71H25.81ZM78,31.11c-3.84-3.83-8.32-1.28-9.59,0L66.51,33V14.55H36l-16,16V75.45H66.5V52.12L77.95,40.69C79.23,39.41,81.83,35,78,31.11ZM35.44,17.86V30H23.31ZM64.58,73.51H21.94V31.9H37.38V16.49H64.56V34.9l-3.78,3.78h-35v1.93h33l-7.75,7.74H25.81v1.95H49.16L41.41,58H25.81V60H40l-.76,9.8L49.65,69,64.58,54.06ZM41.79,62,47,67.22l-5.68.44Zm7.42,4.68-6.85-6.84L69.05,33.17,75.9,40Zm28-28.1-6.71-6.7a4.9,4.9,0,0,1,6.09.61A4.72,4.72,0,0,1,77.2,38.56Zm-29.36,24,24-23.92-1.37-1.37-24,23.92Zm-14.28,7.1H35.5V67.71H33.56Zm-3.87,0h1.94V67.71H29.69Z",

  contractor: "M63.15,64.53l1.36,1.36,1.36-1.36-1.36-1.36ZM56.7,47.18l1.12-1.12a2.93,2.93,0,0,0-.06-4.15l3.84-3.84a11.53,11.53,0,0,0,10-3.23C74.74,31.75,76.13,27.4,74,21.6l-6,6L63.6,26.53l-1.09-4.36,6-6c-3.78-1.51-9.1-1.81-13.24,2.34a11.53,11.53,0,0,0-3.23,10L43,37.58,26.73,21.29,22,15l-7,7,6.29,4.72L37.55,43,17.12,63.46a6.76,6.76,0,0,0,0,9.55,6.85,6.85,0,0,0,9.55,0l15.2-15.2a2.91,2.91,0,0,0,4.15.06l1.12-1.12L63.43,73A6.75,6.75,0,0,0,73,63.47Zm-2.53-18a10.07,10.07,0,0,1,2.51-9.33,9.4,9.4,0,0,1,8.18-2.72l-4.48,4.48L62,28.12l6.55,1.63L73,25.29a9.57,9.57,0,0,1-2.72,8.18A9.87,9.87,0,0,1,61,36L56.4,40.55l-.67-.67a2.9,2.9,0,0,0-4.09,0L48.47,43l-4.1-4.1ZM17.91,21.82l3.89-3.88,2.92,3.9-2.91,2.9ZM23.27,26,26,23.29,47.11,44.4l-2.73,2.73Zm2,45.62a4.82,4.82,0,0,1-6.82-6.82L38.92,44.39l4.1,4.1-3.17,3.17a2.88,2.88,0,0,0,0,4.09l.67.67ZM45.79,55.37,44.67,56.5a1,1,0,0,1-1.36,0L41.21,54.4a1,1,0,0,1,0-1.36L53,41.25a1,1,0,0,1,1.36,0l2.09,2.09a1,1,0,0,1,0,1.36ZM71.62,71.64a4.82,4.82,0,0,1-6.81,0L48.52,55.36l6.82-6.82L71.62,64.82A4.83,4.83,0,0,1,71.62,71.64ZM57.68,59.07,59,60.43l1.36-1.36L59,57.71Zm2.73,2.73,1.36,1.36,1.36-1.36-1.36-1.36Zm-41,7.57,1.36,1.36,3.85-3.85-1.36-1.36Z",

  voting: "M59.44,35.88H44.5v2H59.44Zm0-4.91H44.5v2H59.44Zm.91-20.47H29.65a5.8,5.8,0,0,0-5.79,5.79V73.71a5.8,5.8,0,0,0,5.79,5.79h30.7a5.8,5.8,0,0,0,5.79-5.79V16.29A5.8,5.8,0,0,0,60.35,10.5Zm3.79,63.21a3.79,3.79,0,0,1-3.79,3.79H29.65a3.79,3.79,0,0,1-3.79-3.79V65.64H64.14Zm0-10.07H25.86V21.11H64.14Zm0-44.53H25.86V16.29a3.79,3.79,0,0,1,3.79-3.79h30.7a3.79,3.79,0,0,1,3.79,3.79ZM45,76a4.47,4.47,0,1,0-4.47-4.47A4.47,4.47,0,0,0,45,76Zm0-6.93a2.47,2.47,0,1,1-2.47,2.47A2.47,2.47,0,0,1,45,69.1Zm14.44-22H44.5v2H59.44ZM38.69,49.46l-1.07-1.07-2.48,2.48-1-1L33.11,51l2,2ZM42,44.21H29.63v12.4H42Zm-2,10.4h-8.4v-8.4H40ZM42,28H29.63v12.4H42Zm-2,10.4h-8.4V30H40ZM59.44,52.05H44.5v2H59.44ZM38.69,33.28l-1.07-1.07-2.48,2.48-1-1-1.07,1.07,2,2ZM41,16.93H49v-2H41Z",

  sun: "M23.44,29.2l-3.86-2.58-1.29,1.93,3.86,2.58Zm12.42-9.31L32.3,11.3l-2.15.89,3.56,8.57ZM46.16,9H43.84v9.28h2.32Zm-5.23,9.57L40,14l-2.28.45L38.65,19Zm-14,6.72-6.56-6.56-1.64,1.64,6.56,6.56ZM52.26,14.47,50,14l-.91,4.56,2.28.45ZM31.12,22.15l-2.58-3.87-1.93,1.29,2.58,3.87ZM60.8,23.44l2.58-3.87-1.93-1.29-2.58,3.87Zm14.73,14.3L71,38.65l.45,2.28L76,40Zm0,14.51L76,50l-4.56-.91L71,51.35Zm-5.41-16.4L78.7,32.3l-.89-2.15L69.24,33.7Zm-3.55-6.66,1.29,1.93,3.87-2.58-1.29-1.93ZM45,22.89A22.11,22.11,0,1,0,67.11,45,22.14,22.14,0,0,0,45,22.89Zm0,41.9A19.79,19.79,0,1,1,64.79,45,19.8,19.8,0,0,1,45,64.79Zm14.85-52.6L57.7,11.3l-3.56,8.59,2.15.88ZM20.76,33.7l-8.57-3.56L11.3,32.3l8.59,3.56ZM64.7,26.93l6.56-6.56-1.64-1.64-6.56,6.56ZM14.47,37.74,14,40l4.56.91L19,38.65Zm44.4,30.11,2.58,3.87,1.93-1.29-2.58-3.87Zm-4.72,2.27L57.7,78.7l2.15-.89L56.3,69.23Zm8.91-5.41,6.56,6.56,1.64-1.64L64.7,63.07Zm-14,6.71L50,76l2.28-.45L51.35,71ZM71.72,43.84v2.32H81V43.84ZM43.84,81h2.32V71.72H43.84Zm25.4-24.7,8.57,3.56.89-2.15-8.59-3.56ZM14,50l.45,2.28L19,51.35l-.45-2.28ZM66.56,60.8l3.86,2.58,1.29-1.93-3.86-2.58ZM19.88,54.15l-8.59,3.56.89,2.15,8.59-3.56Zm-1.6-10.31H9v2.32h9.28ZM37.74,75.53,40,76l.91-4.56L38.65,71ZM23.44,60.8l-1.29-1.93-3.87,2.58,1.29,1.93Zm6.71,17,2.15.89,3.55-8.58-2.15-.89ZM25.28,63.07l-6.56,6.56,1.64,1.64,6.56-6.56Zm3.91,3.49-2.58,3.87,1.93,1.29,2.58-3.87Z",

  database: "M71.19,33c0-.18,0-.36,0-.55A12.52,12.52,0,0,0,54.15,20.68,16.76,16.76,0,0,0,23,29.27a14.75,14.75,0,0,0,.09,1.64,14.68,14.68,0,0,0,4.1,28.77h9.43V77.5h2.1V74.35H51.29V77.5h2.1V59.68h9.43A14.67,14.67,0,0,0,71.19,33ZM51.3,72.25H38.72V68.06H51.3Zm0-6.28H38.72v-4.2H51.3ZM38.71,59.68v-4.2H51.29v4.2Zm0-6.3v-4.2H51.29v4.2Zm24.12,4.2H53.4V44H51.3V47.1H38.72V44H36.63V57.58H27.2A12.58,12.58,0,0,1,23.43,33a17.19,17.19,0,0,0,1.51,4.11,1.08,1.08,0,0,0,.94.56,1,1,0,0,0,.48-.12,1,1,0,0,0,.44-1.42,14.68,14.68,0,1,1,27.37-9.8,1.05,1.05,0,1,0,2.06-.42,17.62,17.62,0,0,0-1.08-3.34,10.48,10.48,0,0,1,14,9.87,10.35,10.35,0,0,1-.72,3.81A1,1,0,0,0,69,37.6a.91.91,0,0,0,.39.08,1,1,0,0,0,1-.66,13,13,0,0,0,.51-1.68,12.57,12.57,0,0,1-8.06,22.24Z",

  online: "M55.81,27.27a3.94,3.94,0,1,0-3.93-3.94A3.95,3.95,0,0,0,55.81,27.27Zm0-5.91a2,2,0,1,1-2,2A2,2,0,0,1,55.81,21.36ZM40.08,59.72h2v-2h-2Zm7.87,0h2v-2H48Zm27.53,3.93V22.35H64.67V22A1.64,1.64,0,0,0,63,20.38h-.08l.06-.06A1.65,1.65,0,0,0,63,18l-1.86-1.86a1.66,1.66,0,0,0-2.32,0l-.06.06v-.07a1.64,1.64,0,0,0-1.64-1.64H54.49a1.64,1.64,0,0,0-1.64,1.64v.08l-.06-.06a1.66,1.66,0,0,0-2.32,0L48.61,18a1.65,1.65,0,0,0-.48,1.17,1.63,1.63,0,0,0,.48,1.16l.06.06H48.6A1.64,1.64,0,0,0,47,22v.32H14.52V63.65H33.2v5.91H25.33v2H64.64v-2H56.78V63.65ZM48.94,22.35h1.34l.22-.69a4.89,4.89,0,0,1,.37-.9l.33-.63-.94-1,1.39-1.39,1,1,.63-.34a4.28,4.28,0,0,1,.9-.37l.69-.22V16.46h2V17.8l.68.22a4.89,4.89,0,0,1,.9.37l.64.33,1-1,1.39,1.4-1,1,.33.63a5.83,5.83,0,0,1,.39.9l.21.69h1.35v2H61.34l-.21.69a5,5,0,0,1-.39.9l-.33.63,1,1L60,28.88l-1-1-.64.33a4.28,4.28,0,0,1-.9.37l-.68.22V30.2h-2V28.84l-.69-.22a4.89,4.89,0,0,1-.9-.37l-.63-.33-1,1-1.39-1.4,1-1-.34-.63a4.28,4.28,0,0,1-.37-.9l-.22-.69H48.94Zm-32.45,2H47v.32a1.64,1.64,0,0,0,1.64,1.64h.09l-.06.06a1.64,1.64,0,0,0,0,2.32l1.86,1.86a1.63,1.63,0,0,0,2.31,0l.06-.06v.08a1.65,1.65,0,0,0,1.65,1.65h2.62a1.65,1.65,0,0,0,1.65-1.65v-.08l.06.06a1.63,1.63,0,0,0,2.31,0L63,28.66a1.64,1.64,0,0,0,0-2.32L63,26.28H63a1.64,1.64,0,0,0,1.64-1.64v-.32h8.84V53.81h-57ZM54.84,69.54H35.17v-5.9H54.84ZM16.49,61.68v-5.9h57v5.9ZM48.94,35.13h-.75c0-.13-.11-.28-.17-.41l.53-.53a2,2,0,0,0,0-2.78l-2.78-2.79a2,2,0,0,0-2.79,0l-.52.53L42.05,29v-.74a2,2,0,0,0-2-2H36.14a2,2,0,0,0-2,2V29l-.41.17-.53-.53a2,2,0,0,0-2.78,0l-2.79,2.79a2,2,0,0,0,0,2.78l.53.53c-.06.13-.12.28-.17.41h-.74a2,2,0,0,0-2,2V41a2,2,0,0,0,2,2H28c.05.13.11.28.17.41l-.53.53a2,2,0,0,0,0,2.78l2.79,2.78a2,2,0,0,0,2.78,0l.53-.52a3.47,3.47,0,0,0,.41.16v.75a2,2,0,0,0,2,2h3.92a2,2,0,0,0,2-2v-.75a4.3,4.3,0,0,0,.41-.16l.52.52a2,2,0,0,0,2.79,0l2.78-2.78a2,2,0,0,0,0-2.78L48,43.41c.06-.13.12-.28.17-.41h.75a2,2,0,0,0,2-2V37.1A2,2,0,0,0,48.94,35.13Zm0,5.9H46.78l-.22.69a7.28,7.28,0,0,1-.6,1.42l-.34.64,1.53,1.52-2.79,2.79-1.52-1.51-.64.33a8.61,8.61,0,0,1-1.42.6l-.69.22v2.16H36.16V47.73l-.69-.22a7.63,7.63,0,0,1-1.43-.6l-.63-.33L31.88,48.1,29.1,45.32l1.52-1.53-.33-.63a8.23,8.23,0,0,1-.6-1.43L29.47,41H27.31V37.1h2.15l.22-.69a7,7,0,0,1,.6-1.43l.33-.63-1.52-1.53L31.87,30l1.53,1.52.63-.33a8.71,8.71,0,0,1,1.43-.6l.68-.22V28.25h3.94v2.16l.68.22a8.36,8.36,0,0,1,1.43.6l.64.33L44.36,30l2.79,2.78-1.53,1.53L46,35a8.23,8.23,0,0,1,.6,1.43l.22.69h2.16ZM38.11,32.18A6.89,6.89,0,1,0,45,39.06,6.89,6.89,0,0,0,38.11,32.18Zm0,11.82A4.92,4.92,0,1,1,43,39.08,4.93,4.93,0,0,1,38.11,44ZM44,59.72h2v-2H44Z",

  valuations: "M74.19,65.77l-13-13L59.81,54.2,57.58,52a24,24,0,1,0-5.65,5.67l2.23,2.24-1.41,1.41,13,13a6.08,6.08,0,0,0,8.48,0C77.61,70.84,75.32,66.91,74.19,65.77ZM38,60.1a22,22,0,1,1,22-22A22.05,22.05,0,0,1,38,60.1Zm15.49-3.7a23.64,23.64,0,0,0,2.82-2.84l2,2-2.82,2.84Zm2.06,4.88,5.66-5.65L72.07,66.48l-5.65,5.65Zm17.2,11.57a4.1,4.1,0,0,1-4.84.6L73.38,68A3.76,3.76,0,0,1,72.78,72.85ZM38,20A18,18,0,1,0,56,38.06,18.05,18.05,0,0,0,38,20ZM38,54.1a16,16,0,1,1,16-16A16,16,0,0,1,38,54.1ZM47,30a3,3,0,0,0-3,3,3.21,3.21,0,0,0,.29,1.29L40,38.6l-5-5-5.71,5.72A2.9,2.9,0,0,0,28,39a3,3,0,1,0,2.7,1.72l4.3-4.3,5,5,5.68-5.68a2.87,2.87,0,0,0,1.28.3,3,3,0,0,0,0-6ZM28,43a1,1,0,1,1,1-1A1,1,0,0,1,28,43Zm19-9a1,1,0,1,1,1-1A1,1,0,0,1,47,34Z",

  strata: "M25.08,64.82H18.79v6.29h6.29ZM23,69H20.89v-2.1H23Zm2.1-35.65H18.79v6.29h6.29ZM23,37.56H20.89V35.47H23Zm2.1-14.67H18.79v6.29h6.29ZM23,27.08H20.89V25H23Zm2.1,16.77H18.79v6.3h6.29ZM23,48.05H20.89V46H23Zm2.1,6.29H18.79v6.29h6.29ZM23,58.53H20.89V56.44H23Zm31.46-7.34H48.15v6.29h6.29Zm-2.1,4.2h-2.1v-2.1h2.1Zm2.1-25.16H48.15v6.29h6.29Zm-2.1,4.19h-2.1v-2.1h2.1ZM71.21,54.34H64.92v6.29h6.29Zm-2.1,4.19H67V56.44h2.09ZM58.63,17.65v6.29H31.37V17.65H12.5v58.7h65V17.65ZM29.27,74.26H14.6V19.74H29.27Zm21,0H39.76V65.35L45,61.89l5.24,3.46Zm8.39,0H52.34v-10L45,59.37,37.66,64.3v10H31.37V26H58.63Zm16.77,0H60.73V19.74H75.4ZM71.21,33.37H64.92v6.29h6.29Zm-2.1,4.19H67V35.47h2.09Zm2.1,27.26H64.92v6.29h6.29ZM69.11,69H67v-2.1h2.09Zm2.1-25.17H64.92v6.3h6.29Zm-2.1,4.2H67V46h2.09ZM41.85,30.23H35.56v6.29h6.29Zm-2.09,4.19h-2.1v-2.1h2.1Zm14.68,6.29H48.15V47h6.29Zm-2.1,4.19h-2.1V42.81h2.1Zm18.87-22H64.92v6.29h6.29Zm-2.1,4.19H67V25h2.09ZM41.85,51.19H35.56v6.29h6.29Zm-2.09,4.2h-2.1v-2.1h2.1Zm2.09-14.68H35.56V47h6.29ZM39.76,44.9h-2.1V42.81h2.1Z",
};

export default icons;
