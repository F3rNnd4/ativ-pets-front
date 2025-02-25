function teste() {
    const nome = document.getElementById('nome').value;
    alert(nome);
}

const public_key = "kJIRSOI4Wgu1COVng";
const private_key = "zFfd9sebgFZh_2mGjiJa4";

(function () {
    emailjs.init(public_key);
})();

document
    .getElementById('contatoForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
                const mensagem = document.getElementById('mensagem').value;

    
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos');
            return;
        }

        const params = {
            nome: nome,
            email: email,
            mensagem: mensagem,
        };

        const serviceID = "service_jmlrjdb";
        const templateID = "template_weajyyf";

        emailjs
            .send(serviceID, templateID, params)
            .then((res) => {
                document.getElementById('nome').value = "";
                document.getElementById('email').value = "";
                document.getElementById('mensagem').value = "";
                console.log(res);
                alert('Sua mensagem enviada com sucesso!');
            })
            .catch((err) => console.log(err));
    });