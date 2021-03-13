const {User, Quiz, Score} = require("./model.js").models;

exports.store = async (rl, userName, score ) => {
    // Almacenar la puntuación asociada a un usuario en la tabla Scores de la base de datos.
    // En caso de que el usuario introducido no exista,
    //   se creará un nuevo usuario con el nombre introducido y edad 0.

    // console.log(`Score store => userName: ${userName}, score: ${score}`)

    // Si el tipo de userName no es valido, cancelar la consulta
    if (typeof userName !== 'string') {
        console.log('type of userName invalid');
        throw new Error("User name type invalid!");
        }

    let user = await User.findOne({ where: { name: userName } });

    if (!user) { // si el usuario no se encuentra, crearlo
        console.log('si el usuario no se encuentra, crearlo');
        user = await User.create( 
            { name: userName, age: 0 } // nombre introducido y edad 0.
        );
        console.log(`Usuario creado: ${user.name}, edad ${user.age}`);
        // const storeScore = await Score.create( // crear nuevo score
        //     { wins: score, userId: user.id }
        // );
        // console.log(`Score creado: score ${storeScore.wins} userId ${storeScore.userId}`);
    } 
    // else {
    //     // almacenar la puntuación del usuario existente
    //     console.log('almacenar la puntuación del usuario existente');
    //     const n = await Score.update(
    //         { wins: score }, 
    //         { where: { userId: user.id } }
    //     );
    //     if (n[0]===0) throw new Error(`  Score is not in DB`);
    //     console.log(`Score actualizado: score ${n.wins}, userId ${n.userId}`);
    // }
    const storeScore = await Score.create( // crear nuevo score
        { wins: score, userId: user.id }
    );
    console.log(`Score creado: score ${storeScore.wins} userId ${storeScore.userId}`);
    
    
}