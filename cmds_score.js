const {User, Quiz, Score} = require("./model.js").models;

exports.store = async (rl, userName, score ) => {
    // Almacenar la puntuación asociada a un usuario en la tabla Scores de la base de datos.
    // En caso de que el usuario introducido no exista,
    //   se creará un nuevo usuario con el nombre introducido y edad 0.

    // Si el tipo de userName no es valido, cancelar la consulta
    if (typeof userName !== 'string')
        throw new Error("User name type invalid!");

    const user = await User.findOne({ where: { name: userName } });

    if (!user) { // si el usuario no se encuentra, crearlo
        user = await User.create( 
            { userName, age: 0 } // nombre introducido y edad 0.
        );
        const storeScore = await Score.create( // crear nuevo score
            { wins: score, userId:user.id }
        )
    } else {
        // almacenar la puntuación del usuario existente
        const n = await Score.update(
            { wins: score }, 
            { where: { userId: user.id } }
        );
        if (n[0]===0) throw new Error(`  Score is not in DB`);
    }

    
    
}