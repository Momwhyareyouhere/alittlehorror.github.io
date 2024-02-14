document.addEventListener("mousemove", (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    
    const eye = document.getElementById("eye");
    const eyeRect = eye.getBoundingClientRect();
    
    const eyeX = eyeRect.left + eyeRect.width / 2;
    const eyeY = eyeRect.top + eyeRect.height / 2;
    
    const deltaX = mouseX - eyeX;
    const deltaY = mouseY - eyeY;
    
    const angle = Math.atan2(deltaY, deltaX);
    
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);
    
    const eyePosX = eyeX + Math.cos(angle) * distance;
    const eyePosY = eyeY + Math.sin(angle) * distance;
    
    eye.style.transform = `translate(${eyePosX - eyeRect.width / 2}px, ${eyePosY - eyeRect.height / 2}px)`;
});

