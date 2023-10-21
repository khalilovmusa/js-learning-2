class Insan{  //!==>Class

    /*
    1-Ozellikler
    2-yapici metot
    3-Function
    */
   constructor(name,surname,age,salary){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.salary = salary;
   }

   bilgileriGoster(){
    console.log(`Name :${this.name}
    Surname ${this.surname}
    Age ${this.age}
    Salary ${this.salary}`);
   }

}
//!==>nesne olusturmak
const insan1 = new Insan("Musa");
const insan2 = new Insan("Musa", "Khalilov", 18,1000000);
insan2.bilgileriGoster();
insan1.bilgileriGoster();