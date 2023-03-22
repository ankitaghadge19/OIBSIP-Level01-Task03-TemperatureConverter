const calculateTemp = () =>{

    const numTemp = document.getElementById('temp').value;
    // console.log(numTemp);

    const tempSelected = document.getElementById('temp_diff');
    const tempType = temp_diff.options[tempSelected.selectedIndex].value;

    // console.log(tempType);

    const celToFah = (cel) =>{
        let fah = Math.round((cel * 9/5)+32);
        return fah;
    }

    const fahToCel = (fah) =>{
        let cel = Math.round((fah - 32) * 5/9);
        return cel;
    }
    

    let result;

    if(tempType == 'cel'){
        result = celToFah(numTemp);
        document.getElementById('resultCont').innerHTML = `= ${result} °Fahrenheit`;
    }
    else if(tempType == 'fah' ){
        result = fahToCel(numTemp);
        document.getElementById('resultCont').innerHTML = `= ${result} °Celcius`;
    }





}