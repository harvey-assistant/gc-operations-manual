// Simple password protection for GC Operations Manual
(function() {
    const PASSWORD = 'GC';
    const AUTH_KEY = 'gc_auth';
    
    // Check if already authenticated
    if (localStorage.getItem(AUTH_KEY) === 'true') {
        return; // Already authenticated
    }
    
    // Show password prompt
    const password = prompt('Enter password to access GC Operations Manual:');
    
    if (password === PASSWORD) {
        localStorage.setItem(AUTH_KEY, 'true');
        // Success - page will load normally
    } else {
        alert('Incorrect password. Access denied.');
        window.location.href = 'about:blank';
    }
})();
