//
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

        let mensagem = `O ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}


let heroi1 = new Heroi("Lanternar verde", 150, "mago");
let heroi2 = new Heroi("Capitão Amarica", 35, "guerreiro");
let heroi3 = new Heroi("Batiman", 40, "monge");
let heroi4 = new Heroi("Homem de ferro", 28, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();


