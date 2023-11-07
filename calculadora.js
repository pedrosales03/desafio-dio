

function calcularNivel(vitorias = 75, derrotas = 25) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;
  
    switch (true) {
      case vitorias < 10:
        nivel = "Ferro";
        break;
      case vitorias >= 11 && vitorias <= 20:
        nivel = "Bronze";
        break;
      case vitorias >= 21 && vitorias <= 50:
        nivel = "Prata";
        break;
      case vitorias >= 51 && vitorias <= 80:
        nivel = "Ouro";
        break;
      case vitorias >= 81 && vitorias <= 90:
        nivel = "Platina";
        break;
      case vitorias >= 91 && vitorias <= 100:
        nivel = "Ascendente";
        break;
      default:
        nivel = "Imortal";
    }
  
    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
  }
  
  calcularNivel(75, 25);
  










