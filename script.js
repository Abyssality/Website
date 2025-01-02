document.addEventListener('DOMContentLoaded', () => {
  const storeRadio = document.getElementById('radio-store');
  const discordRadio = document.getElementById('radio-discord');
  const storeEmbed = document.getElementById('store-embed');

  discordRadio.addEventListener('change', () => {
    if (discordRadio.checked) {
      window.location.href = 'https://discord.gg/fGD7cb4fXp';
    }
  });

  storeRadio.addEventListener('change', () => {
    if (storeRadio.checked) {
      storeEmbed.style.display = 'block';
    }
  });
});
