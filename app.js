import {estimate} from './calculations.js';

const number = (value, digits = 1) => new Intl.NumberFormat('de-DE', {minimumFractionDigits: digits, maximumFractionDigits: digits}).format(value);
const inputs = ['capacity', 'power', 'efficiency'].map(id => document.getElementById(id));
function updateCalculator() {
  const [capacityMah, outputWatts, efficiencyPercent] = inputs.map(input => Number(input.value));
  const result = estimate({capacityMah, outputWatts, efficiencyPercent});
  document.getElementById('capacity-value').textContent = `${number(capacityMah, 0)} mAh`;
  document.getElementById('power-value').textContent = `${outputWatts} W`;
  document.getElementById('efficiency-value').textContent = `${efficiencyPercent} %`;
  document.getElementById('usable-energy').textContent = number(result.usbWh);
  document.getElementById('pack-current').textContent = `${number(result.packCurrentA, 2)} A`;
  document.getElementById('runtime').textContent = `${number(result.runtimeHours, 2)} h`;
}
inputs.forEach(input => input.addEventListener('input', updateCalculator));
updateCalculator();

const tabs = [...document.querySelectorAll('[data-tab]')];
function selectTab(tab, focus = false) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(`panel-${item.dataset.tab}`).hidden = !selected;
  });
  if (focus) tab.focus();
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) {event.preventDefault(); selectTab(tabs[next], true);}
  });
});

const filters = [...document.querySelectorAll('[data-filter]')];
const parts = [...document.querySelectorAll('[data-category]')];
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {filter.classList.toggle('active', filter === button); filter.setAttribute('aria-pressed', String(filter === button));});
  let count = 0;
  parts.forEach(part => {part.hidden = button.dataset.filter !== 'all' && part.dataset.category !== button.dataset.filter; if (!part.hidden) count++;});
  document.getElementById('parts-count').textContent = `${count} ${count === 1 ? 'Position' : 'Positionen'}`;
}));

const dialog = document.getElementById('photo-dialog');
let lastPhotoButton;
document.querySelectorAll('[data-photo]').forEach(button => button.addEventListener('click', () => {
  lastPhotoButton = button;
  const full = document.getElementById('photo-full');
  full.src = button.dataset.photo;
  full.alt = button.querySelector('img').alt;
  document.getElementById('photo-caption').textContent = button.dataset.caption;
  dialog.showModal();
  document.body.classList.add('dialog-open');
}));
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
dialog.addEventListener('close', () => {document.body.classList.remove('dialog-open'); lastPhotoButton?.focus();});

const progress = document.querySelector('.reading-progress');
let scrollScheduled = false;
function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${available > 0 ? Math.min(100, Math.max(0, window.scrollY / available * 100)) : 0}%`;
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {if (!scrollScheduled) {scrollScheduled = true; requestAnimationFrame(updateProgress);}}, {passive: true});
window.addEventListener('resize', updateProgress);
updateProgress();
