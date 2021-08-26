# language: pt

Funcionalidade: Doctor
    Como um Doctor
    Eu devo tratar viajantes
    E mantelos saudaveis
    Para que eu possa seguir a viagem.
    

    Contexto:
        Dado um Doctor de nome "Pedro"
        E o Doctor tratar o viajante
        Então o viajante devera ficar saudavel
        
        
     Cenário: Precicisou curar um viajante doente
        Quando um viajante estiver doente
       
        
    Cenário: Precicisou curar um viajante saudavel
        Quando um viajante não estiver doente
       