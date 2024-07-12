const numBalls = 20;
        const balls = [];

        for (let i = 0; i < numBalls; i++) {
            const ball = document.createElement('div');
            ball.className = 'ball';
            ball.style.top = `${Math.random() * window.innerHeight}px`;
            ball.style.left = `${Math.random() * window.innerWidth}px`;
            ball.style.backgroundColor = getRandomColor();
            ball.style.boxShadow = `0 0 10px ${ball.style.backgroundColor}, 0 0 20px ${ball.style.backgroundColor}`;
            document.body.appendChild(ball);
            balls.push({
                element: ball,
                dx: Math.random() * 4 - 2,
                dy: Math.random() * 4 - 2
            });
        }

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function update() {
            balls.forEach(ball => {
                const rect = ball.element.getBoundingClientRect();
                if (rect.top + ball.dy < 0 || rect.bottom + ball.dy > window.innerHeight) {
                    ball.dy *= -1;
                }
                if (rect.left + ball.dx < 0 || rect.right + ball.dx > window.innerWidth) {
                    ball.dx *= -1;
                }
                ball.element.style.top = `${rect.top + ball.dy}px`;
                ball.element.style.left = `${rect.left + ball.dx}px`;
            });
            requestAnimationFrame(update);
        }

        document.addEventListener('mousemove', (e) => {
            balls.forEach(ball => {
                const rect = ball.element.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ball.dx = -dx / 10;
                    ball.dy = -dy / 10;
                }
            });
        });

        update();


function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light") 
    
    // pegar a tag img
    
    const img = document.querySelector("#profile img")
    
    //substituir  a imagem
    
    if(html.classList.contains("light")) {
        //se tiver light mode add a imagem light
    img.setAttribute('src', './assets/avatar.jpeg')
        
    } else {
    
    //se  tiver sem light mode, manter a imagem normal 
    
    img.setAttribute('src', './assets/avatar.jpeg')
    }   
    
    }