const validation = (data) => {
    let error = {}
    //validaciones para name
    if (data.name.trim().length === 0) {
        error.name = 'Name cannot be an empty field';
    } else if (data.name.length > 20) {
        error.name = 'The name cannot be more than 20 characters';
    }

    //validaciones para image
    if (data.image.trim().length === 0) {
        error.image = 'Image cannot be an empty field'
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(data.image)) {
        error.image = 'The image must be a url'
    }
    //validaciones para hp
    if (data.hp.length === 0) {
        error.hp = 'hp cannot be an empty field'
    } else if (!/^\d+$/.test(data.hp)) {
        error.hp = 'You must enter a number'
    }
    //validaciones para attack
    if (data.attack.trim().length === 0) {
        error.attack = 'attack cannot be an empty field'
    } else if (!/^\d+$/.test(data.attack)){
        error.attack = 'You must enter a number'
    }
    //validaciones para defense
    if (data.defense.trim().length === 0) {
        error.defense = 'defense cannot be an empty field'
    } else if (!/^\d+$/.test(data.defense)) {
        error.defense = 'You must enter a number'
    }
    //validaciones para speed
    if (!/^\d+$/.test(data.speed)) {
        error.speed = 'You must enter a number'
    }
    //validaciones para height
    if (!/^\d+$/.test(data.height)) {
        error.height = 'You must enter a number'
    }
    //validaciones para weight
    if (!/^\d+$/.test(data.weight)) {
        error.weight = 'You must enter a number'
    }
    // Validación para los types
    if (data.types.length === 0) {
        error.types = 'Please select at least one type';
    }
    return error
}

export default validation