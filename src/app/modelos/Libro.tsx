export class Libro{
    public codLibro: number;
    public tituloLibro: string;
    public autorLibro: string;
    public codGeneroLibro: string;
    public imagenLibro: string;
    public imagenLibroBase64: string;

    constructor(codl: number, titu: string, auto: string, gene: string, ima: string, base: string){
        this.codLibro = codl;
        this.tituloLibro = titu;
        this.autorLibro = auto;
        this.codGeneroLibro = gene;
        this.imagenLibro = ima;
        this.imagenLibroBase64 = base;     
    }
}