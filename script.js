function generateCertificate() {
    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;
    const college = document.getElementById("college").value;
    
    const canvas = document.getElementById("certificateCanvas");
    const ctx = canvas.getContext("2d");
    
    const image = new Image();
    image.src = "certificate_template.jpg"; // Use a pre-designed certificate image here
    image.onload = function() {
        // Draw the template image on the canvas
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Add text (user details) to the certificate
        ctx.fillStyle = "black";
        ctx.textAlign = "center";

        // Position the text
        ctx.font = "30px Arial";
        ctx.fillText(name, canvas.width / 1.65, 320); // Name position
        
        ctx.font = "24px Arial";
        ctx.fillText(department, canvas.width / 2.32, 430); // Department position
        
        ctx.font = "24px Arial";
        ctx.fillText(college, canvas.width / 1.25, 430); // College position

        // Display the canvas
        canvas.style.display = "block";

        // Create and style the download link
        const existingLink = document.querySelector('.download-button');
        if (existingLink) existingLink.remove(); // Remove old link if it exists

        const link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL();
        link.textContent = "Download Certificate";
        link.className = 'download-button';
        document.body.appendChild(link);
    };
}
