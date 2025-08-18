// Datos de productos - Catálogo limpio y organizado
const PRODUCTS = [
  {
    id: 'gorra-clasica-beisbolera',
    title: 'Gorra Clásica Beisbolera',
    price: 55000,
    description: 'Estilo tradicional americano. Perfecta para uso diario y deportivo.',
    images: ['modelo1.jpg'],
    stock: 12,
    colors: ['Negro','Blanco','Beige'],
    sizes: ['S','M','L'],
    category: 'beisbolera'
  },
  {
    id: 'gorra-plana-urbana',
    title: 'Gorra Plana Urbana',
    price: 65000,
    description: 'Estilo urbano moderno con visera plana. Ideal para el street style.',
    images: ['modelo2.jpg'],
    stock: 12,
    colors: ['Azul Marino','Gris','Negro'],
    sizes: ['S','M','L'],
    category: 'plana'
  },
  {
    id: 'gorra-premium-dorada',
    title: 'Gorra Premium con Detalles Dorados',
    price: 65000,
    description: 'Acabados premium con hilo dorado disponible. Elegancia y distinción.',
    images: ['modelo3.jpg'],
    stock: 12,
    colors: ['Negro','Dorado','Blanco'],
    sizes: ['S','M','L'],
    category: 'premium'
  },
  {
    id: 'gorra-retro-vintage',
    title: 'Gorra Retro Vintage',
    price: 65000,
    description: 'Estilo retro con paleta de temporada. Diseño atemporal.',
    images: ['modelo4.jpg'],
    stock: 12,
    colors: ['Azul Claro','Bordeaux','Blanco'],
    sizes: ['S','M','L'],
    category: 'retro'
  },
  {
    id: 'gorra-corporativa',
    title: 'Gorra Corporativa',
    price: 65000,
    description: 'Perfecta para equipos, empresas y merchandising corporativo.',
    images: ['modelo5.jpg'],
    stock: 12,
    colors: ['Marino','Negro','Gris'],
    sizes: ['S','M','L'],
    category: 'corporativa'
  },
  {
    id: 'gorra-personalizada',
    title: 'Gorra Personalizada',
    price: 60000,
    description: 'Diseña tu gorra única. Incluye bordado personalizado.',
    images: ['modelo2.jpg'],
    stock: 15,
    colors: ['Negro','Blanco','Marino','Gris'],
    sizes: ['S','M','L'],
    category: 'personalizada'
  }
];

// Estado del carrito
let cart = [];

// utils
const formatCOP = (n) => new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);

