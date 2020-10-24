const setIntroImage = (state = 'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg', action) => {
    const { type, text } = action
    switch (type) {
        case 'SET_INTRO_IMAGE':
            return text
        default:
            return state
    }
}

export default setIntroImage