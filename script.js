// Dados fictícios para o gráfico
let meses = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
let vendas = [120, 150, 180, 200, 170, 220];

const ctx = document.getElementById('graficoVendas').getContext('2d');

// Criando o gráfico com Chart.js
const graficoVendas = new Chart(ctx, {
    type: 'line', // Tipo de gráfico (linha)
    data: {
        labels: meses, // Eixo X (Meses)
        datasets: [{
            label: 'Vendas mensais',
            data: vendas, // Eixo Y (Valores de vendas)
            borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo da linha
            borderWidth: 2,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            }
        }
    }
});

// Atualizando os dados do gráfico a cada 2 segundos
setInterval(() => {
    // Gerar novo dado aleatório para vendas
    vendas.push(Math.floor(Math.random() * 250));

    // Remover o primeiro mês para manter 6 meses no gráfico
    vendas.shift();
    meses.push(`Mês ${meses.length + 1}`);
    meses.shift();

    // Atualizando o gráfico
    graficoVendas.data.labels = meses;
    graficoVendas.data.datasets[0].data = vendas;
    graficoVendas.update();
}, 2000);
