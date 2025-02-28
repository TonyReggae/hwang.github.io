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

const zhOSNote = defineNoteConfig({
  dir: 'os',
  link: '/os',
  sidebar: 'auto'
})


export const zhNotes = defineNotesConfig({
  dir: '/notes/zh/',
  link: '/',
  notes: [
    zhNIONote, zhOSNote
  ],
})



/* =================== locale: en-US ======================= */

// const enDemoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: ['', 'foo', 'bar'],
// })

export const enNotes = defineNotesConfig({
  dir: '/notes',
  link: '/',
  notes: [
    // enDemoNote,
    zhNIONote, zhOSNote
  ],
})

