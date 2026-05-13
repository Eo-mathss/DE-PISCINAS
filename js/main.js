
// Inicializa os ícones do site
lucide.createIcons();

// ==========================================
// 1. SISTEMA DE CARREGAMENTO (PRELOADER)
// ==========================================
function removerPreloader() {
    const preloader = document.getElementById('preloader');
    if(!preloader || preloader.classList.contains('hide')) return;
    preloader.classList.add('hide');
    document.body.classList.remove('overflow-hidden');
    setTimeout(() => { preloader.style.display = 'none'; }, 1200);
}

// Remove o preloader quando a página carrega ou força a remoção após 2.5s (segurança)
window.addEventListener('load', () => { setTimeout(removerPreloader, 500); });
setTimeout(removerPreloader, 2500);

// ==========================================
// 2. MENU MOBILE
// ==========================================
const btnMenu = document.getElementById('mobile-menu-btn');
const menuLateral = document.getElementById('mobile-menu');
if(btnMenu && menuLateral) {
    btnMenu.addEventListener('click', () => menuLateral.classList.toggle('hidden'));
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => menuLateral.classList.add('hidden'));
    });
}

// ==========================================
// 3. ANIMAÇÃO DE BOLHAS FLUTUANTES
// ==========================================
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    if(!container) return;
    const bubbleCount = window.innerWidth < 768 ? 12 : 25; 
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        const size = Math.random() * 40 + 10;
        bubble.style.width = `${size}px`; 
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.animationDuration = `${Math.random() * 8 + 6}s`; 
        bubble.style.animationDelay = `${Math.random() * 10}s`;
        container.appendChild(bubble);
    }
}
createBubbles();

