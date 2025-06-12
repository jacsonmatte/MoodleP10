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
