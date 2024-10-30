const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

// Variável para controlar o estado do menu
let isMenuOpen = false;

// Função para abrir o menu
function openMenu() {
    isMenuOpen = true;
    mobileMenu.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden'; // Previne rolagem quando menu está aberto
}

// Função para fechar o menu
function closeMenu() {
    isMenuOpen = false;
    mobileMenu.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = ''; // Restaura rolagem
}

// Event Listeners
menuButton.addEventListener('click', () => {
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener('click', closeMenu);

// Fecha o menu com a tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
    }
});

// Fecha o menu se a tela for redimensionada para desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && isMenuOpen) { // 768px é o breakpoint 'md' do Tailwind
        closeMenu();
    }
});