// Render productos
const grid = document.getElementById('products-grid');
function renderProducts(){
  grid.innerHTML = '';
  PRODUCTS.forEach(p => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="product-media"><img src="${p.images[0]}" alt="${p.title}"></div>
      <h4 class="product-title">${p.title}</h4>
      <p class="product-price">${formatCOP(p.price)}</p>
      <p class="muted">${p.description}</p>
      <div class="variants">
        <select class="color-select" data-id="${p.id}">
          ${p.colors.map(c=>`<option value="${c}">${c}</option>`).join('')}
        </select>
        <select class="size-select" data-id="${p.id}">
          ${p.sizes.map(s=>`<option value="${s}">${s}</option>`).join('')}
        </select>
        <input class="qty-input" data-id="${p.id}" type="number" min="1" max="${p.stock}" value="1" style="width:64px;padding:.4rem;border-radius:6px;border:1px solid #e6e6e6"/>
      </div>
      <div class="add-cart">
        <button class="btn primary add-to-cart" data-id="${p.id}">Agregar</button>
        <small style="color:var(--muted);margin-left:.5rem">Stock: ${p.stock}</small>
      </div>
    `;
    grid.appendChild(card);
  });

  document.querySelectorAll('.add-to-cart').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      const prod = PRODUCTS.find(x=>x.id===id);
      const color = document.querySelector(`.color-select[data-id="${id}"]`).value;
      const size = document.querySelector(`.size-select[data-id="${id}"]`).value;
      const qty = parseInt(document.querySelector(`.qty-input[data-id="${id}"]`).value,10);
      addToCart({id:prod.id,title:prod.title,price:prod.price,color,size,qty,stock:prod.stock});
    });
  });
}

// Función para tracking de eventos (Google Analytics/Ads)
function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
  console.log('Event tracked:', eventName, parameters);
}

function addToCart(item){
  // valid stock
  const prod = PRODUCTS.find(p=>p.id===item.id);
  // check existing qty in cart
  const existingQty = cart.filter(c=>c.id===item.id && c.color===item.color && c.size===item.size).reduce((s,i)=>s+i.qty,0);
  if(existingQty + item.qty > prod.stock){
    alert('No hay suficiente stock para ese producto/variación.');
    return;
  }
  // merge same variant
  const existing = cart.find(c=>c.id===item.id && c.color===item.color && c.size===item.size);
  if(existing){ existing.qty += item.qty; } else { cart.push(item); }
  
  // Track add to cart event
  trackEvent('add_to_cart', {
    currency: 'COP',
    value: item.price * item.qty,
    items: [{
      item_id: item.id,
      item_name: item.title,
      item_category: item.category || 'gorras',
      quantity: item.qty,
      price: item.price
    }]
  });
  
  updateCartUI();
}

function updateCartUI(){
  document.getElementById('cart-count').innerText = cart.reduce((s,i)=>s+i.qty,0);
  const cartCountMobile = document.getElementById('cart-count-mobile');
  if(cartCountMobile) cartCountMobile.innerText = cart.reduce((s,i)=>s+i.qty,0);
  // render items
  const itemsWrap = document.getElementById('cart-items');
  if(!itemsWrap) return;
  itemsWrap.innerHTML = '';
  cart.forEach((it,idx)=>{
    const div = document.createElement('div');
    div.className='cart-item';
    div.style.padding='8px 0';
    div.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center">
        <div><strong>${it.title}</strong><div style="font-size:.9rem;color:var(--muted)">${it.color} • ${it.size}</div></div>
        <div>${formatCOP(it.price*it.qty)}</div>
      </div>
      <div style="margin-top:.4rem;display:flex;gap:.5rem;align-items:center">
        <button data-idx="${idx}" class="btn outline qty-decrease">-</button>
        <div>${it.qty}</div>
        <button data-idx="${idx}" class="btn outline qty-increase">+</button>
        <button data-idx="${idx}" class="btn" style="margin-left:auto;background:transparent;border:0;color:red" id="remove-${idx}">Eliminar</button>
      </div>
    `;
    itemsWrap.appendChild(div);
  });

  // attach handlers
  document.querySelectorAll('.qty-increase').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const i = parseInt(e.currentTarget.dataset.idx,10);
      const prod = PRODUCTS.find(p=>p.id===cart[i].id);
      if(cart[i].qty + 1 > prod.stock){ alert('Stock insuficiente'); return; }
      cart[i].qty++; updateCartUI();
    });
  });
  document.querySelectorAll('.qty-decrease').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const i = parseInt(e.currentTarget.dataset.idx,10);
      if(cart[i].qty > 1){ cart[i].qty--; } else { cart.splice(i,1); }
      updateCartUI();
    });
  });
  cart.forEach((c, idx)=> {
    const btn = document.getElementById(`remove-${idx}`);
    if(btn) btn.addEventListener('click', ()=>{ cart.splice(idx,1); updateCartUI(); });
  });

  // subtotal
  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('cart-subtotal').innerText = formatCOP(subtotal);
  // update cart items small
  if(cart.length === 0){
    document.getElementById('cart-items').innerHTML = '<p style="color:var(--muted)">Tu carrito está vacío.</p>';
  }
}

// Cart open/close y referencias
const cartPanel = document.getElementById('carrito');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');

// Función para mostrar el carrito y renderizar PayPal
function abrirCarrito() {
  cartPanel.setAttribute('aria-hidden', 'false');
  renderPayPalButton();
}

// Eventos para abrir el carrito
if (cartBtn) cartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  abrirCarrito();
});

// Evento para cerrar el carrito
if (closeCartBtn) closeCartBtn.addEventListener('click', () => {
  cartPanel.setAttribute('aria-hidden', 'true');
});

// Función para mostrar loading en botones
function setButtonLoading(buttonId, isLoading, originalText = 'Pagar') {
  const button = document.getElementById(buttonId);
  if (!button) return;
  
  if (isLoading) {
    button.disabled = true;
    button.textContent = 'Procesando...';
    button.style.opacity = '0.7';
  } else {
    button.disabled = false;
    button.textContent = originalText;
    button.style.opacity = '1';
  }
}

