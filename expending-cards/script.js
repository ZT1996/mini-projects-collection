const panels = document.querySelectorAll('.panel');

console.log(panels);

for(const panel of panels) {
    panel.addEventListener('click', () => {
        if(panel.classList.contains('active')) {
            return;
        }else {
            removeActiveClass();
            panel.classList.add('active');
        }
    });
}

const removeActiveClass = () => {
    for(const panel of panels) {
        if(panel.classList.contains('active')) {
            panel.classList.remove('active');
        }
    }
}