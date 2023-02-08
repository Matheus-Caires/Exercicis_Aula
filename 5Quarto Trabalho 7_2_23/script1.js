




var competencia = prompt('O aluno atingiu a competência: (sim ou não)');
var frequencia = prompt('Digite a porcentegem de frequência: ');

if ( competencia == 'sim' && frequencia >= 70){
    document.write('Aluno aprovado.')
} else if(competencia == 'não' || frequencia < 70){
    document.write('Aluno reprovado.')
}else{
    document.write('Erro 404!')
};
