// DOM Elements
const uploadBox = document.getElementById('uploadBox');
const fileInput = document.getElementById('fileInput');
const previewContainer = document.getElementById('previewContainer');
const imagePreview = document.getElementById('imagePreview');
const scanButton = document.getElementById('scanButton');
const resultsSection = document.getElementById('resultsSection');

// Drag and Drop functionality
uploadBox.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadBox.classList.add('drag-over');
});

uploadBox.addEventListener('dragleave', () => {
    uploadBox.classList.remove('drag-over');
});

uploadBox.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadBox.classList.remove('drag-over');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleFile(file);
    }
});

// File Input functionality
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        handleFile(file);
    }
});

// Handle the selected file
function handleFile(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        imagePreview.src = e.target.result;
        previewContainer.style.display = 'block';
        document.querySelector('.upload-content').style.display = 'none';
    };
    
    reader.readAsDataURL(file);
}

// Scan button functionality
scanButton.addEventListener('click', () => {
    // Show loading state
    scanButton.textContent = 'Analyzing...';
    scanButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Show results section with animation
        resultsSection.style.display = 'block';
        setTimeout(() => {
            resultsSection.classList.add('visible');
        }, 100);
        
        // Animate the recyclability score
        const scoreFill = document.querySelector('.score-fill');
        scoreFill.style.width = '85%';
        
        // Reset scan button
        scanButton.textContent = 'Scan Another Item';
        scanButton.disabled = false;
        
        // Add click handler for scanning another item
        scanButton.onclick = () => {
            // Reset the form
            previewContainer.style.display = 'none';
            document.querySelector('.upload-content').style.display = 'flex';
            resultsSection.style.display = 'none';
            resultsSection.classList.remove('visible');
            imagePreview.src = '';
            fileInput.value = '';
            
            // Reset scan button
            scanButton.textContent = 'Analyze Now';
            scanButton.onclick = null;
        };
    }, 2000);
});

// Social share buttons functionality
document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const platform = btn.classList[1];
        const text = encodeURIComponent(document.querySelector('.caption').textContent);
        const url = encodeURIComponent(window.location.href);
        
        let shareUrl = '';
        switch(platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=E-Waste%20Recycling&summary=${text}`;
                break;
            case 'instagram':
                // Instagram doesn't support direct sharing via URL
                alert('To share on Instagram, please screenshot and share through the Instagram app');
                return;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});

// Schedule pickup button functionality
document.querySelector('.schedule-btn').addEventListener('click', () => {
    // This would typically open a scheduling form or redirect to a scheduling page
    alert('Scheduling functionality will be implemented soon!');
}); 