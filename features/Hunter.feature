# language: pt

Funcionalidade: Hunter
    Como um Hunter
    Eu devo racionar meus mantimentos
    E caçar mantimentos
    E doa mantimentos
    Para que eu possa seguir a viagem saudável.

    Contexto:
        Dado um Hunter de nome "José"
        E ele sempre começa a viagem com 2 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Caçou para conseguir mais refeições
        Quando o Hunter sair para caçar 1 vezes
        Então a quantidade de refeições deve ser igual a 7

    Cenário: Comeu e seguiu saudável
        Quando o Hunter parar para comer 5 vezes
        Então a quantidade de refeições deve ser igual a 4
        E o Hunter não ficará doente

    Cenário: Comeu e ficou doente
        Quando o Hunter parar para comer 3 vezes
        Então a quantidade de refeições deve ser igual a 1
        E o Hunter ficará doente

    Cenário: Saiu para caçar, comeu e seguiu saudável
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 2 vezes
        Então a quantidade de refeições deve ser igual a 8
        E o Hunter não ficará doente

     Cenário: Saiu para caçar, comer e doar
        Quando o Hunter sair para caçar 2 vezes
        E o Hunter parar para comer 1 vezes
        E o Hunter doar 10 comidas
        Então a quantidade de refeições deve ser igual a 2
        E o Hunter não ficará doente