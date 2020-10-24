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

let nextId = 0

export const createPost = (title, image, description) => ({
    type: 'CREATE_POST',
    id: nextId++,
    title,
    image,
    description
})