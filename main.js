console.log("Simple Weight Converter")
document.getElementById('kgs').hidden=true
document.getElementById('ounces').hidden=true
document.getElementById('stones').hidden=true
document.getElementById('error').hidden=true


mainPart =  document.getElementById('value')

mainPart.addEventListener('keyup', ()=>{

    
    val = Number(mainPart.value);
    // console.log(typeof val)
    

    if(isNaN(val)){
        document.getElementById('kgs').hidden=true
        document.getElementById('ounces').hidden=true
        document.getElementById('stones').hidden=true
        document.getElementById('error').hidden=false
        setTimeout(()=>{
            document.getElementById('error').hidden=true
        }, 5000)
    }else{
        document.getElementById('error').hidden=true
        if(mainPart.value.length>0){
            kg = val * 0.453592
            stone = val * 0.0714286
            ounce = val * 16

            kg_result = kg + " kilograms"
            stone_result = stone + " stones"
            ounce_result = ounce + " ounces"

            document.getElementById('kgs').hidden=false
            document.getElementById('ounces').hidden=false
            document.getElementById('stones').hidden=false
            

            document.getElementById('kgs').innerHTML= kg_result
            document.getElementById('ounces').innerHTML= ounce_result
            document.getElementById('stones').innerHTML= stone_result
            setTimeout(()=>{
                document.getElementById('kgs').hidden=true
                document.getElementById('ounces').hidden=true
                document.getElementById('stones').hidden=true
            },10000)
        }
        else{
            document.getElementById('kgs').hidden=true
            document.getElementById('ounces').hidden=true
            document.getElementById('stones').hidden=true
        }
        
        

        
    }

    
} )