# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo racionar meus mantimentos
    E curar viajantes
    Para que eu possa seguir a viagem saudável.

    Contexto:
        Dado um Doctor de nome "Pedro"
        E ele sempre começa a viagem com 1 refeição
        E ele sempre começa a viagem saudável.

    Cenário: Comeu e seguiu saudável
        Quando o Doctor parar para comer 1 vezes
        Então a quantidade de refeições deve ser igual a 0
        E o Doctor não ficará doente

        
     Cenário: Precicisou curar um viajante
        Quando um viajante estiver doente
        E o Doctor tratar o viajante
        Então o viajante devera ficar saudavel
        E o Doctor não ficará doente