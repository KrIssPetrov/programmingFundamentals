function cats(arr){

    let cats = [];

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says meow`);
        }

    }

    for(i = 0; i < arr.length; i++){
        let catData = arr[i].split(' ');
        [catName, age] = [catData[0], catData[1]];

        let cat = new Cat(catName, age)
       // cats.push(catName, age);
       cats.push(cat);
    }

    for(let cat of cats){
        cat.meow()
    }
//console.log(cats);

}
cats(['Mellow 2', 'Tom 5', 'Molly 10']);