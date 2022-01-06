const randomMessage = () => {
    const phrase = [];
    const partOne = Math.floor(Math.random() * 3);
    switch (partOne) {
        case 0:
            phrase.push('part one a');
            break
        case 1:
            phrase.push('part one b');
            break
        case 2:
            phrase.push('part one c');
            break
    };
    
    const partTwo = Math.floor(Math.random() * 3);
    switch (partTwo) {
        case 0:
            phrase.push('part two a');
            break
        case 1:
            phrase.push('part two b');
            break
        case 2:
            phrase.push('part two c');
            break
    };

    const partThree = Math.floor(Math.random() * 3);
    switch (partThree) {
        case 0:
            phrase.push('part three a');
            break
        case 1:
            phrase.push('part three b');
            break
        case 2:
            phrase.push('part three c');
            break
    };
    console.log(phrase.join());
}

randomMessage()