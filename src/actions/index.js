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
    type: 'CREATE_POST',
    id: nextId++,
    title,
    image,
    description
})

export const deletePost = (id) => ({
    type: 'DELETE_POST',
    id,
})

export const editPost = (id, title, image, description) => ({
    type: 'EDIT_POST',
    id,
    title,
    image,
    description
})