// ==========================================
// 4. ANIMAÇÃO DE REVELAÇÃO NO SCROLL
// ==========================================
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -20px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ==========================================
// 5. BANCO DE DADOS DOS SERVIÇOS
// ==========================================
const servicesData = {
    'alvenaria': {
        title: 'Piscina de Alvenaria', tag: 'Máxima Resistência', color: 'bg-aqua-100 text-aqua-900 border-aqua-300',
        text: `
            <p class="mb-4 text-slate-700 text-lg md:text-xl leading-relaxed">A piscina construída em concreto armado representa o mais alto padrão em durabilidade e segurança estrutural. Ideal para projetos permanentes de longa vida útil.</p>
            <ul class="list-disc pl-6 text-slate-700 space-y-3 mb-6 text-base md:text-lg font-medium">
                <li><strong>Flexibilidade de Projeto:</strong> O formato é totalmente personalizável. É possível incluir áreas mais rasas (prainhas), degraus sob medida e borda infinita.</li>
                <li><strong>Estrutura Sólida:</strong> Executo uma base estrutural robusta com ferragens adequadas, imune a dilatações severas e rachaduras ao longo do tempo.</li>
                <li><strong>Revestimentos Sofisticados:</strong> Aceita perfeitamente revestimentos premium como pastilhas de vidro, azulejos específicos e pedras naturais (como Pedra Hijau).</li>
            </ul>
        `,
        images: ['assets/img/alvenaria1.jpg', 'assets/img/alvenaria2.jpg', 'assets/img/alvenaria3.jpg']
    },
    'vinil': {
        title: 'Piscina de Vinil', tag: 'Excelente Custo-Benefício', color: 'bg-blue-100 text-blue-900 border-blue-300',
        text: `
            <p class="mb-4 text-slate-700 text-lg md:text-xl leading-relaxed">A tecnologia do vinil oferece uma execução ágil combinada a um acabamento impecável, sendo atualmente a opção mais requisitada no mercado.</p>
            <ul class="list-disc pl-6 text-slate-700 space-y-3 mb-6 text-base md:text-lg font-medium">
                <li><strong>Estanqueidade Absoluta:</strong> O bolsão de PVC atua como a própria barreira impermeabilizante, anulando o risco de vazamentos estruturais.</li>
                <li><strong>Agilidade na Execução:</strong> Elimina o processo demorado de assentamento de revestimentos e secagem de rejuntes, antecipando a entrega da obra.</li>
                <li><strong>Fácil Manutenção e Renovação:</strong> Após o período de vida útil do material, a troca do bolsão é rápida, renovando completamente a estética da sua área de lazer.</li>
            </ul>
        `,
        images: ['assets/img/vinil1.jpg', 'assets/img/vinil2.jpg', 'assets/img/vinil3.jpg']
    },
    'reforma': {
        title: 'Reformas e Troca de Vinil', tag: 'Solução Definitiva', color: 'bg-amber-100 text-amber-900 border-amber-300',
        text: `
            <p class="mb-4 text-slate-700 text-lg md:text-xl leading-relaxed">Sua piscina apresenta desgastes estéticos ou problemas crônicos de perda de água? Ofereço a solução técnica definitiva para restaurá-la.</p>
            <ul class="list-disc pl-6 text-slate-700 space-y-3 mb-6 text-base md:text-lg font-medium">
                <li><strong>Conversão para Vinil:</strong> A forma mais eficaz e segura de recuperar piscinas de azulejo com fissuras é através da instalação de um bolsão de vinil, resolvendo o vazamento de imediato.</li>
                <li><strong>Substituição de Vinil Antigo:</strong> Realizo a medição milimétrica e a instalação de um novo bolsão para substituir materiais ressecados ou danificados.</li>
                <li><strong>Adequação de Profundidade:</strong> Em piscinas muito profundas, realizo o nivelamento e o alteamento do fundo, proporcionando maior conforto e segurança para o uso.</li>
            </ul>
        `,
        images: ['assets/img/reforma1.jpg', 'assets/img/reforma2.jpg', '']
    },
    'vazamento': {
        title: 'Detecção de Vazamentos', tag: 'Diagnóstico e Reparo', color: 'bg-red-100 text-red-900 border-red-300',
        text: `
            <p class="mb-4 text-slate-700 text-lg md:text-xl leading-relaxed">Infiltrações na piscina geram alto desperdício financeiro e podem comprometer a fundação do imóvel adjacente. Meu diagnóstico é rápido e preciso.</p>
            <ul class="list-disc pl-6 text-slate-700 space-y-3 mb-6 text-base md:text-lg font-medium">
                <li><strong>Testes Hidráulicos Precisos:</strong> Utilizo equipamentos de pressurização para isolar as tubulações e identificar com exatidão a linha comprometida (retorno, ralo de fundo ou aspiração).</li>
                <li><strong>Intervenção Cirúrgica:</strong> Por localizar o ponto exato da avaria técnica, a intervenção no pavimento é cirúrgica, evitando a destruição desnecessária do seu quintal.</li>
            </ul>
        `,
        images: ['assets/img/vazamento1.jpg', 'assets/img/vazamento2.jpg', '']
    },
    'equipamentos': {
        title: 'Aquecimento e Automação', tag: 'Upgrade e Conforto', color: 'bg-purple-100 text-purple-900 border-purple-300',
        text: `
            <p class="mb-4 text-slate-700 text-lg md:text-xl leading-relaxed">A valorização da sua piscina exige a implementação de sistemas tecnológicos que tragam bem-estar e usabilidade ao longo de todo o ano.</p>
            <ul class="list-disc pl-6 text-slate-700 space-y-3 mb-6 text-base md:text-lg font-medium">
                <li><strong>Sistemas de Aquecimento:</strong> Realizo o dimensionamento e instalação de trocadores de calor elétricos ou aquecimento solar, garantindo temperatura agradável inclusive nos meses frios.</li>
                <li><strong>Iluminação Tecnológica:</strong> Implementação de projetos luminotécnicos com refletores LED RGB, permitindo a personalização das cores via controle remoto ou smartphone.</li>
                <li><strong>Hidromassagem:</strong> Instalação técnica de motobombas dedicadas para assegurar a pressão correta e eficiente nos bicos de hidromassagem.</li>
            </ul>
        `,
        images: ['assets/img/equipamentos1.jpg', 'assets/img/equipamentos2.jpg', 'assets/img/equipamentos3.jpg']
    }
};

// ==========================================
// 6. MOTOR 3D (THREE.JS)
// ==========================================
let modalScene, modalCamera, modalRenderer, modalControls, animationId;
const container3d = document.getElementById('modal-3d-container');

function initModal3D() {
    if (typeof THREE === 'undefined' || !container3d) return;
    
    modalScene = new THREE.Scene();
    modalCamera = new THREE.PerspectiveCamera(45, container3d.clientWidth / container3d.clientHeight, 0.1, 1000);
    modalCamera.position.set(12, 10, 15);

    modalRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    modalRenderer.setSize(container3d.clientWidth, container3d.clientHeight);
    modalRenderer.shadowMap.enabled = true;
    container3d.appendChild(modalRenderer.domElement);

    modalControls = new THREE.OrbitControls(modalCamera, modalRenderer.domElement);
    modalControls.enableDamping = true;
    modalControls.enableZoom = window.innerWidth > 768; 
    modalControls.maxPolarAngle = Math.PI / 2 - 0.1;
    modalControls.autoRotate = true;
    modalControls.autoRotateSpeed = 1.0;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    modalScene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    modalScene.add(dirLight);

    window.addEventListener('resize', () => {
        if(!modalRenderer) return;
        modalCamera.aspect = container3d.clientWidth / container3d.clientHeight;
        modalCamera.updateProjectionMatrix();
        modalRenderer.setSize(container3d.clientWidth, container3d.clientHeight);
    });
}

