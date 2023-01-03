class Student{
    id
    name
    age
    image
    idUser

    constructor(id, name, age, image, idUser) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.image = image;
        this.idUser = idUser;
    }
    setId(id){
        this.id=id
    }
    getId(){
        return this.id
    }
}
get