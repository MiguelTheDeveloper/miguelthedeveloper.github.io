@echo off
:inicio
set /p nome_pasta="Digite o nome da pasta principal (ex: Matemática, Programação): "

mkdir "%nome_pasta%\Aulas Teóricas\Slides"
mkdir "%nome_pasta%\Aulas Teóricas\Resumos"
mkdir "%nome_pasta%\Aulas Teóricas\Recursos"
mkdir "%nome_pasta%\Aulas Práticas\Exercícios"
mkdir "%nome_pasta%\Aulas Práticas\Laboratórios"
mkdir "%nome_pasta%\Aulas Práticas\Guiões"
mkdir "%nome_pasta%\Avaliação Contínua\Quizzes"
mkdir "%nome_pasta%\Avaliação Contínua\Trabalhos Aula"
mkdir "%nome_pasta%\Avaliação Contínua\Mini-testes"
mkdir "%nome_pasta%\Avaliação Formal\Testes"
mkdir "%nome_pasta%\Avaliação Formal\Exames"

echo.
echo ✅ Estrutura criada com sucesso em: %nome_pasta%
echo.

:pergunta
set /p resposta="Deseja criar outra estrutura de pastas? (s/n): "
if /i "%resposta%"=="s" goto inicio
if /i "%resposta%"=="n" (
    echo Obrigado por usar o script! 👋
    pause
    exit
)
goto pergunta