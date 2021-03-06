const createPost = (state = [], action) => {
    const { type, id, title, image, description } = action
    switch (type) {
        case 'CREATE_POST':
            return [...state, {id, title, image, description}]
        case 'DELETE_POST':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_POST':
            return state.map(createPost => 
                (createPost.id === id) ? { id, title, image, description } : createPost
            )
        default:
            return state
    }
}

export default createPost