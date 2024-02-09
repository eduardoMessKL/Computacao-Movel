cor(verde).
cor(azul).
cor(amarelo).

cordiferente(X,Y) :- cor(X), cor(Y), X\==Y.

coloracao(A,B,C,D,E) :- cordiferente(A,C), cordiferente(A,D), cordiferente(A,B),
    					cordiferente(B,D), cordiferente(B,E),
    					cordiferente(C,D),
    					cordiferente(D,E).