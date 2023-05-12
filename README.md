# Projeto Autopass 

![Capa do Projeto](https://www.designi.com.br/images/preview/10829081.jpg)

# Sobre o Projeto

Projeto desenvolvido para a ATIVIDADE 3 da disciplina Usabilidade, Desenvolvimento Web, Mobile e Jogos.

<h4 align="center"> 
	🚧  Em desenvolvimento . . .
</h4>

# Índice/Sumário

- [Sobre](#sobre-o-projeto)
- [Sumário](#índice/sumário)
- [Entregaveis](#Entregaveis)
- [Fluxogramas](#fluxo-de-usuário)
- [Descrição das personas](#descrição-das-personas)
- [Descrição dos cenários](#descrição-dos-cenários)
- [Wireframe estático](#wireframe-estático)
- [Protótipo Interativo](#protótipo-interativo)
- [Relatório analítico das heurísticas de Nielsen](#relatório-analítico-das-heurísticas-de-nielsen)
- [Implementação](#implementação-das-telas-do-protótipo-desenvolvido)
- [Video Apresentação](#vídeo-apresentando-sua-solução-de-redesign)
- [Autores](#autores)
- [Licença](#licença)
- [Agradecimentos](#agradecimentos)

# Entregaveis

| ID               | Categoria     | Entregável       | Descrição                                                                           | Pontos |
| ---------------- | ------------- | ---------------- | ----------------------------------------------------------------------------------- | ------ |
| 1                | Requisitos    | Fluxo de Usuário | Fluxograma ou diagrama de atividades para descrever os fluxos de tarefas do usuário | 3      |
| 2                | Requisitos    | Personas         | Descrição das personas                                                              | 4      |
| 3                | Requisitos    | Cenários         | Descrição dos cenários                                                              | 4      |
| 4                | Protótipos    | Protótipo lo-fi  | Wireframe estático                                                                  | 5      |
| 5                | Protótipos    | Protótipo hi-fi  | Protótipo Interativo                                                                | 5      |
| 6                | Avaliação     | Relatório        | Relatório analítico das heurísticas de Nielsen.                                     | 4      |
| 7                | Implementação | Aplicação Web    | Implementação das telas do protótipo desenvolvido                                   | 5      |
| 8                | Apresentação  | Link Vídeo       | apresentando sua solução de redesign                                                | 5      |
| TOTAL PROJETO A3 |               |                  |                                                                                     | 35     |

# Fluxo de Usuário

Para facilitar a edição dos fluxogramas, e por total integração com o github, foi optado utilizaro [mermaid.](https://mermaid.js.org/). Ferramenta baseado em Javascript que renderiza fluxograma utilizando o Markdown. Segue os fluxogramas solicitados:


1.Compra do Bilhete Digital QR Code
```mermaid
flowchart TD
    A[Início] --> B[ Selecione o produto]
    B -->C[Selecione o que deseja comprar - QR code]
    C --> D[Selecione a qunatiade - 1 Unidade]
    D -->E[Insira o cartao]
    E-->F[Digite a senha]
    F-->G{Transacao aprovada?}
    G-->|Não|E
    G-->|Sim|H[Requisitando QR Code]
    H-->I[Imprimindo QR Code]
    I-->J[FIM]

```
2.Recarga do Cartão TOP
```mermaid
flowchart TD
    
    A[Início] --> B[ Selecione o produto  -  Insira o cartao TOP]
    B -->C[Selecione o tipo de recarga]
    C-->For{selecione a forma de pagamento}
    For-->|cartao|OQ[Selecione o que deseja comprar]
    OQ --> D[Selecione a qunatiade - 1 Unidade]
    D -->E[Insira o cartao]
    E-->F[Digite a senha]
    F-->G{Transacao aprovada?}
    G-->|Não|E
    G-->|Sim|H[Retire seu cartão Débito ]
    H-->J[FIM]

    For-->|dinheiro|Sel[Selecione o valor]
    Sel-->ins[Insira o dinheiro na máquina]
    ins-->inseriu{Inseriu todo o dinheiro?}
    
    inseriu-->|Nao|ins
    inseriu-->|sim|Imp{imprimir}
    Imp-->|sim|ImpSim[Imprime recibo]
    Imp-->|Nao|RET
    ImpSim-->RET[Retira o cartao]
    RET-->J

```
3.Recarga do Bilhete Único
```mermaid
flowchart TD
    
    A[Início] --> B[ Selecione o produto  -  Bilhete único]
    B -->C[Selecione o tipo de recarga e veja seu atual saldo]
    C-->For{selecione a forma de pagamento}
    For-->|cartao|OQ[Selecione o que deseja comprar]
    OQ --> D[Selecione a qunatiade - 1 Unidade]
    D -->E[Insira o cartao]
    E-->F[Digite a senha]
    F-->G{Transacao aprovada?}
    G-->|Não|E
    G-->|Sim|H[Retire seu cartão Débito ]
    H-->J[FIM]

    For-->|dinheiro|Sel[Selecione o valor]
    Sel-->ins[Insira o dinheiro na máquina]
    ins-->inseriu{Inseriu todo o dinheiro?}
    
    inseriu-->|Nao|ins
    inseriu-->|sim|Imp{imprimir}
    Imp-->|sim|ImpSim[Imprime recibo]
    Imp-->|Nao|RET
    ImpSim-->RET[Retira o cartao]
    RET-->J

```



# Descrição das personas

As imagens para as personas foram geradas aleatoriamente por inteligencia artificial e não existem,através do site: [https://this-person-does-not-exist.com/en](https://this-person-does-not-exist.com/). Na pasta `personas` existem as personas completas, segue nome e fotos de cada uma delas:

 <table>
    <tr>
      <td align="center">
	  	<a href="/personas/persona1.md">
	  		<img src="personas/persona1.png" width="100px;" alt="Jose Bonifácil "/>
			<br />
	  			<sub>
				<b>Jose Bonifácil </b>
				</sub>
		</a>
		<br/>
	 </td>
      <td align="center">
	  	<a href="/personas/persona2.md">
	  		<img src="personas/persona2.png" width="100px;" alt="Maria Rita "/>
			<br />
			<sub>
				<b>Maria Rita</b>
			</sub>
		</a>
		<br />
	</td>
      <td align="center">
	  	<a href="/personas/persona3.md">
	  		<img src="personas/persona3.png" width="100px;" alt="Pedro Felipe "/>
			<br />
			<sub>
				<b>Pedro Felipe</b>
			</sub>
		</a>
		<br />
	</td>
	<td align="center">
	  	<a href="/personas/persona4.md">
	  		<img src="personas/persona4.png" width="100px;" alt="Joana Rocha"/>
			<br />
			<sub>
				<b>Joana Rocha</b>
			</sub>
		</a>
		<br />
	</td>
	<td align="center">
	  	<a href="/personas/persona5.md">
	  		<img src="personas/persona5.png" width="100px;" alt="João Paulo da Silva"/>
			<br />
			<sub>
				<b>JJoão Paulo da Silva</b>
			</sub>
		</a>
		<br />
	</td>
	<td align="center">
	  	<a href="/personas/persona6.md">
	  		<img src="personas/persona6.png" width="100px;" alt="Davi Silva "/>
			<br />
			<sub>
				<b>Davi Silva </b>
			</sub>
		</a>
		<br />
	</td>
	</tr> 
</table>

# Descrição dos cenários

Na pasta `cenarios` existem os cenários completos, segue os resumos:
## Cenário 1


**Ator:** [Persona 1 - Jose Bonifácil](personas/persona1.md)<br/>
**Contexto:** Voltando do trabalho na sexta feira.<br/>
**Evento:** Entrando na estação do metro para voltar para casa.<br/>
**Objeto:** Chegar em casa e recarregar o cartão.<br/>
**Plano:** Durante o caminho, antes da catraca, recarregar o cartão.<br/>
**Ação:** Viu a máquina com fila, esperou na fila para carregar o cartão.<br/>
**Avaliação:** Demorou na fila e carregou o cartão.<br/>
## Cenário 2


**Ator:** [Persona 2 - Maria Rita](personas/persona2.md)<br/>
**Contexto:** Indo para a faculdade.<br/>
**Evento:** Entrando na estação do metroir para a faculdade.<br/>
**Objeto:** Chegar na faculdade para assistir aula.<br/>
**Plano:** Carregar o cartão, para poder usar o  metrô<br/>
**Ação:** Viu a máquina com fila, esperou na fila para carregar o cartão.<br/>
**Avaliação:** Demorou na fila e carregou o cartão.<br/>
## Cenário 3


**Ator:** [Persona 3 - Pedro Felipe](personas/persona3.md)<br/>
**Contexto:** Indo para a blada na sexta.<br/>
**Evento:** Carregou o cartão em casa pelo app<br/>
**Objeto:** Chegar na balada.<br/>
**Plano:** Carregar o cartão pelo app, para poder usar o  metrô<br/>
**Ação:** verificou o saldo no app e fez a recarga com o cartão de débito.<br/>
**Avaliação:** Muito prático recarregar pelo app.<br/>


## Cenário 4
**Ator:** [Persona 4 - Joana Rocha](../personas/persona4.md)<br/>
**Contexto:** Indo para o trabalho voluntário na quarta-feira a tarde.<br/>
**Evento:** Entrando na estação de metrô.<br/>
**Objeto:** Carregar o cartão e ir para o trabalho voluntário.<br/>
**Plano:** Durante o caminho, antes da catraca, recarregar o cartão.<br/>
**Ação:** Havia três pessoas na sua frente, mas deixou uma mulher grávida passar na sua frente.<br/>
**Avaliação:** Demorou mais que o esperado e ficou transtornada, atrapalhando a utilização da máquina.<br/>
# Cenário 5


**Ator:** [Persona 5 - João Paulo Silva](../personas/persona5.md)<br/>
**Contexto:** Tentando chegar ao trabalho.<br/>
**Evento:** Entrando na estação do metro para ir trabalhar.<br/>
**Objeto:** Conseguir recarregar o bilhete.<br/>
**Plano:** Recarregar o bilhete e seguir seu trajeto<br/>
**Ação:** Chegou a maquina, com certas dificuldades conseguiu recarregar, porem ficou carregando sua tranasação infinitamente.<br/>
**Avaliação:** Maquina pessima, não me deixou recarregar o bilhete.<br/>
# Cenário 6

**Ator:** [Persona 6 - Davi Silva ](../personas/persona6.md)<br/>
**Contexto:** Tentando chegar ao trabalho.<br/>
**Evento:** Pegando condução de transporte público.<br/>
**Objeto:** Chegar ao trabalho.<br/>
**Plano:** Recarregar o cartão pelo app<br/>
**Ação:** Verificou o saldo no app e foi recarregar o cartão, porém como está com uma rotina puxada no trabalho, saiu de caso com pressa e esqueceu o cartão de débito, não conseguiu achar outra forma de carregar o bilhete, e teve que usar o dinheiro físico.<br/>
**Avaliação:** Sistema ultrapassado, e pouco intuitivo, poucas opções para recarregar o bilhete
.<br/>
<br/><br/>

# Wireframe estático

# Protótipo Interativo

# Relatório analítico das heurísticas de Nielsen

# Implementação das telas do protótipo desenvolvido

# Vídeo apresentando sua solução de redesign

Assista a apresentação clicando [aqui](http://teste.com) .



# Autores


 <table>
    <tr>
      <td align="center">
	  	<a href="https://www.linkedin.com/in/ramondomingos/">
	  		<img src="https://avatars.githubusercontent.com/u/12705978?v=4" width="100px;" />
			<br />
	  			<sub>
				<b>Ramon Domingos </b> 
				</sub>
		</a>
			<sub>
				<br/>RA:12823141995
			</sub>
		<br/>
	 </td>
      <td align="center">
	  	<a href="O LINK QUE VC QUISER">
	  		<img src="SUA FOTO.PNG" width="100px;"/>
			<br />
			<sub>
			<b>Ana Clara Araujo Barbosa Moraes </b>
			</sub>
		</a>
		<sub>
			<br/>RA: 321220389
		</sub>
		<br />
	</td>
	<td align="center">
	  	<a href="O LINK QUE VC QUISER">
	  		<img src="SUA FOTO.PNG" width="100px;"/>
			<br />
			<sub>
			<b>Julia Fiamoncini </b> 
			</sub>
		</a>
		<sub>
			<br/>RA:152010254
		</sub>
		<br />
	</td>
	<td align="center">
	  	<a href="O LINK QUE VC QUISER">
	  		<img src="SUA FOTO.PNG" width="100px;"/>
			<br />
			<sub>
			<b>Kelvin Nascimento Muniz de Araújo </b>
			</sub>
		</a>
		<sub>
			<br/>RA:125111261848
		</sub>
		<br />
	</td>
	<td align="center">
	  	<a href="O LINK QUE VC QUISER">
	  		<img src="SUA FOTO.PNG" width="100px;"/>
			<br />
			<sub>
			<b>Luana Ramos Ferreira de Camargo </b>
			</sub>
		</a>
		<sub>
			<br/>RA:8222243382
		</sub>
		<br />
	</td>
	<td align="center">
	  	<a href="O LINK QUE VC QUISER">
	  		<img src="SUA FOTO.PNG" width="100px;"/>
			<br />
			<sub>
			<b> Ramon Leal Damasceno  </b>
			</sub>
		</a>
		<sub>
			<br/>RA:821233805
		</sub>
		<br />
	</td>
	</tr> 
</table>

# Licença

Este projeto está licenciado sob a Licença MIT, consulte o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.

# Agradecimentos

Seção livre para você agradecer a todos que contribuiram para a execução do seu projeto.
