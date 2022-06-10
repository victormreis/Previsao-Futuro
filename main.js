const respostas = [ 
    "Certeza!",
    "Não tenho tanta certeza disso....",
    "Não conte com isso!",
    "Pergunte novamente mais tarde!",
    "Sem dúvidas!",
    "Olha, você não acha que está pedindo demais?",
    "As chances disso acontecer não são tao boas....",
    "Sim",
    "Não",
    "Talvez",
    "Concentre-se e pergunte novamente...",
    "Provavelmente Sim",
    "Absolutamente sim!",
    "Não tenha dúvidas, isso é certeza!",
    "Tudo indica que sim",
    "Se você tiver fé Sim",
    "Mas nem se você quiser muito...",
    
]
const elementResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')



function fazerPergunta(){
    if(inputPergunta.value == ''){
        alert('Digite sua pergunta!')
        return
    }
    elementResposta.style.opacity =1;
        
    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numAleatorio = Math.floor(Math.random() * totalRespostas)  
    elementResposta.innerHTML = pergunta + respostas[numAleatorio]
    
    setTimeout(function ()  {
        elementResposta.style.opacity = 0;
    }, 3000);

   
}


