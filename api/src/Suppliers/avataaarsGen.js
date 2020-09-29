// retorna un string con la src del avataarGen

const randomFloorValue = (arr) => {
    if(!arr) return false;
    return arr[Math.floor(Math.random() * arr.length)]
}

module.exports = avataarsGen = () => {
    const arrAvatarStyle = ['Circle', 'Transparent']
    const arrTop = ['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01', 'ShortHairDreads02','ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart']
    const arrAccessories = ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers']
    const arrHatColor = ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White']
    const arrFacialHair = ['Blank', 'BeardMedium', 'BeardLight', 'BeardMagestic', 'MoustacheFancy', 'MoustacheMagnum']
    const arrFacialHairColor = ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'Platinum', 'Red']
    const arrClothes = ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck']
    const arrEye = ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky']
    const arrEyeBow = ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural']
    const arrMouth = ['Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit']
    const arrSkin = ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black']

    let path = 'https://avataaars.io/?'
    path += `avatarStyle=${arrAvatarStyle[0]}&`
    path += `topType=${randomFloorValue(arrTop)}&`
    path += `accessoriesType=${randomFloorValue(arrAccessories)}&`
    path += `hatColor=${randomFloorValue(arrHatColor)}&`
    path += `facialHairType=${randomFloorValue(arrFacialHair)}&`
    path += `facialHairColor=${randomFloorValue(arrFacialHairColor)}&`
    path += `clotheType=${randomFloorValue(arrClothes)}&`
    path += `eyeType=${randomFloorValue(arrEye)}&`
    path += `eyebrowType=${randomFloorValue(arrEyeBow)}&`
    path += `mouthType=${randomFloorValue(arrMouth)}&`
    path += `skinColor=${randomFloorValue(arrSkin)}`
    return path   
}