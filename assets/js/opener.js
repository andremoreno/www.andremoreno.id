document.querySelectorAll('a[href]').forEach(function(link) {
  const localDomain = window.location.hostname;

  try {
    const linkDomain = new URL(link.href).hostname;
    
    if (linkDomain !== localDomain) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer'); // Improves security
    }
  } catch (e) {
    // Ignore invalid URLs (e.g., mailto:, tel:, or JavaScript links)
  }
});