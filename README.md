iComb
=====

Combinatory and Counting 


## Regra para validação de cada estágio da solução do exercício no iComb
Qualquer problema considerado no iComb deve apresentar a seguinte estrutura:

“Com j elementos do universo, quantos  subconjuntos de k elementos é possível formar respeitando restrição 1, restrição 2, ..., restrição i?''

Sendo,  j -> número total dos elementos do universo em questão;
i -> número de restrições ou melhor, número de estágios 

Os estágios de um problema são os subproblemas e cada um é resolvido separadamente para que sejam multiplicados ou somados na solução final.
Em cada estágio no iComb os elementos do conjunto universo possuem propriedades (atributos):

 “Eu quero [ alguns  ] elementos que verifiquem [   nenhuma, uma ou duas propriedades   ]

  Escolha as configurações que definem os elementos 
    [ atributo dos elementos] [ é, não é, está em, não está em ] [ atributo dos elementos   ]”

Após ter escolhido o número de elementos que tenham tais propriedades  e também feita a escolha das configurações, o estágio é validado para que se possa fazer o cálculo das possibilidades utilizando as estruturas combinatórias clássicas como combinação, arranjo, fatorial e exponenciação.