if (document.readyState === 'complete') { initModal3D(); } 
else { window.addEventListener('DOMContentLoaded', initModal3D); }

let currentWaterPositions = null;
let waterMesh = null;
let time3d = 0;

function build3DService(serviceId) {
    if(!modalScene) return;
    
    // Limpa a cena atual toda vez que o modal é aberto
    for (let i = modalScene.children.length - 1; i >= 0; i--) {
        const obj = modalScene.children[i];
        if(obj.type === "Mesh" || obj.type === "Group") modalScene.remove(obj);
    }
    waterMesh = null; currentWaterPositions = null;

    // =========================================================================
    // COMO CARREGAR SEUS PRÓPRIOS ARQUIVOS .GLB DO GITHUB:
    // 1. Apague a linha "/*" abaixo e a linha "*/" no final do bloco.
    // 2. Coloque seus arquivos .glb na pasta assets/modelos/
    // 3. Teste usando um servidor local (Live Server no VS Code).
    // =========================================================================
    
    /*
    const loader = new THREE.GLTFLoader();
    let modelUrl = '';
    
    if(serviceId === 'alvenaria') modelUrl = 'assets/modelos/alvenaria.glb';
    if(serviceId === 'vinil') modelUrl = 'assets/modelos/vinil.glb';
    if(serviceId === 'reforma') modelUrl = 'assets/modelos/reforma.glb';
    if(serviceId === 'vazamento') modelUrl = 'assets/modelos/vazamento.glb';
    if(serviceId === 'equipamentos') modelUrl = 'assets/modelos/equipamentos.glb';
    
    if(modelUrl) {
        loader.load(modelUrl, function(gltf) {
            modalScene.add(gltf.scene);
            
            // Ajuste de escala e posição se necessário:
            // gltf.scene.scale.set(1, 1, 1); 
            // gltf.scene.position.set(0, 0, 0); 
        }, undefined, function (error) {
            console.error('Erro ao carregar o modelo 3D:', error);
        });
        
        // Retorna aqui para não desenhar os cubos gerados por código abaixo.
        return; 
    }
    */

    // --- PISCINAS GERADAS POR CÓDIGO (Serão substituídas quando usar os .glb acima) ---
    const deckMaterial = new THREE.MeshStandardMaterial({ color: '#e2e8f0' });
    const deck = new THREE.Mesh(new THREE.PlaneGeometry(25, 25), deckMaterial);
    deck.rotation.x = -Math.PI / 2; deck.receiveShadow = true; modalScene.add(deck);

    let poolColor = '#cbd5e1'; 
    let waterColor = '#0ea5e9'; 

    if(serviceId === 'vinil') poolColor = '#0284c7'; 
    if(serviceId === 'reforma') poolColor = '#fcd34d'; 
    if(serviceId === 'equipamentos') waterColor = '#a855f7'; 
    
    const poolMaterial = new THREE.MeshStandardMaterial({ color: poolColor });
    
    const bottom = new THREE.Mesh(new THREE.BoxGeometry(8, 0.2, 5), poolMaterial); bottom.position.y = -2; modalScene.add(bottom);
    const w1 = new THREE.Mesh(new THREE.BoxGeometry(8.4, 2, 0.2), poolMaterial); w1.position.set(0, -1, 2.6); modalScene.add(w1);
    const w2 = new THREE.Mesh(new THREE.BoxGeometry(8.4, 2, 0.2), poolMaterial); w2.position.set(0, -1, -2.6); modalScene.add(w2);
    const w3 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 2, 5), poolMaterial); w3.position.set(4.1, -1, 0); modalScene.add(w3);
    const w4 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 2, 5), poolMaterial); w4.position.set(-4.1, -1, 0); modalScene.add(w4);

    if(serviceId === 'vazamento') {
        const pipeGeo = new THREE.CylinderGeometry(0.15, 0.15, 6);
        const pipeMat = new THREE.MeshStandardMaterial({ color: '#ef4444' });
        const pipe = new THREE.Mesh(pipeGeo, pipeMat);
        pipe.rotation.z = Math.PI / 2; pipe.position.set(0, -1, 3.2); modalScene.add(pipe);
    }
    if(serviceId === 'alvenaria' || serviceId === 'reforma') {
        const prainha = new THREE.Mesh(new THREE.BoxGeometry(2, 1.5, 5), poolMaterial);
        prainha.position.set(-3, -1.25, 0); modalScene.add(prainha);
    }

    const waterGeo = new THREE.PlaneGeometry(8, 5, 15, 15);
    const waterMat = new THREE.MeshPhysicalMaterial({ color: waterColor, transmission: 0.8, opacity: 1, roughness: 0.1 });
    waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.rotation.x = -Math.PI / 2; waterMesh.position.y = -0.3; modalScene.add(waterMesh);

    const pos = waterMesh.geometry.attributes.position;
    currentWaterPositions = [];
    for (let i = 0; i < pos.count; i++) currentWaterPositions.push(pos.getZ(i));
}

