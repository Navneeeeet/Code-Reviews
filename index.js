const canvas = document.getElementById("starfield");
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    
    const stars = [];
    const numStars = 300;
    
    function createStars() {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * width
        });
      }
    }
    
    function animateStars() {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);
      
      for (let i = 0; i < numStars; i++) {
        let star = stars[i];
        star.z -= 2;
        
        if (star.z <= 0) {
          star.z = width;
          star.x = Math.random() * width;
          star.y = Math.random() * height;
        }
        
        const k = 128.0 / star.z;
        const sx = (star.x - width / 2) * k + width / 2;
        const sy = (star.y - height / 2) * k + height / 2;
        
        if (sx >= 0 && sx < width && sy >= 0 && sy < height) {
          const size = (1 - star.z / width) * 2;
          ctx.beginPath();
          ctx.arc(sx, sy, size, 0, Math.PI * 2);
          ctx.fillStyle = "white";
          ctx.fill();
        }
      }
      
      requestAnimationFrame(animateStars);
    }
    
    window.addEventListener("resize", () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      createStars();
    });
    
    createStars();
    animateStars();