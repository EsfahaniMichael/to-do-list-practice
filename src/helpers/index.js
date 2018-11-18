export function randomString(length){
    const values = 'abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let randomString = '';

    for (let t = 0; t < length; t++){
        const randIndex = Math.floor(Math.random() * values.length);

        randomString += values[randIndex];
    }

    return randomString;
}