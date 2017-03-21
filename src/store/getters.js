import moment from 'moment'

export const note = state => {
  return state.note
}

export const notes = state => {
  return state.notes.sort((a, b) => {
    return a['lastSaved'] < b['lastSaved']
  })
}

export const lastSaved = state => {
  if (!state.note.lastSaved) {
    return 'Aldrig'
  }

  return moment(state.note.lastSaved).locale('da').calendar()
}

export const wordCount = state => {
  if (!state.note.body || state.note.body.trim() === '') {
    return 0
  }

  return state.note.body.trim().split(' ').length
}
