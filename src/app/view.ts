export class View{
    
    degree: string;
    marks: number;
    stream: string;
    college: string;

    constructor( degree: string, marks: number, stream: string, college: string){
       
        this.degree = degree;
        this.marks =marks;
        this.stream = stream;
        this.college = college;
    }
}