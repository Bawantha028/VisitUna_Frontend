import React, { useEffect, useRef } from 'react';

const WaterAnimation = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const ripplesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Ripple class for realistic water effects
    class Ripple {
      constructor(x, y, intensity = 1) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = Math.random() * 150 + 100;
        this.speed = Math.random() * 2 + 1;
        this.opacity = intensity;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.amplitude = Math.random() * 20 + 10;
        this.life = 0;
        this.maxLife = 120;
        this.intensity = intensity;
      }

      update() {
        this.life++;
        this.radius += this.speed;
        this.opacity = Math.max(0, this.intensity * (1 - this.life / this.maxLife));
        return this.life < this.maxLife && this.radius < this.maxRadius;
      }

      draw(ctx) {
        if (this.opacity <= 0) return;

        ctx.save();
        
        // Create multiple concentric ripples for realism
        for (let i = 0; i < 3; i++) {
          const currentRadius = this.radius - (i * 15);
          if (currentRadius <= 0) continue;

          const currentOpacity = this.opacity * (0.8 - i * 0.2);
          if (currentOpacity <= 0) continue;

          // Create gradient for realistic water effect
          const gradient = ctx.createRadialGradient(
            this.x, this.y, currentRadius * 0.8,
            this.x, this.y, currentRadius
          );
          
          gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
          gradient.addColorStop(0.7, `rgba(255, 255, 255, ${currentOpacity * 0.3})`);
          gradient.addColorStop(1, `rgba(255, 255, 255, ${currentOpacity * 0.6})`);

          // Draw outer ring
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentOpacity * 0.8})`;
          ctx.lineWidth = 2 - i * 0.5;
          ctx.stroke();

          // Draw inner distortion effect
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentRadius * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Add wave distortion
          ctx.beginPath();
          for (let angle = 0; angle < Math.PI * 2; angle += 0.1) {
            const waveRadius = currentRadius + Math.sin(angle * 8 + this.life * 0.1) * (this.amplitude * currentOpacity);
            const x = this.x + Math.cos(angle) * waveRadius;
            const y = this.y + Math.sin(angle) * waveRadius;
            
            if (angle === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.strokeStyle = `rgba(200, 240, 255, ${currentOpacity * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.restore();
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw ripples
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        const alive = ripple.update();
        if (alive) {
          ripple.draw(ctx);
        }
        return alive;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Create ripple function
    const createRipple = (x, y, intensity = 1) => {
      if (ripplesRef.current.length < 15) {
        ripplesRef.current.push(new Ripple(x, y, intensity));
      }
    };

    // Mouse events
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      mouseRef.current = { x, y };
      
      // Create ripples occasionally on mouse move
      if (Math.random() < 0.05) {
        createRipple(x, y, 0.6);
      }
    };

    const handleMouseClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createRipple(x, y, 1.2);
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        createRipple(x, y, 1);
      }
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch) {
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        if (Math.random() < 0.1) {
          createRipple(x, y, 0.7);
        }
      }
    };

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleMouseClick);
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);

    // Start animation
    animate();

    // Create ambient ripples
    const ambientInterval = setInterval(() => {
      if (ripplesRef.current.length < 8) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        createRipple(x, y, 0.3);
      }
    }, 3000);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleMouseClick);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      clearInterval(ambientInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-10"
      style={{
        mixBlendMode: 'screen',
        filter: 'blur(0.5px)',
      }}
    />
  );
};

export default WaterAnimation;