// Renderizar el botón de PayPal cada vez que se abre el carrito
function renderPayPalButton() {
  const paypalContainer = document.getElementById('paypal-button-container');
  if (!paypalContainer) return;
  paypalContainer.innerHTML = ""; // Limpia para evitar duplicados
  
  if (window.paypal) {
    paypal.Buttons({
      createOrder: function(data, actions) {
        const total = calcularTotalCarrito();
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: total.toString() // En COP, sin decimales
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
          // Track purchase event
          trackEvent('purchase', {
            transaction_id: details.id,
            currency: 'COP',
            value: calcularTotalCarrito(),
            items: cart.map(item => ({
              item_id: item.id,
              item_name: item.title,
              item_category: item.category || 'gorras',
              quantity: item.qty,
              price: item.price
            }))
          });
          
          alert('Pago completado por ' + details.payer.name.given_name);
          cart = [];
          updateCartUI();
          renderPayPalButton();
        });
      },
      onError: function(err) {
        console.error('Error en PayPal:', err);
        alert('Error al procesar el pago. Por favor intenta nuevamente.');
      }
    }).render('#paypal-button-container');
  } else {
    paypalContainer.innerHTML = '<p style="color: #666;">PayPal no disponible. Intenta con WhatsApp.</p>';
  }
}

// Calcular el total real del carrito
function calcularTotalCarrito() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

// WhatsApp checkout
document.getElementById('checkout-whatsapp').addEventListener('click', ()=>{
  if(cart.length === 0) { alert('Tu carrito está vacío'); return; }
  
  // Track begin checkout event
  trackEvent('begin_checkout', {
    currency: 'COP',
    value: cart.reduce((s,i)=>s+i.price*i.qty,0),
    items: cart.map(item => ({
      item_id: item.id,
      item_name: item.title,
      item_category: item.category || 'gorras',
      quantity: item.qty,
      price: item.price
    }))
  });
  
  const phone = '573115477984'; // REEMPLAZA: tu numero en formato internacional sin +
  let text = `Hola! quiero hacer un pedido:%0A`;
  cart.forEach(item => {
    text += `- ${item.title} | ${item.color} | ${item.size} x${item.qty} => ${formatCOP(item.price*item.qty)}%0A`;
  });
  const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
  text += `%0ASubtotal: ${formatCOP(subtotal)}%0AEnvío: (indicar)%0ATotal: ${formatCOP(subtotal)}%0A%0ANombre:%0ADirección:%0ANota:`; 
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, '_blank');
});

// Stripe checkout (cliente -> requiere endpoint en servidor)
document.getElementById('checkout-stripe').addEventListener('click', async ()=>{
  if(cart.length === 0) { alert('Tu carrito está vacío'); return; }
  
  setButtonLoading('checkout-stripe', true, 'Pagar con Tarjeta (Stripe)');
  
  // Track begin checkout event
  trackEvent('begin_checkout', {
    currency: 'COP',
    value: cart.reduce((s,i)=>s+i.price*i.qty,0),
    payment_type: 'stripe'
  });
  
  // Prepara items para enviar al servidor
  const line_items = cart.map(it => ({
    price_data: {
      currency: 'cop',
      product_data: { name: `${it.title} - ${it.color} - ${it.size}` },
      unit_amount: it.price // NOTE: Stripe expects amount in cents for many currencies; check docs for COP.
    },
    quantity: it.qty
  }));
  
  // Mandar al servidor para crear session (endpoint ejemplo: /create-checkout-session)
  try {
    const res = await fetch('/create-checkout-session', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ line_items })
    });
    
    if (!res.ok) {
      throw new Error('Error del servidor');
    }
    
    const data = await res.json();
    if(data.sessionId){
      const stripe = Stripe('pk_test_REPLACE'); // REEMPLAZA con tu public key
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } else {
      throw new Error('No se pudo crear la sesión de pago');
    }
  } catch(err){
    console.error('Error en Stripe checkout:', err);
    alert('Error al contactar el servidor de pagos. Por favor intenta con WhatsApp o PayPal.');
  } finally {
    setButtonLoading('checkout-stripe', false, 'Pagar con Tarjeta (Stripe)');
  }
});

// Botón de pago directo en móvil
const btnPagarDirecto = document.getElementById('pagar-directo-mobile');
if(btnPagarDirecto){
  btnPagarDirecto.addEventListener('click', ()=>{
    const paypalBtn = document.querySelector('#paypal-button-container button');
    if(paypalBtn) paypalBtn.click();
    else alert('El botón de PayPal no está disponible.');
  });
}

// Función para renderizar el botón de donación PayPal
function renderPayPalDonationButton() {
  const paypalDonationContainer = document.getElementById('paypal-donation-container');
  if (!paypalDonationContainer || !window.paypal) return;
  
  paypalDonationContainer.innerHTML = "";
  
  paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '10000' // Monto predeterminado de donación: $10.000 COP
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('¡Gracias por tu donación! Donante: ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal-donation-container');
}

