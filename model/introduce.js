class Student{
    id;
    name;
    age;
    image
    idUser

    constructor(id, name, age,image,idUser) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.image = image
        this.idUser = idUser
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

