(() => {
    let mousePressed = false;
    let currentColor;
    const colors = [
        'white',
        'black',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'darkblue',
        'brown',
        'pink',
        'gray',
        'aqua',
        'chartreuse',
        'coral',
        'gold',
        'violet',
        'darkkhaki',
        'darkblue',
        'salmon',
        'antiquewhite',
        'aquamarine',
    ];
    const contentDiv = document.getElementById('content');
    const colorsDiv = document.getElementById('colors');
    const freecolorDiv = document.getElementById('freecolor');
    const clearBtn = document.getElementById('clear');
    const clearColorChecking = () => {
        const colorDivs = document.querySelectorAll('.color');
        colorDivs.forEach(colorDiv => {
            colorDiv.style.border = "";
        });
    };
    for (let i = 0; i < 6200; i++) {
        const div = document.createElement('div');
        div.classList.add('cell');
        contentDiv.appendChild(div);
    }

    for (let i = 0; i < colors.length; i++) {
        const div = document.createElement('div');
        div.classList.add('color');
        div.style.backgroundColor = colors[i];
        colorsDiv.append(div);
    }

    contentDiv.addEventListener('mousedown', e => {
        e.preventDefault();
        mousePressed = true;
    });

    contentDiv.addEventListener('mouseup', e => {
        mousePressed = false;
    });

    contentDiv.addEventListener('mouseover', e => {
        if (e.target.classList.contains('cell') && mousePressed) {
            e.target.style.backgroundColor = currentColor;
        }
    });

    colorsDiv.addEventListener('click', e => {
        if (e.target.classList.contains('color')) {
            clearColorChecking();
            e.target.style.border = '3px dotted black';
            currentColor = e.target.style.backgroundColor;
        }
    });

    clearBtn.addEventListener('click', e => {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.style.backgroundColor = "white";
        });
    });

    freecolorDiv.addEventListener('change', e => {
        clearColorChecking();
        currentColor = freecolorDiv.value;
    });
})()