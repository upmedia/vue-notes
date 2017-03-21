import * as mutations from './mutation-types'

export const saveNote = ({commit, dispatch, state}) => {
  commit(mutations.TOUCH_LAST_SAVED)
  console.log(state.note.id)
  if (state.note.id === null) {
    commit(mutations.SET_CURRENT_NOTE_ID, Date.now())

    commit(mutations.PREPEND_TO_NOTES, state.note)
  }

  dispatch('storeNotes')
}

export const storeNotes = ({ state }) => {
  localStorage.setItem('notes', JSON.stringify(state.notes))
}

export const openNote = ({ commit }, note) => {
  commit(mutations.SET_CURRENT_NOTE, note)
}

export const startSaveTimeout = ({commit, dispatch, state}) => {
  console.info(state.saveTimeout, 'test')
  if (state.saveTimeout !== null) {
    return
  }
  console.info('test 2')
  commit(mutations.SET_SAVE_TIMEOUT, {
    callback () {
      console.log('Test 3')
      dispatch('saveNote')
      dispatch('stopSaveTimeout')
    },
    delay: 1000
  })
}

export const stopSaveTimeout = ({commit, dispatch, state}) => {
  commit(mutations.CLEAR_SAVE_TIMEOUT)
}
