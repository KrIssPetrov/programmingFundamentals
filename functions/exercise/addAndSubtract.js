function addAndSubtract(num1, num2, num3){

    
    
    //let secondResult = subtract()
    console.log(subtract());
    
    
    
    
    function add(){
        
        result = num1 + num2;
        return result;
    }
    function subtract(){
        let firstResult = add();
        secondResult = firstResult - num3;
        return secondResult;
    }
}
addAndSubtract(23,6,10)