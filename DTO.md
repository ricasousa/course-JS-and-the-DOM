# DTO Pattern

DTO (Data Transfer Object) é um padrão de projeto utilizado quando se deseja trafegar dados para uma camada de visão vindos de uma camada de persistência de dados sem expor o mapeamento do banco desta camada. Resumindo, DTO é um objeto simples que define como ou quais dados serão enviados/recebidos por uma API.

Atualmente algumas funcionalidades no **site-star-router** fazem utilização dessa abordagem de DTO para compartilhar dados entre componentes e manter o estado de algumas informações por toda a aplicação ou módulo, como é o caso do serviço `/me`. Um ponto aqui que vale destacar é que mesmo algumas funcionalidades sendo simples ou não tendo a necesidade, obriga-se a utilização de DTOs por ser o "padrão" de arquitetura definido. Porém não há na literatura o assunto "DTO no front".

**Components**

Com o advento de Web Components e com a versão 1.5+ do AngularJS trazendo essa abordagem de componentes torna-se menos útil - se um dia foi - o uso de "DTO no front", pois cada componente deve possuir responsabilidade apenas sobre um pedaço de determinada funcionalidade. A responsabilidade do componente deve ser apenas pela camada de apresentação(view). Não deve se preocupar em como obter os dados, apenas para quem "perguntar". Isso nos garante um código mais limpo, de fácil leitura e manutenção.

**Data Services**

É sabido que em grandes aplicações, há cenários onde a persistência de determinados dados se faz necessário para o compartilhamento entre componentes/módulos distintos que apenas os `bindings` não resolvem. Nesses caso, a abordagem mais correta seria a utilização de `dataServices`.

Quando desejamos obter informações do servidor, toda operação e interação com dados deve ser por meio de **services**.

Segundo a Style Guide do Angular, utilizamos **Data Services** para requisições XHR ou Armazenamento em Memória(Local/Session Storage).

Se por alguma razão for necessário expor dados diferentes dos que vieram no contrato, então trabalhamos com os `models` e esse **Data Service** retornará esse **model**. Tudo é encapsulado pelo **service**.

Sempre que um **service** realizar chamadas XHR e for necessário consumi-lo nos componentes, a implementação do **service** deverá consumir os dados diretamente da API garantindo assim a integridade dos dados. Se alguma informação tiver que ser persistida será analisada cuidadosamente.

# Conclusão

Com os pontos citados acima, vemos que não faz sentido a utilização de DTOs pelo front e com isso a melhor sugestão para nosso caso é sempre consumir um **service** e se houver necessidade de persistência no Storage após retorno da API, analisaremos cuidadosamente para entender a real necessidade e discutirmos a melhor forma de manter esse Storage atualizado.
