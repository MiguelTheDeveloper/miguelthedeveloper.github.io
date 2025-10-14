#!/bin/bash
criar_estrutura() {
    echo "Digite o nome da pasta principal (ex: Matemática, Programação):"
    read nome_pasta

    mkdir -p "$nome_pasta/Aulas Teóricas/Slides"
    mkdir -p "$nome_pasta/Aulas Teóricas/Resumos"
    mkdir -p "$nome_pasta/Aulas Teóricas/Recursos"
    mkdir -p "$nome_pasta/Aulas Práticas/Exercícios"
    mkdir -p "$nome_pasta/Aulas Práticas/Laboratórios"
    mkdir -p "$nome_pasta/Aulas Práticas/Guiões"
    mkdir -p "$nome_pasta/Avaliação Contínua/Quizzes"
    mkdir -p "$nome_pasta/Avaliação Contínua/Trabalhos Aula"
    mkdir -p "$nome_pasta/Avaliação Contínua/Mini-testes"
    mkdir -p "$nome_pasta/Avaliação Formal/Testes"
    mkdir -p "$nome_pasta/Avaliação Formal/Exames"

    echo ""
    echo "✅ Estrutura criada com sucesso em: $nome_pasta"
    echo ""
}

# Loop principal
while true; do
    criar_estrutura

    echo "Deseja criar outra estrutura de pastas? (s/n)"
    read resposta
    if [[ ! "$resposta" =~ ^[Ss]$ ]]; then
        echo "Obrigado por usar o script! 👋"
        break
    fi
    echo ""
done