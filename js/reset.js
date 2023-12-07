const rules = new Rules();

const rulesList = [
    {name : 'rule1',message: 'minimum 5 caractères', validate : rules.moreThan5Digits},
    {name : 'rule2',message: 'minimum 1 lettre et 1 chiffre', validate : rules.atLeastAlphaAndNumber},
    {name : 'rule3',message: 'minimum 1 caractère spécial', validate: rules.atLeastSpecialCar},
    {name : 'rule4',message: 'minimum 1 lettre capitale', validate: rules.atLeastCapitalLetter},
    {name : 'rule5',message: 'doit contenir autant de lettres que de chiffres', validate: rules.containingAsMuchNumberAsLetter},
    {name : 'rule6',message: 'la somme des chiffres présent doit être divisible par 5', validate: rules.sumOfNumberModulo5},
    {name : 'rule7',message: 'ne doit pas contenir 1234', validate: rules.notContains1234},
    {name : 'rule8',message: 'doit contenir le symbole chimique de l\'étain', validate: rules.containingSn},
    {name : 'rule9',message: 'doit contenir le numéro atomique de l\'argent', validate: rules.containingAgValue},
    {name : 'rule10',message: 'doit contenir le code postal d\'Ecully', validate: rules.containingEcullyZipCode},
    {name : 'rule11',message: 'doit contenir le nom de la capitale de Madagascar', validate: rules.containingMadagascarCapital}
]


const rulesElem = document.getElementById('rules');

document.getElementById('reset').addEventListener("focusin", function (){

    if(!document.getElementById('rulesLabel')){
        const label =document.createElement('p');
        label.id = 'rulesLabel';    
        label.innerText = "Votre mot de passe doit respecter :"
        rulesElem.before(label);
    }
    if(rulesElem.childNodes.length === 0){
        constructNewRule(rulesList[0],'',rulesElem);
    }
});

document.getElementById('reset').addEventListener('change', function (event) {
    const value = document.getElementById('reset').value;
    let allOk = true;
    let lastIndexOk = 0;
    for (const ruleIndex in rulesList){
        const rule = rulesList[ruleIndex];
        if(document.getElementById(rule.name)){
            if(rule.validate(value)){
                document.getElementById(rule.name).style.color = 'red';
                lastIndexOk=parseInt(ruleIndex);
            }else{
                allOk = false;
                document.getElementById(rule.name).style.color = 'grey';
            }
        }
    }
    if(allOk){
        if(lastIndexOk < rulesList.length-1) {
            for (let i = lastIndexOk + 1; i < rulesList.length; i++) {
                if (!constructNewRule(rulesList[i], value, rulesElem)) {
                    break;
                }
                lastIndexOk++;
            }
        }
        if(lastIndexOk===rulesList.length-1)
        {
            alert("Félicitations votre mot de passe respecte toutes les règles ! Votre mot de passe a été réinitialisé vous pouvez retourner à la page d'accueil.");
        }
    }
});

function constructNewRule(rule, value, listOfRules){
    if(!document.getElementById(rule.name)) {
        const li = document.createElement('li');
        li.id = rule.name;
        li.innerText = rule.message;
        listOfRules.append(li);
        if (rule.validate(value)) {
            document.getElementById(rule.name).style.color = 'red';
            return true;
        } else {
            return false
        }
    }
}




