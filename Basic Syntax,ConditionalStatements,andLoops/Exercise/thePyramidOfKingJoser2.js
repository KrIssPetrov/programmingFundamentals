//let totalBlocks = (base * base * heighOverall);
//let innerBlocks = ((base - 2) * (base - 2)) * heighOverall;
//let outerBlocks = totalBlocks - innerBlocks;
function kingJoser(base, increment) {
    base = Number(base);
    increment = Number(increment)
    let stone = 0;
    let marble = 0;
    let gold = 0;
    let lapisLazuli = 0;
    let layer = 0;
    let heighOverall = 0;

    for (i = base; i > 0; i -= 2) {
        layer++
        heighOverall += increment;
        let totalBlocks = (i * i * increment);
        let innerBlocks = ((i - 2) * (i - 2)) * increment;
        let outerBlocks = totalBlocks - innerBlocks;
        

        if (i > 2) {
            if (layer % 5 == 0) {
                lapisLazuli += outerBlocks;
                stone += innerBlocks;
                continue
             }
            marble += outerBlocks;
            stone += innerBlocks;
        } else {
            gold += totalBlocks;
        }
        
        


    }
    
    

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${(marble)}`);
    console.log(`Lapis Lazuli required: ${(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(heighOverall)}`);
}
kingJoser(11, 1);