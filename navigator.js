document.onclick = () => {
    window.navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    window.navigator.clipboard.writeText('Hello, World!');
    window.print();
}