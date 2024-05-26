import sql from 'better-sqlite3';

const db = sql('meals.db');

async function getMeals(props) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM  meals').all();
}

export default getMeals;