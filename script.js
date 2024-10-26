const darkThemeBtn = document.getElementById('dark-button')
const lightThemeBtn = document.getElementById('light-button')
const calculatorWrapper = document.getElementById('calculator-wrapper')

// Functions to toggle theme

function enableDarkTheme() {
    document.body.classList.add('dark-theme');
        darkThemeBtn.style.color = '#ffffff';  
        lightThemeBtn.style.color = '#f9f9f970';
}

function enableLightTheme () {
    document.body.classList.remove('dark-theme');
    lightThemeBtn.style.color = '#000000'; 
    darkThemeBtn.style.color = '#f0f0f0'; 
}

darkThemeBtn.addEventListener('click', enableDarkTheme)
lightThemeBtn.addEventListener('click', enableLightTheme)