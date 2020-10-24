const setIntroDescription = (state = '', action) => {
    const { type, text } = action
    switch (type) {
        case 'SET_INTRO_DESCRIPTION':
            return text
        default:
            return state
    }
}

export default setIntroDescription
