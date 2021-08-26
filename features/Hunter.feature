# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo racionar meus mantimentos
    E caçar mantimentos
    E doa mantimentos
    E o Hunter não ficará doente
    Para que eu possa seguir a viagem.

    Contexto:
        Dado um Hunter de nome "José"
        E ele sempre começa a viagem com 2 refeição

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 1 vezes
        Então a quantidade de refeições deve ser igual a 1
      

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a -2
       

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 6
       

     Cenário: Saiu para caçar, comer e doar
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter doar 10 comidas
        Então a quantidade de refeições deve ser igual a 6
       