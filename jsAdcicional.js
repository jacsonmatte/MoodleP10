<script>
  // Cria um novo elemento link
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;700&display=swap';
  link.rel = 'stylesheet';

  // Adiciona o elemento link ao head do documento
  document.head.appendChild(link);

  // Aplica a fonte Roc Grotesk ao corpo do documento
  document.addEventListener('DOMContentLoaded', function() {
    document.body.style.fontFamily = "'Roc Grotesk', sans-serif";
  });
</script>
<script>
  document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".navbar-light .navbar-nav .nav-link.active");
    elements.forEach(function(element) {
      element.style.color = "#284292";
    });
  });
</script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll(".primary-navigation .navigation .nav-link");
    elements.forEach(function(element) {
      element.style.color = "#284292";
    });
   var elements = document.querySelectorAll("li.activity.subtile");
   elements.forEach(function(element) {
      element.style.margin= "2px";
    });
  });
</script>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.pri10-section');
    const buttons = document.querySelectorAll('.pri10-sidebar button');
        
   if (window.location.pathname === '/' || window.location.pathname.includes('/index.php')) {
        var elements = document.querySelectorAll('.main-inner');
        elements.forEach(function (el) {
            el.style.minWidth = '-webkit-fill-available';
        });
    }
    function showSection(num) {
      sections.forEach(s => s.classList.remove('active'));
      buttons.forEach(b => b.classList.remove('active'));
      document.getElementById('section' + num).classList.add('active');
      document.getElementById('btn' + num).classList.add('active');
    }

    // Inicializa os botões com o evento
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => showSection(index + 1));
    });
  });
</script>


  <script>
        // Menu mobile toggle
        document.getElementById('menuBtn').addEventListener('click', function() {
            document.querySelector('.moodle-sidebar').classList.toggle('open');
        });
        
        // Adicionando efeito de clique nos nós do organograma
        document.querySelectorAll('.org-node').forEach(node => {
            node.addEventListener('click', function() {
                // Remove a classe 'ring-2 ring-blue-500' de todos os nós
                document.querySelectorAll('.org-node').forEach(n => {
                    n.classList.remove('ring-2', 'ring-blue-500');
                });
                
                // Adiciona a classe apenas ao nó clicado
                this.classList.add('ring-2', 'ring-blue-500');
                
                // Aqui você poderia adicionar lógica para mostrar mais detalhes do funcionário
                console.log('Nó clicado:', this.querySelector('h3').textContent);
            });
        });
    </script>


<script>
// Aguarda o carregamento completo da página.
document.addEventListener('DOMContentLoaded', function() {

    // --- 1. IDENTIFICAR OS ELEMENTOS PRINCIPAIS ---
    const emailFieldContainer = document.getElementById('fitem_id_email');
    const departmentFieldContainer = document.getElementById('fitem_id_department');

    if (emailFieldContainer && departmentFieldContainer) {
        
        // --- 2. REORDENAR O CAMPO ---
        emailFieldContainer.insertAdjacentElement('afterend', departmentFieldContainer);

        // --- 3. MANIPULAR O CAMPO DEPARTAMENTO ---
        const originalInput = document.getElementById('id_department');
        const labelContainer = departmentFieldContainer.querySelector('.col-form-label');

        if (originalInput && labelContainer) {
            
            // a) Pega o valor já salvo (importante para a página de edição).
            const savedValue = originalInput.value;
            
            // b) Esconde o campo de texto original, mas o mantém no formulário.
            //    Usar type="hidden" é melhor que display:none, pois garante o envio do valor.
            originalInput.type = 'hidden';

            // c) Define as opções para a caixa de seleção.
            const departmentOptions = [
                'ATENDENTE', 
                'ADMINISTRATIVO', 
                'CAIXA', 
                'ESTOQUISTA', 
                'FISCAL DE LOJA', 
                'FRANQUEADO', 
                'GERENTE DE LOJA', 
                'SERVIÇOS GERAIS', 
                'VENDEDOR(A)'
            ];

            // d) Cria o novo elemento <select> que será visível para o usuário.
            const newSelect = document.createElement('select');
            newSelect.id = 'id_department_select'; // ID diferente para não haver conflito.
            newSelect.className = 'form-control custom-select';
            newSelect.required = true;

            // e) Cria a primeira opção (placeholder).
            const placeholderOption = document.createElement('option');
            placeholderOption.value = '';
            placeholderOption.textContent = 'Selecione um departamento...';
            placeholderOption.disabled = true;
            // Se não houver valor salvo, o placeholder fica selecionado.
            if (!savedValue) {
                placeholderOption.selected = true;
            }
            newSelect.appendChild(placeholderOption);

            // f) Adiciona as opções, marcando a que foi salva anteriormente.
            departmentOptions.forEach(optionText => {
                const option = document.createElement('option');
                option.value = optionText;
                option.textContent = optionText;
                // Verifica se esta é a opção que deve estar selecionada.
                if (optionText === savedValue) {
                    option.selected = true;
                }
                newSelect.appendChild(option);
            });

            // g) Adiciona um "ouvinte" que atualiza o campo escondido sempre que o select é alterado.
            newSelect.addEventListener('change', function() {
                originalInput.value = this.value;
            });

            // h) Insere o novo select no formulário, logo após o input original (que agora está escondido).
            originalInput.insertAdjacentElement('afterend', newSelect);

            // i) Adiciona o ícone visual de campo obrigatório.
            const requiredIconHTML = `
                <div class="form-label-addon d-flex align-items-center align-self-start">
                    <div class="text-danger" title="Necessários">
                        <i class="icon fa fa-circle-exclamation text-danger fa-fw" title="Necessários" role="img" aria-label="Necessários"></i>
                    </div>
                </div>`;
            
            // Evita adicionar o ícone múltiplas vezes se o script rodar de novo.
            if (!labelContainer.querySelector('.fa-circle-exclamation')) {
                labelContainer.insertAdjacentHTML('beforeend', requiredIconHTML);
            }
        }
    } else {
        console.error('Moodle script: Não foi possível encontrar os containers dos campos de email ou departamento.');
    }
});
</script>
