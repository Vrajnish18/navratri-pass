


//  const img = document.createElement('img');
//     img.src = "assets/images/c4628ad0a3b29009e14e328e428417df.png";
//     img.style.width = "auto";
//     img.style.position = "absolute"
//     img.style.top = "200px"
//     img.style.right = "270px"
//     document.body.appendChild(img); 


// for add scanner into templete
    const canvas = document.getElementById('myCanvas');
    const addImage = canvas.getContext('2d');

    const backgroundImage = new Image();
    backgroundImage.src = 'assets/images/1757916623243_6_10_23_68499.png';

    const scannerImage = new Image();
    scannerImage.src = 'assets/images/c4628ad0a3b29009e14e328e428417df.png';

    let imagesLoaded = 0;
    const totalImages = 2;

    function checkImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
            drawImages();
        }
    }

    backgroundImage.onload = checkImagesLoaded;
    scannerImage.onload = checkImagesLoaded;

    function drawImages() {
        addImage.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        addImage.drawImage(scannerImage, 708, 58, 230, 230);
    }

    


// for copy templete
document.getElementById('copy-img').addEventListener('click', async () => {
    const imageUrl = canvas.toDataURL('image/png');

    try {
        const response = await fetch(imageUrl);
        const imageCopy = await response.blob();

        await navigator.clipboard.write([
            new ClipboardItem({
                [imageCopy.type]: imageCopy
            })
        ]);
        alert('day 1 pass copied');
    } catch (err) {
        alert('Failed to copy image:', err);
    }
});


// for download button
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', function() {
    const imageDataURL = canvas.toDataURL('image/png');

    const link = document.createElement('a');
    link.download = 'pass-day-one';
    link.href = imageDataURL;

    document.body.appendChild(link);
    link.click();
});


// for share watsapp

// covert to base 64
  document.getElementById("shareBtn").addEventListener("click", async () => {
    const dataUrl = canvas.toDataURL("image/png"); 

    // convert to blob
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const file = new File([blob], "pass-of-day-one.png", { type: "image/png" });

    if (navigator.share) {
      try {
        await navigator.share({
          files: [file],
          title: "Shared Image",
          text: "Here’s the image!"
        });
        console.log("Shared successfully");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("your browser not support");
    }
});







// second pass
const canvas2 = document.getElementById('myCanvas2');
const addImage2 = canvas2.getContext('2d');

const backgroundImage2 = new Image();
backgroundImage2.src = 'assets/images/1757916654744_6_10_54_48599.png';

const scannerImage2 = new Image();
scannerImage2.src = 'assets/images/c4628ad0a3b29009e14e328e428417df.png';

let imagesLoaded2 = 0;
const totalImages2 = 2;

function checkImagesLoaded2() {
    imagesLoaded2++;
    if (imagesLoaded2 === totalImages2) {
        drawImages2();
    }
}

backgroundImage2.onload = checkImagesLoaded2;
scannerImage2.onload = checkImagesLoaded2;

function drawImages2() {
    addImage2.drawImage(backgroundImage2, 0, 0, canvas2.width, canvas2.height);
    addImage2.drawImage(scannerImage2, 710, 42, 230, 230);
}




// for copy templete 2
document.getElementById('copy-img2').addEventListener('click', async () => {
    const imageUrl2 = canvas2.toDataURL('image/png');

    try {
        const response = await fetch(imageUrl2);
        const imageCopy2 = await response.blob();

        await navigator.clipboard.write([
            new ClipboardItem({
                [imageCopy2.type]: imageCopy2
            })
        ]);
        alert('day 2 pass copied');
    } catch (err) {
        alert('Failed to copy image 2:', err);
    }
});


// for download button 2
const downloadButton2 = document.getElementById('downloadButton2');
downloadButton2.addEventListener('click', function() {
    const imageDataURL2 = canvas2.toDataURL('image/png');

    const link2 = document.createElement('a');
    link2.download = 'pass-day-two';
    link2.href = imageDataURL2;

    document.body.appendChild(link2);
    link2.click();
});


// for share watsapp

// covert to base 64
  document.getElementById("shareBtn2").addEventListener("click", async () => {
    const dataUrl = canvas2.toDataURL("image/png"); 

    // convert to blob
    const response = await fetch(dataUrl);
    const blob = await response.blob();
    const file = new File([blob], "pass-of-day-two.png", { type: "image/png" });

    if (navigator.share) {
      try {
        await navigator.share({
          files: [file],
          title: "Shared Image",
          text: "Here’s the image!"
        });
        console.log("Shared successfully");
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      const imageUrl = new File([blob], "pass-of-day-two.png", { type: "image/png" });
      const shareText = "Here is the pass for today!";
      
      const whatsappUrl = `whatsapp://send?text=${encodeURIComponent(shareText + ' ' + imageUrl)}`;
      window.location.href = whatsappUrl;
    }
});