// Funcionalidad para copiar número de Nequi
function setupNequiCopy() {
  const copyBtn = document.getElementById('copy-nequi');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('3115477984');
        copyBtn.textContent = '¡Copiado!';
        copyBtn.style.background = '#4CAF50';
        setTimeout(() => {
          copyBtn.textContent = 'Copiar número';
          copyBtn.style.background = 'var(--gold)';
        }, 2000);
      } catch (err) {
        // Fallback para navegadores que no soportan clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = '3115477984';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        copyBtn.textContent = '¡Copiado!';
        setTimeout(() => {
          copyBtn.textContent = 'Copiar número';
        }, 2000);
      }
    });
  }
}

// Funcionalidad para montos de donación sugeridos
function setupDonationAmounts() {
  document.querySelectorAll('.donation-amount').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const amount = e.target.dataset.amount;
      const formattedAmount = formatCOP(parseInt(amount));
      
      // Actualizar el monto en PayPal si está disponible
      if (window.paypal) {
        // Re-renderizar el botón de PayPal con el nuevo monto
        const paypalContainer = document.getElementById('paypal-donation-container');
        if (paypalContainer) {
          paypalContainer.innerHTML = "";
          paypal.Buttons({
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: amount
                  }
                }]
              });
            },
            onApprove: function(data, actions) {
              return actions.order.capture().then(function(details) {
                alert(`¡Gracias por tu donación de ${formattedAmount}! Donante: ${details.payer.name.given_name}`);
              });
            }
          }).render('#paypal-donation-container');
        }
      }
      
      // Destacar el botón seleccionado
      document.querySelectorAll('.donation-amount').forEach(b => {
        b.style.background = 'rgba(255, 255, 255, 0.2)';
        b.style.transform = 'none';
      });
      btn.style.background = 'rgba(255, 255, 255, 0.4)';
      btn.style.transform = 'scale(1.05)';
    });
  });
}

// Función para renderizar el carrusel
function renderCarousel() {
  const carrusel = document.getElementById('carrusel');
  if (!carrusel) return;
  
  // Crear array de imágenes duplicado para efecto infinito
  const images = ['modelo1.jpg', 'modelo2.jpg', 'modelo3.jpg', 'modelo4.jpg', 'modelo5.jpg'];
  const duplicatedImages = [...images, ...images]; // Duplicar para scroll infinito
  
  carrusel.innerHTML = '';
  duplicatedImages.forEach(img => {
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.alt = 'Gorra bordada';
    imgElement.loading = 'lazy';
    carrusel.appendChild(imgElement);
  });
}

// Inicialización
renderProducts();
renderCarousel();
updateCartUI();
document.getElementById('year').innerText = new Date().getFullYear();

// Inicializar funcionalidades de donación cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  // Botón carrito móvil
  const cartBtnMobile = document.getElementById('cart-btn-mobile');
  if (cartBtnMobile) cartBtnMobile.addEventListener('click', (e) => {
    e.preventDefault();
    abrirCarrito();
  });

  // Configurar botón WhatsApp del hero
  const ctaWhatsapp = document.getElementById('cta-whatsapp');
  if (ctaWhatsapp) {
    ctaWhatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = '573115477984';
      const text = 'Hola! Me interesa conocer más sobre sus gorras bordadas. ¿Podrían brindarme más información?';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      
      // Track event
      trackEvent('contact_whatsapp', {
        method: 'hero_button'
      });
    });
  }

  // Configurar footer WhatsApp
  const footerWhatsapp = document.getElementById('whatsapp-footer');
  if (footerWhatsapp) {
    footerWhatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      const phone = '573115477984';
      const text = 'Hola! Me gustaría contactarlos desde su sitio web.';
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      
      // Track event
      trackEvent('contact_whatsapp', {
        method: 'footer_button'
      });
    });
  }

  // Configurar donaciones
  setTimeout(() => {
    renderPayPalDonationButton();
    setupNequiCopy();
    setupDonationAmounts();
  }, 1000); // Esperar a que PayPal se cargue

  // Botón WhatsApp
  const btnWhatsapp = document.getElementById('checkout-whatsapp');
  if (btnWhatsapp) btnWhatsapp.addEventListener('click', ()=>{
    if(cart.length === 0) { alert('Tu carrito está vacío'); return; }
    const phone = '573115477984'; // REEMPLAZA: tu numero en formato internacional sin +
    let text = `Hola! quiero hacer un pedido:%0A`;
    cart.forEach(item => {
      text += `- ${item.title} | ${item.color} | ${item.size} x${item.qty} => ${formatCOP(item.price*item.qty)}%0A`;
    });
    const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
    text += `%0ASubtotal: ${formatCOP(subtotal)}%0AEnvío: (indicar)%0ATotal: ${formatCOP(subtotal)}%0A%0ANombre:%0ADirección:%0ANota:`; 
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, '_blank');
  });
});

