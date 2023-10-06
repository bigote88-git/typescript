(() => {

    // Enum en typescript solo soporta valores numericos
    enum SwitchLight {
        on = 1,
        off = 0
    }

    const SwithLightObject = {
        on: true,
        off: false
    }

    const lightOn:SwitchLight = SwitchLight.on;
    const lightOnBoolean = SwithLightObject.on;

    console.log(lightOn, lightOnBoolean);

    console.log(SwitchLight);

})()