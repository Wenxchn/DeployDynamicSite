const createPost = (state = [], action) => {
    const { type, id, title, image, description } = action
    switch (type) {
        case 'CREATE_POST':
            return [...state, {id, title, image, description}]
        default:
            return state
    }
}

export default createPost