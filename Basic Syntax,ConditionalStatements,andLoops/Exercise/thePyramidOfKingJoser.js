function kingJoser(base, increment) {
    base = Number(base);
    increment = Number(increment)
    let stone = 0;
    let marble = 0;
    let gold = 0;
    let lapisLazuli = 0;
    let isFifth = 0;
    let heighOverall = 0;

    for (i = base; i >= 0; i -= 2) {
        isFifth++;
        heighOverall += increment;
        let currentLayer = Number(i);
        
        let layerPerimeter = (Math.pow(currentLayer, 2));
        

        if (i < 3) {
            gold += layerPerimeter;
            break;
        }
        if (isFifth == 5) {
            let lapisLazuliForLayer = 0;
            lapisLazuliForLayer += (currentLayer - 1) * 4;
            stone += layerPerimeter - lapisLazuliForLayer;
            isFifth = 0;
            lapisLazuli += lapisLazuliForLayer;
            continue;
        }
        marble += (currentLayer - 1) * 4;
        stone += layerPerimeter - ((currentLayer - 1) * 4);


    }
    let stoneRequired = stone * increment;
    
    let marbleRequired = marble * increment;
    
    let goldRequired = gold * increment;
    
    let lapisRequired = lapisLazuli * increment;
    

    console.log(`Stone required: ${Math.ceil(stoneRequired)}`);
    console.log(`Marble required: ${(marbleRequired)}`);
    console.log(`Lapis Lazuli required: ${(lapisRequired)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(heighOverall)}`);
}
kingJoser(1, 1);