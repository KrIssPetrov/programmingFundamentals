function minerTask(input) {

    let resourceList = {};

    for (i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let qty = Number(input[i + 1]);

        if(resource in resourceList){
            resourceList[resource] += qty;
        } else{
            resourceList[resource] = qty;
        }
    }

    let entries = Object.entries(resourceList);

    for (let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);
    }
}
//minerTask(['Gold', '155', 'Silver', '10', 'Copper', '17'])
minerTask([ 'gold', '155', 'silver', '10', 'copper', '17', 'gold', '15' ])