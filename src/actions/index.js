export const setIntroDescription = text => {
    return {
        type: 'SET_INTRO_DESCRIPTION',
        text
    }
}

export const setIntroImage = text => ({
    type: 'SET_INTRO_IMAGE',
    text
})

let nextId = 1

export const createPost = (title, image, description) => ({
    // Only title doesnt become undef
    type: 'CREATE_POST',
    id: nextId++,
    title,
    image,
    description
})