class Student{
    id;
    name;
    age;

    constructor(id, name, age,image) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.image = image
    }
    getId(){
        return this.id
    }
    setId(id){
        this.id = id ;
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this.age
    }
    setAge(age){
        this.age = age;
    }
}

