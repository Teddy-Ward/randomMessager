const randomMessage = () => {
 
    const partOne = Math.floor(Math.random() * 3);
    switch (partOne) {
        case 0:
            console.log('part one a');
            break
        case 1:
            console.log('part one b');
            break
        case 2:
            console.log('part one c');
            break
    };
    
    const partTwo = Math.floor(Math.random() * 3);
    switch (partTwo) {
        case 0:
            console.log('part two a');
            break
        case 1:
            console.log('part two b');
            break
        case 2:
            console.log('part two c');
            break
    };

    const partThree = Math.floor(Math.random() * 3);
    switch (partThree) {
        case 0:
            console.log('part three a');
            break
        case 1:
            console.log('part three b');
            break
        case 2:
            console.log('part three c');
            break
    };
}

randomMessage()