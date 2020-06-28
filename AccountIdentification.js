const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkType = (acc) => {
 
    p = new Promise((resolve, reject) => { //Promise to know the type of the Account
      
      if(acc.startsWith('1')) {
    
        resolve(acc + "  Asset Account !")
        acc3 = acc.substring(0,3)
        switch(acc3) //Switch case to know Asset type
        {
          case '101':
            console.log("Bank/Cash at Bank");
            break;
        case '102':
          console.log("Bank/Cash at Bank");
          break;
          case '108':
            console.log("Deferred Expense")
          break;
          case '110':
            console.log("Other")
          break;
          case '112':
            console.log("Accounts Receivable")
          break;
          case '116':
          console.log("Supplies")
            break;
          case '130':
            console.log("Prepaid Insurance")
          break;

          case '157':
         console.log("Equipment")
           break;

             case '158':
                console.log("Accumulated Depreciation Equipment")
                break;

        }
       /* if (acc.substring(0,3)==="101")
        {
          console.log("Bank/Cash at Bank")
        }
        if (acc.substring(0,3)==="102")
        {
          console.log("Cash")
        }
        if (acc.substring(0,3)==="108")
        {
          console.log("Deferred Expense")
        }
        if (acc.substring(0,3)==="110")
        {
          console.log("Other")
        }
        if (acc.substring(0,3)==="112")
        {
          console.log("Accounts Receivable")
        }
        if (acc.substring(0,3)==="116")
        {
          console.log("Supplies")
        }
        if (acc.substring(0,3)==="130")
        {
          console.log("Prepaid Insurance")
        }
        if (acc.substring(0,3)==="157")
        {
          console.log("Equipment")
        }
        if (acc.substring(0,3)==="158")
        {
          console.log("Accumulated Depreciation Equipment")
        }*/

      
      } else if(acc.startsWith('2')){
        resolve(acc + " is an Liability Account!")
        acc3 = acc.substring(0,3)
        switch(acc3) //Switch case to know Liability type
        {
          case '200':
            console.log("Notes Payable");
            break;
        case '201':
          console.log("Accounts Payable");
          break;
          case '209':
            console.log("Unearned Service Revenue")
          break;
          case '230':
            console.log(" Interest Payable")
          break;
          case '231':
            console.log("Deferred Gross profit")
          break;
         
        }
      
      } else if(acc.startsWith('3')){
       readline.question(' This is an Equity Account \n for sole proprietorship and partnershipss press 1 for corporations enter 2 : ',type=>{
        switch(type) //Switch case to know Equity type there is two types and each type has catagories
    {
        case '1':
          console.log("you choosed sole proprietorship and partnerships",acc.substring(0, 3));
            proa(acc.substring(0, 3)); //function to know the catagory of prop account
            break;
        case '2':
          console.log("you choosed corporations");
            corp(acc.substring(0, 3));  //function to know the catagory of corporation account
       
    }});
     function proa(t)
     {
      switch(t)
      {
          case '300':
            resolve(acc + " Owner capital")
             break;
          case '311':
            resolve(acc + " Share Capital-Ordinary")
              break;
          case '320':
            resolve(acc + " Retained Earnings")
              break;
          case '330':
                resolve(acc + " Capital contribtions")
                  break;
          case '332':
            resolve(acc + " Dividends")
              break;
          case '350':
            resolve(acc + " Income Summary")
              break;
          case '360':
            resolve(acc + " Drawings (Distributions)")
              break;
      }
     }
     function corp(t)
     {
      switch(t)
      {
      case '300':
        resolve(acc + " Dividends")
          break;
      case '350':
        resolve(acc + " Capital in excess of par")
          break;
      case '360':
        resolve(acc + " Retained earnings")
          break;
     }
    }
      }else if(acc.startsWith('4')){  //its Profits&Loss Revenue Account" 
        acc3 = acc.substring(0,3)
        switch(acc3)
        {
          case '400':
            console.log(" Rental Income");
            break;
        case '410':
          console.log(" Sales Income");
          break;
          case '420':
            console.log(" Interest income")
          break;
          case '430':
            console.log(" Other Income")
          break;
                 
         
        }
        resolve(acc + " Profits&Loss Revenue Account")
    
      }else if(acc.startsWith('5') || acc.startsWith('6')||acc.startsWith('7')||acc.startsWith('9')){ //Expenses
        acc3 = acc.substring(0,3)
        switch(acc3)
        {
          case '570':
            console.log("Office Expense");
            break;
        case '585':
          console.log("Computer Expenses");
          break;
          case '595':
            console.log("Communication Expense")
          break;
          case '597':
            console.log(" Labour & Welfare Expenses")
          break;
          case '610':
            console.log("Advertising Expenses")
          break;
          case '599':
            console.log("Printing & Stationery Expenses")
          break;
          case '631':
            console.log("Supplies Expense")
          break;
          case '711':
            console.log("Depreciation Expense")
          break;
          case '722':
            console.log("Insurance Expense")
          break;
          case '726':
            console.log("Salaries and Wages Expense")
          break;
          case '729':
            console.log("Rent Expense")
          break;
          case '732':
            console.log("Utilities Expense")
          break;
          case '905':
            console.log("Interest Expense")
          break;
        }
        resolve(acc + " Profits&Loss Expense Account")
       
      }else if(acc.indexOf("^[a-zA-Z]*$")){ //he entered Charachterswith the number and alone
        reject(acc + "  Contains characters")
      }else { //Wrong Entry
        reject(acc + "  Wrong Acccount number")
      }
    
    })
    return p      //return Promise    
    
  }
    
  /*checkType("d7300987879") //program will leave the error to output at last 
  .then(result => console.log(result))
  .catch(error => console.log(error))
  checkType("7300987879")
    .then(result => console.log(result))
    .catch(error => console.log(error))

    checkType("101987879")
    .then(result => console.log(result))
    .catch(error => console.log(error))
    
    checkType("200987879")
    .then(result => console.log(result))
    .catch(error => console.log(error))
    
  

    checkType("400987879")
    .then(result => console.log(result))
    .catch(error => console.log(error))

    checkType("57087879")
    .then(result => console.log(result))
    .catch(error => console.log(error))
    */
    checkType("5709987879")
    .then(result => console.log(result))
    .catch(error => console.log(error))
    

  /*  checkType("310987879")
    .then(result => console.log(result))
    .catch(error => console.log(error))
    
    checkType("350987879")
    .then(result => console.log(result))
    .catch(error => console.log(error))
*/



    