
      // Simple JavaScript to show an alert when clicking project links
      document.querySelectorAll('.section ul li a').forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          alert('Project link clicked: ' + this.parentElement.textContent.trim());
        });
      });
