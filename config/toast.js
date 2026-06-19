const styles = `
.toast-container {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1.25rem;
  border-radius: 12px;
  background: #1A2235;
  border: 1px solid #2D3B52;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
  transform: translateX(120%);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  max-width: 400px;
  pointer-events: auto;
}

.toast--visible {
  transform: translateX(0);
}

.toast--success {
  border-color: #10B981;
}

.toast--error {
  border-color: #EF4444;
}

.toast--info {
  border-color: #6366F1;
}

.toast__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 700;
  flex-shrink: 0;
}

.toast--success .toast__icon {
  background: rgba(16, 185, 129, 0.15);
  color: #10B981;
}

.toast--error .toast__icon {
  background: rgba(239, 68, 68, 0.15);
  color: #EF4444;
}

.toast--info .toast__icon {
  background: rgba(99, 102, 241, 0.15);
  color: #6366F1;
}

.toast__message {
  font-size: 0.9rem;
  font-weight: 500;
  color: #E2E8F0;
  line-height: 1.4;
}
`;

const styleEl = document.createElement('style');
styleEl.textContent = styles;
document.head.appendChild(styleEl);

const icons = {
  success: '✓',
  error: '✕',
  info: '●'
};

export function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${icons[type] || icons.info}</span>
    <span class="toast__message">${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('toast--visible');
  });

  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}
