//to save the changed theme, in local storage of the browser
//to get the value of theme key
let theme = localStorage.getItem('theme') //key called theme

if (theme == null){
    // setting theme's value
    setTheme('light') //default theme key's value ie {'theme': light} & is stored in local storage
}else{
    setTheme(theme)
}


//as we click on theme change button, we will grab the theme-dot class,
//then we will loop over it and then add EventHandler

//setting variable themeDots
let themeDots = document.getElementsByClassName('theme-dot') 

//looping over themeDots
for (var i=0; themeDots.length > i; i++){

    //adding an event listener for all items inside themeDots var
    themeDots[i].addEventListener('click', function(){

        //getting clicked custom made attr- mode inside index.html, & storing in mode var
        // if blue is clicked, looped dataset's mode=blue is stored inside themeMode
        let themeMode = this.dataset.mode
        //calling the setTheme function to set the theme
        setTheme(themeMode)
    })
}

//making a setTheme named fnc to be called when button with class name 'theme-dot'
//is clicked, mode parameter is checked here & passed to the eventListener
//when mode equals to to the data-mode attrs color, css file with id=themeStyle is called and href is changed accordingly

// parameter inside setTheme can be of any name
function setTheme(mode){
     if(mode == 'light'){
         document.getElementById('theme-style').href='default.css'
     }

     if(mode == 'blue'){
        document.getElementById('theme-style').href='blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href='green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href='purple.css'
    }

    //setting local storage theme value, so that it is stored in local storage & when we refresh the theme stays
    // theme - key, mode- value
    localStorage.setItem('theme', mode)
}