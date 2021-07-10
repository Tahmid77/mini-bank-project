let loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click",function(){
    let userName = document.getElementById("user-name").value;
    let password = document.getElementById("password").value;   
    if( userName=="admin" && password=="admin"){   
        document.getElementById("login-area").style.display="none";
        document.getElementById("home-area").style.display="block";
    }
    else{
        document.getElementById("info").style.display="block";
    }
});

// *******************************************************************

let depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener('click',function(){
    let amount = parseFloat(document.getElementById("deposit").value);
    addAmount("total-amount",amount);
    addAmount("deposit-amount",amount);

    function addAmount(id,amount){
        let newAmount = parseFloat(document.getElementById(id).innerText);
        amount = newAmount + amount;
        document.getElementById(id).innerText = amount;
    }

    document.getElementById("deposit").value = '';
});

// *******************************************************************

let withdrawBtn = document.getElementById("withdraw-button");
withdrawBtn.addEventListener('click',function(){
    let amount = parseFloat(document.getElementById("withdraw").value);
    subAmount("total-amount",amount);
    addAmount("withdraw-amount",amount);

    function subAmount(id,amount){
        let newAmount = parseFloat(document.getElementById(id).innerText);
        newAmount = newAmount - amount;
        document.getElementById(id).innerText = newAmount;
    }
    function addAmount(id,amount){
        let newAmount = parseFloat(document.getElementById(id).innerText);
        newAmount = newAmount + amount;
        document.getElementById(id).innerText = newAmount;
    }

    document.getElementById("withdraw").value = '';
});


