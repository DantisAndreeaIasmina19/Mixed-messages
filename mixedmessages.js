function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}


const wardrobe = {
    top: ['t-shirt', 'sweaters', 'blouses', 'tank tops', 'hoodies'],
    pants: ['jeans', 'leggings', 'sweatpants', 'dress pants', 'chinos'],
    shoes: ['sneakers', 'boots', 'sandals', 'high heels', 'flats', 'mules'],
    accessories: ['jewlery', 'belt','hat', 'sunglasses', 'watches', 'ties']
}

let outfit = [];
for (let piece in wardrobe) {
    let optionIdx = generateRandomNumber(wardrobe[piece].length)

    switch(piece) {
        case 'top' :
            outfit.push(`The type of top "${wardrobe[piece][optionIdx]}".`)
        break
        case 'pants' :
            outfit.push(`The type of pants "${wardrobe[piece][optionIdx]}".`)
        break
        case 'shoes' :
            outfit.push(`The type of shoes "${wardrobe[piece][optionIdx]}".`)
        break
        case 'accessories' :
            outfit.push(`The type of accessories "${wardrobe[piece][optionIdx]}".`)
        break
        default:
            outfit.push('There is not enough info.')
        }
    
}

function formatoutfit(outfits) {
    const formatted = outfit.join('\n')
   console.log('Outfit generator');
    console.log(formatted)
}
formatoutfit(outfit)