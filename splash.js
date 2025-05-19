setTimeout(() => {
            document.getElementById('splash').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('splash').style.display = 'none';
                document.getElementById('main-content').style.display = 'block';
            }, 1000);
        }, 3000);