function animateModal3D() {
    animationId = requestAnimationFrame(animateModal3D);
    if(modalControls) modalControls.update();
    time3d += 0.05;
    
    // Animação da água (Ondas) - Ocorre apenas se houver o "waterMesh" criado por código
    if(waterMesh && currentWaterPositions) {
        const pos = waterMesh.geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) {
            const x = pos.getX(i); const y = pos.getY(i);
            pos.setZ(i, currentWaterPositions[i] + Math.sin(x + time3d) * 0.05 + Math.cos(y + time3d) * 0.05);
        }
        pos.needsUpdate = true;
    }

    if(modalRenderer && modalScene && modalCamera) {
        modalRenderer.render(modalScene, modalCamera);
    }
}

// ==========================================
// 7. LÓGICA DA JANELA MODAL
// ==========================================
const modal = document.getElementById('service-modal');
const modalScrollArea = document.getElementById('modal-scroll-area');
const modalText = document.getElementById('modal-text-content');
const modalTitle = document.getElementById('modal-header-title');
const modalGallery = document.getElementById('modal-gallery-content');
const modalWaBtn = document.getElementById('modal-whatsapp-btn');

function openModal(serviceId) {
    const data = servicesData[serviceId];
    if(!data) return;

    // Atualiza os Textos
    modalTitle.innerText = data.title;
    modalText.innerHTML = `
        <div class="inline-block ${data.color} border-2 border-solid text-xs md:text-sm font-bold px-3 py-1 md:px-4 md:py-2 rounded-xl mb-4 md:mb-6 uppercase tracking-wide shadow-sm">${data.tag}</div>
        <h2 class="font-title text-3xl md:text-5xl font-black text-slate-900 mb-6 md:mb-8">${data.title}</h2>
        <div class="text-slate-800">
            ${data.text}
        </div>
    `;

    // Atualiza a Galeria de Imagens
    let galleryHTML = '';
    data.images.forEach(imgSrc => {
        if(imgSrc && imgSrc.length > 0) {
            galleryHTML += `
                <div class="modal-gallery-item flex-shrink-0 bg-slate-100">
                    <img src="${imgSrc}" class="w-full h-full object-cover" alt="Registro fotográfico de obra executada" loading="lazy" onerror="this.src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'">
                </div>
            `;
        } else {
            galleryHTML += `
                <div class="modal-gallery-item flex-shrink-0 bg-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 gap-2">
                    <i data-lucide="image" class="w-10 h-10 md:w-12 md:h-12"></i>
                    <span class="font-bold text-xs md:text-sm">Registro da Obra</span>
                </div>
            `;
        }
    });
    modalGallery.innerHTML = galleryHTML;

    // Atualiza o link do WhatsApp
    const numeroWa = "5514996945087";
    const mensagem = encodeURIComponent(`Olá! Gostaria de um orçamento para o serviço de: ${data.title}. Podemos conversar?`);
    modalWaBtn.href = `https://wa.me/${numeroWa}?text=${mensagem}`;

    modalScrollArea.scrollTop = 0;
    
    // Inicia a renderização do modelo 3D escolhido
    build3DService(serviceId);
    
    // Exibe o modal na tela
    document.body.style.overflow = 'hidden';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false'); 
    
    cancelAnimationFrame(animationId);
    animateModal3D();

    // Redimensiona o quadro do 3D corretamente após a transição
    setTimeout(() => {
        if(modalCamera && modalRenderer && container3d) {
            modalCamera.aspect = container3d.clientWidth / container3d.clientHeight;
            modalCamera.updateProjectionMatrix();
            modalRenderer.setSize(container3d.clientWidth, container3d.clientHeight);
        }
    }, 500);
    
    // Recarrega os ícones caso algum tenha sido injetado no HTML via JS
    setTimeout(() => { lucide.createIcons(); }, 100);
}

// Função chamada pelo botão "Fechar" no HTML
function closeModal() {
    document.body.style.overflow = 'auto';
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true'); 
    cancelAnimationFrame(animationId);
}
