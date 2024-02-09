%Declaração de meu avô como pai do meu pai, dos meus tios e tias
pai(osvaldo, marcos).
pai(osvaldo, murilo).
pai(osvaldo, michele).
pai(osvaldo, marcia).

%Declaração de meu avô como pai da minha mae, dos meus tios e tias
pai(arildo, adriane).
pai(arildo, debora).
pai(arildo, jose).
pai(arildo, antonio).
pai(arildo, dimarilda).
pai(arildo, angelo).
pai(arildo, alison).

%Meu pai
pai(marcos, eduardo).
pai(marcos, eduardomessias).

%Declaração da minha avó como mae do meu pai, dos meus tios e tias
mae(rosa, marcos).
mae(rosa, murilo).
mae(rosa, michele).
mae(rosa, marcia).

%Declaração da minha avó como mae da minha mae, dos meus tios e tias
mae(lourdes, adriane).
mae(lourdes, debora).
mae(lourdes, jose).
mae(lourdes, antonio).
mae(lourdes, dimarilda).
mae(lourdes, angelo).
mae(lourdes, alison).

%Minha mae
mae(adriane, eduardo).

%Sou ancestral do meu pai
ancestral(marcos, eduardo).

%Meu avô como ancestral do meu pai, dos meus tios e tias, e de mim
ancestral(osvaldo, eduardo).
ancestral(osvaldo, marcos).
ancestral(osvaldo, murilo).
ancestral(osvaldo, michele).
ancestral(osvaldo, marcia).

%Minha avó como ancestral do meu pai, dos meus tios e tias, e de mim
ancestral(rosa, eduardo).
ancestral(rosa, marcos).
ancestral(rosa, murilo).
ancestral(rosa, michele).
ancestral(rosa, marcia).

%Sou ancestral da minha mae
ancestral(adriane, eduardo).

%Minha avó como ancestral da minha mae, dos meus tios e tias, e de mim
ancestral(lourdes, eduardo).
ancestral(lourdes, adriane).
ancestral(lourdes, debora).
ancestral(lourdes, jose).
ancestral(lourdes, antonio).
ancestral(lourdes, dimarilda).
ancestral(lourdes, angelo).
ancestral(lourdes, alison).

%Meu avô como ancestral da minha mae, dos meus tios e tias, e de mim
ancestral(arildo, eduardo).
ancestral(arildo, adriane).
ancestral(arildo, debora).
ancestral(arildo, jose).
ancestral(arildo, antonio).
ancestral(arildo, dimarilda).
ancestral(arildo, angelo).
ancestral(arildo, alison).

irmao(X,Y) :- pai(Z,Y), pai(Z,X), mae(W,Y), mae(W,X), Y\==X.
meio-irmao(X,Y) :- pai(Z,Y), pai(Z,X); mae(W,Y), mae(W,X), Y\==X.


