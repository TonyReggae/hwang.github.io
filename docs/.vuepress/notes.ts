import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

// const zhDemoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: ['', 'foo', 'bar'],
// })

const zhNIONote = defineNoteConfig({
  dir: 'nio',
  link: '/nio',
  sidebar: 'auto'
})


export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    zhNIONote
  ],
})



/* =================== locale: en-US ======================= */

// const enDemoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: ['', 'foo', 'bar'],
// })

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [
    // enDemoNote,
    zhNIONote
  ],
})

